import { speedQueensData } from "./speedQueensData.js";

export const fetchSpeedQueensData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(speedQueensData);
    }, 200); 
  });
};
