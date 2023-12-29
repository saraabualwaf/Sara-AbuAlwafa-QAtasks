 /// <reference types="cypress" />
//Sara AbuAlwafa
//task2


 it("task",()=>{ 
   cy.visit("/checkout/#shipping"); 
   /* ==== Generated with Cypress Studio ==== */ cy.get('#search').clear('s');
   cy.get('#search').type('shirt{enter}');
   cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    cy.get('#option-label-size-143-item-167').click(); 
    cy.get('.swatch-attribute.color > .swatch-attribute-options').click();
     cy.get('#option-label-color-93-item-57').click(); 
     cy.get('#product-addtocart-button > span').click(); 
     cy.wait(3000); cy.get('.showcart').click(); 
     cy.get('#top-cart-btn-checkout').click(); 
     cy.wait(5000); /* ==== End Cypress Studio ==== */
    //  start writing your code from here 
    
    //ID-based locators
    setTimeout("9000")
    cy.get("#customer-email")
//attribute  selector 
    cy.get([name="firstname"])
    cy.get([name="lasttname"])
    cy.get([name="company"])
    cy.get([name="street[0]"])
    //setTimeout("8000");
    cy.get([name="street[1]"])
    //setTimeout("8000");
    cy.get([name="street[2]"])
    cy.get([name="city"])
    cy.get([name="postcode"])
    cy.get([name="postcode"])


    //class selecto get select contry&select state
    cy.get(".control select.select")


    //css selector
    cy.get("li> .checkout-shipping-method")

//element name
    cy.get('button.button')


   
   
   })
   
   
   