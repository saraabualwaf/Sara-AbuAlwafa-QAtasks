import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";


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
    
    cy.get("#nopSideBarPusher").click({force: true});
});
Given("Click on  promotions menu",()=>{
    
    cy.get(".nav-item.has-treeview").eq(4).click();
    
});

Given("Click on  Discounts url",()=>{
    
   
    cy.get("li.nav-item a p").contains("Discounts",{force: true}).click({force: true})
});

When("click on Add new",()=>{
    
    
    cy.get(".btn.btn-primary").contains("Add new").click()
});
When("Enter name in name input field",()=>{
    
    
    cy.get("#Name").type("sara")
});

When("choose Discount type",()=>{
    
    
    cy.get('#DiscountTypeId').select("1")
});

When("check Use percentage",()=>{
    
    
    cy.get('#UsePercentage').check()
});
When("enter Discount percentag",()=>{
    
    

    cy.get('span[title="Increase value"]').eq(0).click()
});
When("check RequiresCouponCode",()=>{
    
    
    cy.get('#RequiresCouponCode').check()
});

When("click on save button",()=>{
    
    
    cy.get('[name="save"]').click()
});
Then("the discount should be added successfully",()=>{
    
    
    cy.get('.alert.alert-success.alert-dismissable').should("be.visible")
});





