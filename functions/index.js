const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.ping = functions.https.onRequest((request, response) => {
  let ip = request.ip || false
  let filteredIps = [
    '92.232.156.202', // Home
    '204.187.14.73', '204.187.14.74', '204.187.14.75', '204.187.14.76', '204.187.14.77' // GTMetrix
  ]
  if (!ip || !filteredIps.includes(ip)) {
    let date = new Date()
    admin.database().ref(`/visits/${ip.replace(/\./g, '_')}`).push({
      ip: ip,
      time: date.toLocaleString(),
      page: request.query.page
    })
  }
  return response.status(200).end();
});
