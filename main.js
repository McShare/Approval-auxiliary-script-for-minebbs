// ==UserScript==
// @name         MineBBS风纪委员会审核综合增强
// @namespace    http://tampermonkey.net/
// @version      3.2
// @description  提高审核效率, 风纪委员先行!
// @author       乱杖先生
// @license MIT
// @match        https://www.minebbs.com/approval-queue/*
// @match        https://www.minebbs.net/approval-queue/*
// @icon         https://www.minebbs.com/data/assets/logo/faviconlan.png
// @icon64       data:image/png;base64,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
// @connect      raw.githubusercontent.com
// @connect      ipinfo.io
// @connect      ip.cn
// @connect      api.oioweb.cn
// @connect      127.0.0.1
// @grant GM_xmlhttpRequest
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_notification
// @grant GM_log
// ==/UserScript==


// 违禁词的API 
const PROHIBITEDWORDS_URL = 'http://127.0.0.1/api/prohibitedWords';
// 通过审核的按钮文字
const AUTO_APPROVE_BUTTON_TEXT = '通过审核';
// 无操作的按钮文字
const NO_OPERATION_BUTTON_TEXT = '无操作';
// 分批次处理内容
const BATCH_SIZE = 10; 
// 分批次处理IP
const BATCH_SIZE_IP = 20;


/*
     配置类
*/
class Config {
    emailMode = true;
    shortContentAccurateMode = true;
    shortContentFuzzyMode = true;
    longContentAccurateMode = true;
    ipCheck = true;
    autoApprove = true;
    #shortContentTextProhibitedWords = [];
    #longContentTextProhibitedWords = [];
    #emailList = [];

    get shortContentTextProhibitedWords() {
        return this.#shortContentTextProhibitedWords.join(';');
    }
    set shortContentTextProhibitedWords(value) {
        this.#shortContentTextProhibitedWords = value.split(';').filter(Boolean);
    }
    get longContentTextProhibitedWords() {
        return this.#longContentTextProhibitedWords.join(';');
    }
    set longContentTextProhibitedWords(value) {
        this.#longContentTextProhibitedWords = value.split(';').filter(Boolean);
    }
    get emailList() {
        return this.#emailList.join(';');
    }
    set emailList(value) {
        this.#emailList = value.split(';').filter(Boolean);
    }
    getlocalShortProhibitedWordsArray() {
        return this.#shortContentTextProhibitedWords.filter(str => str !== "");
    }
    getlocalLongProhibitedWordsArray() {
        return this.#longContentTextProhibitedWords.filter(str => str !== "");
    }
    getEmailListArray() {
        return this.#emailList;
    }
    saveData() {
        GM_setValue('minebbs:config', {
            emailMode: this.emailMode,
            shortContentAccurateMode: this.shortContentAccurateMode,
            shortContentFuzzyMode: this.shortContentFuzzyMode,
            longContentAccurateMode: this.longContentAccurateMode,
            ipCheck: this.ipCheck,
            autoApprove: this.autoApprove,
            shortContentTextProhibitedWords: this.#shortContentTextProhibitedWords,
            longContentTextProhibitedWords: this.#longContentTextProhibitedWords,
            emailList: this.#emailList
        })
    }
    getData() {
        const storedConfig = GM_getValue('minebbs:config');
        if (storedConfig) {
            this.emailMode = storedConfig.emailMode;
            this.shortContentAccurateMode = storedConfig.shortContentAccurateMode;
            this.shortContentFuzzyMode = storedConfig.shortContentFuzzyMode;
            this.longContentAccurateMode = storedConfig.longContentAccurateMode;
            this.ipCheck = storedConfig.ipCheck;
            this.autoApprove = storedConfig.autoApprove;
            this.#shortContentTextProhibitedWords = storedConfig.shortContentTextProhibitedWords || [];
            this.#longContentTextProhibitedWords = storedConfig.longContentTextProhibitedWords || [];
            this.#emailList = storedConfig.emailList || [];
        }
    }
}


// 创建配置对象
const conf = new Config();
// 获取加载旗帜, 用于判断是否为首次加载
const loadflag = GM_getValue("minebbs:loadflag", 0);
if (!loadflag) {
    GM_log('初始化:首次载入插件, 即将开始初始化!');

    // =========== 插件提供的原始数据(START) ===============
    // 提供默认的邮箱后缀
    conf.emailList = 'petalmail.com;hotmail.com;outlook.com;gmail.com;foxmail.com;qq.com;vip.qq.com;163.com;vip.163.com;126.com;vip.126.com;sina.com;sina.cn;yeah.net;189.cn;139.com;wo.cn;game.com;163vip.com;tom.com;vip.tom.com;sohu.com'
    // =========== 插件提供的原始数据(END) ===============

    // 持久化数据
    conf.saveData();
    GM_log('初始化:配置数据持久化完成!');
    sendNotification('首次加载: 风纪委员插件初始化成功!');
    // 插加载旗
    GM_setValue("minebbs:loadflag", 1);
}else{
    // 加载数据
    conf.getData();
}

