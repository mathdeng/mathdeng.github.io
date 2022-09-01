const cmfu = {
    "1033786783" : "我在黄泉当教主",
    "1034753010" : "超维杀",
    "1034019477" : "提前一万年登录蛮荒世界",
    "1034904261" : "我的修仙游戏人生",
    "1034607227" : "修仙：我与千年后的子孙通话"
};

let 文本 = "";

for (const [键 , 值] of Object.entries(cmfu)) {
    文本 += `<li><a href = "https://m.qidian.com/book/${键}.html">${值}</a></li>`
}
文本 = `<ul>${文本}</ul>`;

document.getElementById("cmfu_book").innerHTML = 文本;
