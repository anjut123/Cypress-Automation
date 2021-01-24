describe("visit zero banking",()=>{
    it("Feedback ",()=>{
      


        cy.fixture("Feedback").then((readf)=>{
         readf.forEach(element => {
            cy.get("#name").type(element.name)
            cy.get("#email").type(element.email)
            cy.get("#subject").type(element.subject)
            cy.get("#comment").type(element.comments)
            cy.get("[name='clear']").click()
            
          });
        })

       
       
    })

    it.only("feedback entered",()=>{
        
      let element= function()
        {
            cy.readFile("Feedback.json").then((readf)=>{
              
                readf.forEach((data) =>{
                    console.log(data.key)
                })
            })
        }
       console.log(element())
       
    })
})