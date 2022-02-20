import { router } from '../router.js';
import { RETURN_BUTTON_ID } from '../constants.js';

export const initOutputPage = (userInterface, postcodeValue, numberValue) => {
  async function fetchData(url, obj) {
    const response = await fetch(url, obj);
    if (!response.ok) {
      throw new Error('HTTP Error!');
    }
    return response.json();
  }

  function getDonutShops(shopList) {
    const ulElement = document.createElement('ul');
    userInterface.append(ulElement);

    shopList.forEach((shop) => {
      const liElement = document.createElement('li');
      ulElement.append(liElement);
      liElement.innerHTML = shop.place_name;
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
            Authorization: '',
          },
        }
      );
      const { features: shopList } = await fetchData(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/donut.json?type=poi&proximity=${longitude},${latitude}&access_token=
        `
      );
      getDonutShops(shopList);
    } catch (error) {
      console.log(error);
      console.log(err.stack);
    }
  }
  main();
};
