import { galleryInformation } from "../../../lib/data.js";

export function load({params}) {
  const post = galleryInformation.find((post) => post.slug === params.slug);
  return {
    post
  };
}