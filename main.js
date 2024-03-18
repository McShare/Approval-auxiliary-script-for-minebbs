// ==UserScript==
// @name         MineBBS风纪委员会审核综合增强
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  提高审核效率, 风纪委员先行!
// @author       乱杖先生
// @license MIT
// @match        https://www.minebbs.com/approval-queue/*
// @match        https://www.minebbs.net/approval-queue/*
// @icon         https://www.minebbs.com/data/assets/logo/faviconlan.png
// @icon64       data:image/png;base64,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
// @connect      raw.githubusercontent.com
// @connect      ipinfo.io
// @connect      api.oioweb.cn
// @grant GM_xmlhttpRequest
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_notification
// @grant GM_log
// ==/UserScript==



/*
    类
*/
// 配置类
class Config {
    constructor() {
        this.getData();
    }
    // 邮箱检查模式 true表示白名单
    emailMode = true;
    // 违禁词精准匹配
    prohibitedWordsAccurateMatching = false;
    // 违禁词模糊匹配
    prohibitedWordsFuzzyMatching = false;
    // 违禁词正则匹配
    prohibitedWordsRegexMatching = false;
    // IP增强
    ipCheck = true;
    // 自动批准
    autoApprove = true;
    // 本地违禁词
    #localProhibitedWords = [];
    // 在线违禁词URL
    prohibitedWordsURL = '';
    // 在线违禁词
    prohibitedWords = [];
    // 本地正则违禁词
    #localProhibitedWordsRegex = [];
    // 在线正则违禁词URL
    prohibitedWordsRegexURL = '';
    // 在线正则违禁词
    prohibitedWordsRegex = [];
    // 邮箱后缀
    #emailList = [];

    get localPW() {
        return this.#localProhibitedWords.join(';');
    }
    set localPW(value) {
        this.#localProhibitedWords = value.split(';').filter(Boolean);
    }
    get localPW_regex() {
        return this.#localProhibitedWordsRegex.join(';');
    }
    set localPW_regex(value) {
        this.#localProhibitedWordsRegex = value.split(';').filter(Boolean);
    }
    get emailList() {
        return this.#emailList.join(';');
    }
    set emailList(value) {
        this.#emailList = value.split(';').filter(Boolean);
    }
    // 得到本地违禁词个数
    getLocalPwArray() {
        return this.#localProhibitedWords.filter(str => str !== "");
    }
    // 得到本地正则违禁词个数
    getlocalPwRegexArray() {
        return this.#localProhibitedWordsRegex.filter(str => str !== "");
    }
    // 得到邮箱列表个数
    getEmailListArray() {
        return this.#emailList;
    }
    // 合并在线违禁词个数和本地违禁词, 返回数组
    concatOnlineProhibitedWordsAndLocalProhibitedWords() {
        return [...this.prohibitedWords.filter(str => str !== ""), ...this.#localProhibitedWords.filter(str => str !== "")];
    }
    // 合并在线正则违禁词和本地正则违禁词, 返回数组
    concatOnlineProhibitedWordsRegexAndLocalProhibitedWordsRegex() {
        return [...this.prohibitedWordsRegex.filter(str => str !== ""), ...this.#localProhibitedWordsRegex.filter(str => str !== "")];
    }
    saveData() {
        GM_setValue('minebbs:config', {
            emailMode: this.emailMode,
            prohibitedWordsAccurateMatching: this.prohibitedWordsAccurateMatching,
            prohibitedWordsFuzzyMatching: this.prohibitedWordsFuzzyMatching,
            prohibitedWordsRegexMatching: this.prohibitedWordsRegexMatching,
            ipCheck: this.ipCheck,
            autoApprove: this.autoApprove,
            localProhibitedWords: this.#localProhibitedWords,
            prohibitedWordsURL: this.prohibitedWordsURL,
            localProhibitedWordsRegex: this.#localProhibitedWordsRegex,
            prohibitedWordsRegexURL: this.prohibitedWordsRegexURL,
            emailList: this.#emailList,
            prohibitedWords: this.prohibitedWords,
            prohibitedWordsRegex: this.prohibitedWordsRegex
        })
    }
    getData() {
        // 尝试从持久化设备中读取数据  
        const storedConfig = GM_getValue('minebbs:config');
        if (storedConfig) {
            // 读取成功，更新当前对象的属性  
            this.emailMode = storedConfig.emailMode;
            this.prohibitedWordsAccurateMatching = storedConfig.prohibitedWordsAccurateMatching;
            this.prohibitedWordsFuzzyMatching = storedConfig.prohibitedWordsFuzzyMatching;
            this.prohibitedWordsRegexMatching = storedConfig.prohibitedWordsRegexMatching;
            this.ipCheck = storedConfig.ipCheck;
            this.autoApprove = storedConfig.autoApprove;
            this.#localProhibitedWords = storedConfig.localProhibitedWords || [];
            this.prohibitedWordsURL = storedConfig.prohibitedWordsURL;
            this.#localProhibitedWordsRegex = storedConfig.localProhibitedWordsRegex || [];
            this.prohibitedWordsRegexURL = storedConfig.prohibitedWordsRegexURL;
            this.prohibitedWords = storedConfig.prohibitedWords || [];
            this.prohibitedWordsRegex = storedConfig.prohibitedWordsRegex || [];
            this.#emailList = storedConfig.emailList || [];
        } else {
            // 读取失败或没有数据
            console.error('读取持久化配置数据失败! ');
        }
    }
}
// TODO:将文本匹配过程移动到web workers
class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (let ch of word) {
            if (!current.children[ch]) {
                current.children[ch] = new TrieNode();
            }
            current = current.children[ch];
        }
        current.endOfWord = true;
    }

