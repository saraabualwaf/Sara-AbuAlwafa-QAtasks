Feature: Add a new Affiliate functionality

    The user can be Add a new Affiliates successfully

    Scenario: Verify that the user can Add a new Affiliates successfully
    
        Given The user navigated to login page in admin-demo nopcommerce website
        And  login in website
        And Click on main menu
        And Click on  promotions menu
        And Click on   Affiliates url
        When click on Add new
        And enter firstname in firstname field
        And enter lastname in lastname field
        And enter email in email field
        And select country id address
        And enter country address
        And enter city address
        And enter address 1
        And enter Address_ZipPostalCode
        And enter Address_PhoneNumber
        And click on save button 
        Then the Affiliates should be added successfully

        