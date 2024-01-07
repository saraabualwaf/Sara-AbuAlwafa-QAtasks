
class createAccountActions{
goCreateAcountPage(){
    cy.contains("a","Create an Account").click();
}
clickOnCreateAccountButton(){
    cy.get(".submit.primary").click();
    return this;
}
TypeFirstNameInTheField(firstName){

    cy.get("#firstname",{force: true}).clear().type(firstName); 
    return this;
}

TypelastNamesInTheField(lastName){
    cy.get("#lastname").clear().type(lastName);
    return this; 
}
TypeEmailInTheField(email){
    cy.get("#email_address").clear().type(email);
    return this;
}
TypePasswordInTheField(password){
    cy.get("#password").clear().type(password);
    return this;
}
TypeConfirmPasswordInTheField(confirmPassword){
    cy.get("#password-confirmation").clear().type(confirmPassword);
    return this;
}
      
   
}
export default createAccountActions