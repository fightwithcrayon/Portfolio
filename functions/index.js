const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.ping = functions.https.onRequest((request, response) => {
  let ip = request.ip.toString()
  let filteredIps = [
    '92.232.156.202', // Home
    '51.52.173.110', // Work
    '204.187.14.73', '204.187.14.74', '204.187.14.75', '204.187.14.76', '204.187.14.77' // GTMetrix
  ]
  let date = new Date()
  let updates = {}

  if (!filteredIps.includes(ip)) {
    updates[`/log/${date}`] = {
      ip: ip,
      time: date.toLocaleString(),
      page: request.query.page
    }
    updates[`/visits/${ip.replace(/\./g, '_')}`] = {
      ip: ip,
      time: date.toLocaleString(),
      page: request.query.page
    }
  }
  admin.database().ref().update(updates);
  return response.status(200).end();
});
