import { router } from '../router.js';
import { GET_BUTTON_ID } from '../constants.js';
import { SELECT_ELEMENT_ID } from '../constants.js';
import { POSTCODE_INPUT_ID } from '../constants.js';
import { NUMBER_INPUT_ID } from '../constants.js';
import { getInputElement } from '../views/inputView.js';
import { getHeaderElement } from '../views/inputView.js';

export const initInputPage = (userInterface) => {
  const headerElement = getHeaderElement();
  userInterface.append(headerElement);

  const inputElement = getInputElement();
  userInterface.append(inputElement);
  
  let foodType;
  const selectElement = document.getElementById(SELECT_ELEMENT_ID);
  selectElement.addEventListener('change', (e) => {
    foodType = e.target.value;
  });

  document.getElementById(GET_BUTTON_ID).addEventListener('click', () => {
    const postcodeValue = document.getElementById(POSTCODE_INPUT_ID).value;
    const numberValue = document.getElementById(NUMBER_INPUT_ID).value;
    router('output', foodType, postcodeValue, numberValue);
  });
};
