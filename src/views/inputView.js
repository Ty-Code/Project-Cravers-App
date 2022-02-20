'use strict';

import { POSTCODE_INPUT_ID } from '../constants.js';
import { NUMBER_INPUT_ID } from '../constants.js';
import { GET_BUTTON_ID } from '../constants.js';

export const getHeaderElement = () => {
  const headerElement = document.createElement('div');
  const header1Element = document.createElement('div');
  const header2Element = document.createElement('div');

  headerElement.append(header1Element, header2Element)
  
  header1Element.classList.add('header1');
  header2Element.classList.add('header2');
  

  header2Element.innerHTML = `
    <img id="logo" src="./img/logo_donutCrave.png">

  `;

  return headerElement;
};

export const getInputElement = () => {
  const headerElement = document.createElement('div');
  const outerBoxElement = document.createElement('div');

  headerElement.classList.add('header');

  outerBoxElement.classList.add('centered');

  outerBoxElement.innerHTML = `
    <label for="postcode">Your Postcode:</label>
    <input type="text" id="${POSTCODE_INPUT_ID}" name="postcode" required minlength="4" maxlength="6" size="10" value='2031VT'>

    <label for="number">Number:</label>
    <input type="text" id="${NUMBER_INPUT_ID}" name="number" required minlength="1" maxlength="4" size="10">

    <button id="${GET_BUTTON_ID}" class="btn">
      GET THE GPS COORDINATES!
    </button>
  `;

  return outerBoxElement;
};