    search(text) {
        let current = this.root;
        for (let ch of text) {
            if (!current.children[ch]) {
                return false;
            }
            current = current.children[ch];
            if (current.endOfWord) {
                return true;
            }
        }
        return false;
    }
}


/*
    配置区
*/
const conf = new Config();
// =========== 插件提供的原始数据(START) ===============
// 提供违禁词库URL 用于精准和模糊匹配
conf.prohibitedWordsURL = 'https://raw.githubusercontent.com/k5h9999/keywordfilter/master/src/main/resources/META-INF/dic/wfc.dic';
// 提供默认的邮箱后缀
conf.emailList = 'foxmail.com;qq.com;vip.qq.com;163.com;vip.163.com;126.com;vip.126.com;sina.com;sina.cn;yeah.net;189.cn;139.com;wo.cn;game.com;163vip.com;tom.com;vip.tom.com;sohu.com'
// =========== 插件提供的原始数据(END) ===============



/*
    初始化区
*/
// 获取加载旗帜, 用于判断是否为首次加载
const loadflag = GM_getValue("minebbs:loadflag", 0);
if (!loadflag) {
    GM_log('初始化:首次载入插件, 即将开始初始化!');
    // 首次加载插件拉取违禁词 保存到配置中
    loadProhibited()

    // 持久化数据
    conf.saveData();
    GM_log('初始化:配置数据持久化完成!');

    sendNotification('首次加载: 风纪委员插件初始化成功! \n即将自动载入相关数据!');
    // 插旗
    GM_setValue("minebbs:loadflag", 1);
}



/*
    方法区
*/

// =========== 数据记录 ===============

// 批准次数 获取+写入
function approvalFrequency(num = 0) {
    let approval_frequency = GM_getValue("minebbs:approval_frequency", 0);
    // 如果默认为0,表示是读取次数
    if (num == 0) {
        // 获取批准次数,没有就返回 0 
        return approval_frequency;
    }
    // 不是-1表示存储
    GM_setValue("minebbs:approval_frequency", approval_frequency + num)
    return GM_getValue("minebbs:approval_frequency", 0);
}


// =========== 违禁词拉取 ===============

// 载入词库
function loadProhibited() {
    if (conf.prohibitedWordsURL != '') {
        loadForbiddenWords(conf.prohibitedWordsURL);
        GM_log('初始化:在线违禁词拉取! ')
    }
    // 首次加载拉取正则违禁词 保存到配置当中
    if (conf.prohibitedWordsRegexURL != '') {
        loadForbiddenWordsRegex(conf.prohibitedWordsRegexURL);
        GM_log('初始化:在线正则违禁词拉取! ')
    }
}


/**
 * 根据提供的url, 将数据写入到conf.prohibitedWords
 * @param {*} url 
 */
function loadForbiddenWords(url) {
    pullProhibitedWords(url)
        .then(trimmedArrayOfLines => {
            // 处理返回的数据  
            conf.prohibitedWords = trimmedArrayOfLines;
        })
        .catch(error => {
            // 处理错误  
            sendNotification("违禁词: " + error);
        });
}
/**
 * 根据提供的url, 将数据写入到conf.prohibitedWordsRegex
 * @param {*} url 
 */
function loadForbiddenWordsRegex(url) {
    pullProhibitedWords(url)
        .then(trimmedArrayOfLines => {
            // 处理返回的数据  
            conf.prohibitedWordsRegex = trimmedArrayOfLines;
        })
        .catch(error => {
            // 处理错误  
            sendNotification("正则违禁词: " + error);
        });
}

/**
 * 拉取url的违禁词,以数组的形式返回
 * @param {*} url 
 * @returns Promise
 */
function pullProhibitedWords(url) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: "GET",
            url,
            headers: {
                "Content-Type": "application/text"
            },
            onload: function (response) {
                if (response.status == 200) {
                    const text = response.responseText;
                    const trimmedArrayOfLines = text.split('\n').map(line => line.trim());
                    resolve(trimmedArrayOfLines); // 请求成功，通过resolve返回结果  
                } else {
                    reject("拉取失败,原因: 网页状态不正常 \n点击菜单可尝试重载");
                }
            },
            ontimeout: function () {
                reject("拉取失败,原因: 请求超时 \n点击菜单可尝试重载");
            },
            onerror: function (e) {
                reject("拉取失败,原因: 请求发生错误 \n" + e.message);
            }
        });
    });
}




// =========== 插件辅助功能 ===============

// 插件专用通知
function sendNotification(text) {
    const noticDetails = {
        title: "MineBBS风纪委员综合插件",
        text,
        url: 'https://www.minebbs.com/approval-queue/',
        image: 'https://www.minebbs.com/data/addonflare/awardsystem/icons/25.png',
        tag: 'notic:minebbs',
        silent: true,
        timeout: 5000
    }
    GM_notification(noticDetails);
}



// =========== 违禁词处理相关 ===============

// 精确匹配算法  
function exactMatch(text, words) {
    const matches = [];
    for (const word of words) {
        if (text.includes(word)) {
            matches.push(word);
        }
    }
    return matches;
}

// 基于正则表达式的匹配算法  
function regexMatch(text, regexes) {
    const matches = [];
    for (const regex of regexes) {
        let match;
        while ((match = regex.exec(text)) !== null) {
            matches.push(match[0]);
        }
    }
    return matches;
}

// 模糊匹配算法（基于编辑距离）  
function fuzzyMatch(text, words, threshold = 0.5) {
    const matches = [];
    for (const word of words) {
        const distance = getEditDistance(text, word) / Math.max(text.length, word.length);
        if (distance <= threshold) {
            matches.push(word);
        }
    }
    return matches;
}


// 精确匹配函数，返回 Promise  
function exactMatchAsync(text, words) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const matches = exactMatch(text, words);
            resolve(matches);
        }, 0); // 立即将执行推迟到下一个事件循环  
    });
}

