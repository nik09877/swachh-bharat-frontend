export const validateCoordinates = (lat, lng) => {
  // Regular expressions to validate latitude and longitude
  const latPattern = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/;
  const lngPattern = /^-?((1?[0-7]?|[0-9]?)[0-9]|180)\.{1}\d{1,6}/;

  const isLatValid = latPattern.test(lat);
  const isLngValid = lngPattern.test(lng);

  return isLatValid && isLngValid;
};

export const BASE_URL = 'http://localhost:8081/';
