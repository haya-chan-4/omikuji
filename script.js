'use strict';

{
  const btn = document.getElementById('btn');
  const bc = document.getElementById('bc');

  btn.addEventListener('click', () => {
    // const result = ['大吉', '中吉', '小吉', '凶'];
    // const n = Math.floor(Math.random() * result.length);
    // btn.textContent = result[Math.floor(Math.random() * result.length)];

    const n = Math.random();
    if (n < 0.1) {
      btn.textContent = '大吉';
    } else if (n < 0.3) {
      btn.textContent = '中吉';
    } else if(n < 0.6) {
      btn.textContent = '小吉';
    } else {
      btn.textContent = '凶';
      bc.classList.remove('hidden');
    }
  });
}