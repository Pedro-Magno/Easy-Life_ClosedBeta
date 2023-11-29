// src/helpers/masks.js
export const maskDate = (value) => {
    const formattedValue = value.replace(
      /(\d{2})(\d{2})(\d{4})/,
      function (_, month, day, year) {
        return `${day}/${month}/${year}`;
      }
    );
    return formattedValue;
  };
  
  export const maskTime = (value) => {
    const formattedValue = value.replace(
      /(\d{2})(\d{2})/,
      function (_, hour, minute) {
        return `${hour}:${minute}`;
      }
    );
    return formattedValue;
  };
  