// 基于正则表达式的匹配函数，返回 Promise  
function regexMatchAsync(text, regexes) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const matches = regexMatch(text, regexes);
            resolve(matches);
        }, 0);
    });
}

// 模糊匹配函数，返回 Promise  
function fuzzyMatchAsync(text, words, threshold) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const matches = fuzzyMatch(text, words, threshold);
            resolve(matches);
        }, 0);
    });
}

// 获取两个字符串之间的编辑距离（简单实现）  
function getEditDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1, // 删除  
                    dp[i][j - 1] + 1, // 插入  
                    dp[i - 1][j - 1] + 1 // 替换  
                );
            }
        }
    }

    return dp[m][n];
}

// =========== DOM函数区 ===============

/**
 * 根据tagName创建一个标签, 并添加多个类名
 * @param string tagName 元素标签
 * @param string classNames 类名,多个用空格隔开
 * @returns 
 */
function createElementWithClass(tagName, classNames) {
    const element = document.createElement(tagName);
    classNames.split(' ').forEach(className => element.classList.add(className));
    return element;
}

/**
 * 简化setAttribute, 使其更加美观
 * @param element element 元素对象
 * @param string attributeName 属性名
 * @param string attributeValue  属性值
 */
function setAttribute(element, attributeName, attributeValue) {
    element.setAttribute(attributeName, attributeValue);
}

/**
 * 提供一个简易的块, 仿筛选器BAR块
 * 顶级块元素提供方法,获得存放内容的元素块
 * @returns 顶级块元素
 */
function createElement_simpleBlock() {
    // 使用模板字符串创建元素并添加类名  
    let block = createElementWithClass('div', 'block');
    let blockContainer = createElementWithClass('div', 'block-container block-container--none');
    let blockFilterBar = createElementWithClass('div', 'block-filterBar block-filterBar--standalone');
    let filterBar = createElementWithClass('div', 'filterBar');
    // 依次添加子元素  
    blockFilterBar.appendChild(filterBar);
    blockContainer.appendChild(blockFilterBar);
    block.appendChild(blockContainer);
    block.getContentElement = function () {
        return filterBar;
    }
    // 返回最终的块元素  
    return block;
}

/**
 * 创建一个简单的按钮样式
 * @param {*} text  按钮上的文字
 * @param {*} callback 按钮被点击时的回调
 * @returns 
 */
function createElement_simplButton(text, callback) {
    // 按钮本体
    let el = document.createElement('button');
    el.setAttribute('type', 'button');
    el.setAttribute('data-xf-init', 'push-toggle');
    el.classList.add("button", "rippleButton")
    // 按钮文字
    let text_el = document.createElement('span')
    text_el.classList.add("button-text");
    text_el.innerText = text;
    el.appendChild(text_el);
    // 在按钮后面添加一点间距
    el.style.marginRight = '0.4vh'
    // 初始背景色  
    var initialColor = window.getComputedStyle(el).backgroundColor;
    // 转换颜色字符串为RGB数组  
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ] : null;
    }
    // 计算变灰后的颜色（降低亮度）  
    function desaturateColor(rgb, amount) {
        var avg = (rgb[0] + rgb[1] + rgb[2]) / 3;
        var gray = Math.round(avg * (100 - amount) / 100);
        return `rgb(${gray}, ${gray}, ${gray})`;
    }
    // 监听鼠标移入事件  
    el.addEventListener('mouseenter', function () {
        var rgb = hexToRgb(initialColor);
        if (rgb) {
            var desaturatedColor = desaturateColor(rgb, 10); // 假设降低10%的亮度  
            el.style.backgroundColor = desaturatedColor;
        }
    });
    // 监听鼠标移出事件，恢复原始颜色  
    el.addEventListener('mouseleave', function () {
        el.style.backgroundColor = initialColor;
    });
    // 鼠标点击事件
    el.addEventListener('click', callback);
    return el;
}

/**
 * 创建菜单
 * @param {*} title  标题
 */
