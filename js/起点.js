const cmfu = {
    "https://m.qidian.com/book/1035912292.html":"唯有神",
    "https://m.qidian.com/book/1036037303.html":"师兄说得对",
    "https://m.qidian.com/book/1035700993.html":"新东方毕业，你让我烧大席？",
    "https://m.qidian.com/book/1035791379.html":"开局签到厨神秘制灌汤包",
    "https://m.qidian.com/book/1035852105.html":"玄德",
    "https://m.qidian.com/book/1035827370.html":"我武术宗师过分张狂，黑粉三千万",
    "https://m.qidian.com/book/1035857580.html":"警察叫我备案：苦练绝学的我曝光",
    "https://m.qidian.com/book/1035785432.html":"导演从拯救家族产业开始",
    "https://m.qidian.com/book/1031790503.html":"我，天煞孤星，爱好交友",
    "https://m.qidian.com/book/1035282882.html":"神明模拟器",
    "https://m.qidian.com/book/1035735971.html":"我的身体能加词条",
    "https://m.qidian.com/book/1035341423.html":"我不可能会录这种自述",
    "https://m.qidian.com/book/1033893441.html":"国民法医",
    "https://m.qidian.com/book/1035735913.html":"开发大西北：我在戈壁建了一座城",
    "https://m.qidian.com/book/1035594179.html":"人生模拟：从养生功开始加词条",
    "https://m.qidian.com/book/1034754526.html":"迷雾之仙",
    "https://m.qidian.com/book/1035532537.html":"我真没想在过去的年代当学霸",
    "https://m.qidian.com/book/1035313493.html":"从解析太阳开始"
};

let 文本 = "";

for (const 键 of Object.keys(cmfu)) {
    文本 += `<li><a href = "${键}">${cmfu[键]}</a></li>`
}
文本 = `<ul>${文本}</ul>`;

document.getElementById("cmfu_book").innerHTML = 文本;
