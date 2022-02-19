'use strict';
import { USER_INTERFACE_ID } from './constants.js';
import { initInputPage } from './pages/inputPage.js';
import { initOutputPage } from './pages/outputPage.js';

export const router = (page, postcodeValue, numberValue) => {
  const userInterfaceElement = document.getElementById(USER_INTERFACE_ID);
  userInterfaceElement.innerHTML = '';
  
  switch (page) {
    case 'input':
      initInputPage(userInterfaceElement);
      break;
    case 'output':
      initOutputPage(userInterfaceElement, postcodeValue, numberValue);
      break;
  }
};