/**
 * 记录自动批准的次数
 * @param {*} num 如果为0则表示读取, 正数加,负数减
 * @returns 当前总计次数
 */
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


/**
 * 发送插件通知
 * @param {*} text 通知的文本内容 
 */
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
    let block = createElementWithClass('div', 'block');
    let blockContainer = createElementWithClass('div', 'block-container block-container--none');
    let blockFilterBar = createElementWithClass('div', 'block-filterBar block-filterBar--standalone');
    let filterBar = createElementWithClass('div', 'filterBar');
    blockFilterBar.appendChild(filterBar);
    blockContainer.appendChild(blockFilterBar);
    block.appendChild(blockContainer);
    block.getContentElement = function () {
        return filterBar;
    }
    return block;
}

/**
 * 创建一个简单的按钮样式
 * @param {*} text  按钮上的文字
 * @param {*} callback 按钮被点击时的回调
 * @returns 
 */
function createElement_simplButton(text, callback) {
    let el = document.createElement('button');
    el.setAttribute('type', 'button');
    el.classList.add("button", "rippleButton")
    let text_el = document.createElement('span')
    text_el.classList.add("button-text");
    text_el.innerText = text;
    el.appendChild(text_el);
    el.style.marginRight = '0.4vh'
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
    let overlay = document.createElement('div');
    overlay.classList.add("overlay");
    overlay.setAttribute('tabindex', '-1');
    overlay.setAttribute('role', 'dialog')
    overlay.setAttribute('aria-hidden', 'false')
    let overlayTitle = document.createElement('div');
    overlayTitle.classList.add("overlay-title");
    let overlayTitleText = document.createTextNode(title);
    let overlayCloseBtn = document.createElement('a');
    overlayCloseBtn.classList.add('overlay-titleCloser', 'js-overlayClose');
    overlayCloseBtn.setAttribute('role', 'button');
    overlayCloseBtn.setAttribute('tabindex', '0');
    overlayCloseBtn.setAttribute('aria-label', '关闭');
    overlayTitle.appendChild(overlayCloseBtn);
    overlayTitle.appendChild(overlayTitleText);
    overlayCloseBtn.addEventListener('click', () => {
        overlayContainer.remove();
    })
    let overlayContent = document.createElement('div');
    overlayContent.classList.add("overlay-content");
    let block = document.createElement('div');
    block.classList.add("block");
    let blockContainer = document.createElement('div')
    blockContainer.classList.add("block-container")
    let blockBody = document.createElement('div');
    blockBody.classList.add("block-body");
    blockBody.setAttribute('id', 'mb-menu--block')
    let menu_1 = createFormRow_Input({ text: '名称本地违禁词', hint: '字符串' }, {
        id: 'm1',
        value: conf.shortContentTextProhibitedWords,
        hint: '最终词库 = 在线词库 + 本地词库, 请使用 ;(英标分号) 隔开每个字词',
        placeholder: '检查用户名称的违禁词库,建议您从编辑器粘贴到此处',
        callback: function () {
            conf.shortContentTextProhibitedWords = this.value;
        }
    })
    let menu_3 = createFormRow_Input({ text: '内容本地违禁词', hint: '字符串' }, {
        value: conf.longContentTextProhibitedWords,
        hint: '最终词库 = 在线词库 + 本地词库  , 请使用 ;(英标分号) 隔开每个表达式',
        placeholder: '检查审核内容的词库, 建议您从编辑器粘贴到此处',
        callback: function () {
            conf.longContentTextProhibitedWords = this.value;
        }
    })
    let menu_5 = createFormRow_Checkbox({ text: '名称精准匹配', hint: '开关' }, {
        text: '启用名称精准匹配',
        callback: function (event) {
            conf.shortContentAccurateMode = event.target.checked;
        },
        checked: conf.shortContentAccurateMode
    })
    let menu_6 = createFormRow_Checkbox({ text: '名称模糊匹配', hint: '开关' }, {
        text: '启用名称模糊匹配',
        callback: function (event) {
            conf.shortContentFuzzyMode = event.target.checked;
        },
        checked: conf.shortContentFuzzyMode
    })
    let menu_7 = createFormRow_Checkbox({ text: '发布内容检查', hint: '开关' }, {
        text: '启用内容精准匹配',
        callback: function (event) {
            conf.longContentAccurateMode = event.target.checked;
        },
        checked: conf.longContentAccurateMode
    })

    let menu_8 = createFormRow_Button({ text: '便捷操作', 'hint': '功能' }, [{
        'text': '一键无操作',
        'callback': function () {
            for (let i = 0; i < blockArrayList.length - 1; i++) {
                let block = blockArrayList[i];
                selectOperation(block, NO_OPERATION_BUTTON_TEXT);
                overlayContainer.remove();
            }
            GM_log("'一键无操作完成!");
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
        `本地单词违禁词个数: ${conf.getlocalShortProhibitedWordsArray().length}<br>
        本地内容违禁词个数: ${conf.getlocalLongProhibitedWordsArray().length}<br>
        邮箱后缀个数: ${conf.getEmailListArray().length}<br>
        插件为您自动点击了 ${approvalFrequency()} 次批准`
    )
    block.appendChild(menu_8);
    block.appendChild(menu_1);
    block.appendChild(menu_3);
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
    overlay.appendChild(overlayTitle);
    overlay.appendChild(overlayContent);
    overlayContainer.appendChild(overlay);
    return overlayContainer;
}

/**
 * 创建一行 输入框
 * @param {*} labelObj  
 * @param {*} inputObj  输入框的callback 失去焦点时触发
 * @returns 
 */
function createFormRow_Input(labelObj = { text: '输入框', hint: '必填' }, inputObj = { value: '', hint: '输入框备注', placeholder: '输入框提示', callback: function () { } }) {
    const dl = createElementWithClass('dl', 'formRow formRow--input');
    const dt = dl.appendChild(document.createElement('dt'));
    const div = dt.appendChild(createElementWithClass('div', 'formRow-labelWrapper'));
    div.appendChild(createElementWithClass('label', 'formRow-label')).textContent = labelObj['text'];
    div.appendChild(createElementWithClass('dfn', 'formRow-hint')).textContent = labelObj['hint'];
    const dd = dl.appendChild(document.createElement('dd'));
    const input = dd.appendChild(createElementWithClass('input', 'input'));
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

/**
 * 表单创建一行 : CheckBox
 * @param {*} labelObj  text 介绍, hint 提示
 * @param {*} inputObj  text 说明, callback 点击时触发 , checked 是否默认选中
 * @returns 顶级元素
 */
function createFormRow_Checkbox(labelObj = { text: '单选框', hint: '开关' }, inputObj = { text: '这是一个选择框', callback: function () { }, checked: true }) {
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
    setAttribute(icon, 'aria-hidden', 'true'); 
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
/**
 * 表单创建一行 按钮
 * @param {*} labelObj 标签介绍  text 文本  hint文本提示
 * @param {*} buttons  text按钮内容 callback 是点击事件
 * @returns 
 */
function createFormRow_Button(labelObj = { text, hint }, buttons = [{ 'text': '按钮', 'callback': function () { } }]) {
    const dl = createElementWithClass('dl', 'formRow formRow--button');
    const dt = document.createElement('dt');
    const div = createElementWithClass('div', 'formRow-labelWrapper');
    const label = createElementWithClass('label', 'formRow-label');
    label.textContent = labelObj['text'];
    const dfn = createElementWithClass('dfn', 'formRow-hint');
    dfn.textContent = labelObj['hint'];
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
            this.style.textDecoration = 'none';
        });
        a.appendChild(span);
        li.appendChild(a);
        ul.appendChild(li);

    }
    dd.appendChild(ul);
    dl.appendChild(dd);
    return dl;
}

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
    const button = createElementWithClass('button', 'button--primary button button--icon button--icon--save');
    setAttribute(button, 'type', 'submit');
    button.textContent = text;
    button.addEventListener('mouseup', callback)
    formSubmitRowControls.appendChild(button);
    formSubmitRowMain.appendChild(formSubmitRowControls);
    dd.appendChild(formSubmitRowMain);
    dl.appendChild(dd);
    return dl;
}


// 选择点击
function selectOperation(blockElement, text = NO_OPERATION_BUTTON_TEXT) {
    let btnArrayList = blockElement.querySelectorAll('.iconic--radio');
    let flag = false;
    for (let i = 0; i < btnArrayList.length; i++) {
        let label_el = btnArrayList[i];
        let input_el = label_el.querySelector('input')
        input_el.checked = false;
        let blockContainer = blockElement.querySelector('.block-container');
        for (let i = 0; i < blockContainer.classList.length; i++) {
            if (blockContainer.classList[i].startsWith("approvalQueue-item--")) {
                blockContainer.classList.remove(blockContainer.classList[i]);
            }
        }
        if (text == AUTO_APPROVE_BUTTON_TEXT) {
            blockContainer.classList.add('approvalQueue-item--approve')
        } else if (text == '删除') {
            blockContainer.classList.add('approvalQueue-item--delete')
        }
        if (label_el.innerText.includes(text)) {
            input_el.checked = true;
            flag = true;
        }
    }
    return flag;
}

// 提取ip和邮箱
function extractIPAndEmail(divElement) {
    const result = {
        ipAddress: null,
        emailAddress: null
    };
    // 提取IP地址（支持IPv4和IPv6）
    const ipPattern = /(?:(?:\d{1,3}\.){3}\d{1,3}|(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4})/g;
    const ipElements = divElement.querySelectorAll('a[href^="/misc/ip-info"]');
    
    for (const element of ipElements) {
        const match = element.textContent.trim().match(ipPattern);
        if (match && match[0]) {
        result.ipAddress = match[0];
        break; 
        }
    }
    
    // 同时检查div内的纯文本IP地址
    const innerText = divElement.textContent.trim();
    const innerIpMatch = innerText.match(ipPattern);
    if (innerIpMatch && innerIpMatch[0]) {
        result.ipAddress = innerIpMatch[0];
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const allTextNodes = divElement.childNodes;
    for (const node of allTextNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
        const textContent = node.textContent.trim();
        const emailMatch = textContent.match(emailPattern);
        if (emailMatch && emailMatch[0]) {
            result.emailAddress = emailMatch[0];
            break;
        }
        } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() === 'a' && node.href.startsWith('mailto:')) {
        const mailtoEmail = node.href.replace('mailto:', '').trim();
        const emailMatchFromLink = mailtoEmail.match(emailPattern);
        if (emailMatchFromLink && emailMatchFromLink[0]) {
            result.emailAddress = emailMatchFromLink[0];
            break;
        }
        }
    }
    return result;
}
// 提取邮箱域名
function extractEmailDomain(email) {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
        return email.slice(atIndex + 1);
    }
    return null; 
}
// 判断IP是何种类型
function identifyIP(ipString) {
    // IPv4 正则表达式
    const ipv4Regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    // IPv6 正则表达式
    const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    if (ipv4Regex.test(ipString)) {
        return "IPv4";
    } else if (ipv6Regex.test(ipString)) {
        return "IPv6";
    } else {
        return "其他";
    }
}


