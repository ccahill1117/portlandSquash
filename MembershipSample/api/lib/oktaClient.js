const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: '{https://dev-816756.okta.com}',
  token: '{001BOxWx_yXDIragg-g8vOtrQllXFSG5R3ZEr0K4lf}'
});

module.exports = client;
