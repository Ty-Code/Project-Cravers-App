'use strict';
import { getCoordinates } from "./pages/inputPage";

export async function fetchData(url) {
  const response = await fetch(url, {
    headers: {
      Authorization: '',
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