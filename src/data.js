'use strict';
import { getCoordinates } from "./pages/inputPage";

export async function fetchData(url) {
  const response = await fetch(url, {
    headers: {
      Authorization: 'Bearer 18bf0711-9335-44f9-ab93-23ce2ac046d',
    },
  });
  if (!response.ok) {
    throw new Error('HTTP Error!');
  }
  return response.json();
}

export async function main() {
  try {
    const data = await fetchData(
      'https://postcode.tech/api/v1/postcode/full?postcode=2031VT&number=7'
    );
    getCoordinates(data);
  } catch (error) {
    console.log(error);
    console.log(err.stack)
  }
}