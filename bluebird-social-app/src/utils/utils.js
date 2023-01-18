//this function creates a key value data according to how many times a data occurs the passed flat array
const objectBuilder = (arr) => {
  const obj = {};
  for (const tag of arr) {
    if (obj[tag] !== undefined) {
      obj[tag] = obj[tag] + 1;
    } else {
      obj[tag] = 1;
    }
  }
  return obj;
};

//creazione array
const hofArrBuilder = (flatArr) => {};

const arrBuilder = (flatArr) => {
  const newArr = [];
  for (let i = 0; i < flatArr.length; i++) {
    if (newArr.length === 0) {
      newArr.push([flatArr[i], 1]);
    }
    for (let j = 1; j <= newArr.length; j++) {
      //console.log(i, j, newArr[j - 1]);
      if (flatArr[i] === newArr[j - 1][0]) {
        newArr[j - 1][1] = newArr[j - 1][1] + 1;
        break;
      }
      if (j === newArr.length && flatArr[i] !== newArr[j - 1][0]) {
        //creo nuovo el dentro newArr
        newArr.push([flatArr[i], 1]);
      }
    }
  }
  return newArr;
};

//this function create a filtered array given a big obj and the key we're going to filter for

export const filterTag = (data, query) => {
  const myArr = data.map((item) => {
    const isPresent = item[query];
    if (!isPresent || !Array.isArray(isPresent)) return [];
    return item[query];
  });
  //console.log(myArr.flat());
  return arrBuilder(myArr.flat());
};
