# Worqference 2023 - Bootstrap Project

This is a bootstrap project for the workshop "Designing a common Test Automation Framework for Web & Mobile Apps with WebdriverIO".

This readme has details about setup required and commands to run the Web and Android tests.

## Pre-requisites

### Install the following:

- [Git](https://git-scm.com/downloads). If you are using a windows machine, please install [Git for Windows](https://gitforwindows.org/).
- [Node and NPM](https://nodejs.org/en/). Please use the current version v19.6.0.
- [Visual Studio Code](https://code.visualstudio.com/download) or any other IDE of your choice.

### Get the bootstrap project:

- Clone the repository. On your terminal (or Git BASH), run the command to clone the repository:
  ```block
  git clone https://github.com/bitweft/book-info-e2e-tests.git
  ```
- Now, go into the project directory by running the command:
  ```block
  cd book-info-e2e-tests
  ```
- Install the project dependencies by running the following command from the project directory:
  ```block
  npm install
  ```

### Running Web Tests:

- Please ensure [Chrome browser](https://www.google.com/intl/en_ca/chrome/) is installed.
- To run the web tests, from the project directory (book-info-e2e-tests), run the following command:
  ```block
  npm run test:web:chrome
  ```
- The browser will launch and you will see the test results on the terminal.
  ![Web Test Run](resources/screen-captures/web-test-run-example.gif)

### Emulator Setup for Android tests:

- Java. It could be either [open JDK](https://openjdk.org/projects/jdk/) or Oracle JDK. Ensure that JAVA_HOME environment variable is set.
- Install [Android Studio](https://developer.android.com/studio) and open it.
- Select `More Actions` and choose `Virtual Device Manager`. Then select `Create Device`.
  ![Open AVD manager to create a device](resources/screen-captures/open-AVD-manager-to-create-device.gif)
- Choose a device, select any system image (download one if required), and then `Finish` creating the emulator.
  ![Select device and download system image](resources/screen-captures/create-device.gif)
- Launch the emulator by clicking the play icon.
  ![Launch emulator](resources/screen-captures/launch-emulator.gif)

### Path and environment variables setup:

- First, let's find the path to Android SDK.

  - On Mac devices, the path is typically `/Users/<username>/Library/Android/sdk`. We can check this by running the `ls` command:

    ```block
    ls /Users/<username>/Library/Android/sdk
    ```

    ![Launch emulator](resources/screen-captures/list-android-sdk-dir-contents.png)

  - On Windows, the path is typically `C:\Users\<username>\AppData\Local\Android\sdk`. We can check this by running the `ls` command from Git BASH. Do note: Use forward slashes in Git Bash.
    ```block
    ls /c/Users/<username>/AppData/Local/Android/Sdk
    ```

- Prepare the commands to set ANDROID_HOME and tools to path.
  - If the Android sdk path is `/Users/<username>/Library/Android/sdk`, then we need to add the following to the bashrc file:
    ```block
    export ANDROID_HOME="$HOME/Library/Android/sdk"
    export PATH="$PATH:$ANDROID_HOME:$ANDROID_HOME/platform-tools/:$ANDROID_HOME/tools/:$ANDROID_HOME/build-tools/"
    ```
  - If the Android sdk path (typical on a Windows machine) is `C:\Users\<username>\AppData\Local\Android\sdk`, then we need to add the following to the bashrc file:
    ```block
    export ANDROID_HOME="/c/Users/<username>/AppData/Local/Android/Sdk"
    export PATH="$PATH:$ANDROID_HOME:$ANDROID_HOME/platform-tools/:$ANDROID_HOME/tools/:$ANDROID_HOME/build-tools/"
    ```
    Do replace `<username>` with the username on your machine.
- To add the above to the `~/.bashrc`:

  - Use `vim ~/.bashrc` command to open the file.
  - Press `i` to go into insert mode.
  - On a new line at the end of the file, paste the export commands from above.
  - Add a new line to the end of the file.
  - Save and close the file by pressing `Esc` `:wq` followed by `Enter`.
  - source the bashrc file by running: `source ~/.bashrc`
  - You can confirm if it was set correctly by running the `echo $ANDROID_HOME` command.
    ![Set ANDROID_HOME and other paths](resources/screen-captures/set-paths-and-env-variables.gif)

- Add JAVA_HOME to bashrc:
  - Similar to the above, find path to Java JDK and set that in `JAVA_HOME` environment variable.
  - Typically on Mac, you will need to add the following to your `~/.bashrc` (Do update the `<jdk-version>`):
    ```block
    export JAVA_HOME="/Library/Java/JavaVirtualMachines/<jdk-version>/Contents/Home/"
    ```
  - Typically on a Windows machine, you will need to add the following to your `~/.bashrc` file via Git Bash (Do update the `<jdk-version>`):
    ```block
    export JAVA_HOME="/c/Program Files/Java/<jdk-version>"
    ```
  - Run `source ~/.bashrc` after updating the file.

### Running Android Tests:

- The path of the demo app file is: `<path-to-project-directory>/book-info-e2e-tests/resources/book-info.apk`. Keep a note of the absolute path to the apk file.
- Test run command:
  ```block
  npm run test:app:android -- --app_path=/<absolute-path>/book-info-e2e-tests/resources/book-info.apk --device_name='Pixel 4'
  ```
  ![Android Test Run](resources/screen-captures/android-test-run.gif)
