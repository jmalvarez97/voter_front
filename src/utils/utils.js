const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const equalsCheck = (a, b) => a.every((v, i) => v === b[i]);

export const isDarkColor = (conj, c) => {
  let dark = false;
  conj.forEach((element) => {
    if (equalsCheck(element, c)) dark = true;
  });
  return dark;
};

export const sorted = (obj) => Object.fromEntries(Object.entries(obj).sort(([, a], [, b]) => b - a));

export const randomClubsSelected = (clubes) =>
  clubes.reduce(() => {
    let rand1 = randomNumberInRange(1, clubes.length),
      rand2;
    do {
      rand2 = randomNumberInRange(1, clubes.length);
    } while (rand1 === rand2);

    return [clubes[rand1], clubes[rand2]];
  });


