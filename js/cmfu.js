const cmfu = {
    "https://m.qidian.com/book/1035629776.html":"我的瓶中宇宙",
    "https://m.qidian.com/book/1035313493.html":"从解析太阳开始",
    "https://m.qidian.com/book/1033516786.html":"从机械猎人开始"
};

let 文本 = "";

for (const 键 of Object.keys(cmfu)) {
    文本 += `<li><a href = "${键}">${cmfu[键]}</a></li>`
}
文本 = `<ul>${文本}</ul>`;

document.getElementById("cmfu_book").innerHTML = 文本;
