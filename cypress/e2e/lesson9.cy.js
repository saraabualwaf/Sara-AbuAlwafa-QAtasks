/// <reference types="cypress" />

it ("test1",()=>{
    cy.visit("https://magento.softwaretestingboard.com/");

    cy.get(".action.search").should("be.disabled")
    
    cy.get("#search").type("shirt")
    
    cy.get(".action.search").should("be.enabled")





})