import sanityClient from '../sanity_ecommerce/node_modules/@sanity/client';
import imageUrlBuilder from '../sanity_ecommerce/node_modules/@sanity/image-url';

export const client = sanityClient({
    projectId: 'vr7wzmx0',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)