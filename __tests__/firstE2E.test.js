const wdio = require('webdriverio');

describe('Appium with Jest automation testing', () => {
  let client;
  let field;

  beforeAll(async function () {
    const opts = {
      path: '/wd/hub',
      port: 4723,
      capabilities: {
        platformName: 'Android',
        platformVersion: '12',
        deviceName: 'Android Emulator',
        app: 'ApiDemos-debug.apk',
        appPackage: 'io.appium.android.apis',
        appActivity: '.view.TextFields',
        automationName: 'UiAutomator2',
      },
    };

    client = await wdio.remote(opts);
    field = await client.$('android.widget.EditText');
  });

  afterAll(async function () {
    await client.deleteSession();
  });

  test('First test', async function () {
    await field.setValue('Hello World!');
    const value = await field.getText();
    expect(value).toBe('Hello World!');
  });
});
