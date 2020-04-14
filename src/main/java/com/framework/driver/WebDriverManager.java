package com.framework.driver;

import java.util.concurrent.TimeUnit;

import com.framework.managers.FileReaderManager;
import com.framework.enums.DriverType;
import com.framework.enums.EnvironmentType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class WebDriverManager {
	public WebDriver driver;
	private static DriverType driverType;
	private static EnvironmentType environmentType;
	private static final String CHROME_DRIVER_PROPERTY = "webdriver.chrome.driver";

	public static ThreadLocal<WebDriver> dr = new ThreadLocal<WebDriver>();

	public static WebDriver getDriver() {
		return dr.get();
	}

	public static void setWebDriver(WebDriver driver) {
		dr.set(driver);
	}

	public WebDriverManager() {
		driverType = FileReaderManager.getInstance().getConfigReader().getBrowser();
		environmentType = FileReaderManager.getInstance().getConfigReader().getEnvironment();
		System.out.println("driverType:" + driverType + " environmentType:" + environmentType);
	}

	/*
	 * public WebDriver getDriver() { if(driver == null) driver = createDriver();
	 * return driver; }
	 */

	public WebDriver createDriver() {
		System.out.println("Running createDriver function !!!" + System.getProperty("os.name"));
		if (System.getProperty("os.name").equalsIgnoreCase("mac")) {
			System.out.println("System.getProperty(\"os.name\"):" + System.getProperty("os.name"));
			DriverFactory.setChromeDriverExePath(
					System.getProperty("user.dir") + "//src//test//resources//executables//chromedriver");
			DriverFactory.setGeckoDriverExePath(
					System.getProperty("user.dir") + "//src//test//resources//executables//geckodriver");

		} else {
			System.out.println("System.getProperty(\"os.name\"):" + System.getProperty("os.name"));
			DriverFactory.setChromeDriverExePath(
					System.getProperty("user.dir") + "//src//test//resources//executables//chromedriver.exe");
			DriverFactory.setGeckoDriverExePath(
					System.getProperty("user.dir") + "//src//test//resources//executables//geckodriver.exe");
			DriverFactory.setIeDriverExePath(
					System.getProperty("user.dir") + "//src//test//resources//executables//IEDriverServer.exe");
		}

		switch (environmentType) {
		case LOCAL:
			driver = createLocalDriver();
			break;
		case REMOTE:
			driver = createRemoteDriver();
			break;
		}
		return driver;
	}

	private WebDriver createRemoteDriver() {
		throw new RuntimeException("RemoteWebDriver is not yet implemented");
	}

	private WebDriver createLocalDriver() {
		System.out.println("Creating local driver !!!");
		switch (driverType) {
		case FIREFOX:
			System.setProperty("webdriver.gecko.driver", DriverFactory.getGeckoDriverExePath());
			driver = new FirefoxDriver();
			break;
		case CHROME:
			System.setProperty(CHROME_DRIVER_PROPERTY, DriverFactory.getChromeDriverExePath());
			driver = new ChromeDriver();
			break;
		case INTERNETEXPLORER:
			driver = new InternetExplorerDriver();
			break;
		}
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(FileReaderManager.getInstance().getConfigReader().getImplicitlyWait(),
				TimeUnit.SECONDS);
		// setting webdriver to ThreadLocal
		setWebDriver(driver);
		return driver;
	}

	public void closeDriver() {
		getDriver().close();
		getDriver().quit();
	}

}