 /// <reference types="cypress" />
 describe("solution task5",()=>{
    it("visible",()=>{ 
       cy.visit("https://magento.softwaretestingboard.com/customer/account/create/"); 
       cy.get("#firstname").should("be.visible")
       cy.get("#lastname").should("be.visible")
       cy.get("#email_address").should("be.visible")
       cy.get("#password").should("be.visible")
       cy.get("input#password-confirmation.input-text").should("be.visible")
       cy.get(".action.submit.primary").should("be.visible")
       




    })
    it("Happy scenario",()=>{ 
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/"); 
        cy.get("#firstname").type("Sara")
        cy.get("#lastname").type("AbuALwafa")
        cy.get("#email_address").type("abualwafasara@gmail.com")
        cy.get("#password").type("Sara123***")
        cy.get("input#password-confirmation.input-text").type("Sara123***")
        cy.get(".action.submit.primary").click()
        cy.get(".message-success").should("exist").and("be.visible")
 
 
     })
})