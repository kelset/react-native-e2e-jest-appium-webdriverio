const wdio = require('webdriverio');
import capabilities from './e2e-config.js';
import {beforeEach, afterEach, jest} from '@jest/globals';
jest.retryTimes(3);

let client: WebdriverIO.Browser;
const config = {
  path: '/wd/hub',
  host: 'localhost',
  port: 4723,
  waitforTimeout: 60000,
  logLevel: 'error',
  capabilities: {
    ...capabilities,
  },
};

beforeEach(async () => {
  client = await wdio.remote(config);
});

afterEach(async () => {
  console.info('[afterAll] Done with testing!');
  await client.deleteSession();
});

export {client};
