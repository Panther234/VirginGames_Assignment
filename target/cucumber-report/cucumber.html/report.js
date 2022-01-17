$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality test",
  "description": "As a user i should be able to Login successfully",
  "id": "login-functionality-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "I want to verify error message after login with invalid credential",
  "description": "",
  "id": "login-functionality-test;i-want-to-verify-error-message-after-login-with-invalid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click login link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I navigate to Login page and verify virgin game logo",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I add \"\u003cUSERNAME\u003e\" in username field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add \"\u003cPASSWORD\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see \"\u003cERROR\u003e\" message and verify it",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on X sign at popup",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should back on Homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "login-functionality-test;i-want-to-verify-error-message-after-login-with-invalid-credential;",
  "rows": [
    {
      "cells": [
        "USERNAME",
        "PASSWORD",
        "ERROR"
      ],
      "line": 21,
      "id": "login-functionality-test;i-want-to-verify-error-message-after-login-with-invalid-credential;;1"
    },
    {
      "cells": [
        "bob",
        "bob123",
        "Your username/email must be 4 to 60 characters long"
      ],
      "line": 22,
      "id": "login-functionality-test;i-want-to-verify-error-message-after-login-with-invalid-credential;;2"
    },
    {
      "cells": [
        "bob@gmail.com",
        "bob123",
        "Please try again, your username/email or password has not been recognised"
      ],
      "line": 23,
      "id": "login-functionality-test;i-want-to-verify-error-message-after-login-with-invalid-credential;;3"
    },
    {
      "cells": [
        "bob@gmail.com",
        "",
        "Both your username and password are required"
      ],
      "line": 24,
      "id": "login-functionality-test;i-want-to-verify-error-message-after-login-with-invalid-credential;;4"
    },
    {
      "cells": [
        "",
        "bob123",
        "Both your username and password are required"
      ],
      "line": 25,
      "id": "login-functionality-test;i-want-to-verify-error-message-after-login-with-invalid-credential;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9403491800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I verify Login link displayed on Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 140788200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyLoginLinkDisplayedOnHomepage()"
});
formatter.result({
  "duration": 40883500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "I want to verify error message after login with invalid credential",
  "description": "",
  "id": "login-functionality-test;i-want-to-verify-error-message-after-login-with-invalid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click login link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I navigate to Login page and verify virgin game logo",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I add \"bob\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add \"bob123\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see \"Your username/email must be 4 to 60 characters long\" message and verify it",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on X sign at popup",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should back on Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickLoginLink()"
});
formatter.result({
  "duration": 195435200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iNavigateToLoginPageAndVerifyVirginGameLogo()"
});
formatter.result({
  "duration": 16210996300,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.xpath: (//a[@title\u003d\u0027Virgin Games Home\u0027])[2]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-OJIPPDE6\u0027, ip: \u0027172.18.64.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.virgingames.utility.Utility.verifyLogoDisplayed(Utility.java:375)\r\n\tat com.virgingames.pages.LoginPage.verifyLogo(LoginPage.java:52)\r\n\tat com.virgingames.cucumber.stepdefs.LoginSteps.iNavigateToLoginPageAndVerifyVirginGameLogo(LoginSteps.java:34)\r\n\tat ✽.Then I navigate to Login page and verify virgin game logo(src/test/java/resources/featurefiles/login.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "bob",
      "offset": 7
    }
  ],
  "location": "LoginSteps.iAddInUsernameField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "bob123",
      "offset": 7
    }
  ],
  "location": "LoginSteps.iAddInPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your username/email must be 4 to 60 characters long",
      "offset": 14
    }
  ],
  "location": "LoginSteps.iShouldSeeMessageAndVerifyIt(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnXSignAtPopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iShouldBackOnHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 35565000,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d97.0.4692.71)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-OJIPPDE6\u0027, ip: \u0027172.18.64.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ebb196d81a4546365d3b2eeffbfdb3bf, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\hiren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62400}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62400/devtoo..., se:cdpVersion: 97.0.4692.71, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ebb196d81a4546365d3b2eeffbfdb3bf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.virgingames.utility.Utility.getScreenshot(Utility.java:342)\r\n\tat com.virgingames.cucumber.Hooks.tearDown(Hooks.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 3707907600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I verify Login link displayed on Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 117579500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyLoginLinkDisplayedOnHomepage()"
});
formatter.result({
  "duration": 72677600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "I want to verify error message after login with invalid credential",
  "description": "",
  "id": "login-functionality-test;i-want-to-verify-error-message-after-login-with-invalid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click login link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I navigate to Login page and verify virgin game logo",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I add \"bob@gmail.com\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add \"bob123\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see \"Please try again, your username/email or password has not been recognised\" message and verify it",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on X sign at popup",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should back on Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickLoginLink()"
});
formatter.result({
  "duration": 166243800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iNavigateToLoginPageAndVerifyVirginGameLogo()"
});
formatter.result({
  "duration": 20072613200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[@title\u003d\u0027Virgin Games Home\u0027])[2]\"}\n  (Session info: chrome\u003d97.0.4692.71)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-OJIPPDE6\u0027, ip: \u0027172.18.64.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8e076c60dce937dfddf1344dd99f72b7, findElement {using\u003dxpath, value\u003d(//a[@title\u003d\u0027Virgin Games Home\u0027])[2]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\hiren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62464}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62464/devtoo..., se:cdpVersion: 97.0.4692.71, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8e076c60dce937dfddf1344dd99f72b7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.virgingames.utility.Utility.verifyLogoDisplayed(Utility.java:375)\r\n\tat com.virgingames.pages.LoginPage.verifyLogo(LoginPage.java:52)\r\n\tat com.virgingames.cucumber.stepdefs.LoginSteps.iNavigateToLoginPageAndVerifyVirginGameLogo(LoginSteps.java:34)\r\n\tat ✽.Then I navigate to Login page and verify virgin game logo(src/test/java/resources/featurefiles/login.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "bob@gmail.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.iAddInUsernameField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "bob123",
      "offset": 7
    }
  ],
  "location": "LoginSteps.iAddInPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Please try again, your username/email or password has not been recognised",
      "offset": 14
    }
  ],
  "location": "LoginSteps.iShouldSeeMessageAndVerifyIt(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnXSignAtPopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iShouldBackOnHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1100037900,
  "status": "passed"
});
formatter.before({
  "duration": 3688976400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I verify Login link displayed on Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 141629800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyLoginLinkDisplayedOnHomepage()"
});
formatter.result({
  "duration": 54059400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "I want to verify error message after login with invalid credential",
  "description": "",
  "id": "login-functionality-test;i-want-to-verify-error-message-after-login-with-invalid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click login link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I navigate to Login page and verify virgin game logo",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I add \"bob@gmail.com\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add \"\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see \"Both your username and password are required\" message and verify it",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on X sign at popup",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should back on Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickLoginLink()"
});
formatter.result({
  "duration": 287812800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iNavigateToLoginPageAndVerifyVirginGameLogo()"
});
formatter.result({
  "duration": 20092615200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[@title\u003d\u0027Virgin Games Home\u0027])[2]\"}\n  (Session info: chrome\u003d97.0.4692.71)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-OJIPPDE6\u0027, ip: \u0027172.18.64.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [617de9f9aba5055b1b9f4a306a741388, findElement {using\u003dxpath, value\u003d(//a[@title\u003d\u0027Virgin Games Home\u0027])[2]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\hiren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62511}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62511/devtoo..., se:cdpVersion: 97.0.4692.71, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 617de9f9aba5055b1b9f4a306a741388\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.virgingames.utility.Utility.verifyLogoDisplayed(Utility.java:375)\r\n\tat com.virgingames.pages.LoginPage.verifyLogo(LoginPage.java:52)\r\n\tat com.virgingames.cucumber.stepdefs.LoginSteps.iNavigateToLoginPageAndVerifyVirginGameLogo(LoginSteps.java:34)\r\n\tat ✽.Then I navigate to Login page and verify virgin game logo(src/test/java/resources/featurefiles/login.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "bob@gmail.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.iAddInUsernameField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 7
    }
  ],
  "location": "LoginSteps.iAddInPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Both your username and password are required",
      "offset": 14
    }
  ],
  "location": "LoginSteps.iShouldSeeMessageAndVerifyIt(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnXSignAtPopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iShouldBackOnHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 990621200,
  "status": "passed"
});
formatter.before({
  "duration": 4327644400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I verify Login link displayed on Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 152463700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyLoginLinkDisplayedOnHomepage()"
});
formatter.result({
  "duration": 49500000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "I want to verify error message after login with invalid credential",
  "description": "",
  "id": "login-functionality-test;i-want-to-verify-error-message-after-login-with-invalid-credential;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I click login link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I navigate to Login page and verify virgin game logo",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I add \"\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add \"bob123\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see \"Both your username and password are required\" message and verify it",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on X sign at popup",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should back on Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickLoginLink()"
});
formatter.result({
  "duration": 204716300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iNavigateToLoginPageAndVerifyVirginGameLogo()"
});
formatter.result({
  "duration": 1007950900,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.xpath: (//a[@title\u003d\u0027Virgin Games Home\u0027])[2]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-OJIPPDE6\u0027, ip: \u0027172.18.64.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.virgingames.utility.Utility.verifyLogoDisplayed(Utility.java:375)\r\n\tat com.virgingames.pages.LoginPage.verifyLogo(LoginPage.java:52)\r\n\tat com.virgingames.cucumber.stepdefs.LoginSteps.iNavigateToLoginPageAndVerifyVirginGameLogo(LoginSteps.java:34)\r\n\tat ✽.Then I navigate to Login page and verify virgin game logo(src/test/java/resources/featurefiles/login.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 7
    }
  ],
  "location": "LoginSteps.iAddInUsernameField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "bob123",
      "offset": 7
    }
  ],
  "location": "LoginSteps.iAddInPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Both your username and password are required",
      "offset": 14
    }
  ],
  "location": "LoginSteps.iShouldSeeMessageAndVerifyIt(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iClickOnXSignAtPopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iShouldBackOnHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17164300,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d97.0.4692.71)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-OJIPPDE6\u0027, ip: \u0027172.18.64.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8cf501e23f410fac2789824d280a6a7d, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\hiren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62549}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62549/devtoo..., se:cdpVersion: 97.0.4692.71, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8cf501e23f410fac2789824d280a6a7d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.virgingames.utility.Utility.getScreenshot(Utility.java:342)\r\n\tat com.virgingames.cucumber.Hooks.tearDown(Hooks.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});