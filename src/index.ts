// import puppeteer = require("puppeteer");
const puppeteer = require("puppeteer");
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080,
    });
    // await page.goto('https://www.bilibili.com');
    await page.goto('https://xiaojiju.com/');
    // await page.goto('http://localhost:8080/');
    await page.evaluate(() => {
        const html = document.querySelector<HTMLLIElement>("html");
        if (!html) return;
        html.scrollTop = 2000;
    });
    // await page.waitFor(2000);
    await page.waitForSelector(".c-card");

    // 截图某个元素
    // const sel = await page.$("#bili_anime .pgc-rank");
    // await sel.screenshot({path: 'rank.png'});

    // evaluate返回promise
    const eh = await page.evaluateHandle(() => {
        return new Promise(res => setTimeout(() => res(1000), 500));
    });
    const ehVal = await eh.jsonValue();
    console.log(ehVal);

    // 函数插入window
    await page.exposeFunction("testFn", (...args) => {
        console.log(args);
    });
    await page.evaluate(() => {
        window['testFn']("hello");
    });

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

    // await page.screenshot({path: 'example.png', fullPage: true});
    await page.screenshot({path: 'example.png', fullPage: false});
    // await page.pdf({path: 'hn.pdf', format: 'A4', printBackground: true});
    await browser.close();
})();