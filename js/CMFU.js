const CMFU = {
    "1034753010" : "书"
};
let 文本 = "";

for (const [键 , 值] of Object.entries(CMFU)) {
    文本 += `<li><a href = "https://m.qidian.com/book/${键}.html">${值}</a></li>`
}
文本 = `<ul>${文本}</ul>`;

document.getElementById("CMFU").innerHTML = 文本;