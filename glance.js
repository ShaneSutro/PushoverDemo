require('dotenv').config();
const fetch = require('node-fetch');

const data = {
    token: process.env.PO_KEY, // Fill this out in .env_template
    user: process.env.USER_KEY, // Don't forget to change the name from .env_template to .env
    title: 'Averaging 8:54', // Line 1
    text: 'Rolling 5 day: 48:12', // Line 2
    subtext: 'Worked 8:24 today', // Line 3
    count: 48, // Dial inner number
    percent: 82.5 // Dial outer gauge
}

fetch(process.env.GLANCE_URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json'}
})
    .then(res => console.log(res.JSON)) //{"status":1,"request":"5135d73e-de3d-4458-b79c-b3b2a9ef6c40"}
    .catch(err => console.log(err)) // {"status":0 "request":"7903bd1b-6aa2-43e6-9c1c-bb5ccea848f1", "errors":[ "application token is invalid" ]}