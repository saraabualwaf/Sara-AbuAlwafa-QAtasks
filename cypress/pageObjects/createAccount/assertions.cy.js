class createAccountAssertions{

   checkMessageWillBeShown(msg){
    cy.get("[role=alert]").should("contain",msg);
    return this;
   }
}




export default createAccountAssertions