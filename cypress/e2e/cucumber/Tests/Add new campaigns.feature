Feature: Add a new Affiliates functionality

    The user can be Add a new Campaigns successfully

    Scenario: Verify that the user can Add a new Campaigns successfully
    
        Given The user navigated to login page in admin-demo nopcommerce website
        And  login in website
        And Click on main menu
        And Click on  promotions menu
        And Click on campaigns url
        When click on Add new
        And enter name in name field
        And enter subject in subject field
        And enter body in body field 
        And click on save button
        Then the campaigns should be added successfully