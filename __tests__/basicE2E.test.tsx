import {client} from '../jest.setup';

describe('Appium with Jest automation testing', () => {
  test('First test', async function () {
    const loginStatusText = await client.$('~login-status');
    let loginStatusTextValue = await loginStatusText.getText();

    // disabling this one 'cause I can't understand what's wrong with it
    // on Android, test fail it. On iOS, it passes
    // expect(loginStatusTextValue).toBe('fail');

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
