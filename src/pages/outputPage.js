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

  function getCoordinates(data) {
    const longitude = data.geo.lon;
    const latitude = data.geo.lat;
    console.log(longitude);
    console.log(latitude);
    return { longitude, latitude };
  }

  function getDonutShops(getCoordinates) {
    console.log(getCoordinates(data));
  }

  async function main() {
    try {
      const data = await fetchData(
        `https://postcode.tech/api/v1/postcode/full?postcode=${postcodeValue}&number=${numberValue}`,
        {
          headers: {
            Authorization: ,
          },
        }
      );
      const { longitude, latitude } = getCoordinates(data);
      const data2 = await fetchData(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/donut.json?type=poi&proximity=${longitude},${latitude}&access_token=
        `
      );
      console.log(data2);
    } catch (error) {
      console.log(error);
      console.log(err.stack);
    }
  }
  main();

  // const ulElement = document.createElement('ul');
  // const liElement = document.createElement('li');
  // userInterface.append(ulElement);

  // function getCoordinates(data) {
  //   ulElement.append(liElement);
  //   liElement.textContent = data.postcode;
  // }
  // document.getElementById(RETURN_BUTTON_ID).addEventListener('click', () => router(input));

  // const ul = document.querySelector('#resultsList');
  // const data2 = data.features;
  // data2.forEach((feature) => {
  //   const li = document.createElement('li');
  //   ul.append(li);
  //   li.innerHTML = feature.place_name;
};
