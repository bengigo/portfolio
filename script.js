const burger = document.querySelector('#burger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-links');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  body.classList.toggle('fixed');
});

mobileLinks.forEach((link) => link.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  body.classList.toggle('fixed');
}));

// array to hold projects and modal data
const worksInfo = [
  {
  // project 1
    cardDisplay: 'cards work1',
    workImgMobile: 'images/works/mobile-w1.svg',
    workImgDesktop: 'images/works/desktop-w1.svg',
    workTitle: 'Tonic',
    company: 'CANOPY',
    jobTitle: 'Back End Dev',
    year: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    htmlBadge: 'html',
    rubyBadge: 'ruby',
    cssBadge: 'css',
    jsBadge: 'javaScript',
    buttonText: 'See Project',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ghBadge: 'github',
    bootstrapBadge: 'Bootstrap',
    modalButton1Text: 'See live',
    modalButton1Icon: '',
    modalButton2Text: 'See Source',
    modalButton2Icon: '',
  },
  {
    // project 2
    cardDisplay: 'cards reverse-cards work2',
    workImgMobile: 'images/works/mobile-w2.svg',
    workImgDesktop: 'images/works/desktop-w2.svg',
    workTitle: 'Multi-Post Stories',
    company: 'facebook',
    jobTitle: 'Full Stack Dev',
    year: '2015',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    htmlBadge: 'html',
    rubyBadge: 'ruby',
    cssBadge: 'css',
    jsBadge: 'javaScript',
    buttonText: 'See Project',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ghBadge: 'github',
    bootstrapBadge: 'Bootstrap',
    modalButton1Text: 'See live',
    modalButton1Icon: '',
    modalButton2Text: 'See Source',
    modalButton2Icon: '',
  },
  {
    // project 3
    cardDisplay: 'cards work3',
    workImgMobile: 'images/works/mobile-w3.svg',
    workImgDesktop: 'images/works/desktop-w3.svg',
    workTitle: 'Facebook 360',
    company: 'FACEBOOK',
    jobTitle: 'Full Stack Dev',
    year: '2015',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    htmlBadge: 'html',
    rubyBadge: 'ruby',
    cssBadge: 'css',
    jsBadge: 'javaScript',
    buttonText: 'See Project',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ghBadge: 'github',
    bootstrapBadge: 'Bootstrap',
    modalButton1Text: 'See live',
    modalButton1Icon: '',
    modalButton2Text: 'See Source',
    modalButton2Icon: '',
  },

  {
    // project 4
    cardDisplay: 'cards reverse-cards work4',
    workImgMobile: 'images/works/mobile-w4.svg',
    workImgDesktop: 'images/works/desktop-w4.svg',
    workTitle: 'Uber Navigation',
    company: 'Uber',
    jobTitle: 'Lead Developer',
    year: '2018',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    htmlBadge: 'html',
    rubyBadge: 'ruby',
    cssBadge: 'css',
    jsBadge: 'javaScript',
    buttonText: 'See Project',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    ghBadge: 'github',
    bootstrapBadge: 'Bootstrap',
    modalButton1Text: 'See live',
    modalButton1Icon: '',
    modalButton2Text: 'See Source',
    modalButton2Icon: '',
  },
];

const worksSection = document.querySelector('#works');

// need to create html for  cards
Array.from(worksSection.children).forEach((child, index) => {
  child.innerHTML = `
  <div class="${worksInfo[index].cardDisplay}">
    <div class="card-image">
      <img class="work-img mobile" src="${worksInfo[index].workImgMobile}" alt="">
      <img class="work-img desktop" src="${worksInfo[index].workImgDesktop}" alt="">
    </div>
    <div class="card-text">
      <h3>${worksInfo[index].workTitle}</h3>
      <ul class="job">
        <li class="company">${worksInfo[index].company}</li>
        <li class="counter"><img src="images/counter.png" alt=""></li>
        <li class="job-title">${worksInfo[index].jobTitle}</li>
        <li class="counter"><img src="images/counter.png" alt=""></li>
        <li class="year">${worksInfo[index].year}</li>
      </ul>
      <p class="work-info">${worksInfo[index].description}</p>
      <ul class="tags">
        <li class="html tag">${worksInfo[index].htmlBadge}</li>
        <li class="ruby tag">${worksInfo[index].rubyBadge}</li>
        <li class="css tag">${worksInfo[index].cssBadge}</li>
        <li class="js tag">${worksInfo[index].jsBadge}</li>
      </ul>
      <button class="btn btn-project" id="${[index]}">${worksInfo[index].buttonText}</button>
    </div>
  </div>
 `;
});

// modal
const seeProject = document.querySelectorAll('.btn-project');
seeProject.forEach((element) => {
  // open and display modal when you click on project button
  element.addEventListener('click', () => {
    const modalContainer = document.createElement('section');
    modalContainer.classList.add('modal-container');
    modalContainer.innerHTML = `
    <section class="modal">
       
        <div class="modal-header">
          <h3>${worksInfo[element.id].workTitle}</h3>
          <img class="close" src="images/close.svg" alt="">
        </div>
        <ul class="job">
          <li class="company">${worksInfo[element.id].company}</li>
          <li class="counter"><img src="images/counter.png" alt=""></li>
          <li class="job-title">${worksInfo[element.id].jobTitle}</li>
          <li class="counter"><img src="images/counter.png" alt=""></li>
          <li class="year">${worksInfo[element.id].year}</li>
        </ul>
        <div class="modal-image">
        <img class="modal-img mobile" src="${worksInfo[element.id].workImgMobile}" alt="">
        <img class="modal-img desktop" src="${worksInfo[element.id].workImgDesktop}" alt="">
      </div>
        <div class="modal-card-text">
          <p class="modal-work-info">${worksInfo[element.id].modalDescription}</p>
          <div class="tags-buttons">
            <ul class="modal-tags">
              <li class="modal-html tag">${worksInfo[element.id].htmlBadge}</li>
              <li class="modal-css tag">${worksInfo[element.id].cssBadge}</li>
              <li class="modal-js tag">${worksInfo[element.id].jsBadge}</li>
            </ul>
            <ul class="modal-tags">
              <li class="modal-gh tag">${worksInfo[element.id].ghBadge}</li>
              <li class="modal-ruby tag">${worksInfo[element.id].rubyBadge}</li>
              <li class="modal-bootstrap tag">${worksInfo[element.id].bootstrapBadge}</li>
            </ul>
            <div class="modal-buttons">
              <a class="live-link" href=""><button class="live modal-btn">See Live <img class="btn-image" src="images/live.png" alt="Live Preview"></button></a>
              <a class="source-link" href=""><button class="source modal-btn">See Source <img class="btn-image" src="images/source.svg" alt="Source Code"></button></a>
            </div>
          <div>
        </div>
       
    </section>
    `;
    document.body.appendChild(modalContainer);
    // modalContainer.showModal();

    // close modal
    const closeButtons = document.querySelectorAll('.close');

    closeButtons.forEach((el) => {
      el.addEventListener('click', () => {
        modalContainer.classList.add('hide');
      });
    });

    // closeButtons.forEach((el) => {
    //   el.addEventListener('click', () => {
    //     modalContainer.close();
    //   });
    // });
  });
});

const form = document.querySelector('#form');
const email = document.querySelector('#user-email');
const error = document.querySelector('#error-msg');

error.style.visibility = 'hidden';


form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    error.style.visibility = 'visible';
    error.innerHTML = 'Email can only contain lowercase letters.';
    setTimeout(() => {
      error.style.visibility = 'hidden';
    }, 4000);
  } else {
    error.style.visibility = 'hidden';
  }
});