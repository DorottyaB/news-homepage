const { mainArticle, articles, topArticles } = data;

function getMainArticle() {
  document.getElementById('mainImgMobile').src = mainArticle[0].imgUrlMobile;
  document.getElementById('mainImgDesktop').srcset = mainArticle[0].imgUrlDesktop;
  document.getElementById('header').textContent = mainArticle[0].title;
  document.getElementById('text').textContent = mainArticle[0].text;
  document.getElementById('mainButton').href = mainArticle[0].url;
}

function getNewArticles() {
  const newArticlesContainer = document.querySelector('.new-articles');
  articles.slice(0, 3).map(article => {
    const section = document.createElement('section');
    section.className = 'section-new';
    const title = document.createElement('a');
    title.href = article.url;
    title.className = 'link-secondary';
    title.textContent = article.title;
    const lead = document.createElement('p');
    lead.textContent = article.text;
    section.append(title, lead);
    newArticlesContainer.appendChild(section);
  });
}

function getTopArticles() {
  const topArticlesContainer = document.querySelector('.top-articles');
  topArticles.slice(0, 3).map((article, index) => {
    const section = document.createElement('section');
    section.className = 'section-top';
    const imgContainer = document.createElement('div');
    imgContainer.className = 'image-container';
    const img = document.createElement('img');
    img.src = article.imgUrl;
    img.alt = article.title;
    imgContainer.appendChild(img);
    const number = document.createElement('h3');
    number.textContent = `0${index + 1}`;
    const title = document.createElement('a');
    title.href = article.url;
    title.className = 'link-primary';
    title.textContent = article.title;
    const lead = document.createElement('p');
    lead.textContent = article.text;
    section.append(imgContainer, number, title, lead);
    topArticlesContainer.appendChild(section);
  });
}

window.onload = () => {
  getMainArticle();
  getNewArticles();
  getTopArticles();
};
