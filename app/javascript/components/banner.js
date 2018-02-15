import Typed from 'typed.js';

function loadDynamicBannerText() {
  const bannerText = document.getElementById('banner-typed-text');
  if (bannerText) {
    new Typed('#banner-typed-text', {
      strings: [
      "Want to go on vacation?...",
      "Without robbing the bank? ...",
      "We negotiate for you!"],
      typeSpeed: 100,
      loop: true
    });
  }
}

loadDynamicBannerText();

export { loadDynamicBannerText };


