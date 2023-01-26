const cmfu = {
    "https://m.qidian.com/book/1035282882.html":"神明模拟器",
    "https://m.qidian.com/book/1035852105.html":"玄德",
    "https://m.qidian.com/book/1033893441.html":"国民法医",
    "https://m.qidian.com/book/1035532537.html":"我真没想在过去年代当学霸",
    "https://m.qidian.com/book/1034754526.html":"迷雾之仙"
};

let 文本 = "";

for (const 键 of Object.keys(cmfu)) {
    文本 += `<li><a href = "${键}">${cmfu[键]}</a></li>`
}
文本 = `<ul>${文本}</ul>`;

document.getElementById("cmfu_book").innerHTML = 文本;
