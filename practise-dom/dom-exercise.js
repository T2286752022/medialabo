let data = [
    { 名前: '札幌', 緯度: 43.06417, 経度: 141.34694 },
    { 名前: '仙台', 緯度: 38.26889, 経度: 140.87194 },
    { 名前: '新宿', 緯度: 35.68944, 経度: 139.69167 },
    { 名前: '名古屋', 緯度: 35.18028, 経度: 136.90667 },
    { 名前: '大阪', 緯度: 34.68639, 経度: 135.52 },
    { 名前: '広島', 緯度: 34.39639, 経度: 132.45944 },
    { 名前: '高知', 緯度: 33.55972, 経度: 133.53111 },
    { 名前: '福岡', 緯度: 33.60639, 経度: 130.41806 },
    { 名前: '鹿児島', 緯度: 31.56028, 経度: 130.55806 },
    { 名前: '沖縄', 緯度: 26.2125, 経度: 127.68111 }
];

// 練習4-2 メッセージ追加プログラム
let h2 = document.querySelector('h2#ex42');
let p = document.createElement('p');
p.style.color = 'green';
p.textContent = '写真表と都市の緯度経度のページです';
h2.insertAdjacentElement('afterend', p);

// 練習4-3 写真表作成プログラム
let div = document.querySelector('div#phototable');

for (let i = 1; i <= 3; i++) {
    let img = document.createElement('img');
    img.setAttribute('src', './image' + i + '.png');  // 適切な画像ファイル名に変更

    let p = document.createElement('p');
    p.insertAdjacentElement('beforeend', img);
    div.insertAdjacentElement('beforeend', p);
}

// 練習4-4 箇条書き削除プログラム
let li = document.querySelector('ul#location');
let liList = document.querySelectorAll('li');

for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
}

// 練習4-5 箇条書き追加プログラム
let li3 = document.querySelector('ul#location');

for (let i = 0; i < data.length; i++) {
    let text = data[i].名前 + " 緯度:" + data[i].緯度 + ", 経度:" + data[i].経度;
    let p3 = document.createElement("p");
    p3.textContent = text;
    li3.insertAdjacentElement('beforeend', p3);
}
