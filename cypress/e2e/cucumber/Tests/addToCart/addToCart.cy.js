import { Given, Then, When , Before , After  } from "cypress-cucumber-preprocessor/steps";
import addToCartAssertions from "../../../../pageObjects/addToCart/assertions.cy";
import addToCartActions from "../../../../pageObjects/addToCart/actions.cy";
import sharedActions from "../../../../pageObjects/shared/actions.cy";
import sharedAssertions from "../../../../pageObjects/shared/assertions.cy";


const sharedAction = new sharedActions();
const sharedAssertion = new sharedAssertions();
const addToCartAssertion =new addToCartAssertions();
const addToCartAction= new addToCartActions();

beforeEach(()=>{
    // executed before Background in feature file .
   // will executed before-each test case   

    cy.log("Hi from before each");
});

// Before({tags:"@TC-1 or @TC-3"},()=>{
//     // before-each test case in case we didn't use tags 
//     // before-each specific test case according to the tag(s) used  

//     cy.log("Hi Form Before")
// });

Before({tags:"@smoke and @TC-1234"},()=>{
    // before-each test case in case we didn't use tags 
    // before-each specific test case according to the tag(s) used  
    cy.log("Hi Form Before")
});

Given("The user navigated to magento website",()=>{
    sharedAction.openMagentoWebsite();
});

Then("The logo should be visible",()=>{
    addToCartAction.thelogovisible();
});

Given("The user search for shirt {word}",()=>{
    addToCartAction.searchforshirt();
});

When("The user choose the product X",()=>{
    addToCartAction.TheuserchoosetheproductX();
});

When("The user choose the size and color for product {float}",(number)=>{
    addToCartAction.chooseSizeAndColor(number);
});

When("The user choose the size {string} and color {string} for product X",(size,colorIndex)=>{
   addToCartAction.chooseColorSizeString(size,colorIndex);
});

When("The user click on Add to cart button",()=>{
    addToCartAction.clickonAddtocartbutton();
});

Then("The product should be added to the cart successfully with {string}",(message)=>{
    addToCartAssertion.Theproductshouldbeadded(message);
});

Then("The counter of the cart should be visible",()=>{
    addToCartAssertion.Thecounter();
});