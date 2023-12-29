 /// <reference types="cypress" />

 //Sara AbuAlwafa 
 //Tsak 3 

describe("solution task3",()=>{
 it("LOGIN page",()=>{ 
    cy.visit("https://demo.productionready.io/#/login"); 
    //Sign in
   cy.get("h1")
   //Need an account
   cy.contains("a"," Need an account?")
   //email input 
   cy.get("fieldset fieldset input").eq(1)
   //passw input
   cy.get("fieldset fieldset input").eq(2)
   //Sign inbutton
   cy.get('button[type="submit"]')
   

})

it("HOME page",()=>{ 
    cy.visit("https://demo.productionready.io/#/"); 
//conduit link
    cy.get("div a.navbar-brand.ng-binding")
//home
cy.contains("a","Home");
//signup
cy.get(".nav-item .nav-link").eq(2)
//conduit text
cy.get(".banner div h1")
//A place to share your knowledge.
cy.get(".banner h1 + p ")
//globalfeed
cy.get(".feed-toggle ul li:nth-child(2)")
//Popular Tags
cy.get(".sidebar").find("p") //or cy.get(".sidebar>p")
//deserunt
cy.get(".tag-list a").last()
//readmore
cy.get("a.preview-link span").first()
//like
cy.get("button.btn.btn-sm.btn-outline-primary").first()
})

it(" inner page article",()=>{ 
    cy.visit("https://demo.productionready.io/#/article/If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863"); 
    //If we quantify the alarm.............
    cy.get(".banner h1")
    //imge
    cy.get(".article-meta > a").first()
    //Anah Benešová
    cy.contains("a","Anah Benešová")
    //
    cy.get(".info a + span").first()
    //fllow
    cy.get("span follow-btn button ").first()
    //favvorite
    cy.get("span favorite-btn button").first()
    //p
    cy.get("div.ng-binding p")
    //rerum
    cy.get("ul.tag-list li:first-child ")
    //quae
    cy.get("ul.tag-list li:last-child ")


})
})