// 封装 GM_xmlhttpRequest 为一个返回 Promise 的函数
function fetchIpAddressIPV6(ip) {
    return new Promise((resolve, reject) => {
        const url = `https://ipinfo.io/${ip}`;
        GM_xmlhttpRequest({
            method: "GET",
            url,
            onload: function (response) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(response.responseText, 'text/html');
                const address = {
                    Country: doc.querySelector('.geo-table').children[0].children[2].children[1].textContent,
                    State: doc.querySelector('.geo-table').children[0].children[1].children[1].textContent,
                    City: doc.querySelector('.geo-table').children[0].children[0].children[1].textContent
                }
                const addr = `${address.Country} ${address.State} ${address.City}`
                resolve(address ? addr : null);
            },
            onerror: function (error) {
                reject(error);
            }
        });
    });
}
// 封装 GM_xmlhttpRequest 为一个返回 Promise 的函数
function fetchIpAddressIPV4(ip) {
    return new Promise((resolve, reject) => {
        const url = `https://ip.cn/ip/${ip}.html`;
        GM_xmlhttpRequest({
            method: "GET",
            url,
            onload: function(response) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(response.responseText, 'text/html');
                const address = doc.querySelector('#tab0_address');
                resolve(address ? address.textContent : null);
            },
            onerror: function(error) {
                reject(error);
            }
        });
    });
}
function fetchProhibitedWords(messageContent, publisherName) {
    return new Promise((resolve, reject) => {
        const url = `${PROHIBITEDWORDS_URL}`; 
        GM_xmlhttpRequest({
            method: "POST",
            url,
            data : JSON.stringify({
                shortContentAccurateMode : conf.shortContentAccurateMode,
                shortContentFuzzyMode : conf.shortContentFuzzyMode,
                longContentAccurateMode : conf.longContentAccurateMode,
                shortContentTextProhibitedWords : conf.getlocalShortProhibitedWordsArray(),
                longContentTextProhibitedWords : conf.getlocalLongProhibitedWordsArray(),
                shortWordsFuzzyThreshold : 0.5,
                shortContentText : publisherName,
                longContentText : messageContent
            }),
            onload: function(response) {
                resolve(JSON.parse(response.responseText));
            },
            onerror: function(error) {
                reject(error);
            }
        });
    });
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
        let block = blockArrayList[i];
        selectOperation(block, AUTO_APPROVE_BUTTON_TEXT);
    }
    if(blockArrayList.length > 1){
        approvalFrequency(blockArrayList.length - 1);
    }
    GM_log("自动批准操作完成!")
});

