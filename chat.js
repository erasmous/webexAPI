// const axios = require('axios');

// // Replace 'YOUR_ACCESS_TOKEN' with your actual access token
// const accessToken = 'YjZmNzkwYWItZTBiZC00YWMzLWE5YTQtM2FmNjAwNmNjNGI4M2MyYzQ3MWEtZmFh_PF84_54e0fe29-9174-4d80-a3a0-e4bf429e9d3d';

// // The message you want to send
// const message = {
//   roomId: 'Y2lzY29zcGFyazovL3VzL1JPT00vYzk1ZWY3ZTAtMWM2ZC0xMWVjLThkNjAtNDMyY2FkYmQ4ZDY2', // Replace with the room ID where you want to send the message
//   text: '🍌🍌🍌',
// };

// // Define the API endpoint
// const apiUrl = 'https://api.ciscospark.com/v1/messages';

// // Set up the headers with your access token
// const headers = {
//   Authorization: `Bearer ${accessToken}`,
//   'Content-Type': 'application/json',
// };

// // Send the message
// axios.post(apiUrl, message, { headers })
//   .then(response => {
//     console.log('Message sent successfully:', response.data);
//   })
//   .catch(error => {
//     console.error('Error sending message:', error);
//   });

const axios = require('axios');

// Replace 'YOUR_ACCESS_TOKEN' with your actual access token
const accessToken = 'YTAyN2ViNDMtNTUwYi00Yjc5LThjYTUtYWQxZWEzZGM5YzVjZWM0MDE2N2UtZjli_PF84_54e0fe29-9174-4d80-a3a0-e4bf429e9d3d';

// The message you want to send
const message = {
  roomId: 'Y2lzY29zcGFyazovL3VzL1JPT00vYzk1ZWY3ZTAtMWM2ZC0xMWVjLThkNjAtNDMyY2FkYmQ4ZDY2', // Replace with the room ID where you want to send the message
  text: 'GG Well Played Team!!!',
};

// Define the API endpoint
const apiUrl = 'https://api.ciscospark.com/v1/messages';

// Set up the headers with your access token
const headers = {
  Authorization: `Bearer ${accessToken}`,
  'Content-Type': 'application/json',
};

// Set the target time to run the code (24-hour format, e.g., 14:30)
const targetHour = 5; // Hour (0-23)
const targetMinute = 59; // Minute (0-59)

// Calculate the target time in milliseconds since midnight
const now = new Date();
const targetTime = new Date(now);
targetTime.setHours(targetHour, targetMinute, 0, 0);
const targetTimeMs = targetTime.getTime();

// Calculate and display the remaining hours
function displayRemainingHours() {
  const currentTime = new Date().getTime();
  const remainingMs = targetTimeMs - currentTime;
  const remainingHours = Math.max(remainingMs / 3600000, 0); // 3600000 ms = 1 hour

  if (remainingHours <= 0) {
    console.log('It\'s time to run the code!');
    clearInterval(timer); // Stop the countdown when it's time

    // Send the message when it's time to run the code
    axios.post(apiUrl, message, { headers })
      .then(response => {
        console.log('Message sent successfully:', response.data);
      })
      .catch(error => {
        console.error('Error sending message:', error);
      });

  } else {
    console.log(`Remaining hours until code execution: ${remainingHours.toFixed(2)} hours`);
  }
}

// Run the displayRemainingHours function every minute (adjust the interval as needed)
const timer = setInterval(displayRemainingHours, 60000); // 60000 ms = 1 minute

// Initial display
displayRemainingHours();

// At this point, the countdown timer will run, and the code will execute when the target time is reached.
