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
Given("Click on campaigns url",()=>{
   
    cy.get("li.nav-item a p").contains(" Campaigns",{force: true}).click({force: true})
});
When("click on Add new",()=>{
    
    
    cy.get(".btn.btn-primary").contains("Add new").click()
});
When("enter name in name field",()=>{
   
    cy.get("#Name").type("sara")
});
When("enter subject in subject field",()=>{
   
    cy.get("#Subject").type("sara")
});
When("enter body in body field",()=>{
   
    cy.get("#Body").type("sara")
});
When("click on save button",()=>{
   
    cy.get('[name="save"]').click()
});
Then("the campaigns should be added successfully",()=>{
    
    
    cy.get('.alert.alert-success.alert-dismissable').should("be.visible")
});