// 创建菜单按钮
let menuButton_el = createElement_simplButton('功能菜单', function () {
    GM_log('功能菜单被点击, 唤起菜单');
    let menuContainer = createElement_simpleContainerOfSetting("功能菜单 - MineBBS审核辅助综合插件");
    body_el.insertBefore(menuContainer, body_el.firstChild)
})

menu_bar_content.appendChild(approvalAllButton_el);
menu_bar_content.appendChild(menuButton_el);
pageContent_el.insertBefore(menu_bar, pageContent_el.childNodes[2])


// 待审核块
let pendingReviewBlock = [];
 
// 遍历审核块, 剔除保存块    帖子 个人空间评论 会员  资源   资源更新   资源版本  个人空间留言   
for (let i = 0; i < blockArrayList.length - 1; i++) {
    let block = blockArrayList[i];
    if(block.querySelector('.message-attribution-opposite') == null){
        continue;
    }
    let pendingReviewBlockObject = {
        id : i,
        type : block.querySelector('.message-attribution-opposite').textContent.trim(),
        publisherName: block.querySelector('.username').children[0].textContent.trim(),
        messageContent: wordsToRemoveTextContent(getTextContentUnderElement(block.querySelector('.message-userContent'))).trim().replace(/\s+/g, ' '),
        url:[...new Set(getAllUrlsUnderElement(block.querySelector('.message-userContent')))],    
    }
    if(pendingReviewBlockObject.type === '会员'){
        const ipAndEmailObj = extractIPAndEmail(block.querySelector('.messageNotice'));
        if(ipAndEmailObj.hasOwnProperty('ipAddress')){
            pendingReviewBlockObject.ip = ipAndEmailObj.ipAddress;
        }
        if(ipAndEmailObj.hasOwnProperty('emailAddress')){
            pendingReviewBlockObject.email = ipAndEmailObj.emailAddress;
        }
    }
    pendingReviewBlock.push(pendingReviewBlockObject);
}



