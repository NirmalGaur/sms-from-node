const Twilio = require("twilio");

const client = new Twilio(
  "AC96762b5bc14b6832afda9df52dbf9ae2",
  "43d4b562d3df014e38e1e4904379733a"
);

//sending yourself an SMS message:
console.log("Sending the message...");
client.messages
  .create({
    body: "Hello from Node 3",
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

//Deleting the last sent message:
client.messages
  .list()
  .then((messages) => messages[0].body.delete())
  .catch((err) => console.error(err));
