 /// <reference types="cypress" /\
















 


 it("Task6",()=>{ 
    cy.visit("https://admin-demo.nopcommerce.com/")
        cy.login()
        cy.get("#nopSideBarPusher").click();
        cy.get(".nav-sidebar > li:nth-child(2) > a").click();
        cy.contains("Products").click();
        cy.get("#SearchProductName").type("tv");
        cy.get("#search-products").click();
        cy.get("th.sorting_disabled.text-center >input.mastercheckbox").check()
        cy.get("#delete-selected").click()
        cy.wait(2000)
        cy.get("button#delete-selected-action-confirmation-submit-button").click()
        cy.get(".dataTables_empty").should("contain","No data available in table")

       
    }
    )
    






 