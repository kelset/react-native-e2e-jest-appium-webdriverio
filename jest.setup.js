import {remote} from 'webdriverio';

import capabilities from './e2e-config.js';
import {beforeAll, afterAll, jest} from '@jest/globals';
jest.retryTimes(3);

let client: WebdriverIO.Browser;
const config = {
  host: 'localhost',
  port: 4723,
  waitforTimeout: 60000,
  logLevel: 'error',
  capabilities: {
    ...capabilities,
  },
};

beforeAll(async () => {
  client = await remote(config);
});

afterAll(async () => {
  console.info('[afterAll] Done with testing!');
  await client.deleteSession();
});

export {client};
