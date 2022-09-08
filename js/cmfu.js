const cmfu = {
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

for (const [键 , 值] of Object.entries(cmfu)) {
    文本 += `<li><a href = "https://m.qidian.com/book/${键}.html">${值}</a></li>`
}
文本 = `<ul>${文本}</ul>`;

document.getElementById("cmfu_book").innerHTML = 文本;