function createElement_simpleContainerOfSetting(title) {
    // 创建容器
    let overlayContainer = document.createElement('div');
    overlayContainer.classList.add('overlay-container', 'is-active');
    overlayContainer.setAttribute('id', 'mb-container');
    overlayContainer.addEventListener('mousedown', function (event) {
        if (event.target === overlayContainer) {
            overlayContainer.remove();
        } else {
            event.stopPropagation();
            return;
        }

    })
    // 允许遮罩层滚动
    overlayContainer.style.overflowY = 'auto';

    // 框
    let overlay = document.createElement('div');
    overlay.classList.add("overlay");
    overlay.setAttribute('tabindex', '-1');
    overlay.setAttribute('role', 'dialog')
    overlay.setAttribute('aria-hidden', 'false')

    // 标题
    let overlayTitle = document.createElement('div');
    overlayTitle.classList.add("overlay-title");
    let overlayTitleText = document.createTextNode(title);
    let overlayCloseBtn = document.createElement('a');
    overlayCloseBtn.classList.add('overlay-titleCloser', 'js-overlayClose');
    overlayCloseBtn.setAttribute('role', 'button');
    overlayCloseBtn.setAttribute('tabindex', '0');
    overlayCloseBtn.setAttribute('aria-label', '关闭');
    // 组合关闭按钮和文字
    overlayTitle.appendChild(overlayCloseBtn);
    overlayTitle.appendChild(overlayTitleText);

    // 关闭窗口事件
    overlayCloseBtn.addEventListener('click', () => {
        overlayContainer.remove();
    })


    // 内容容器
    let overlayContent = document.createElement('div');
    overlayContent.classList.add("overlay-content");

    let block = document.createElement('div');
    block.classList.add("block");
    let blockContainer = document.createElement('div')
    blockContainer.classList.add("block-container")
    let blockBody = document.createElement('div');
    blockBody.classList.add("block-body");
    blockBody.setAttribute('id', 'mb-menu--block')
    let menu_1 = createFormRow_Input({ text: '本地违禁词', hint: '字符串' }, {
        id: 'm1',
        value: conf.localPW,
        hint: '最终词库 = 在线词库 + 本地词库, 请使用 ;(英标分号) 隔开每个字词',
        placeholder: '本地违禁词库,建议您从编辑器粘贴到此处',
        callback: function () {
            conf.localPW = this.value;
            // GM_log('本地违禁词失去焦点')
        }
    })
    let menu_2 = createFormRow_Input({ text: '在线违禁词', hint: 'URL' }, {
        id: 'm2',
        value: conf.prohibitedWordsURL,
        hint: '远程词库的格式为 每行一个词, 请确保输入正确',
        placeholder: '在线违禁词URL链接,纯文本格式',
        callback: function () {
            conf.prohibitedWordsURL = this.value;
            // GM_log('在线违禁词失去焦点')
        }
    });
    let menu_3 = createFormRow_Input({ text: '正则违禁词', hint: '字符串' }, {
        id: 'm3',
        value: conf.localPW_regex,
        hint: '最终词库 = 在线词库 + 本地词库  , 请使用 ;(英标分号) 隔开每个表达式',
        placeholder: '本地正则词库, 建议您从编辑器粘贴到此处',
        callback: function () {
            conf.localPW_regex = this.value;
            // GM_log('正则违禁词失去焦点')
        }
    })
    let menu_4 = createFormRow_Input({ text: '在线正则违禁词', hint: 'URL' }, {
        id: 'm4',
        value: conf.prohibitedWordsRegexURL,
        hint: '远程词库的格式为 每行一个词, 请确保输入正确',
        placeholder: '在线违禁词URL链接,纯文本格式',
        callback: function () {
            conf.prohibitedWordsRegexURL = this.value;
            // GM_log('在线正则违禁词失去焦点')
        }
    })
    let menu_5 = createFormRow_Checkbox({ text: '精准匹配', hint: '开关' }, {
        text: '启用精准违禁词匹配',
        callback: function (event) {
            conf.prohibitedWordsAccurateMatching = event.target.checked;
        },
        checked: conf.prohibitedWordsAccurateMatching
    })
    let menu_6 = createFormRow_Checkbox({ text: '模糊匹配', hint: '开关' }, {
        text: '启用模糊违禁词匹配',
        callback: function (event) {
            conf.prohibitedWordsFuzzyMatching = event.target.checked;
        },
        checked: conf.prohibitedWordsFuzzyMatching
    })
    let menu_7 = createFormRow_Checkbox({ text: '正则匹配', hint: '开关' }, {
        text: '启用正则违禁词匹配',
        callback: function (event) {
            conf.prohibitedWordsRegexMatching = event.target.checked;
        },
        checked: conf.prohibitedWordsRegexMatching
    })

    let menu_8 = createFormRow_Button({ labelText: '便捷操作', 'labelHint': '功能' }, [{
        'text': '一键无操作',
        'callback': function () {
            for (let i = 0; i < blockArrayList.length - 1; i++) {
                // 每一个块
                let block = blockArrayList[i];
                selectOperation(block, "无操作");
                overlayContainer.remove();
            }
            GM_log("'一键无操作完成!");
        }
    },
    {
        'text': '重载词库',
        'callback': function () {
            // 清除词库
            conf.prohibitedWords = []
            conf.prohibitedWordsRegex = []
            loadProhibited();
            sendNotification('词库尝试重载,请重新打开功能菜单查看\n若配置无误,请保存数据!')
            overlayContainer.remove();
            GM_log('词库重载')
        }
    },
    {
        'text': '重置插件',
        'callback': function () {
            removeAllValues();
            location.reload();
        }
    }
    ]);
    let menu_9 = createFormRow_Checkbox({ text: 'IP属地', hint: '开关' }, {
        text: '启用IP地址增强,显示IP属地',
        callback: function (event) {
            conf.ipCheck = event.target.checked;
        },
        checked: conf.ipCheck
    })
    let menu_10 = createFormRow_Checkbox({ text: '邮箱检查', hint: '开关' }, {
        text: '启用白名单模式',
        callback: function (event) {
            conf.emailMode = event.target.checked;
        },
        checked: conf.emailMode
    })
    let menu_11 = createFormRow_Input({ text: '邮箱后缀', hint: '字符串' }, {
        id: 'm11',
        value: conf.emailList,
        hint: '检查注册用户邮箱是否满足设定条件, 白名单',
        placeholder: '留空表示不执行,每个后缀使用;分割',
        callback: function () {
            conf.emailList = this.value;
            // GM_log('邮箱后缀失去焦点')
        }
    })
    let menu_12 = createFormRow_Checkbox({ text: '自动批准', hint: '开关' }, {
        text: '符合条件时自动批准(IP+Email+无违禁词)',
        callback: function (event) {
            conf.autoApprove = event.target.checked;
        },
        checked: conf.autoApprove
    })

    let save_el = createElement_saveButton('保存数据', function (event) {
        conf.saveData();
        GM_log('保存按钮被点击, 数据持久化!')
        overlayContainer.remove();
    })
    let info = createFormRow_Info({ text: '统计信息', hint: '信息' }, { 'default': '无消息' })


    info.setSpanHtml(
        `在线违禁词个数: ${conf.prohibitedWords.length}<br>
        在线正则违禁词个数: ${conf.prohibitedWordsRegex.length}<br>
        本地违禁词个数: ${conf.getLocalPwArray().length}<br>
        本地正则违禁词个数: ${conf.getlocalPwRegexArray().length}<br>
        邮箱后缀个数: ${conf.getEmailListArray().length}<br>
        插件为您自动点击了 ${approvalFrequency()} 次批准`
    )


    block.appendChild(menu_8);
    block.appendChild(menu_1);
    block.appendChild(menu_2);
    block.appendChild(menu_3);
    block.appendChild(menu_4);
    block.appendChild(menu_5);
    block.appendChild(menu_6);
    block.appendChild(menu_7);

    block.appendChild(menu_9);
    block.appendChild(menu_10);
    block.appendChild(menu_11);
    block.appendChild(menu_12);
    block.appendChild(info);

    block.appendChild(save_el);

    blockContainer.appendChild(blockBody);
    block.appendChild(blockContainer);
    overlayContent.appendChild(block);

    // 组合
    overlay.appendChild(overlayTitle);
    overlay.appendChild(overlayContent);
    overlayContainer.appendChild(overlay);

    return overlayContainer;
}

