 /// <reference types="cypress" />

//Sara Abu ALwafa 

 it("task",()=>{ 
    cy.visit("https://magento.softwaretestingboard.com/"); 
    cy.get("#search").clear().type("shirt {enter}")
    cy.get(".search.results .product-items .product-item:first-child").click()
    setTimeout("6000")
    cy.get("#option-label-size-143-item-168").click()
    setTimeout("6000")
    cy.get(".swatch-attribute-options.clearfix  .swatch-option.color").last().click()
    cy.get("#qty").clear().type(3)
    cy.get("#product-addtocart-button").click()
})