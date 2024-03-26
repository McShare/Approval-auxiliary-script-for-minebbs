# # 项目介绍
为了推进MineBBS全站审核, 加快管理人员/风纪委员会的审核速度
编写了此脚本, 用于便利审核人员

# # 安装部署
主要分为 违禁词API部署 和 脚本本体安装
## 1. 安装脚本本体
将`main.js`的内容复制到油猴(Tampermonkey)新建脚本即可

## 2. 违禁词API部署
将`worker`文件夹的内容部署到CloudFlare的Worker上

### 2.1 修改脚本代码
修改`main.js`的代码
```js
const PROHIBITEDWORDS_URL = 'http://127.0.0.1:8787/api/prohibitedWords';
```
将链接的地址改为 `[实际的域名]/api/prohibitedWords`,例如:
```js
const PROHIBITEDWORDS_URL = 'https://example.com/api/prohibitedWords';
```

修改`main.js`的脚本信息头
```js
// @connect      raw.githubusercontent.com
// @connect      ipinfo.io
// @connect      ip.cn
// @connect      127.0.0.1
```
将`127.0.0.1`改为实际的接口域名
```js
// @connect      raw.githubusercontent.com
// @connect      ipinfo.io
// @connect      ip.cn
// @connect      example.com
```

### 2.2 违禁词编写
打开`worker`文件夹, `prohibitedWords.js`内的word数组
将需要的的违禁词填写到数组当中, 本仓库不提供违禁词