/**
 * 创建一行 输入框
 * @param {*} labelObj  
 * @param {*} inputObj  输入框的callback是失去焦点
 * @returns 
 */
function createFormRow_Input(labelObj = { text: '输入框', hint: '必填' }, inputObj = { id: 'input-id--', value: '', hint: '输入框备注', placeholder: '输入框提示', callback: function () { } }) {
    const dl = createElementWithClass('dl', 'formRow formRow--input');
    const dt = dl.appendChild(document.createElement('dt'));
    const div = dt.appendChild(createElementWithClass('div', 'formRow-labelWrapper'));
    div.appendChild(createElementWithClass('label', 'formRow-label')).textContent = labelObj['text'];
    div.appendChild(createElementWithClass('dfn', 'formRow-hint')).textContent = labelObj['hint'];

    const dd = dl.appendChild(document.createElement('dd'));
    const input = dd.appendChild(createElementWithClass('input', 'input'));
    input.id = inputObj['id'];
    input.value = inputObj['value'];
    input.placeholder = inputObj['placeholder'];
    input.type = 'text';
    input.setAttribute('data-xf-init', 'input-validator');
    input.setAttribute('required', 'required');
    input.setAttribute('autofocus', 'autofocus');

    input.addEventListener('blur', inputObj['callback']);

    dd.appendChild(createElementWithClass('div', 'inputValidationError js-validationError'));
    dd.appendChild(createElementWithClass('div', 'formRow-explain')).textContent = inputObj['hint'];

    return dl;
}

// 返回 选择框
function createFormRow_Checkbox(labelObj = { text: '', hint: '' }, inputObj = { text: '单选框', callback: function () { }, checked: true }) {
    const dl = createElementWithClass('dl', 'formRow');
    const dt = document.createElement('dt');
    const div = createElementWithClass('div', 'formRow-labelWrapper');
    const labelEl = createElementWithClass('label', 'formRow-label');
    labelEl.textContent = labelObj['text'];
    const dfn = createElementWithClass('dfn', 'formRow-hint');
    dfn.textContent = labelObj['hint'];
    div.appendChild(labelEl);
    div.appendChild(dfn);
    dt.appendChild(div);
    dl.appendChild(dt);
    const dd = document.createElement('dd');
    const ul = createElementWithClass('ul', 'inputChoices');
    const li = createElementWithClass('li', 'inputChoices-choice');
    const checkboxLabel = createElementWithClass('label', 'iconic');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'email_choice';
    checkbox.checked = inputObj['checked'];
    checkbox.addEventListener('click', inputObj['callback'])
    const icon = document.createElement('i');
    setAttribute(icon, 'aria-hidden', 'true'); // 使用 setAttribute 设置属性  
    const span = createElementWithClass('span', 'iconic-label');
    span.textContent = inputObj['text'];
    checkboxLabel.appendChild(checkbox);
    checkboxLabel.appendChild(icon);
    checkboxLabel.appendChild(span);
    li.appendChild(checkboxLabel);
    ul.appendChild(li);
    dd.appendChild(ul);
    dl.appendChild(dd);
    return dl;
}
// 返回 按钮
function createFormRow_Button(labelObj = { labelText, labelHint }, buttons = [{ 'text': '按钮', 'callback': function () { } }]) {
    const dl = createElementWithClass('dl', 'formRow formRow--button');
    const dt = document.createElement('dt');
    const div = createElementWithClass('div', 'formRow-labelWrapper');
    const label = createElementWithClass('label', 'formRow-label');
    label.textContent = labelObj['labelText'];
    const dfn = createElementWithClass('dfn', 'formRow-hint');
    dfn.textContent = labelObj['labelHint'];
    div.appendChild(label);
    div.appendChild(dfn);
    dt.appendChild(div);
    dl.appendChild(dt);

    const dd = document.createElement('dd');
    const ul = createElementWithClass('ul', 'listHeap');

    for (let btn = 0; btn < buttons.length; btn++) {
        let btn_obj = buttons[btn];
        const li = document.createElement('li');
        const a = createElementWithClass('a', 'button');
        const span = createElementWithClass('span', 'button-text');
        span.textContent = btn_obj['text'];
        a.addEventListener('click', btn_obj['callback']);
        a.addEventListener('mouseover', function () {
            this.style.textDecoration = 'none'; // 当鼠标悬浮在a标签上时，移除下划线  
        });
        a.appendChild(span);
        li.appendChild(a);
        ul.appendChild(li);

    }

    dd.appendChild(ul);
    dl.appendChild(dd);

    return dl;
}

