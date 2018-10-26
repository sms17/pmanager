var request = require("request");
// Routes Testing
describe("Server", () => {
    var ser;
    beforeAll(()=> {
        server = require("../server");
    });
    console.log("Routes Testing Started");
    
    describe("/", function() {
      it("get", function(done) {
        request.get("http://localhost:4000/", function(error, response, body) {
          expect(response.statusCode).toEqual(200);
          done();
        });
      });
  
      it("get", function(done) {
        request.post("http://localhost:4000/test", {json: true, body: {}}, function (error, response) {
            expect(response.statusCode).toEqual(404);
            done();
        });
      });
    });
  });
