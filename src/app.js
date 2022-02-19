'use strict';
import { router } from './router.js';

const loadApp = () => {
  router('input');
};

window.addEventListener('load', loadApp);


