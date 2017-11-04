'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello worldddd\n');
});

app.post('/actions', (req, res) => {
  const response = "This is a sample response from your webhook!" //Default response from the webhook to show it's working
  
    res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
    res.send(JSON.stringify({ "speech": response, "displayText": response 
    //"speech" is the spoken version of the response, "displayText" is the visual version
    }));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
