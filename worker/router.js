import prohibited from './prohibited.js'
import prohibitedWords from './prohibitedWords.js';
 
class Router {  
	routes = [];   
	handle(request) {  
		for (const route of this.routes) {  
			const match = route[0](request);  
			if (match) {  
				return route[1]({ ...match, request });  
			}  
		}    
		const match = this.routes.find(([matcher]) => matcher(request));  
		if (match) {  
			return match[1](request);  
		}  
	}  
	register(handler, path, method) {   
		const urlPattern = new URLPattern({ pathname: path });  
		this.routes.push([  
			(request) => {  
				if (method === undefined || request.method.toLowerCase() === method) {  
					const match = urlPattern.exec({  
						pathname: new URL(request.url).pathname,  
					});  
					if (match) {  
						return { params: match.pathname.groups };  
					}  
				}  
			},  
			(args) => handler(args),  
		]);  
	}  
  	options(path, handler) {  
		this.register(handler, path, "options");  
	}  
	head(path, handler) {  
		this.register(handler, path, "head");  
	}  
	get(path, handler) {  
		this.register(handler, path, "get");  
	}  
	post(path, handler) {  
		this.register(handler, path, "post");  
	}  
	put(path, handler) {  
		this.register(handler, path, "put");  
	}  
	patch(path, handler) {  
		this.register(handler, path, "patch");  
	}  
	delete(path, handler) {  
		this.register(handler, path, "delete");  
	}  
  
	all(path, handler) {  
		this.register(handler, path);  
	}  
}

// 创建一个新的路由器实例  
const router = new Router();  
router.post("/api/prohibitedWords", async ({ request }) => {  
	const content = await request.json();  
	const result = {};
	let parametersFlag = false;
	if(!content.hasOwnProperty("longContentText")) parametersFlag = true;
	if(!content.hasOwnProperty("shortContentText")) parametersFlag = true;
	if(!content.hasOwnProperty("shortContentAccurateMode") || !content.hasOwnProperty("shortContentFuzzyMode") || !content.hasOwnProperty("longContentAccurateMode")) parametersFlag = true;
	if(parametersFlag){
		result.status = 400;
		result.message = 'Missing required parameters';
		return new Response(JSON.stringify(result),{ headers: { "Content-Type": "application/json" } ,status : 400})
	}
	const clientShortContentTextProhibitedWords = content.shortContentTextProhibitedWords || [];
	const clientLongContentTextProhibitedWords = content.longContentTextProhibitedWords || [];
	const allShortProhibitedWords = [
		...prohibitedWords.words.filter(word => word),
		...clientShortContentTextProhibitedWords.filter(word => word)
	];
	const allLongProhibitedWords = [
		...prohibitedWords.words.filter(word => word),
		...clientLongContentTextProhibitedWords.filter(word => word)
	];
	let fuzzyThreshold = 0.5;
	if (content.hasOwnProperty('shortWordsFuzzyThreshold') && 
		typeof content.fuzzyThreshold === 'number' && 
		content.fuzzyThreshold >= 0.1 && 
		content.fuzzyThreshold <= 1) {
		fuzzyThreshold = content.fuzzyThreshold;
	} else {
		fuzzyThreshold = 0.5;
	}
	if (content.shortContentAccurateMode) {
		result.shortContentAccurate = [...new Set(prohibited.shortContentTextExactMatch(content.shortContentText,allShortProhibitedWords))];
	}
	if(content.shortContentFuzzyMode){
		result.shortContentFuzzy = [...new Set(prohibited.shortContentTextfuzzyMatch(content.shortContentText,allShortProhibitedWords,fuzzyThreshold))];
	}
	if(content.longContentAccurateMode){
		result.longContentAccurate = [...new Set(prohibited.longContentTextAccurateMatch(content.longContentText,allLongProhibitedWords))];
	}
  	return new Response(JSON.stringify(result),{ headers: { "Content-Type": "application/json" } });  
});  
router.all("*", () => new Response("Without this API", { status: 404 }));  
export default router;