// 信息
function createFormRow_Info(labelObj = { text: '普通信息', hint: '调试' }, textObj = { default: '暂无消息' }) {
    const dl = createElementWithClass('dl', 'formRow');
    const dt = document.createElement('dt');
    const div = createElementWithClass('div', 'formRow-labelWrapper');
    const label = createElementWithClass('label', 'formRow-label');
    label.textContent = labelObj['text'];
    const dfn = createElementWithClass('dfn', 'formRow-hint');
    dfn.textContent = labelObj['hint'];
    div.appendChild(label);
    div.appendChild(dfn);
    dt.appendChild(div);
    const dd = document.createElement('dd');
    const ul = createElementWithClass('ul', 'inputChoices');
    const li = createElementWithClass('li', 'inputChoices-choice');
    const labelIconic = createElementWithClass('label', 'iconic');
    const span = document.createElement('span');
    setAttribute(span, 'className', 'iconic-label');
    setAttribute(span, 'id', 'minebbs-menu-info');
    span.innerHTML = textObj['default'];
    labelIconic.appendChild(span);
    li.appendChild(labelIconic);
    dl.setSpanHtml = function (newHtml) {
        span.innerHTML = newHtml;
    };
    ul.appendChild(li);
    dd.appendChild(ul);
    dl.appendChild(dt);
    dl.appendChild(dd);
    return dl;
}

// 保存按钮
function createElement_saveButton(text, callback) {
    const dl = createElementWithClass('dl', 'formRow formSubmitRow');
    const dt = document.createElement('dt');
    dl.appendChild(dt);
    const dd = document.createElement('dd');
    const formSubmitRowMain = createElementWithClass('div', 'formSubmitRow-main');
    const formSubmitRowBar = createElementWithClass('div', 'formSubmitRow-bar');
    formSubmitRowMain.appendChild(formSubmitRowBar);
    const formSubmitRowControls = createElementWithClass('div', 'formSubmitRow-controls');

    // 创建<button>元素并添加类名与属性  
    const button = createElementWithClass('button', 'button--primary button button--icon button--icon--save');
    setAttribute(button, 'type', 'submit');
    button.textContent = text; // 设置按钮文本  
    button.addEventListener('mouseup', callback)
    formSubmitRowControls.appendChild(button);

    // 将<div class="formSubmitRow-controls">添加到<div class="formSubmitRow-main">中  
    formSubmitRowMain.appendChild(formSubmitRowControls);

    // 将<div class="formSubmitRow-main">添加到<dd>中  
    dd.appendChild(formSubmitRowMain);

    // 将<dd>添加到<dl>中  
    dl.appendChild(dd);
    return dl;
}

// 拟真一个信息框
function infoBlock(info, status = [], color = "#384764") {
    // highlighted 已审核(绿盾牌 变灰色)
    // moderated  已处理(绿色小盾牌)
    // warning 警告小图标(绿色警告标)

    let divElement = document.createElement('div');
    divElement.classList.add('messageNotice');
    for (let i = 0; i < status.length; i++) {
        divElement.classList.add(`messageNotice--${status[i]}`);
    }
    let infoElement = document.createElement('span')
    infoElement.style.color = color;
    infoElement.innerHTML = info;
    divElement.appendChild(infoElement);
    return divElement;
}

// 选择点击
function selectOperation(blockElement, text = '无操作') {
    // 获取块内的iconic--radio元素
    let btnArrayList = blockElement.querySelectorAll('.iconic--radio');
    // 满足条件旗帜
    let flag = false;
    for (let i = 0; i < btnArrayList.length; i++) {
        // 此处是指定的位置
        let label_el = btnArrayList[i];
        // 获取每一个位置的input
        let input_el = label_el.querySelector('input')
        // 默认关闭掉
        input_el.checked = false;

        // 手动标识
        let blockContainer = blockElement.querySelector('.block-container');
        // 默认全删了
        for (let i = 0; i < blockContainer.classList.length; i++) {
            if (blockContainer.classList[i].startsWith("approvalQueue-item--")) {
                blockContainer.classList.remove(blockContainer.classList[i]);
            }
        }
        if (text == "批准") {
            blockContainer.classList.add('approvalQueue-item--approve')
        } else if (text == '删除') {
            blockContainer.classList.add('approvalQueue-item--delete')
        }
        // 满足条件
        if (label_el.innerText.includes(text)) {
            // 进行选中操作
            input_el.checked = true;
            flag = true;
        }
    }
    return flag;
}

// 提取ip和邮箱
// https://ipinfo.io/59.33.223.6
function extractIPAndEmail(str) {
    // 正则表达式匹配IPv4地址  
    const ipv4Regex = /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;

    // 简化版的正则表达式匹配IPv6地址  
    // 这个正则表达式不是完全详尽的，能够匹配一些常见的IPv6地址格式  
    const ipv6Regex = /^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}|:((:[\da−fA−F]1,4)1,6|:)/;

    // 合并IPv4和IPv6的正则表达式  
    const ipRegex = new RegExp(`(${ipv4Regex.source})|(${ipv6Regex.source})`);

    // 使用全局匹配获取所有IP地址（IPv4或IPv6），但只返回第一个匹配项  
    const ipMatch = str.match(ipRegex);
    const ip = ipMatch ? ipMatch[0] : null;

    // 正则表达式匹配电子邮件地址  
    const emailRegex = /[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+/;
    const emailMatch = str.match(emailRegex);
    const email = emailMatch ? emailMatch[0] : null;

    return { ip, email };
}

