class addToCartAssertions{

    Theproductshouldbeadded(message){
        cy.wait(1000)
        cy.get("[role=alert]").should("contain",message)
    }

    Thecounter(){
        cy.get(".counter-number").should("be.visible")
    }


}export default addToCartAssertions