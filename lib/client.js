import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanityToken = process.env.NEXT_PUBLIC_SANITY_TOKEN;

export const client = sanityClient({
  projectId: "n2fum21s",
  dataset: "production",
  apiVersion: "2022-10-23",
  useCdn: true,
  token: sanityToken,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
