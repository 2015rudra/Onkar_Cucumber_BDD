$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("guildHomepage.feature");
formatter.feature({
  "line": 2,
  "name": "This feature is about testing automation guild homePage functionality",
  "description": "",
  "id": "this-feature-is-about-testing-automation-guild-homepage-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@guildHomepage"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#  Scenario: GuildAutomation login page loads when logged in to AutomationGuild website"
    },
    {
      "line": 5,
      "value": "#    When AutomationGuild Website \"https://guildconferences.com/my-account/\" is opened"
    },
    {
      "line": 6,
      "value": "#    Then AutomationGuild login page should be displayed by default"
    }
  ],
  "line": 8,
  "name": "GuildAutomation Homepage should open on successful login scenario",
  "description": "",
  "id": "this-feature-is-about-testing-automation-guild-homepage-functionality;guildautomation-homepage-should-open-on-successful-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "AutomationGuild Website \"https://guildconferences.com/my-account/\" is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user logged in with below \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "AutomationGuild Home Page should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "this-feature-is-about-testing-automation-guild-homepage-functionality;guildautomation-homepage-should-open-on-successful-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "this-feature-is-about-testing-automation-guild-homepage-functionality;guildautomation-homepage-should-open-on-successful-login-scenario;;1"
    },
    {
      "cells": [
        "onkar.mundaye",
        "glory@1993"
      ],
      "line": 14,
      "id": "this-feature-is-about-testing-automation-guild-homepage-functionality;guildautomation-homepage-should-open-on-successful-login-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4421418700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "GuildAutomation Homepage should open on successful login scenario",
  "description": "",
  "id": "this-feature-is-about-testing-automation-guild-homepage-functionality;guildautomation-homepage-should-open-on-successful-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@guildHomepage"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "AutomationGuild Website \"https://guildconferences.com/my-account/\" is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user logged in with below \"onkar.mundaye\" and \"glory@1993\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "AutomationGuild Home Page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://guildconferences.com/my-account/",
      "offset": 25
    }
  ],
  "location": "AutomationGuildSteps.automationguild_Website_is_opened(String)"
});
formatter.result({
  "duration": 27921752400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "onkar.mundaye",
      "offset": 27
    },
    {
      "val": "glory@1993",
      "offset": 47
    }
  ],
  "location": "AutomationGuildSteps.user_logged_in_with_below_and(String,String)"
});
formatter.result({
  "duration": 7545938700,
  "status": "passed"
});
formatter.match({
  "location": "AutomationGuildSteps.automationguild_Home_Page_should_opened()"
});
formatter.result({
  "duration": 101544900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 4012140200,
  "status": "passed"
});
formatter.uri("guildLoginPage.feature");
formatter.feature({
  "line": 2,
  "name": "This feature is about testing automation guild login page functionality",
  "description": "",
  "id": "this-feature-is-about-testing-automation-guild-login-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@guildLogin"
    }
  ]
});
formatter.before({
  "duration": 5051440700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "GuildAutomation login page loads when logged in to AutomationGuild website",
  "description": "",
  "id": "this-feature-is-about-testing-automation-guild-login-page-functionality;guildautomation-login-page-loads-when-logged-in-to-automationguild-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "AutomationGuild Website \"https://guildconferences.com/my-account/\" is opened",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "AutomationGuild login page should be displayed by default",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://guildconferences.com/my-account/",
      "offset": 25
    }
  ],
  "location": "AutomationGuildSteps.automationguild_Website_is_opened(String)"
});
formatter.result({
  "duration": 7385119700,
  "status": "passed"
});
formatter.match({
  "location": "AutomationGuildSteps.automationguild_login_page_should_opened_by_default()"
});
formatter.result({
  "duration": 50757400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1236140000,
  "status": "passed"
});
});