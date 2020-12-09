export const removeObjectbyKeyNameAndValue = (arr, keyName, keyVal) => {
  let arrCopy = arr;

  let arrWithRemovedData = arrCopy.filter(function(obj) {
    return obj[keyName] !== keyVal;
  });

  return arrWithRemovedData;
};
