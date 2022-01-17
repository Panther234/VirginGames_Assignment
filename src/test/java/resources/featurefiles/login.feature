Feature:  Login Functionality test
  As a user i should be able to Login successfully

  Background:
    Given I am on Homepage
    Then I verify Login link displayed on Homepage

  Scenario Outline: I want to verify error message after login with invalid credential

    When I click login link
    Then I navigate to Login page and verify virgin game logo
    And I add "<USERNAME>" in username field
    And I add "<PASSWORD>" in password field
    And I click on Login button
    And I should see "<ERROR>" message and verify it
    And I click on X sign at popup
    Then I should back on Homepage


    Examples:
      | USERNAME      | PASSWORD | ERROR                                                                     |
      | bob           | bob123   | Your username/email must be 4 to 60 characters long                       |
      | bob@gmail.com | bob123   | Please try again, your username/email or password has not been recognised |
      | bob@gmail.com |          | Both your username and password are required                              |
      |               | bob123   | Both your username and password are required                              |