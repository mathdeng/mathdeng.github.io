const 列表 = ['⭐️', '', '', '🌙', '☀️', '🌞']
function 表情(星级) {
    return 列表[Math.min(星级, 列表.length - 1)]
}

let 文本 = `<p>总共 ${ qidian.length } 本书。</p><ol>`;
for (const 元素 of qidian) {
    文本 += `<li><a href = "${元素.fields.url}">${表情(元素.fields.星级) + 元素.fields.书名}</a></li>`;
}
文本 += `</ol>`;
document.getElementById('起点').innerHTML = 文本;