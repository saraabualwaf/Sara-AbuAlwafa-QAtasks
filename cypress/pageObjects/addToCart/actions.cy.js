class addToCartActions{
thelogovisible(){
    cy.get(".logo").should("be.visible");
}
searchforshirt(){

    cy.get("#search").type("shirt {enter}");
}
TheuserchoosetheproductX(){
    cy.get(".product-items li").first().click();
}
chooseSizeAndColor(number){
    cy.wait(1500);
    cy.log(number);
    cy.get(".swatch-attribute.size").contains("M").click();
    cy.get(".swatch-attribute.color").find(".swatch-option").last().click();
}
chooseColorSizeString(size,colorIndex){
    cy.wait(1500);
    cy.get(".swatch-attribute.size").contains(size).click();
    cy.get(".swatch-attribute.color").find(".swatch-option").eq(colorIndex).click();

}

clickonAddtocartbutton(){
    cy.get("#product-addtocart-button").click();
}
}export default addToCartActions