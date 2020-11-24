const { IncomingWebhook } = require('@slack/webhook');

// Read a url from the environment variables
const url = 'https://hooks.slack.com/services/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';

// Initialize
const webhook = new IncomingWebhook(url);

module.exports = senSlackMessageError = (obj) => {
    webhook.send(obj);

}