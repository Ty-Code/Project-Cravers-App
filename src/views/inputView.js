'use strict';

import { SELECT_ELEMENT_ID } from '../constants.js';
import { POSTCODE_INPUT_ID } from '../constants.js';
import { NUMBER_INPUT_ID } from '../constants.js';
import { GET_BUTTON_ID } from '../constants.js';

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

export const getInputElement = () => {
  const outerBoxElement = document.createElement('div');

  outerBoxElement.classList.add('centered');

  outerBoxElement.innerHTML = `
    <label class="label">CRAVING FOR :</label>
    <select class="input" id="${SELECT_ELEMENT_ID}" name="foodType">
        <option class="option" value="">Select…</option>
        <option class="option" value="pizza">Pizza</option>
        <option class="option" value="donut">Donut</option>
        <option class="option" value="chocolate">Chocolate</option>
    </select>
    
    <label class="label" for="postcode">POSTCODE :</label>
    <input class="input" type="text" id="${POSTCODE_INPUT_ID}" name="postcode" required minlength="4" maxlength="6" size="10" value='2031VT' placeholder="Enter your postcode">

    <label class="label" for="number">HOUSE NUMBER :</label>
    <input class="input" type="text" id="${NUMBER_INPUT_ID}" name="number" required minlength="1" maxlength="4" size="10" placeholder="Enter your house number">

    <button id="${GET_BUTTON_ID}" class="btn" type="submit">
      SATISFY!
    </button>
  `;

  return outerBoxElement;
};
