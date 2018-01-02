import PouchDB from 'pouchdb'
import { JSEncrypt } from 'jsencrypt'

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  // await sleep(500); // simulate server latency

  // HACK - the phone number component returns lots of info, we dont need so just overwrite
  values.mobile = values.mobile.intlPhoneNumber

  // HACK - we need a key based on agent id and date/time, agent id hardcoded below
  //      -  should store key in a file !
  var en = new JSEncrypt();
  const publicKey = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvHuTmM6masBbA+5lF5AwgaLUj2ztEtTLkjPpgWjBEB1KVLZY+oiMhzXs5BLpoh0GXEg19joBARYjt295/xK8SEsD5PP6QQvBZaeZih+2yeGenqsHELZpqBN1OGOi3Jv2ROBOS8+iSUMv1uzN1NhBPZEPoZMbJyKieWBP02VwOeQIDAQAB-----END PUBLIC KEY-----'
  en.setPublicKey(publicKey)

  var encryptedValues = {}
  encryptedValues._id = 'agentid-' + Date.now()
  encryptedValues.type = 'registration'
  encryptedValues.body = en.encrypt(values)


  // PouchDB.debug.enable('*');

  // The ajax parameter should enable self signed https requests .. but it doesnt work
  // Keep as http for now
  var db = new PouchDB('http://localhost:5984/test2',
    { ajax: {
        rejectUnauthorized: false,
        requestCert: true,
        agent: false
    } }
  );

  db.put(encryptedValues);

  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  window.alert(`You submitted:\n\n${JSON.stringify(encryptedValues, null, 2)}`);

});
