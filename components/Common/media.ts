export const breakpoints = {
    mobileS: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440

  };
  
  export const mediaQueriesMax = (key: keyof typeof breakpoints) => {
    return (style: TemplateStringsArray | String) =>
      `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
  };
  export const mediaQueriesMin = (key: keyof typeof breakpoints) => {
    return (style: TemplateStringsArray | String) =>
      `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
  };
  