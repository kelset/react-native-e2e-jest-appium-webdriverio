// utility file to extract the config for E2E testing at runtime
// for appium

let capabilities;

const android = {
  platformName: 'Android',
  'appium:platformVersion': '13.0',
  'appium:deviceName': 'Android Emulator',
  'appium:app': './android/app/build/outputs/apk/debug/app-debug.apk',
  'appium:automationName': 'UiAutomator2',
  'appium:newCommandTimeout': 240,
};

const ios = {
  platformName: 'iOS',
  'appium:platformVersion': '16.2',
  'appium:deviceName': 'iPhone 14',
  'appium:automationName': 'XCUITest',
  'appium:bundleId': 'org.reactjs.native.example.TestForE2E',
};

if (!process.env.E2E_DEVICE) {
  throw new Error('E2E_DEVICE environment variable is not defined');
}

if (
  !(
    process.env.E2E_DEVICE.includes('android') ||
    process.env.E2E_DEVICE.includes('ios')
  )
) {
  throw new Error('No e2e device configuration found');
}

if (process.env.E2E_DEVICE === 'android') {
  capabilities = android;
}

if (process.env.E2E_DEVICE === 'ios') {
  capabilities = ios;
}

export default capabilities;
