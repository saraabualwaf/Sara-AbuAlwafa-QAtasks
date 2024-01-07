import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../../pageObjects/shared/actions.cy";
import sharedAssertions from "../../../../pageObjects/shared/assertions.cy";
import createAccountActions from"../../../../pageObjects/createAccount/actions.cy";
import createAccountAssertions from"../../../../pageObjects/createAccount/assertions.cy";
const firstName="Razan";
const lastName="user";
const email = "razanUsser"+Math.floor(Math.random()*100)+"@gmail.com";
const url="https://magento.softwaretestingboard.com/customer/account/";

const sharedAction = new sharedActions();
const sharedAssertion = new sharedAssertions();
const createAccountAction = new createAccountActions();
const createAccountAssertion= new createAccountAssertions();
// float number  Math.random() 0 - 1 0.1 , 0.2345566778 
// Math.floor(Math.random()*100) // integer numbers 0-9 

const password = "test@123%6";
const confirmPassword = "test@123%6";

Given("The user navigated to create account page",()=>{
    sharedAction.openMagentoWebsite();
    createAccountAction.goCreateAcountPage();

    
    
});

When("Type firstName in the field",()=>{
    createAccountAction.TypeFirstNameInTheField(firstName);
});
When("Type lastName in the field",()=>{
    createAccountAction.TypelastNamesInTheField(lastName);
});
When("Type email in the field",()=>{
    createAccountAction.TypeEmailInTheField(email);
});
When("Type password in the field",()=>{
    createAccountAction.TypePasswordInTheField(password);
});
When("Type confirmPassword in the field",()=>{
    createAccountAction.TypeConfirmPasswordInTheField(confirmPassword);
});
When("Clicks on Create an account button",()=>{
    createAccountAction.clickOnCreateAccountButton();
});

Then("The Account should be created successfully",()=>{
    sharedAssertion.checkUrlEqualValue(url);
    sharedAssertion.checkPageTitleContainValue("My Account")
});

Then("{string} message will be shown",(msg)=>{
    createAccountAssertion.checkMessageWillBeShown(msg);
});