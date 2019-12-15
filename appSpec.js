describe("appSpec", function() {

    describe("checkMail", function() {

        it("should make sure an @ exists in the string", function() {
            expect(checkEmail).toBeDefined();
            expect(checkEmail("fake@email.com")).toBe(true);
        });

        it("should return false if there is no @ sign in the email", function() {
            expect(checkEmail).toBeDefined();
            expect(checkEmail("fakeemail.com")).toBe(false);
        })

        it("should return false if the @ sign is at the beginning of email", function() {
            expect(checkEmail).toBeDefined();
            expect(checkEmail("@fakeemail.com")).toBe(false);
        })

        it("should return false if the @ sign is at the end of email", function() {
            expect(checkEmail).toBeDefined();
            expect(checkEmail("fakeemail.com@")).toBe(false);
        })
    });

    describe("checkPassword", function() {
        
        it("should return true if password contains a lowercase letter, uppercase letter and number", function() {
            expect(checkPassword).toBeDefined();
            expect(checkPassword("Pa5")).toBe(true);
        });

        it("should return false if missing a lowercase character", function() {
            expect(checkPassword).toBeDefined();
            expect(checkPassword("PA5")).toBe(false);
        });

        it("should return false if missing an uppercase character", function() {
            expect(checkPassword).toBeDefined();
            expect(checkPassword("pa5")).toBe(false);
        });

        it("should return false if missing a number character", function() {
            expect(checkPassword).toBeDefined();
            expect(checkPassword("Pas")).toBe(false);
        });
    });
});