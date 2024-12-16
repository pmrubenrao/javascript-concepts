function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    const newkey = parentKey ? `${parentKey}.${key}` : key;
    if (
      typeof obj[key] === 'object' &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      flattenObject(obj[key], newkey, result);
    } else {
      result[newkey] = obj[key];
    }
  }
  return result;
}

const nestedObject = {
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'New York',
    location: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
  hobbies: ['reading', 'gaming'],
};

console.log(flattenObject(nestedObject));