// 异步处理所有的用户IP, 获取属地
async function* fetchAndYieldIpAddress(userData) {
    if (!userData || !userData.ip) {
        console.warn(`用户数据缺失或未包含IP信息，ID：${userData.id}`);
        yield { ...userData, ipAddressInfo: null };
    } else {
        let ipAddressInfo = null;
        const identifyIPType = identifyIP(userData.ip)
        if(identifyIPType == 'IPv4') {
            try {
                ipAddressInfo = await fetchIpAddressIPV4(userData.ip);
                yield { ...userData, ipAddressInfo };
            } catch (error) {
                console.error(`获取ID为${userData.id}的IP地址信息失败  -> IPV4`, error);
                yield { ...userData, ipAddressInfo: null };
            }
        }else if(identifyIPType == 'IPv6'){
            try {
                ipAddressInfo = await fetchIpAddressIPV6(userData.ip);
                yield { ...userData, ipAddressInfo };
            } catch (error) {
                console.error(`获取ID为${userData.id}的IP地址信息失败 -> IPV6`, error);
                yield { ...userData, ipAddressInfo: null };
            } 
        }else{
            yield { ...userData, ipAddressInfo: null };
        }
    }
}

// 传入userData数组
async function fetchAndProcessEachIpAddressConcurrently(userDataList) {
    for await (const processedUser of userDataList.flatMap(async user => {
        const genIterator = fetchAndYieldIpAddress(user);
        let result;
        do {
            result = await genIterator.next();
            if (!result.done) {
                let res = result.value;
                let prohibitedWordsFlag = false; 
                if(res.messageContent == ''){
                    if(conf.shortContentAccurateMode || conf.shortContentFuzzyMode){
                        let res_pw = await fetchProhibitedWords('',res.publisherName);
                        let prohibitedWords_innerHTML = '';
                        if(res_pw.shortContentAccurate != null && res_pw.shortContentAccurate.length > 0){
                            prohibitedWords_innerHTML += ` 名称违禁词: <span style='color:red'>${(res_pw.shortContentAccurate).join(',')}</span>`
                            prohibitedWordsFlag = true;
                        }
                        if(res_pw.shortContentFuzzy != null && res_pw.shortContentFuzzy.length > 0){
                            prohibitedWords_innerHTML += ` 名称模糊违禁词: <span style='color:red'>${(res_pw.shortContentFuzzy).join(',')}</span>`
                            prohibitedWordsFlag = true;
                        }
                        if(prohibitedWordsFlag){
                            let infoBlock_prohibitedWords = createInfoBlock(['highlighted','warning']);
                            infoBlock_prohibitedWords.appendInfo(prohibitedWords_innerHTML);
                            let block = blockArrayList[res.id];
                            let messageContent = block.querySelector('.message-content')
                            messageContent.insertBefore(infoBlock_prohibitedWords,messageContent.firstChild)
                            selectOperation(block,NO_OPERATION_BUTTON_TEXT);
                        }
                    }
                }
                let isEmailInWhiteList = false;
                if(conf.emailMode){ 
                    let eDomain = extractEmailDomain(res.email);
                    if (eDomain != null) {
                        if (conf.getEmailListArray().includes(eDomain)) {
                            isEmailInWhiteList = true;
                        }
                    }
                }

                // 处理IP, 默认表示IP正常
                let isIPInWhiteList = false;
                if(conf.ipCheck){
                    if (res.hasOwnProperty('ipAddressInfo')) {
                        let ip_Address = res.ipAddressInfo;
                        if (ip_Address.trim().includes("China") || ip_Address.trim().startsWith("中国")) {
                            isIPInWhiteList = true;
                        }
                    }
                }

                // 自动批准
                if (conf.autoApprove) {
                    if (isIPInWhiteList & isEmailInWhiteList && !prohibitedWordsFlag) {
                        let block = blockArrayList[res.id];
                        selectOperation(block, AUTO_APPROVE_BUTTON_TEXT);
                        approvalFrequency(1)
                    }
                }

                const ipCheckAndEmailMode = {
                    bothOn: conf.ipCheck && conf.emailMode,
                    ipOnEmailOff: conf.ipCheck && !conf.emailMode,
                    ipOffEmailOn: !conf.ipCheck && conf.emailMode,
                    bothOff: !conf.ipCheck && !conf.emailMode,
                  };
                  
                  let emailAndIpHint;
                  let classes = ['warning', 'highlighted'];
                  
                  if (ipCheckAndEmailMode.bothOn) {
                    if (isIPInWhiteList && isEmailInWhiteList) {
                        // IP和邮箱都在白名单
                        emailAndIpHint = createInfoBlock(['moderated']);
                        emailAndIpHint.appendInfo(`<span>${res.ipAddressInfo}</span> | <span>${res.email}在预设白名单内</span>`)
        
                    } else if (isIPInWhiteList) {
                        // 只有IP通过了, 邮箱不在白名单
                        emailAndIpHint = createInfoBlock(classes);
                        emailAndIpHint.appendInfo(`<span>${res.ipAddressInfo}</span> | <span style="color:red">${res.email}不在白名单</span>`)
                    } else if (isEmailInWhiteList) {
                        // 只有邮箱通过了, IP不通过
                        emailAndIpHint = createInfoBlock(classes);
                        emailAndIpHint = createInfoBlock(`<span style="color:red">${res.ipAddressInfo}</span> | <span>${res.email}在预设白名单内</span>`, ['moderated']);
                    } else {
                        // 都没通过
                      emailAndIpHint = createInfoBlock(classes);
                      emailAndIpHint.appendInfo(`<span style="color:red">${res.ipAddressInfo}</span> | <span style="color:red">${res.email}不在白名单</span>`);
                    }
                  } else if (ipCheckAndEmailMode.ipOnEmailOff) { 
                    // IP通过
                    if (isIPInWhiteList) {
                        emailAndIpHint = createInfoBlock(['moderated']);
                        emailAndIpHint.appendInfo(`<span>${res.ipAddressInfo}</span>`);
                    } else {
                        // IP没通过
                        emailAndIpHint = createInfoBlock(classes);
                        emailAndIpHint.appendInfo(`<span style="color:red">${res.ipAddressInfo}</span>`);
                    }
                  } else if (ipCheckAndEmailMode.ipOffEmailOn) { // IP开关关闭, 邮箱开关开启
                    if (isEmailInWhiteList) {
                        // 邮箱通过
                        emailAndIpHint = createInfoBlock(['moderated']);
                        emailAndIpHint.appendInfo(`<span>${res.email}在预设白名单内</span>`);
                    } else {
                        // 邮箱没通过
                        emailAndIpHint = createInfoBlock(classes);
                        emailAndIpHint.appendInfok(`<span style="color:red">${res.email}不在白名单</span>`);

                    }
                  }
                  
                  if (emailAndIpHint !== null) {
                    const block = blockArrayList[res.id];
                    const messageContent = block.querySelector('.message-content');
                    messageContent.insertBefore(emailAndIpHint, messageContent.firstChild);
                  }
                
                
                
            }
        } while (!result.done);
    })) {
        
    }
}

