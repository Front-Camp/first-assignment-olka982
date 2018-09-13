/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
 const sumElements = arr => {
   return arr.reduce((prev, curr) => {
     var check = parseFloat(curr) || Number(curr);
     if (typeof check == Number || !isFinite(check)) return prev;
     var check2 = parseFloat(prev) || Number(prev);
     if (typeof check2 == Number || !isFinite(check2)) return curr;
     return parseFloat(prev) + check;
   });
 };


export default sumElements;
