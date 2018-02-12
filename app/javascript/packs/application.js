/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

//console.log('Hello World from Webpacker')

// application.js (require bootstrap AFTER jquery)
//= require jquery
//= require bootstrap-sprockets

import "bootstrap";
import '../components/aos';
import { loadDynamicBannerText } from '../components/banner';
import '../components/numscroller-1.0';
import '../components/modal.js';
import '../components/carousel.js';





