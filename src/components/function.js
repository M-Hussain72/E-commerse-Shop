//  String.prototype.replaceWith = function (replace ,replacement){
//   const index
//  }

export function defaultVariant(variants) {
  const defVariant = variants.find((item) => item.is_default === true);
  return {
    color: defVariant.color || '',
    size: defVariant.size || '',
  };
}
export function mapObjectArrayToKeyArray(array, key) {
  const keyArray = array.map((item) => item[key]);
  // it convert the unique value of array
  return [...new Set(keyArray)];
}
