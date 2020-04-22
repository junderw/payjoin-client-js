const bitcoin = require('bitcoinjs-lib');
const payjoinClient = require('../');

const endpoint = process.argv[2];
const psbtBase64 = process.argv[3];

if(!endpoint || !endpoint) {
  throw new Error('Must pass in endpoint and Base64 PSBT!');
}

console.log(`endpoint: ${endpoint}`);
console.log(`psbtBase64:\n${psbtBase64}`);

psbt = bitcoin.Psbt.fromBase64(psbtBase64);

console.log("Executing requestPayjoin()...");
payjoinClient.requestPayjoin(psbt, endpoint)
  .then(console.log)
  .catch(console.error)