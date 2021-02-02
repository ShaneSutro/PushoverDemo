# Pushover Demo #
***
### Using the Pushover App to send notifications ###
This is a brief demo of the Pushover App and its capabilities. The Pushover app can generate both push notifications and update your Apple Watch face if you have one.

>Requirements:
> - Pushover Application
> - Pushover License ($5 one time)
> - Basic understanding of HTTP requests
> - Information that you want to send, of course!

### Getting Started ###
- [ ] Setup your [Pushover Account](https://pushover.net)
- [ ] Create and store your API key
- [ ] Send a `POST` request to `https://api.pushover.net/1/messages.json`
- [ ] In the body of your request, include the required parameters found on [Pushover's API Page](https://pushover.net/api)

***
### Example 1 - Push Notification ###

```javascript
const url = 'https://api.pushover.net/1/messages.json'
const data = {
    token: 'azGDORePK8gMaC0QOYAMyEEuzJnyUi', // Your Pushover API key
    user: 'azGDORePK8gMaC0QOYAMyEEuzJnyUi', // Your userKey from the Pushover app
    title: 'Backup Complete!',
    message: 'Backup of database "transaction_history" was completed successfully.'
}

fetch(url, {
    method: 'POST',
    body: JSON.stringify(data)
})
    .then(data => console.log(data)) //{"status":1,"request":"5135d73e-de3d-4458-b79c-b3b2a9ef6c40"}
    .catch(err => console.log(err)) // {"status":0 "request":"7903bd1b-6aa2-43e6-9c1c-bb5ccea848f1", "errors":[ "application token is invalid" ]}
```
>`token`, `user`, `title`, and `message` are required, but there are many other options you can use. Try setting `{ html: 1 }` or `{ monospace: 1 }` for some additional options!
***

### Example 2 - Watch Glance Update ###
If you have an Apple Watch, Pushover includes the option to display data on your watch face in various ways. This is useful if you need to keep track of information but it's not urgent enough for a push notification.

```javascript
const url = 'https://api.pushover.net/1/glances.json' // <-note the URL change
const data = {
    token: 'azGDORePK8gMaC0QOYAMyEEuzJnyUi', // Your Pushover API key
    user: 'azGDORePK8gMaC0QOYAMyEEuzJnyUi', // Your userKey from the Pushover app
    title: 'Backup Complete!', // Line 1
    text: 'Done 01/24/21', // Line 2
    subtext: 'Finished in 328ms', // Line 3
    count: 3, // Dial inner number
    percent: 58 // Dial outer gauge
}

fetch(url, {
    method: 'POST',
    body: JSON.stringify(data)
})
    .then(data => console.log(data)) // {"status":1,"request":"5135d73e-de3d-4458-b79c-b3b2a9ef6c40"}
    .catch(err => console.log(err)) // {"status":0 "request":"7903bd1b-6aa2-43e6-9c1c-bb5ccea848f1", "errors":[ "application token is invalid" ]}
```

