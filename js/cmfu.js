const cmfu = {
    "https://m.qidian.com/book/1033893441.html":"国民法医",
    "https://m.qidian.com/book/1035629776.html":"我的瓶中宇宙",
    "https://m.qidian.com/book/1035513072.html":"我成了见习神明",
    "https://m.qidian.com/book/1035282882.html":"神明模拟器",
    "https://m.qidian.com/book/1034754526.html":"迷雾之仙",
    "https://m.qidian.com/book/1035313493.html":"从解析太阳开始",
    "https://m.qidian.com/book/1035532537.html":"我真没想在过去年代当学霸",
    "https://m.qidian.com/book/1035637965.html":"我的科技与狠活被朱元璋曝光了",
    "https://m.qidian.com/book/1035594179.html":"人生模拟：从养生功开始加词条",
    "https://m.qidian.com/book/1035166655.html":"这个演员刑啊",
    "https://m.qidian.com/book/1031835147.html":"聊斋大善人",
    "https://m.qidian.com/book/1031835147.html":"我写的自传不可能是悲剧",
    "https://m.qidian.com/book/1035452169.html":"垃圾 大道韶华",
    "https://m.qidian.com/book/1035256361.html":"我在现实世界加点修行",
    "https://m.qidian.com/book/1035304619.html":"长生仙缘：从照顾道兄妻女开始",
    "https://m.qidian.com/book/1033516786.html":"从机械猎人开始"
};

let 文本 = "";

for (const 键 of Object.keys(cmfu)) {
    文本 += `<li><a href = "${键}">${cmfu[键]}</a></li>`
}
文本 = `<ul>${文本}</ul>`;

document.getElementById("cmfu_book").innerHTML = 文本;
