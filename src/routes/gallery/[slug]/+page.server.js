import { galleryInformation } from "$lib/data.js";
export function load({ params }) {
  const card = galleryInformation.find((card) => card.slug === params.slug);
  return {
    card
  };
}