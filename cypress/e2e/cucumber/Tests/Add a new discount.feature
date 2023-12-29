
Feature: Add a new discount functionality

    The user can be Add a new discount successfully

    Scenario: Verify that the user can Add a new discount successfully
    
        Given The user navigated to login page in admin-demo nopcommerce website
        And  login in website
        And Click on main menu
        And Click on  promotions menu
        And Click on  Discounts url
        When click on Add new 
        And Enter name in name input field
        And choose Discount type
        And check Use percentage
        And enter Discount percentag
        And check RequiresCouponCode
        And click on save button 
        Then the discount should be added successfully
        

       
