Feature: Saucedemo Login Feature


Scenario: Login with empty credentials
	Given I navigate to the saucedeom url
	When I login with "standard_user" credentials
	Then No username and password alert should be displayed