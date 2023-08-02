console.log('===== 要素の検索 =====');

// p#strawberry(id=straberryのp要素)を検索
let p1 = document.querySelector('p#strawberry');
console.log(p1); // 検索結果のp要素のオブジェクトを表示
console.log(p1.textContent); // p要素の内容（テキスト）を表示

console.log('----------------------');

// p.cands(class=candsのp要素)を全て検索
let ps2 = document.querySelectorAll('p.cands');
for (let p2 of ps2) {
    console.log(p2.textContent); // 要素のテキストを表示
}

console.log('----------------------');

// p要素を全て検索
let ps3 = document.querySelectorAll('p');
for (let p3 of ps3) {
    console.log(p3.textContent); // 要素のテキストを表示
}

//// テキストの変更
let p4 = document.querySelector('p#yacht');
p4.textContent = '夜更かししないでね';

let s5 = document.querySelector('span#solt');
s5.textContent = 'あざらし';

//// CSSプロパティの変更
let p6 = document.querySelector('p#rocket');
p6.style.color = 'blue';
p6.style.backgroundColor = '#ffaf2f';

//// 新しい要素の追加（その1）
let h2 = document.querySelector('h2#addition');
let p = document.createElement('p');
p.textContent = '七面鳥';
h2.insertAdjacentElement('afterend', p);

//// 新しい要素の追加（その2）
let div = document.querySelector('div#sarukani');
let beeLink = document.createElement('a'); // 新しい a 要素を作成
beeLink.textContent = 'ハチ';
beeLink.setAttribute('href', 'https://ja.wikipedia.org/wiki/ハチ');
div.insertAdjacentElement('beforeend', beeLink);

//// 要素の削除
let w = document.querySelector('li#whale');
w.remove(); // 要素を削除
