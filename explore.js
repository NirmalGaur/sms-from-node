const Twilio = require("twilio");

const client = new Twilio(
  "AC96762b5bc14b6832afda9df52dbf9ae2",
  "735bf0884168cb8d2351dde72adcdd88"
);

//sending yourself an SMS message:
console.log("Sending the message...");
client.messages
  .create({
    body: "Hello from Node",
    to: "+919548200532", // Text this number
    from: "+14178841125", // From a valid Twilio number
  })
  .then((message) => console.log(message.sid))
  .catch((err) => console.error(err))
  .finally(() => {
    console.log("Gathering your message log...");
  });

//Displaying the last sent message:
client.messages
  .list()
  .then((messages) =>
    console.log(`The most recent message is: ${messages[0].body}`)
  )
  .catch((err) => console.error(err));
