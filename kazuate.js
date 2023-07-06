// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  let i = document.querySelector('input[name="yoso"]');
  let yoso = parseInt(i.value);

  kaisu += 1;
  let k1 = document.querySelector('span#kaisu');
  k1.textContent = kaisu;
  let k2 = document.querySelector('span#answer');
  k2.textContent = yoso;

  let p1 = document.querySelector('p#result');

  if (kaisu >= 4) {
    p1.textContent = "答えは" + kotae + "でした．すでにゲームは終わっています";
    console.log("答えは" + kotae + "でした．すでにゲームは終わっています");
  } else if (kaisu == 3 && kotae != yoso) {
    p1.textContent = "まちがい.残念でした答えは" + kotae + "です．";
    console.log("まちがい.残念でした答えは" + kotae + "です．");
  } else if (kaisu == 3 && kotae == yoso) {
    p1.textContent = "正解です.おめでとう!";
    console.log("正解です.おめでとう!");
  } else {
    if (yoso > kotae) {
      p1.textContent = "まちがい.答えはもっと小さいですよ";
      console.log("まちがい.答えはもっと小さいですよ");
    } else if (yoso < kotae) {
      p1.textContent = "まちがい.答えはもっと大きいですよ";
      console.log("まちがい.答えはもっと大きいですよ");
    } else {
      p1.textContent = "正解です.おめでとう!";
      console.log("正解です.おめでとう!");
    }
  }
}

let b = document.querySelector('#print');
b.addEventListener('click', hantei);
