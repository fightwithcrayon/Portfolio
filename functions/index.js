const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.ping = functions.https.onRequest((request, response) => {
  let date = new Date()
  return admin.database().ref(`/visits/${request.ip.replace(/\./g, '_')}`).push({
    ip: request.ip,
    time: date.toLocaleString(),
    page: request.query.page
  }).then(() => {
    return response.status(200).end();
  });
});
