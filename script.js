var isDate = function (input) {
  // Check if the input is a valid date object
  if (Object.prototype.toString.call(input) === '[object Date]' && !isNaN(input)) {
    return true;
  }
  
  // Check if the input is a string that can be parsed into a valid date
  if (typeof input === 'string') {
    const parsedDate = Date.parse(input);
    return !isNaN(parsedDate);
  }
  
  // Return false for other types of input
  return false;
};

// Example usage:
console.log(isDate(new Date())); // true
console.log(isDate("2023-08-11")); // true
console.log(isDate("not a date")); // false