// 封装 GM_xmlhttpRequest 为一个返回 Promise 的函数
function fetchIpAddress(ip) {
    return new Promise((resolve, reject) => {
        const url = `https://ipinfo.io/${ip}`;
        GM_xmlhttpRequest({
            method: "GET",
            url,
            onload: function (response) {
                // 创建一个DOM解析器
                const parser = new DOMParser();
                // 解析HTML内容
                const doc = parser.parseFromString(response.responseText, 'text/html');
                // 获取地理位置
                const address = {
                    Country: doc.querySelector('.geo-table').children[0].children[2].children[1].textContent,
                    State: doc.querySelector('.geo-table').children[0].children[1].children[1].textContent,
                    City: doc.querySelector('.geo-table').children[0].children[0].children[1].textContent
                }

                resolve(address ? address : null);
            },
            onerror: function (error) {
                reject(error);
            }
        });
    });
}

// 翻译
function fetchTranslate(text, mode = 3) {
    return new Promise((resolve, reject) => {
        // const url = `https://v.api.aa1.cn/api/api-fanyi-yd/index.php?msg=${text}&type=${mode}`;
        const url = `https://api.oioweb.cn/api/txt/QQFanyi?sourceText=${text}`
        GM_xmlhttpRequest({
            method: "GET",
            url,
            headers: {
                'Accept': 'application/json'
            },
            onload: function (response) {
                try {
                    // 解析响应文本为 JSON 对象  
                    const jsonData = JSON.parse(response.responseText);
                    // 将解析后的数据作为 Promise 的结果返回  
                    // resolve(jsonData.text);
                    resolve(jsonData.result['targetText']);
                } catch (e) {
                    // 如果解析 JSON 失败，则拒绝 Promise  
                    reject('翻译解析JSON发生错误!');
                }
            },
            onerror: function (error) {
                reject(error);
            }
        });
    });
}
async function getTranslate(text) {
    try {
        const trans = await fetchTranslate(text);
        return trans;
    } catch (error) {
        console.error('获取翻译出现错误:', error);
        return null;
    }
}


// 使用 Promise 的 getAddress 函数
async function getAddress(ip) {
    try {
        // console.log('ip: ',ip);
        const address = await fetchIpAddress(ip.trim());
        return address;
    } catch (error) {
        console.error('Error fetching IP address:', error);
        return null;
    }
}
// 提取邮箱域名
function extractEmailDomain(email) {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
        return email.slice(atIndex + 1);
    }
    return null; // 默认返回null
}

/*
    样式注入
*/
// 获取审核列表的块 + 保存按钮的块
let blocks = document.querySelector('.blocks');
// 获取要审核的块 + 保存的块
let blockArrayList = blocks != null ? blocks.children : [];
// 网页主体
let body_el = document.querySelector('body');
// 获取审核队列下的块
let pageContent_el = document.querySelector('.p-body-pageContent');
// 新建的和筛选bar相同的块
let menu_bar = createElement_simpleBlock();
// 获取菜单bar的最后一层
let menu_bar_content = menu_bar.getContentElement();


// 创建一键审批按钮
let approvalAllButton_el = createElement_simplButton('一键批准', function (event) {
    for (let i = 0; i < blockArrayList.length - 1; i++) {
        // 每一个块
        let block = blockArrayList[i];
        selectOperation(block, "批准");
    }
    // 记录点击批准的次数
    approvalFrequency(blockArrayList.length - 1);
    GM_log("自动批准操作完成!")
});

// 创建菜单按钮
let menuButton_el = createElement_simplButton('功能菜单', function () {
    GM_log('功能菜单被点击, 唤起菜单');
    // 创建一个菜单容器
    let menuContainer = createElement_simpleContainerOfSetting("功能菜单 - 风纪委员综合插件");

    // 显示容器
    body_el.insertBefore(menuContainer, body_el.firstChild)
})

// 添加按钮到bar
menu_bar_content.appendChild(approvalAllButton_el);
menu_bar_content.appendChild(menuButton_el);

// 将新建的菜单条载入页面
pageContent_el.insertBefore(menu_bar, pageContent_el.childNodes[2])



/*
    执行区
*/

