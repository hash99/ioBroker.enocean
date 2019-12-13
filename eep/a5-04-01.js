"use strict";

// required for autocompletion
const RadioTelegram = require('../lib/esp3Packet').RadioTelegram;

/**
 * @param {RadioTelegram} telegram 
 */
module.exports = function (telegram) {
  // message
  let retValue = {};
  let lb = (telegram.userData[3] & 0x00000008) >> 3;
  let value = telegram.userData[2];
  let valueh = telegram.userData[1];

  retValue['learn_button'] = (lb === 1);
  if (1 === lb) {
    let result =  ((value )*(40/250));
    retValue['temperature'] = result.toFixed(2);
    let resulth =  ((valueh )*(100/250));
    retValue['humidity'] = resulth.toFixed(2);
  }

  return retValue;
};
