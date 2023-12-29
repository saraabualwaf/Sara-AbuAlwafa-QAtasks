import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";


const email = "admin@yourstore.com";
const password = "admin";

Given("The user navigated to login page in admin-demo nopcommerce website",()=>{
    cy.visit("https://admin-demo.nopcommerce.com/");
});

Given("login in website",()=>{
    cy.get("#Email").clear().type(email);
    cy.get("#Password").clear().type(password);
    cy.get(".button-1.login-button").click();
});

Given("Click on main menu",()=>{
    
    cy.get("#nopSideBarPusher").click();
});
Given("Click on  promotions menu",()=>{
    
    cy.get(".nav-item.has-treeview").eq(4).click();
});
Given("Click on   Affiliates url",()=>{
   
    cy.get("li.nav-item a p").contains("Affiliates",{force: true}).click({force: true})
});
When("click on Add new",()=>{
    
    
    cy.get(".btn.btn-primary").contains("Add new").click()
});
When("enter firstname in firstname field",()=>{
   
    cy.get("#Address_FirstName").type("sara")
});
When("enter lastname in lastname field",()=>{
   
    cy.get("#Address_LastName").type("sara")
});
When("enter email in email field",()=>{
   
    cy.get("#Address_Email").type("abualwafasara@gmail.com")
});
When("select country id address",()=>{
   
    cy.get("#Address_CountryId").select("88")
});
When("enter country address",()=>{
   
    cy.get("#Address_County").clear().type("palestine")
});
When("enter city address",()=>{
   
    cy.get("#Address_City").type("JENIN")
});
When("enter address 1",()=>{
   
    cy.get("#Address_Address1").type("ppppppppppppppp")
});
When("enter Address_ZipPostalCode",()=>{
   
    cy.get("#Address_ZipPostalCode").type("12345")
});
When("enter Address_PhoneNumber",()=>{
   
    cy.get("#Address_PhoneNumber").type("0675666799")
});
When("click on save button",()=>{
   
    cy.get('[name="save"]').click()
});
Then("the Affiliates should be added successfully",()=>{
    
    
    cy.get('.alert.alert-success.alert-dismissable').should("be.visible")
});


