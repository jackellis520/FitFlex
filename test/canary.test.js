var expect = require("chai").expect;

describe("canary test", function() {
    // A test set up to always pass
    //This helps ensure our testing suite is set up correctly before writing real tests
    it("should pass this canary test", function() {
        expect(true).that.be.true;
    });
});
