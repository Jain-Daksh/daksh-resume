import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = sanityClient({
  // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  // dataset: 'production',
  // apiVersion: '2022-11-25',
  // useCdn: true,
  // token: process.env.REACT_APP_SANITY_PROJECT_TOKEN,
  projectId: "c3u22cjz",
  dataset: 'production',
  apiVersion: '2022-11-25',
  useCdn: true,
  token: "skFd8qlnMuHG03jCDvG2Jz2NPhNKASKYJ3D9Ci6CfEfx0VlryxYFJmr3pun94ie3iDBlX6TOplOTZKmi7LkOZeKJOq7QDSshK64RVQphxuRzJyYs6KiDe2OR6ARKfD8Ks4SoC6DT4SDMDfd9xlfRm8v0qV2OTQlHyE39YkuVyuELs9ohvauV",
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);