async function processAllBatchesUsers() {
    // 筛选出 type 为 '会员' 的对象，并确保它们都有ip属性
    const memberObjectsWithIp = pendingReviewBlock
        .filter(item => item.type === '会员' && item.ip)
        .map(member => ({ ...member }));

    // 分批使用处理用户IP
    for (let i = 0; i < memberObjectsWithIp.length; i += BATCH_SIZE_IP) {
        const batch = memberObjectsWithIp.slice(i, i + BATCH_SIZE_IP);
        await fetchAndProcessEachIpAddressConcurrently(batch);
    }
}

// 调用封装好的异步函数处理所有批次
processAllBatchesUsers();

// 处理违禁词
async function* asyncGeneratorForProhibitedWords(ReviewBlock) {
    try {
        const response = await fetchProhibitedWords(ReviewBlock.messageContent,ReviewBlock.publisherName);
        const shortContentAccurate = response.shortContentAccurate;
        const shortContentFuzzy = response.shortContentFuzzy;
        const longContentAccurate = response.longContentAccurate;
        const ProhibitedWordsArr = { shortContentAccurate, shortContentFuzzy ,longContentAccurate};
        const resultReviewBlock = {...ReviewBlock, ProhibitedWords: ProhibitedWordsArr};
        yield resultReviewBlock;
    } catch (error) {
        console.error(`获取块 ${ReviewBlock.id} 的违禁词信息失败`, error);
        yield {...ReviewBlock,ProhibitedWordsArr: null };
    }
}

