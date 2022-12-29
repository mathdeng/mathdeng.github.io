const cmfu = {
    "https://m.qidian.com/book/1036037303.html":"师兄说得对",
    "https://m.qidian.com/book/1035700993.html":"新东方毕业，你让我烧大席？",
    "https://m.qidian.com/book/1035791379.html":"开局签到厨神秘制灌汤包",
    "https://m.qidian.com/book/1035852105.html":"玄德",
    "https://m.qidian.com/book/1035827370.html":"我武术宗师过分张狂，黑粉三千万",
    "https://m.qidian.com/book/1034284970.html":"修炼从简化功法开始",
    "https://m.qidian.com/book/1035692335.html":"我的物品有升级面板",
    "https://m.qidian.com/book/1035857580.html":"警察叫我备案：苦练绝学的我曝光",
    "https://m.qidian.com/book/1035785432.html":"导演从拯救家族产业开始",
    "https://m.qidian.com/book/1035629776.html":"我的瓶中宇宙",
    "https://m.qidian.com/book/1031835147.html":"我写的自传不可能是悲剧",
    "https://m.qidian.com/book/1031790503.html":"我，天煞孤星，爱好交友",
    "https://m.qidian.com/book/1035257693.html":"我每天出门看黄历",
    "https://m.qidian.com/book/1034134977.html":"历史人生模拟器",
    "https://m.qidian.com/book/1035282882.html":"神明模拟器",
    "https://m.qidian.com/book/1033085217.html":"我的成就系统大有问题",
    "https://m.qidian.com/book/1035637965.html":"我的科技与狠活被朱元璋曝光了",
    "https://m.qidian.com/book/1035959050.html":"听说我下辈子是灭世魔头",
    "https://m.qidian.com/book/1035735971.html":"我的身体能加词条",
    "https://m.qidian.com/book/1035771510.html":"这个导演只拍烂片",
    "https://m.qidian.com/book/1035341423.html":"我不可能会录这种自述",
    "https://m.qidian.com/book/1035513072.html":"我成了见习神明",
    "https://m.qidian.com/book/1034265956.html":"你管这叫幕后黑手？",
    "https://m.qidian.com/book/1033893441.html":"国民法医",
    "https://m.qidian.com/book/1033060645.html":"我的动画时代",
    "https://m.qidian.com/book/1035735913.html":"开发大西北：我在戈壁建了一座城",
    "https://m.qidian.com/book/1035594179.html":"人生模拟：从养生功开始加词条",
    "https://m.qidian.com/book/1035629776.html":"我的瓶中宇宙",
    "https://m.qidian.com/book/1035350735.html":"觉醒超人基因的我要无敌了",
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
