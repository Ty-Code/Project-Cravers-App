'use strict';

import { POSTCODE_INPUT_ID } from '../constants.js';
import { NUMBER_INPUT_ID } from '../constants.js';
import { GET_BUTTON_ID } from '../constants.js';

export const getInputElement = () => {
  const outerBoxElement = document.createElement('div');

  outerBoxElement.classList.add('centered');

  outerBoxElement.innerHTML = `
    <h1>Donut Crave</h1>

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
