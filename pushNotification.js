/*
**
** Thanks for checking out the demo!
** Before getting started, be sure to run `npm install` from the root directory
** (This project only has 2 dependencies - node-fetch and dotenv)
**
** Once done, replace the placeholder text 
** inside of `.env_template` with your own
** Pushover API key and your userKey (found in the Pushover app)
** and change the file name from `.env_template` to `.env`
** so dotenv can find it.
**
** Feel free to play around with the different settings below!
** To run it, simply run `npm run push` from the command line
**
** Official documentation can be found at https://pushover.net/api
*/


/* Push Notification Demo */

require('dotenv').config();
const fetch = require('node-fetch');

const data = {
    token: process.env.PO_KEY, // Fill this out in .env_template
    user: process.env.USER_KEY, // Don't forget to change the name from .env_template to .env
    title: 'Backup Complete!',
    message: `Backup of database "transaction_history" was completed at ${new Date()}`
}

const colorful = {
    token: process.env.PO_KEY, // Fill this out in .env_template
    user: process.env.USER_KEY, // Don't forget to change the name from .env_template to .env
    html: 1,
    title: 'Backup Complete!',
    message: `Backup of database <i>"transaction_history"</i> was completed at <font color="#02b6ed">${new Date()}</font>`
}

const mono = {
    token: process.env.PO_KEY, // Fill this out in .env_template
    user: process.env.USER_KEY, // Don't forget to change the name from .env_template to .env
    monospace: 1,
    title: 'Backup Complete!',
    message: `Backup of database 4  complete\nBackup of database 18 complete\nBackup of database 9  complete`
}

fetch(process.env.PUSH_URL, {
    method: 'POST',
    body: JSON.stringify(data), //replace with 'colorful' or 'mono' to see other options
    headers: { 'Content-Type': 'application/json'}
})
    .then(res => console.log(res.JSON)) //{"status":1,"request":"5135d73e-de3d-4458-b79c-b3b2a9ef6c40"}
    .catch(err => console.log(err)) // {"status":0 "request":"7903bd1b-6aa2-43e6-9c1c-bb5ccea848f1", "errors":[ "application token is invalid" ]}