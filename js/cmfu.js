const cmfu = {
    "1034753010" : "超维杀",
    "1034607227" : "修仙：我与千年后的子孙通话"
};

let 文本 = "";

for (const [键 , 值] of Object.entries(cmfu)) {
    文本 += `<li><a href = "https://m.qidian.com/book/${键}.html">${值}</a></li>`
}
文本 = `<ul>${文本}</ul>`;

document.getElementById("cmfu_book").innerHTML = 文本;
