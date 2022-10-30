const cmfu = {
    "1035313493" : "从解析太阳开始",
    "1077731" : "人道天堂",
    "1245641" : "天道计划",
    "1034754526" : "迷雾之仙",
    "1033893441" : "国民法医",
    "1033786783" : "我在黄泉当教主"
};

let 文本 = "";

for (const 键 of Object.keys(cmfu).sort((a , b) => Number(a) - Number(b))) {
    文本 += `<li><a href = "https://m.qidian.com/book/${键}.html">${cmfu[键]}</a></li>`
}
文本 = `<ul>${文本}</ul>`;

document.getElementById("cmfu_book").innerHTML = 文本;
