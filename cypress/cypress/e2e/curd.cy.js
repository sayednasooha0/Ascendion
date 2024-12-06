describe("API Tests", () => {
    it("API GET Request", () => {
      cy.request({
        method: "GET",
        url: "https://reqres.in/api/users/2",
        failOnStatusCode: false, // To prevent Cypress from failing on non-2xx/3xx statuses
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("data");
        expect(response.body.data.first_name).to.contain("Janet");
        cy.log(JSON.stringify(response.body));
      });
    });
   
    it("API POST Request", () => {
      cy.request({
        method: "POST",
        url: "https://reqres.in/api/users",
        body: {
          name: "danish",
          job: "CEO123",
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.name).to.eq("danish");
        expect(response.body).to.have.property("job", "CEO123");
        cy.log(JSON.stringify(response.body));
      });
    });
   
    it("API PUT Request", () => {
      cy.request({
        method: "PUT",
        url: "https://reqres.in/api/users/2",
        body: {
          name: "wanda",
          job: "saveEarth",
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq("wanda");
        expect(response.body).to.have.property("job", "saveEarth");
        cy.log(JSON.stringify(response.body));
      });
    });
   
    it("API DELETE Request", () => {
      cy.request({
        method: "DELETE",
        url: "https://reqres.in/api/users/2",
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(204);
        cy.log("Resource deleted successfully");
      });
    });
  });