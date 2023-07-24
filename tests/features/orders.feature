Feature: DemoBlazeOrders


Background: 

   Given I navigate to the saucedeom url
   And I login with "valid" credentials

@only
Scenario: Validate Ordering Phone
	When I add "Sauce Labs Backpack" to cart
	And I navigate to cart page
	And I perform checkout in cart page
	And I enter order details
	And I place the order
	Then "Thank you for your order!" message should be displayed