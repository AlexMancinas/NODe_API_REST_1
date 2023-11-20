const {IncomingWebhook} = require('@slack/webhook');
const slackWebhook = require('@slack/webhook');

const webhook = new slackWebhook.IncomingWebhook(process.env.SLACK_WEBHOOK_URL);

const loggerStream = {
    write: message =>{ 
        webhook.send({
            text: message
        });
        console.log('Capturando el log ' ,message);
    }
};

module.exports = loggerStream;