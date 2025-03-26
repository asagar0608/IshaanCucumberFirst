package commonFuntions;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.time.Duration;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;

public class FunctionLibrary {

	public static Properties conpro;
	public static WebDriver driver;

// Method for Launch Browser
	public static WebDriver startbrowser() throws Throwable {
		conpro = new Properties();
		conpro.load(new FileInputStream("./Property Files/Environment.properties"));
		if (conpro.getProperty("Browser").equalsIgnoreCase("chrome")) {

			driver = new ChromeDriver();
			driver.manage().window().maximize();
		} else if (conpro.getProperty("Browser").equalsIgnoreCase("edge")) {
			driver = new EdgeDriver();
			driver.manage().window().maximize();
		} else {
			Reporter.log("Browser is not matching", true);
		}
		return driver;
	}

//Method for enter URL
	public static void enterURL() {

		driver.get(conpro.getProperty("Url"));

	}

	public static void waitForElement(String LocatorType, String LocatoraValue, String MyWait) {
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(Integer.parseInt(MyWait)));
		if (LocatorType.equalsIgnoreCase("xpath")) {

			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(LocatoraValue)));
		}
		if (LocatorType.equalsIgnoreCase("name")) {

			wait.until(ExpectedConditions.visibilityOfElementLocated(By.name(LocatoraValue)));
		}
		if (LocatorType.equalsIgnoreCase("id")) {

			wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(LocatoraValue)));
		}
	}

//Method for Click on buttons, radio buttons, links, images, check boxes
	public static void clickAction(String Locatortype, String Locatorvalue) {

		if (Locatortype.equalsIgnoreCase("xpath")) {

			driver.findElement(By.xpath(Locatorvalue)).click();
		}
		if (Locatortype.equalsIgnoreCase("id")) {

			driver.findElement(By.id(Locatorvalue)).sendKeys(Keys.ENTER);
		}
		if (Locatortype.equalsIgnoreCase("name")) {

			driver.findElement(By.name(Locatorvalue)).click();
		}
		if (Locatortype.equalsIgnoreCase("linktext")) {

			driver.findElement(By.linkText(Locatorvalue)).click();
		}

	}

// method for Text box
	public static void typeAction(String Locatortype, String Locatorvalue, String Ourtext) {
		if (Locatortype.equalsIgnoreCase("xpath")) {
			driver.findElement(By.xpath(Locatorvalue)).clear();
			driver.findElement(By.xpath(Locatorvalue)).sendKeys(Ourtext);
		}
		if (Locatortype.equalsIgnoreCase("id")) {
			driver.findElement(By.id(Locatorvalue)).clear();
			driver.findElement(By.id(Locatorvalue)).sendKeys(Ourtext);
		}
		if (Locatortype.equalsIgnoreCase("name")) {
			driver.findElement(By.name(Locatorvalue)).clear();
			driver.findElement(By.name(Locatorvalue)).sendKeys(Ourtext);
		}
	}

	// Method for Validate Title

	public static void validate_Title(String Expected_Title) {
		String actual_Title = driver.getTitle();
		try {
			Assert.assertEquals(actual_Title, Expected_Title, "Title is not matching");
		} catch (AssertionError e) {

			Reporter.log(e.getMessage());
		}

	}

	// method for Close browser
	public static void tearDown() {
		driver.quit();
	}
	// Method for Capture Supplier Number in to note pad

	public static void capturesuppliernum(String Ltype, String Lvalue) throws Throwable {
		String supnum = "";
		if (Ltype.equalsIgnoreCase("xpath")) {

			supnum = driver.findElement(By.xpath(Lvalue)).getAttribute("value");
		}
		if (Ltype.equalsIgnoreCase("name")) {

			supnum = driver.findElement(By.name(Lvalue)).getAttribute("value");
		}
		if (Ltype.equalsIgnoreCase("xpath")) {

			supnum = driver.findElement(By.id(Lvalue)).getAttribute("value");
		}

		FileWriter fw = new FileWriter("./CaptureData/suppliernumber.txt");
		BufferedWriter bw = new BufferedWriter(fw);
		bw.write(supnum);
		bw.flush();
		bw.close();
	}

	// Method for validation in table
	public static void supplierTable() throws Throwable {
		
		FileReader fr= new FileReader("./CaptureData/suppliernumber.txt");
		BufferedReader br= new BufferedReader(fr);
		String act_val= br.readLine();
		
if (!driver.findElement(By.xpath(conpro.getProperty("Search-Textbox"))).isDisplayed()) 
	
	driver.findElement(By.xpath(conpro.getProperty("Search-panel"))).click();
	driver.findElement(By.xpath(conpro.getProperty("Search-Textbox"))).clear();
	driver.findElement(By.xpath(conpro.getProperty("Search-Textbox"))).sendKeys(act_val);
	driver.findElement(By.xpath(conpro.getProperty("Search-button"))).click();
	
	String exp_val= driver.findElement(By.xpath("//table[@class='table ewTable']/tbody/tr[1]/td[6]")).getText();
	
	try {
		Assert.assertEquals(act_val, exp_val, "Supplier number is not matching");
	} catch (AssertionError e) {
		System.out.println(e.getMessage());
	}
	}
	
	// Method for Capture Customer Number in to note pad

		public static void captureCustomerNum(String Ltype, String Lvalue) throws Throwable {
			String cusNum = "";
			if (Ltype.equalsIgnoreCase("xpath")) {

				cusNum = driver.findElement(By.xpath(Lvalue)).getAttribute("value");
			}
			if (Ltype.equalsIgnoreCase("name")) {

				cusNum = driver.findElement(By.name(Lvalue)).getAttribute("value");
			}
			if (Ltype.equalsIgnoreCase("xpath")) {

				cusNum = driver.findElement(By.id(Lvalue)).getAttribute("value");
			}

			FileWriter fw = new FileWriter("./CaptureData/customernumber.txt");
			BufferedWriter bw = new BufferedWriter(fw);
			bw.write(cusNum);
			bw.flush();
			bw.close();
		}

		// Method for validation in table
		public static void customerTable() throws Throwable {
			
			FileReader fr= new FileReader("./CaptureData/customernumber.txt");
			BufferedReader br= new BufferedReader(fr);
			String act_val= br.readLine();
			
	if (!driver.findElement(By.xpath(conpro.getProperty("Search-Textbox"))).isDisplayed()) 
		
		driver.findElement(By.xpath(conpro.getProperty("Search-panel"))).click();
		driver.findElement(By.xpath(conpro.getProperty("Search-Textbox"))).clear();
		driver.findElement(By.xpath(conpro.getProperty("Search-Textbox"))).sendKeys(act_val);
		driver.findElement(By.xpath(conpro.getProperty("Search-button"))).click();
		
		String exp_val= driver.findElement(By.xpath("//table[@class='table ewTable']/tbody/tr[1]/td[5]")).getText();
		
		try {
			Assert.assertEquals(act_val, exp_val, "Customer number is not matching");
		} catch (AssertionError e) {
			System.out.println(e.getMessage());
		}
		}

}
