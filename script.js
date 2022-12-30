const burger = document.querySelector("#burger");
const menuContainer = document.querySelector("nav");
const menu = document.querySelector("#menu");
const navLinks = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");
const portfolioContainer = document.querySelector("#works");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menuContainer.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("fixed");
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    menuContainer.classList.remove("active");
    body.classList.remove("fixed");
  })
);

const worksData = [
  {
    title: "Leaderboard",
    mobileImg: "",
    desktopImg: "assets/works/desktop/leaderboard.png",
    description:
      "A web app for you and your friends to add your scores of your favorite game -Terraria. Happy gaming!",
    badge1: "HTML",
    badge2: "CSS",
    badge3: "JavaScript",
    badge4: "Webpack",
    live: "https://bengigo.github.io/leaderboard/",
    source: "https://github.com/bengigo/leaderboard",
  },
  {
    title: "Gastronomy Camp 2022",
    mobileImg: "assets/works/mobile/gastronomy-events.png",
    desktopImg: "assets/works/desktop/gastronomy-events.png",
    description:
      "A website to give information about a gastronomy-related camping event. You can find information about the program and speakers. Built with HTML-CSS-JavaScript",
    badge1: "HTML",
    badge2: "CSS",
    badge3: "JavaScript",
    badge4: "",
    live: "https://bengigo.github.io/gastronomy-camp-2022/",
    source: "https://github.com/bengigo/gastronomy-camp-2022",
  },
  {
    title: "Why Am I Poor",
    mobileImg: "assets/works/mobile/why-am-i-poor.png",
    desktopImg: "",
    description:
      '"Why am I poor?" is the question you ask yourself every month, and this application is here to help you get an answer. You can create a private account, your expenses are only visible to you. Start by creating groups of your usual expenses (e.g "Bills", "Kitchen"...) and adding single expenses belong to your chosen group.',
    badge1: "Ruby on Rails",
    badge2: "PostgreSQL",
    badge3: "CSS",
    badge4: "",
    live: "https://why-am-i-poor.onrender.com/",
    source: "https://github.com/bengigo/why-am-i-poor",
  },
  {
    title: "To-Do List",
    mobileImg: "assets/works/mobile/todo-list.png",
    desktopImg: "assets/works/desktop/todo-list.png",
    description:
      "A ToDo List with a simple design. Ideal for keeping track of simple daily tasks.",
    badge1: "HTML",
    badge2: "CSS",
    badge3: "JavaScript",
    badge4: "Webpack",
    live: "https://bengigo.github.io/to-do-list/",
    source: "https://github.com/bengigo/to-do-list",
  },
  {
    title: "Awesome Books",
    mobileImg: "assets/works/mobile/awesome-books.png",
    desktopImg: "assets/works/desktop/awesome-books.png",
    description:
      "A single page application to create a list of a book collection. Can be used to create a collection of read books. Or as a wishlist of books.",
    badge1: "HTML",
    badge2: "CSS",
    badge3: "JavaScript",
    badge4: "",
    live: "https://bengigo.github.io/awesome-books-modules/",
    source: "https://github.com/bengigo/awesome-books-modules",
  },
];

