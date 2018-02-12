import Typed from 'typed.js';

function loadDynamicBannerText() {
  const bannerText = document.getElementById('banner-typed-text');
  if (bannerText) {
    new Typed('#banner-typed-text', {
      strings: [
      "La nouvelle Agence Digitale...",
      "Web et ...",
      "Intelligence Artificielle..."],
      typeSpeed: 100,
      loop: true
    });
  }
}

loadDynamicBannerText();

export { loadDynamicBannerText };


