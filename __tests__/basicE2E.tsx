import wdio from 'webdriverio';
import platformConfig from '../e2e-config';

describe('Appium with Jest automation testing', () => {
  let client: any;

  beforeAll(async function () {
    const config = {
      path: '/wd/hub',
      port: 4723,
      capabilities: {
        ...platformConfig,
      },
    };

    client = await wdio.remote(config);


  });

  afterAll(async function () {
    await client.pause(1500);
    console.info('[afterAll] Done with testing!');

    await client.deleteSession();
  });

  test('First test', async function () {
    const loginStatusText = await client.$('~login-status');
    let loginStatusTextValue = await loginStatusText.getText();
    expect(loginStatusTextValue).toBe('fail');

    const UsernameTextInput = await client.$('~username-textinput');
    await UsernameTextInput.setValue('Morgan Freeman');
    const UsernameTextInputValue = await UsernameTextInput.getText();
    expect(UsernameTextInputValue).toBe('Morgan Freeman');

    const PasswordTextInput = await client.$('~password-textinput');
    await PasswordTextInput.setValue('god');
    const PasswordTextInputValue = await PasswordTextInput.getText();
    expect(PasswordTextInputValue).toBe('•••');

    const loginButton = await client.$('~login-button');
    await loginButton.click();

    loginStatusTextValue = await loginStatusText.getText();
    expect(loginStatusTextValue).toBe('success');
  });
});
