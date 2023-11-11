export const ApiCall = (link) =>
  fetch(link).then((response) => response.json());
