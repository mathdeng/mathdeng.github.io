const cmfu = {
    "https://m.qidian.com/book/1035882576.html":"家族修仙：从卖盒饭开始",
    "https://m.qidian.com/book/1035700993.html":"新东方毕业，你让我烧大席？",
    "https://m.qidian.com/book/1035827370.html":"我武术宗师过分张狂，黑粉三千万",
    "https://m.qidian.com/book/1035785432.html":"导演从拯救家族产业开始"
};

let 文本 = "";

for (const 键 of Object.keys(cmfu)) {
    文本 += `<li><a href = "${键}">${cmfu[键]}</a></li>`
}
文本 = `<ul>${文本}</ul>`;

document.getElementById("cmfu_book").innerHTML = 文本;
