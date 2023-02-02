const cmfu = {
    "https://m.qidian.com/book/1035852105.html":"玄德",
    "https://m.qidian.com/book/1033893441.html":"国民法医"
};

let 文本 = "";

for (const 键 of Object.keys(cmfu)) {
    文本 += `<li><a href = "${键}">${cmfu[键]}</a></li>`
}
文本 = `<ul>${文本}</ul>`;

document.getElementById("cmfu_book").innerHTML = 文本;
