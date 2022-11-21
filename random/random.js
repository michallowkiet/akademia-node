const randNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randString = (length) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let index = 0; index < length; index++) {
    randomString += chars.charAt(Math.floor(Math.random() * length));
  }

  return randomString;
};

const randomNumbersArray = (min, max, length) => {
  const randomNumbersArray = [];

  for (let index = 0; index < length; index++) {
    randomNumbersArray.push(randNumber(min, max));
  }

  return randomNumbersArray;
};

module.exports = {
  randNumber: randNumber,
  randArray: randomNumbersArray,
  randString: randString,
};
