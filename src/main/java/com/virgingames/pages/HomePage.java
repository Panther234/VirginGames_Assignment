package com.virgingames.pages;
/*
 * Created By: Hiren Patel
 * Project Name: VirginGames_Assignment_Cucumber
 */

import com.virgingames.propertyreader.PropertyReader;
import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.AssertJUnit;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Login')]")
    WebElement loginLink;

    public void verifyHomePage(){
        String actualUrl = driver.getCurrentUrl();
        String expectedUrl = PropertyReader.getInstance().getProperty("baseUrl");
        log.info("verifying Homepage URL. ");
        AssertJUnit.assertEquals(expectedUrl,actualUrl);
    }

    public void verifyLoginText(String text){
        String actualLink = getTextFromElement(loginLink);
        System.out.println("Text of Login Link: " + actualLink);
        AssertJUnit.assertTrue(actualLink.contains((text)));
        log.info("Verify Login Link  : " + text + loginLink.toString());
    }

    public void clickLoginLink(){
        clickOnElement(loginLink);
        log.info("Clicking on Login Button: " );
    }
}
