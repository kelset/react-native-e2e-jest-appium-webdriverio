# E2E testing for React Native with Jest, Appium and WebDriverIO (iOS and Android)

[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen)](./CONTRIBUTING.md)
<a href="https://github.com/kelset?tab=followers">
<img src="https://img.shields.io/github/followers/kelset?label=Follow%20%40kelset&style=social" />
</a>
<a href="https://twitter.com/kelset">
<img src="https://img.shields.io/twitter/follow/kelset?label=Follow%20%40kelset&style=social" />
</a>

In this repo you will find a sample project to showcase how to do E2E testing with [Jest](https://jestjs.io/) + [Appium](https://appium.io/) + [WebDriverIO](https://webdriver.io/) for Android and iOS on react-native.

_It's a bit janky but it serves the purpose of showcasing how to a basic setup needs to be correctly wired._

## How to use

First off, make sure that your setup works with Appium. You can follow their [getting started guide](http://appium.io/docs/en/about-appium/getting-started/) for that.

You want to make sure, in particular, to have it installed locally via `npm install -g appium`, and that both `npx appium-doctor --android` and `npx appium-doctor --ios` give you a ✅

Once you have done that, you can get the repo locally via the classic `git clone git@github.com:kelset/react-native-e2e-jest-appium-webdriverio.git` command (I prefer SSH over HTTP for cloning, but you do you).

then you can navigate right into the codebase via `cd react-native-e2e-jest-appium-webdriverio`, followed by a `yarn install` command to install all the necessary dependencies.

After this, run the app on the Android emulator/ iOS simulator via `yarn android`/`yarn ios` - **you need to do this at least once**.

After the app is on the emulator/simulator and Metro is running, you can open a new terminal window and start the Appium server via `appium`.

Once the server is running, you can use the commands `test:e2e:android` and `test:e2e:ios` to try out the E2E loop, or use `test:e2e:all` to run both one after the other.

### A note on setup

Please make sure that your local emulator/simulator config matches the `e2e` section of the `package.json` or it will fail 'cause it won't be able to connect to the platform.

## Notes on E2E: how does it work?

I'll try to keep it simple and to walk through all the main concepts and hacks that make it all work.

The basic premise is that this is, from Appium's perspective, just a project like any other: the app it needs to test is a black box, and it gets to communicate with it via webdriverIO's client.

Via the command `test:e2e:android` we start the testing, that starts up the `basicE2E.test.js` script - this file gets via an helper script `e2e-config.js` which platform to test (passed as an ENV variable, `E2E_DEVICE` during the yarn command, check `test:e2e:android` in `package.json`) and goes into the `package.json`, section `e2e`, and uses those info the `beforeAll` to stand up the webdriverIO client.

Then the actual testing is done by using as "communication point" to invoke the native components this following pattern `client.$('~<string>')` (the ~ is intentional, and important!). The `<string>` here is what we setup in `App.js`, and it should be just the `accessibilityID` option (that RN passes back to the native component) but actually we need to use a bit of a workaround script called `testProps` (at the top of `App.js`) to tailor this use for iOS/Android and for the `Text` component. (_huge props to Slav Kurochkin for finding this out and explaining it [in this article](http://93days.me/testing-react-native-application/)_)

This way we can interact with all the elements on screen that have their string setup as props via `{...testProps(<string>)}`.

If this isn't clear enough or you'd like a blogpost on this subject, feel free to [open an issue](https://github.com/kelset/react-native-e2e-jest-appium-webdriverio/issues/new) or talk to me [over on Twitter](https://twitter.com/kelset).

## Inspiration and resources

Getting this together was quite a bit of work because there aren't many resources around that walk you through the entire setup for React Native Android/iOS - I pieced this sample app together by following and taking bit and pieces from multiple places. In no particular order:

- https://appium.io/docs/en/about-appium/intro/?lang=en
- https://webdriver.io/docs/gettingstarted
- https://appium.io/docs/en/drivers/android-uiautomator2/
- https://appium.io/docs/en/drivers/ios-xcuitest/index.html
- http://93days.me/appium-test-automation-with-jest-and-webdriver-io/
- http://93days.me/testing-react-native-application/
- https://blog.codemagic.io/mobile-testing-appium-react-native-apps/
- https://blog.logrocket.com/testing-your-react-native-app-with-appium/

I was also inspired by a few repos and how they dealt with similar configs:

- https://github.com/hadnazzar/react-native-appium/blob/master/e2e/__tests__/appium-test-wdio.js.old
- https://github.com/garthenweb/react-native-e2etest/blob/master/package.json
- https://github.com/microsoft/react-native-windows/blob/main/docs/e2e-testing.md
- https://github.com/microsoft/fluentui-react-native/tree/main/apps/fluent-tester/src/E2E#e2e-testing-overview

## Contributing

Contributions are more than welcome! _(as already mentioned, code is janky and could use a bit more polish)_

Check [CONTRIBUTING](./CONTRIBUTING.md) for more.

## License & CoC

This repo is [MIT licensed](./LICENSE) and follows the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md).
