package com.virgingames.pages;
/*
 * Created By: Hiren Patel
 * Project Name: VirginGames_Assignment_Cucumber
 */

import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "(//a[@title='Virgin Games Home'])[2]")
    WebElement logo;

    @CacheLookup
    @FindBy(id = "field-username")
    WebElement userNameField;

    @CacheLookup
    @FindBy(name = "password")
    WebElement passwordField;

    @CacheLookup
    @FindBy(xpath = "//span[text()='Login']")
    WebElement loginButton;

    @CacheLookup
    @FindBy(css = "div.output")
    WebElement errorMessage;

    @CacheLookup
    @FindBy(css = "a[title='Close this popup']")
    WebElement popUp;



    public void verifyLogo() {

        verifyLogoDisplayed(logo);
        log.info("Verifying Logo of Virgin Games. ");
    }

    public void sendTextToUserNameField(String username) {
        sendTextToElement(userNameField, username);
        log.info("Enter User Name: '" + username + "'");
    }

    public void sendTextToPasswordField(String password) {
        sendTextToElement(passwordField, password);
        log.info("Enter Password: '" + password + "'");
    }

    public void clickLoginButton() {
        clickOnElement(loginButton);
        log.info("Clicking on Login button. ");
    }

    public void verifyErrorMessage(String error) {
       String actualString = getTextFromElement(errorMessage);
        Assert.assertTrue(actualString.contains(error));
        log.info("Verify error message : '" + error + "'");
    }
    public void closePopUp(){
        clickOnElement(popUp);
        log.info("Clicking on X to close popup. ");
    }
}
