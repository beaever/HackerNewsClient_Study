const ajax =  new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
ajax.open('GET', NEWS_URL , false);  // 동기화 처리 하겠다.
ajax.send();

// JSON 파일을 JavaScript로 잘 사용하기 위해 응답 값을 객체로 바꾼다.
const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  li.innerHTML = newsFeed[i].title;
   ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);