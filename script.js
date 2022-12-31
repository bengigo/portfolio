const burger = document.querySelector('#burger');
const menuContainer = document.querySelector('nav');
const menu = document.querySelector('#menu');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');
const portfolioContainer = document.querySelector('#works');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menuContainer.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('fixed');
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  burger.classList.remove('active');
  menuContainer.classList.remove('active');
  body.classList.remove('fixed');
}));

const worksData = [
  {
    title: 'Leaderboard',
    mobileImg: 'assets/works/desktop/leaderboard.png',
    desktopImg: 'assets/works/desktop/leaderboard.png',
    description:
      'A web app for you and your friends to add your scores of your favorite game -Terraria. Happy gaming!',
    tag1: 'HTML',
    tag2: 'CSS',
    tag3: 'JavaScript',
    tag4: 'Webpack',
    live: 'https://bengigo.github.io/leaderboard/',
    source: 'https://github.com/bengigo/leaderboard',
  },
  {
    title: 'Gastronomy Camp 2022',
    mobileImg: 'assets/works/mobile/gastronomy-events.png',
    desktopImg: 'assets/works/desktop/gastronomy-events.png',
    description:
      'A website to give information about a gastronomy-related camping event. You can find information about the program and speakers. Built with HTML-CSS-JavaScript',
    tag1: 'HTML',
    tag2: 'CSS',
    tag3: 'JavaScript',
    tag4: '',
    live: 'https://bengigo.github.io/gastronomy-camp-2022/',
    source: 'https://github.com/bengigo/gastronomy-camp-2022',
  },
  {
    title: 'To-Do List',
    mobileImg: 'assets/works/mobile/todo-list.png',
    desktopImg: 'assets/works/desktop/todo-list.png',
    description:
      'A ToDo List with a simple design. Ideal for keeping track of simple daily tasks.',
    tag1: 'HTML',
    tag2: 'CSS',
    tag3: 'JavaScript',
    tag4: 'Webpack',
    live: 'https://bengigo.github.io/to-do-list/',
    source: 'https://github.com/bengigo/to-do-list',
  },
  {
    title: 'Awesome Books',
    mobileImg: 'assets/works/mobile/awesome-books.png',
    desktopImg: 'assets/works/desktop/awesome-books.png',
    description:
      'A single page application to create a list of a book collection. Can be used to create a collection of read books. Or as a wishlist of books.',
    tag1: 'HTML',
    tag2: 'CSS',
    tag3: 'JavaScript',
    tag4: '',
    live: 'https://bengigo.github.io/awesome-books-modules/',
    source: 'https://github.com/bengigo/awesome-books-modules',
  },
];

worksData.forEach((work) => {
  const cardContainer = document.createElement('div');
  portfolioContainer.appendChild(cardContainer);
  cardContainer.classList.add('card-container');

  cardContainer.innerHTML = `

  <div class="img-container">
    <img class="work-img" src="${work.desktopImg}" alt="">
  </div>
  <h3>${work.title}</h3>

  <ul class="tags">
    <li>${work.tag1}</li>
    <li>${work.tag2}</li>
    <li>${work.tag3}</li>
    <li>${work.tag4}</li>
  </ul>
  `;
});

const bgColors = [
  '#66bfbf',
  '#a69ab1',
  '#9fd3c7',
  '#ea9085',
  '#c4c1e0',
  '#f8b595',
  '#c3bef0',
  '#29a19cb5',
  '#bbded6',
  '#719192',
];

const imgContainers = document.querySelectorAll('.img-container');
imgContainers.forEach((container, index) => {
  container.style.backgroundColor = bgColors[index];
});

const cardContainers = document.querySelectorAll('.card-container')
cardContainers.forEach((card) => {
  card.addEventListener('click', ()=> {
    // click on cards and open modal
    // create a container for details modal
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal');
    document.body.appendChild(modalContainer)
    modalContainer.innerHTML = `
    <p>hello</p>
    
    `
  })
})