// 遍历审核块, 剔除保存块
for (let i = 0; i < blockArrayList.length - 1; i++) {
    // GM_log(`当前进入第${i + 1}个审核块`);
    // 每一个待审核块
    const block = blockArrayList[i];
    // 获取消息块
    const messageContent = block.querySelector('.message-content');
    // 消息块内容
    const bContent = messageContent.innerText
    const ipAndEmailObj = extractIPAndEmail(bContent);
    // 名称
    const username = block.querySelector('.username').children[0].textContent;
    // 中国大陆IP旗帜
    let flag_IP = false;
    // 地址信息
    let ip_Address = "未知地址/请求失败";
    // 白名邮箱旗帜
    let flag_Email = false;
    // 违禁词 精准
    let exactMatchesArray = [];
    // 违禁词 正则
    let regexMatchesArray = [];
    // 违禁词 模糊
    let fuzzyMatchesArray = [];
    // 插入提示内容
    let emailAndIpHint = null;
    // 违禁词提示
    let pwHint = null;
    // 违禁词旗帜
    let pwFlag = false;
    // 白名单邮箱处理
    if (conf.emailMode) {
        if (ipAndEmailObj.email != null) {
            // 检查邮箱
            let eDomain = extractEmailDomain(ipAndEmailObj.email);
            if (eDomain != null) {
                if (conf.getEmailListArray().includes(eDomain)) {
                    // console.log("Email Domain: " + eDomain);
                    // 符合条件
                    flag_Email = true;
                }
            }
        }
    }
    // 是否检查IP
    if (conf.ipCheck) {
        // ip不为null
        if (ipAndEmailObj.ip != null) {
            // 获取IP归属地
            let address = await getAddress(ipAndEmailObj.ip);
            if (address != null) {

                ip_Address = `${address.Country} ${address.State} ${address.City}`;
                // 中国大陆IP
                if (ip_Address.trim().startsWith("China")) {
                    flag_IP = true;
                }
                // console.log("IP Address: " + ip_Address);    
                // 翻译接口
                ip_Address = await getTranslate(ip_Address);
            }

        }
    }
    let exactMatchPromise = null;
    let fuzzyMatchPromise = null;
    let regexMatchPromise = null;
    // 精准匹配违禁词
    if (conf.prohibitedWordsAccurateMatching) {
        exactMatchPromise = exactMatchAsync(username, conf.concatOnlineProhibitedWordsAndLocalProhibitedWords())
    }
    // 模糊匹配违禁词
    if (conf.prohibitedWordsFuzzyMatching) {
        fuzzyMatchPromise = fuzzyMatchAsync(username, conf.concatOnlineProhibitedWordsAndLocalProhibitedWords())
    }
    // 正则匹配违禁词
    if (conf.prohibitedWordsRegexMatching) {
        regexMatchPromise = regexMatchAsync(username, conf.concatOnlineProhibitedWordsRegexAndLocalProhibitedWordsRegex())
    }
    if (conf.prohibitedWordsAccurateMatching || conf.prohibitedWordsFuzzyMatching || conf.prohibitedWordsRegexMatching) {
        Promise.all([exactMatchPromise, fuzzyMatchPromise, regexMatchPromise]).then((results) => {
            // 假设results是一个数组，包含所有异步操作的结果  
            let [exactMatches, fuzzyMatches, regexMatches] = results;

            if (exactMatches != null && exactMatches.length > 0) {
                pwFlag = true;
            }
            if (fuzzyMatches != null && fuzzyMatches.length > 0) {
                pwFlag = true;
            }
            if (regexMatches != null && regexMatches.length > 0) {
                pwFlag = true;
            }


            // 存储匹配结果  
            exactMatchesArray = exactMatches || [];
            fuzzyMatchesArray = fuzzyMatches || [];
            regexMatchesArray = regexMatches || [];

            let pwText = '';
            if (exactMatchesArray.length != 0 && conf.prohibitedWordsAccurateMatching) {
                pwText += '精准违禁词: '
                pwText += `<span style='color:red'>${exactMatchesArray.join(', ')}</span> `
            }
            if (fuzzyMatchesArray.length != 0 && conf.prohibitedWordsFuzzyMatching) {
                pwText += '模糊违禁词: '
                pwText += `<span style='color:red'>${fuzzyMatchesArray.join(', ')}</span> `
            }
            if (regexMatchesArray.length != 0 && conf.prohibitedWordsRegexMatching) {
                pwText += '正则违禁词: '
                pwText += `<span style='color:red'>${regexMatchesArray.join(', ')}</span> `
            }

            if (conf.prohibitedWordsAccurateMatching | conf.prohibitedWordsFuzzyMatching | conf.prohibitedWordsRegexMatching) {
                if (pwText != '') {
                    pwHint = infoBlock(pwText, ['warning', 'highlighted'], 'red')
                }
            }

            // 自动批准 去除
            if (conf.autoApprove) {
                if (pwFlag) {
                    selectOperation(block, '无操作');
                    approvalFrequency(-1)
                }
            }

            // 插入违禁词提醒
            if (pwHint != null) {
                messageContent.insertBefore(pwHint, messageContent.firstChild);
            }
        }).catch((error) => {
            // 处理任何可能发生的错误  
            console.error('异步操作发生错误:', error);
            // 在这里你可以决定如何响应错误，比如显示错误消息给用户  
        });
    }

    // 自动批准
    if (conf.autoApprove) {
        if (flag_IP & flag_Email) {
            selectOperation(block, '批准');
            approvalFrequency(1)
        }
    }

    if (conf.ipCheck & conf.emailMode) {
        if (flag_IP & flag_Email) {
            // 这俩都满足, 大概率没啥问题, 建议通过
            emailAndIpHint = infoBlock(`${ip_Address}   |    ${ipAndEmailObj.email}在预设白名单内`, ['moderated']);
        } else if (flag_IP && !flag_Email) {
            // IP通过但邮箱不通过
            emailAndIpHint = infoBlock(`${ip_Address}    |    <span style="color:red">${ipAndEmailObj.email}不在白名单</span>`, ['warning', 'highlighted']);

        } else if (!flag_IP && flag_Email) {
            // IP 不通过, 但是邮箱通过了
            emailAndIpHint = infoBlock(`${ip_Address}    |    <span style="color:#384764">${ipAndEmailObj.email}在预设白名单内</span>`, ['warning', 'highlighted'], 'red');
        } else {
            // 都不通过
            emailAndIpHint = infoBlock(`${ip_Address}    |     ${ipAndEmailObj.email}不在白名单`, [], 'red');
        }
    } else if (conf.ipCheck & !conf.emailMode) {
        // 邮箱功能没开
        if (flag_IP) {
            emailAndIpHint = infoBlock(`${ip_Address}`, ['moderated']);
        } else {
            // IP通过但邮箱不通过
            emailAndIpHint = infoBlock(`${ip_Address}`, ['warning', 'highlighted'], 'red');
        }
    } else if (!conf.ipCheck & conf.emailMode) {
        // IP没开
        if (flag_Email) {
            emailAndIpHint = infoBlock(`${ipAndEmailObj.email}在预设白名单内`, ['moderated']);
        } else {
            emailAndIpHint = infoBlock(`<span style="color:red">${ipAndEmailObj.email}不在白名单</span>`, ['warning', 'highlighted']);
        }
    }
    // 插入内容
    if (emailAndIpHint != null) {
        messageContent.insertBefore(emailAndIpHint, messageContent.firstChild);
    }
}

/**
 * 删除本脚本创建的所有持久化数据
 */
function removeAllValues() {
    let arr = GM_listValues();
    for (let i = 0; i < arr.length; i++) {
        GM_deleteValue(arr[i])
    }
}