// 使用异步生成器函数
async function fetchAndProcessEachProhibitedWordsConcurrently(pendingReviewBlock) {
    for await (const ReviewBlock of pendingReviewBlock.flatMap(async block => {
        const genIterator = asyncGeneratorForProhibitedWords(block);
        let result;
        do {
            result = await genIterator.next();
            if (!result.done) {
                let res = result.value;
                let prohibitedWords_innerHTML = ''
                let prohibitedWords = res.ProhibitedWords;
                let prohibitedWordsFlag = false;
                if(prohibitedWords.shortContentAccurate.length > 0){
                    prohibitedWords_innerHTML += ` 名称违禁词: <span style='color:red'>${(prohibitedWords.shortContentAccurate).join(',')}</span>`
                    prohibitedWordsFlag = true;
                }
                if(prohibitedWords.shortContentFuzzy.length > 0){
                    prohibitedWords_innerHTML += ` 名称模糊违禁词: <span style='color:red'>${(prohibitedWords.shortContentFuzzy).join(',')}</span>`
                    prohibitedWordsFlag = true;
                }
                if(prohibitedWords.longContentAccurate.length > 0){
                    prohibitedWords_innerHTML += ` 内容违禁词: <span style='color:red'>${(prohibitedWords.longContentAccurate).join(',')}</span>`
                    prohibitedWordsFlag = true;
                }
                if(prohibitedWordsFlag){
                    // 渲染到页面
                    let infoBlock_prohibitedWords = createInfoBlock(['highlighted','warning']);
                    infoBlock_prohibitedWords.appendInfo(prohibitedWords_innerHTML);
                    let block = blockArrayList[res.id];
                    
                    let messageContent = block.querySelector('.message-content')
                    messageContent.insertBefore(infoBlock_prohibitedWords,messageContent.firstChild)
                    selectOperation(block,NO_OPERATION_BUTTON_TEXT)
                    
                }
            }
        } while (!result.done);
    })) {
    }
}

async function processAllBatchesProhibitedWords() {
    // 筛出没有内容的审核块
    const notEmptyMessageObjects = pendingReviewBlock.filter(item => item.hasOwnProperty('messageContent') && item.messageContent.trim());

    // 分批使用处理用户IP
    for (let i = 0; i < notEmptyMessageObjects.length; i += BATCH_SIZE) {
        const batch = notEmptyMessageObjects.slice(i, i + BATCH_SIZE);
        await fetchAndProcessEachProhibitedWordsConcurrently(batch);
    }
}

