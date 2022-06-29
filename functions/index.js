const functions = require('firebase-functions');

const {getAllScreem, postScreem} = require('./handlers/screem');
const {signUp, logIn, upload} = require('./Handlers/user');

const express = require('express');
const app = express();

const FBAuth = require('./utility/fbAuth');

app.get('/screem', getAllScreem);
app.post('/screem', FBAuth, postScreem);

app.post('/signup', signUp);
app.post('/login', logIn);
app.post('/user/image', FBAuth, upload);

exports.api = functions.https.onRequest(app);
