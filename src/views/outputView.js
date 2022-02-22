'use strict';

import { RESULT_LIST_ID } from '../constants.js';
import { MAP_IMG_ID } from '../constants.js';
import { INVALID_MSG_ID } from '../constants.js';
import { RESTART_BUTTON_ID } from '../constants.js';

export const getHeaderElement = () => {
  const headerElement = document.createElement('div');
  const header1Element = document.createElement('div');
  const header2Element = document.createElement('div');

  headerElement.append(header1Element, header2Element);

  header1Element.classList.add('header1');
  header2Element.classList.add('header2');

  header1Element.innerHTML = `
  <h1 id="h1" >What are you craving for?</h1>
  `;

  header2Element.innerHTML = `
  <img id="logo" src="./img/logo_donutCrave.png">

  `;

  return headerElement;
};

export const getOutputElement = () => {
  const outerBoxElement = document.createElement('div');

  outerBoxElement.classList.add('centered');

  outerBoxElement.innerHTML = `
    <ul id="${RESULT_LIST_ID}"></ul>
    <img id="${MAP_IMG_ID}">
    <p style="display:none;" id="${INVALID_MSG_ID}"></p>
    <button id="${RESTART_BUTTON_ID}" class="btn">
    NEW CRAVE
  </button>

  `;

  return outerBoxElement;
};
