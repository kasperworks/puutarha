import { createMedia } from '@artsy/fresnel';

const siteMedia = createMedia({
  breakpoints: {
    sm: 0,
    md: 500,
  },
});

// Make styles for injection into the header of the page
export const mediaStyles = siteMedia.createMediaStyle();

export const { Media, MediaContextProvider } = siteMedia;
