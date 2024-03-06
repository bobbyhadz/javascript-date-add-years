// EXAMPLE 1 - Add Year(s) to a Date in JavaScript

function addYears(date, years) {
  date.setFullYear(date.getFullYear() + years);

  return date;
}

// ✅ Add years to the current date
const result1 = addYears(new Date(), 2);
console.log(result1); // 👉️ 2025-07-28T08:14:44.137Z

// // ----------------------------------------------

// // ✅ Add years to a different date
// const date = new Date('2023-07-21T00:00:00.000Z');

// const result2 = addYears(date, 5);
// console.log(result2); // 👉️ 2028-07-21T00:00:00.000Z

// ------------------------------------------------------------------

// // EXAMPLE 2 - Add Year(s) to a Date without mutation

// function addYears(date, years) {
//   const dateCopy = new Date(date);

//   dateCopy.setFullYear(date.getFullYear() + years);

//   return dateCopy;
// }

// const date = new Date('2023-07-21T00:00:00.000Z');

// const result = addYears(date, 5);
// console.log(result); // 👉️ 2028-07-21T00:00:00.000Z

// console.log(date); // 👉️ 2023-07-21T00:00:00.000Z

// ------------------------------------------------------------------

// // EXAMPLE 3 - Add Year(s) to a Date using date-fns

// import {addYears} from 'date-fns';

// const date = new Date('2023-07-21T00:00:00.000Z');

// // ✅ Add 1 year to date
// const result1 = addYears(date, 1);
// console.log(result1); // 👉️ 2024-07-21T00:00:00.000Z

// // ✅ Add 2 years to date
// const result2 = addYears(date, 2);
// console.log(result2); // 👉️ 2025-07-21T00:00:00.000Z

// console.log(date); // 👉️ 2023-07-21T00:00:00.000Z

// ------------------------------------------------------------------

// // EXAMPLE 4 -  Add Year(s) to a Date using moment.js

// import moment from 'moment';

// const date = new Date('2023-07-21T00:00:00.000Z');

// // ✅ Add 1 year to date
// const result1 = moment(date).add(1, 'years');
// console.log(result1); // 👉️ 2024-07-21T00:00:00.000Z

// // ✅ Add 2 years to date
// const result2 = moment(date).add(2, 'years');
// console.log(result2); // 👉️ 2025-07-21T00:00:00.000Z

// console.log(date); // 👉️ 2023-07-21T00:00:00.000Z
