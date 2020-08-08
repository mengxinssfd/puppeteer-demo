var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// import puppeteer = require("puppeteer");
var puppeteer = require("puppeteer");
(function () { return __awaiter(_this, void 0, void 0, function () {
    var browser, page, sel, eh, ehVal;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, puppeteer.launch()];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                return [4 /*yield*/, page.setViewport({
                        width: 1920,
                        height: 1080
                    })];
            case 3:
                _a.sent();
                return [4 /*yield*/, page.goto('https://www.bilibili.com')];
            case 4:
                _a.sent();
                // await page.goto('http://localhost:8080/');
                return [4 /*yield*/, page.evaluate(function () {
                        document.querySelector("html").scrollTop = 2000;
                    })];
            case 5:
                // await page.goto('http://localhost:8080/');
                _a.sent();
                // await page.waitFor(2000);
                return [4 /*yield*/, page.waitForSelector("#bili_anime .pgc-rank-wrap")];
            case 6:
                // await page.waitFor(2000);
                _a.sent();
                return [4 /*yield*/, page.$("#bili_anime .pgc-rank")];
            case 7:
                sel = _a.sent();
                return [4 /*yield*/, sel.screenshot({ path: 'rank.png' })];
            case 8:
                _a.sent();
                return [4 /*yield*/, page.evaluateHandle(function () {
                        return new Promise(function (res) { return setTimeout(function () { return res(1000); }, 500); });
                    })];
            case 9:
                eh = _a.sent();
                return [4 /*yield*/, eh.jsonValue()];
            case 10:
                ehVal = _a.sent();
                console.log(ehVal);
                // 函数插入window
                return [4 /*yield*/, page.exposeFunction("testFn", function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        console.log(args);
                    })];
            case 11:
                // 函数插入window
                _a.sent();
                return [4 /*yield*/, page.evaluate(function () {
                        window['testFn']("hello");
                    })];
            case 12:
                _a.sent();
                /*const dimensions = await page.evaluate(() => {
                    return document.querySelector("#bili_anime .pgc-rank").outerHTML;
                });*/
                /* await page.evaluate(() => {
                     const style = document.createElement("style");
                     style.innerHTML = `img {
                         background: gray;
                     }`;
                     document.documentElement.appendChild(style);
                     document.querySelectorAll("img").forEach((img: HTMLImageElement) => img.src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596911047113&di=d0611aa29eae3abddba2a63616c91606&imgtype=0&src=http%3A%2F%2Fpic34.nipic.com%2F20131029%2F13673928_184832234116_2.jpg");
                 });
                 console.log('Dimensions:', dimensions);*/
                return [4 /*yield*/, page.screenshot({ path: 'example.png', fullPage: true })];
            case 13:
                /*const dimensions = await page.evaluate(() => {
                    return document.querySelector("#bili_anime .pgc-rank").outerHTML;
                });*/
                /* await page.evaluate(() => {
                     const style = document.createElement("style");
                     style.innerHTML = `img {
                         background: gray;
                     }`;
                     document.documentElement.appendChild(style);
                     document.querySelectorAll("img").forEach((img: HTMLImageElement) => img.src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596911047113&di=d0611aa29eae3abddba2a63616c91606&imgtype=0&src=http%3A%2F%2Fpic34.nipic.com%2F20131029%2F13673928_184832234116_2.jpg");
                 });
                 console.log('Dimensions:', dimensions);*/
                _a.sent();
                // await page.pdf({path: 'hn.pdf', format: 'A4', printBackground: true});
                return [4 /*yield*/, browser.close()];
            case 14:
                // await page.pdf({path: 'hn.pdf', format: 'A4', printBackground: true});
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
