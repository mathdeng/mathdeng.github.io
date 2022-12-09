const cmfu = {
    "https://m.qidian.com/book/1035629776.html":"我的瓶中宇宙",
    "https://m.qidian.com/book/1035282882.html":"神明模拟器",
    "https://m.qidian.com/book/1035682122.html":"在科幻世界加点成了仙人",
    "https://m.qidian.com/book/1033516786.html":"从机械猎人开始",
    "https://m.qidian.com/book/1023715291.html":"旧日之箓",
    "https://m.qidian.com/book/1033893441.html":"国民法医",
    "https://m.qidian.com/book/1035166655.html":"这个演员刑啊",
    "https://m.qidian.com/book/1035452169.html":"大道韶华",
    "https://m.qidian.com/book/1035735913.html":"开发大西北：我在戈壁滩建了一座城",
    "https://m.qidian.com/book/1035594179.html":"人生模拟：从养生功开始",
    "https://m.qidian.com/book/1035629776.html":"我的瓶中宇宙",
    "https://m.qidian.com/book/1035350735.html":"觉醒超人基因的我要无敌了",
    "https://m.qidian.com/book/1034754526.html":"迷雾之仙",
    "https://m.qidian.com/book/1035532537.html":"我真没想在过去的年代当学霸"
};

let 文本 = "";

for (const 键 of Object.keys(cmfu)) {
    文本 += `<li><a href = "${键}">${cmfu[键]}</a></li>`
}
文本 = `<ul>${文本}</ul>`;

document.getElementById("cmfu_book").innerHTML = 文本;
