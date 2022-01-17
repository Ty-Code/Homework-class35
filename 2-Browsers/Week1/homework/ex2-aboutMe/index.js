'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/
const body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';

const ulElement = document.querySelector('ul');

ulElement.querySelector('#nickname').textContent = 'Gollum';
ulElement.querySelector('#fav-food').textContent = 'Raw fish';
ulElement.querySelector('#hometown').textContent = 'Middle-earth';

const liElements = ulElement.children;
[...liElements].forEach((liElement) => (liElement.className = 'list-item'));
