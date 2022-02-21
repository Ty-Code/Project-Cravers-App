import { router } from '../router.js';
import { getOutputElement } from '../views/outputView.js';
import { getHeaderElement } from '../views/outputView.js';
import { RESULT_LIST_ID } from '../constants.js';
import { RETURN_BUTTON_ID } from '../constants.js';

export const initOutputPage = (userInterface, foodType, postcodeValue, numberValue) => {
  const headerElement = getHeaderElement();
  userInterface.append(headerElement);

  const outputElement = getOutputElement();
  userInterface.append(outputElement);

  async function fetchData(url, obj) {
    const response = await fetch(url, obj);
    if (!response.ok) {
      throw new Error('HTTP Error!');
    }
    return response.json();
  }

  function getShops(shopList) {
    const ulElement = document.getElementById(RESULT_LIST_ID);

    shopList.forEach((shop) => {
      const liElement = document.createElement('li');
      ulElement.append(liElement);
      liElement.innerHTML = shop.place_name;
      liElement.classList.add('results')
    });
  }

  async function main() {
    try {
      const {
        geo: { lon: longitude, lat: latitude },
      } = await fetchData(
        `https://postcode.tech/api/v1/postcode/full?postcode=${postcodeValue}&number=${numberValue}`,
        {
          headers: {
            Authorization: 'Bearer 18bf0711-9335-44f9-ab93-23ce2ac046d1',
          },
        }
      );
      const { features: shopList } = await fetchData(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${foodType}.json?type=poi&proximity=${longitude},${latitude}&access_token=pk.eyJ1IjoidHljb2RlMCIsImEiOiJja3pxeHBibW4wZXo3MnBtdWRoNnM2MGVkIn0.dN90GyHPEtOSnMq3s5beQA
        `
      );
      getShops(shopList);
    } catch (error) {
      console.log(error);
      console.log(err.stack);
    }
  }
  main();
};
