// Select the HTML element with the ID 'currentDayOfTheWeek' and store it in the 'currentDay' variable
const currentDay = document.getElementById('currentDayOfTheWeek');

// Select the HTML element with the ID 'currentUTCTime' and store it in the 'utcTime' variable
const utcTime = document.getElementById('currentUTCTime');

// Create a new Date object to represent the current date and time
const date = new Date();

// Define options for formatting the day (in this case, the full weekday name)
const options = { weekday: 'long' };

// Format the current date to get the full weekday name and store it in the 'getCurrentDay' variable
const getCurrentDay = new Intl.DateTimeFormat('en', options).format(date);

// Get the current UTC time in milliseconds and store it in the 'getUTCTime' variable
const getUTCTime = date.getUTCMilliseconds();

// Set the text content of the 'currentDay' element to the formatted current day
currentDay.textContent = getCurrentDay;

// Set the text content of the 'utcTime' element to the current UTC time in milliseconds
utcTime.textContent = getUTCTime;
