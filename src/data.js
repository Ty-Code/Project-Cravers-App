'use strict';


// const API_KEY1 = process.env.API_KEY_POSTCODETECH;

export async function fetchData(url) {
  const response = await fetch(url, {
    headers: {
      Authorization: API_KEY1,
    },
  });
  if (!response.ok) {
    throw new Error('HTTP Error!');
  }
  return response.json();
}