// 调用封装好的异步函数处理所有批次
processAllBatchesProhibitedWords();

/**
 * 删除本脚本创建的所有持久化数据
 */
function removeAllValues() {
    let arr = GM_listValues();
    for (let i = 0; i < arr.length; i++) {
        GM_deleteValue(arr[i])
    }
}


// 拟真一个信息框,并且可以持续添加内容
function createInfoBlock(status = []) {
    // highlighted 已审核(绿盾牌 变灰色)
    // moderated  已处理(绿色小盾牌)
    // warning 警告小图标(绿色警告标)

    let divElement = document.createElement('div');
    divElement.classList.add('messageNotice');
    for (let i = 0; i < status.length; i++) {
        divElement.classList.add(`messageNotice--${status[i]}`);
    }
    divElement.appendInfo = function (info) {
        let pElement = document.createElement('span');
        pElement.innerHTML = info;
        this.appendChild(pElement);
    }
    
    return divElement;
}



// 去除论坛内部链接和白名单链接
function urlsToRemove(linkArray){
  let whitelistStartsWith = [
    'https://b23.tv',
    'https://player.bilibili.com/',
    'https://www.minebbs.com',
    'https://www.minebbs.net',
    'https://www.mcnav.net',
    'https://afdian.net/'
  ];
  
  // 新建一个数组存放过滤后的链接
  let filteredLinks = [];
  
  // 迭代链接数组
  for(let link of linkArray) {
    if((link.startsWith('http://') || link.startsWith('https://')) && !whitelistStartsWith.some(prefix => link.startsWith(prefix))) {
      filteredLinks.push(link);
    }
  }
  
  return filteredLinks;
}

// 获取所有http(s)链接（不论在哪种属性中）
function getAllUrlsUnderElement(element) {
    let urls = [];
    if(element == null) return urls;
    Array.from(element.querySelectorAll('*')).forEach(node => {
        // 遍历元素的所有属性
        for (let attr of node.attributes) {
        // 检查属性值是否包含http(s)链接
        const maybeUrl = attr.value.match(/https?:\/\/[\w./]+/g);
        if (maybeUrl) {
            urls.push(...maybeUrl);
        }
        }

        // 如果是a标签且href存在，则提取链接
        if (node.tagName.toLowerCase() === 'a' && node.hasAttribute('href')) {
        urls.push(node.getAttribute('href'));
        }

        // 递归查找子元素中的链接
        urls = urls.concat(getAllUrlsUnderElement(node));
    });

    // 清理门户
    urls = urlsToRemove(urls);

    return urls;
}
  

// 去除论坛常见内容
function wordsToRemoveTextContent(text){
    // 要被移除掉的单词
    let wordsToRemove = ["更改日志","字段名称","旧值","新值","QQ","BiliBili主页","个人信息","下载","用户名","手机号码","邮箱","邮件选项","头像","接收新闻和更新电子邮件","接收活动摘要电子邮件","头像日期","空间封面","出生日期","显示生日","显示出生年份","所在地","主页","性别","Xbox ID","Github主页","字号","风格","语言","接收新闻和更新电子邮件","接收活动摘要电子邮件","收到私信消息后邮件提醒","回复内容接收邮件提醒","回复内容接收邮件提醒","显示他人的签名","点击展开...","阅读关于此资源更多信息...","推广者"]

    // 创建一个用于替换的正则表达式，其中wordsToMatch是一个包含所有转义过的关键词的正则
    let wordsAndPhrasesToMatch = wordsToRemove.flatMap(w => {
        // 对于包含特殊字符的短语，使用引号包裹并转义内部特殊字符
        if (/\W/.test(w)) {
            return [w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')];
        } else {
            // 对于普通单词，使用单词边界`\b`
            return [`\\b${w}\\b`];
        }
    });

    let regex = new RegExp(wordsAndPhrasesToMatch.join('|'), 'gi');

    // 替换匹配的内容为空字符串
    let newText = text.replace(regex, '');

    return newText;
}

// 获取所有标签的文本内容
function getTextContentUnderElement(element) {
    
    let textContent = '';
    if(element == null) return '';
    // 遍历元素及其所有后代元素
    const nodes = element.childNodes;
    for (let i = 0; i < nodes.length; ++i) {
        const node = nodes[i];
        if (node.nodeType === Node.TEXT_NODE) {
            textContent += node.textContent.trim();
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            textContent += getTextContentUnderElement(node);
        }
    }

    return textContent;
}
