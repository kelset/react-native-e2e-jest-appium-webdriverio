# E2E testing for React Native with Jest, Appium and WebDriverIO (iOS and Android)

![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen) ![Twitter Follow](https://img.shields.io/twitter/follow/kelset?style=social)

In this repo you will find a sample project to showcase how to do E2E testing with Jest+Appium+WebDriverIO for Android and iOS on react-native. It's a bit janky but it serves the purpose of showcasing how to a basic setup needs to be correctly wired.

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
## Contributing

Contributions are more than welcome! *(as already mentioned, code is janky and could use a bit more polish)*

Check [Contributing.md](./CONTRIBUTING.md) for more.

## License & CoC

This repo is [MIT licensed](./LICENSE) and follows the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md).
