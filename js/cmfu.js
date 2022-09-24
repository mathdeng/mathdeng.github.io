const cmfu = {
    "1033146218" : "模拟器：开局天赋软饭硬吃",
    "1034134977" : "福报模拟器",
    "1032801539" : "百世换新天",
    "1035184060" : "聊斋大善人",
    "1035091266" : "神诡世界：我拥有熟练度面板",
    "1035092578" : "长生武道：我靠养生成武圣",
    "1031525678" : "大国科技从手机开始",
    "1035052635" : "诡异制作公司",
    "1029545933" : "我没想捉妖啊",
    "1077731" : "人道天堂",
    "1245641" : "天道计划",
    "1031340097" : "是谁在使用如果电话亭",
    "1031413880" : "我用摇钱树精通武道",
    "1032536692" : "掌控时光之龙",
    "1032752970" : "我的救世游戏成真了",
    "1032980859" : "从聊斋开始做狐仙",
    "1030051580" : "我的器官是妖怪",
    "1035031171" : "我被缺德系统绑定了",
    "1032788496" : "镜观其变",
    "1016314237" : "万界圆梦师",
    "1010456835" : "某美漫的一方通行",
    "1026633948" : "矩阵天王",
    "1031790503" : "我，天煞孤星，爱好交友",
    "1030855619" : "苟在神诡世界",
    "1031835147" : "我写的自传不可能是悲剧",
    "1025990049" : "术师手册",
    "1034754526" : "迷雾之仙",
    "1035054422" : "超神信用异能",
    "1035039583" : "我，神明，不可明状",
    "1028214828" : "解构诡异",
    "1034891429" : "修炼从一身被动开始",
    "1033893441" : "国民法医",
    "1023715291" : "旧日之箓",
    "1031159866" : "魔门大玩家",
    "1033516786" : "从机械猎人开始",
    "1034809195" : "我的机甲太自律",
    "1034714899" : "日常系符师",
    "1033786783" : "我在黄泉当教主",
    "1034753010" : "超维杀",
    "1034019477" : "提前一万年登录蛮荒世界",
    "1034904261" : "我的修仙游戏人生",
    "1034607227" : "修仙：我与千年后的子孙通话"
};

let 文本 = "";

for (const 键 of Object.keys(cmfu).sort((a , b) => Number(a) - Number(b))) {
    文本 += `<li><a href = "https://m.qidian.com/book/${键}.html">${cmfu[键]}</a></li>`
}
文本 = `<ul>${文本}</ul>`;

document.getElementById("cmfu_book").innerHTML = 文本;
