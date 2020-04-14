# BDD-Automation-With-Cucumber

This is BDD driven selenium based Hybrid automation framework which consist of integration with Cucumber+POM design pattern.

The framework has following features 

1. Modular Design
2. Maven based framework
3. Log4j enabled for logging
4. Report Generation (cucumber-reporting) 
5. Centralized Configuration (Using Properties file)
6. POM
7. Hooks for scenario start up.

## Setup Project at Your End
- **Clone Repository using git clone** 
- **Run mvn clean test at project level (where you keep pom.xml )** 

## Directory Structure
Directory structure overview from IntelliJ:
![Directory-Structure](https://github.com/onkarmundaye18/BDDAutomationWithCucumber/blob/master/blob/DirectoryStructure.JPG)

### Prerequisites

The softwares which you need to ensure installed at your end : 

```
Java8
Maven
Intellij -IDE /Eclipse-IDE
```

## Running the tests

mvn clean test
mvn test

## Built With

* [Cucumber](https://cucumber.io/tools/cucumber-open/) - The BDD framework
* [Maven](https://maven.apache.org/) - Dependency Management

## Cucumber Report

There is a feature overview page:

![feature overview page](https://github.com/damianszczepanik/cucumber-reporting/raw/master/.README/feature-overview.png)

And there are also feature specific results pages:

![feature specific page passing](https://github.com/damianszczepanik/cucumber-reporting/raw/master/.README/feature-passed.png)

And useful information for failures:

![feature specific page passing](https://github.com/damianszczepanik/cucumber-reporting/raw/master/.README/feature-failed.png)

If you have tags in your cucumber features you can see a tag overview:

![Tag overview](https://github.com/damianszczepanik/cucumber-reporting/raw/master/.README/tag-overview.png)

And you can drill down into tag specific reports:

![Tag report](https://github.com/damianszczepanik/cucumber-reporting/raw/master/.README/tag-report.png)



## Authors

* **Onkar Mundaye**


# Onkar_Cucumber_BDD
