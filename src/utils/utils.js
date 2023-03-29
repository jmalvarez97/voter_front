const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const equalsCheck = (a, b) => a.every((v, i) => v === b[i]);

const isDarkColor = (conj, c) => {
  let dark = false;
  conj.forEach((element) => {
    if (equalsCheck(element, c)) dark = true;
  });
  return dark;
};

const sorted = (obj) => Object.fromEntries(Object.entries(obj).sort(([, a], [, b]) => b - a));


module.exports = {
    randomNumberInRange, 
    equalsCheck,
    isDarkColor,
    sorted
}