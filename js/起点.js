const cmfu = {
    "https://m.qidian.com/book/1035629776.html":"我的瓶中宇宙",
    "https://m.qidian.com/book/1031159866.html":"魔门大玩家",
    "https://m.qidian.com/book/1031835147.html":"我写的自传不可能是悲剧",
    "https://m.qidian.com/book/1032788496.html":"镜观其变",
    "https://m.qidian.com/book/1035257693.html":"我每天出门看黄历",
    "https://m.qidian.com/book/1034134977.html":"历史人生模拟器",
    "https://m.qidian.com/book/1035184060.html":"聊斋大善人",
    "https://m.qidian.com/book/1035457476.html":"万物模拟：开局铜皮铁骨",
    "https://m.qidian.com/book/1035256361.html":"我在现实世界加点修行",
    "https://m.qidian.com/book/1035282882.html":"神明模拟器",
    "https://m.qidian.com/book/1035682122.html":"在科幻世界加点成了仙人",
    "https://m.qidian.com/book/1033516786.html":"从机械猎人开始",
    "https://m.qidian.com/book/1034869678.html":"我有一个游戏世界",
    "https://m.qidian.com/book/1023715291.html":"旧日之箓",
    "https://m.qidian.com/book/1035362595.html":"异化武道",
    "https://m.qidian.com/book/1034753010.html":"超维杀",
    "https://m.qidian.com/book/1035341423.html":"我不可能会录这种自述",
    "https://m.qidian.com/book/1035513072.html":"我成了见习神明",
    "https://m.qidian.com/book/1033893441.html":"国民法医",
    "https://m.qidian.com/book/1035166655.html":"这个演员刑啊",
    "https://m.qidian.com/book/1035452169.html":"大道韶华",
    "https://m.qidian.com/book/1035735913.html":"开发大西北：我在戈壁滩建了一座城",
    "https://m.qidian.com/book/1035594179.html":"人生模拟：从养生功开始加词条",
    "https://m.qidian.com/book/1035629776.html":"我的瓶中宇宙",
    "https://m.qidian.com/book/1035350735.html":"觉醒超人基因的我要无敌了",
    "https://m.qidian.com/book/1034754526.html":"迷雾之仙",
    "https://m.qidian.com/book/1032801539.html":"百世换新天",
    "https://m.qidian.com/book/1035532537.html":"我真没想在过去的年代当学霸",
    "https://m.qidian.com/book/1035313493.html":"从解析太阳开始"
};

let 文本 = "";

for (const 键 of Object.keys(cmfu)) {
    文本 += `<li><a href = "${键}">${cmfu[键]}</a></li>`
}
文本 = `<ul>${文本}</ul>`;

document.getElementById("cmfu_book").innerHTML = 文本;
