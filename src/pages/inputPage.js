import { router } from '../router.js';
import { GET_BUTTON_ID } from '../constants.js';
import { getInputElement } from '../views/inputView.js';

export const initInputPage = (userInterface) => {
  const inputElement = getInputElement();
  userInterface.append(inputElement);

  document.getElementById(GET_BUTTON_ID).addEventListener('click', () => router(output));
};
