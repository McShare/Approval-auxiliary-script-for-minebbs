import apiRouter from './router.js';  
export default {
  async fetch(request, env, ctx) {  
    const url = new URL(request.url);  
    if (url.pathname.startsWith('/api/')) {  
      return apiRouter.handle(request);
    }
		let resp = new Response(
			`<script>  
      window.onload = function() {
        var style = document.createElement('style');  
        style.innerHTML = 'body, html {height: 100%;margin: 0;}.container {display: flex;flex-direction: column;justify-content: center;align-items: center;height: 100%;text-align: center;font-family: Arial, sans-serif;}h1, h2 {margin: 0;opacity: 0;}';   
        document.head.appendChild(style);  
        var container = document.querySelector('.container');
        var h1 = document.querySelector('h1');  
        h1.style.color = '#0c63e4'
        h1.style.fontSize = '5vw';
        var h2 = document.querySelector('h2');
        h2.style.color = '#f6821f'
        h2.style.fontSize = '3vw';
        function addAnimation(element) {element.style.transition = 'opacity 1s ease-in-out';element.style.opacity = 1;}
        function disableTextSelect(element) {element.onselectstart = function(e) {e.preventDefault();return false;};element.onmousedown = function(e) {e.preventDefault();return false;};}
        disableTextSelect(container);
        setTimeout(function() {addAnimation(h1);}, 50);  
        setTimeout(function() {addAnimation(h2);}, 1000);  
      };  
      </script>
      <div class="container"><h1>MineBBS Approval Auxiliary API</h1><h2>Provided by CloudFlare</h2></div>  
      `,
			{ headers: { "Content-Type": "text/html" } }
		);
    return resp;
  },
};