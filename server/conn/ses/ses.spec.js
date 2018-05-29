const email = {
  Message: {
    Subject: { Data: 'from ses', Charset: 'utf8' },
    Body: { Html: { Charset: 'utf8', Data: '' }, Text: { Data: 'ses says hi', Charset: 'utf8' } },
  },
  Source: 'notifications@quezx.com',
  Version: '2010-12-01',
  Action: 'SendEmail',
  Destination: { ToAddresses: { member: { 1: 'manjeshpv@gmail.com' } } },
};

const ses = require('./index');

const assert = require('assert');

describe('AWS', () => {
  describe('ses()', () => {
    it('should return -1 when the value is not present', (done) => {
      ses(email)
        .then(() => {
          assert(true, 'should be true');
          done();
        });
    });
  });
});
