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
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
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
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
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
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
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
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    ghBadge: 'github',
    bootstrapBadge: 'Bootstrap',
    modalButton1Text: 'See live',
    modalButton1Icon: '',
    modalButton2Text: 'See Source',
    modalButton2Icon: '',
  },
];
