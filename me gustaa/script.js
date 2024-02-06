let likes = [];

document.addEventListener('DOMContentLoaded', function cargar() {
  let spans = document.querySelectorAll('span');

  for (let i = 0; i < spans.length; i++) {
    likes.push(0);
  }
});

function addLike(index) {
  likes[index]++;
  let likeSpan = document.querySelectorAll('span')[index];
  likeSpan.innerHTML = likes[index]+ ' like(s)';
}