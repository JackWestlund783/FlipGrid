describe("appSpec", function() {

    describe("checkMail", function() {

        beforeEach(function() {
            spyIndexOf = spyOn(String.prototype, 'indexOf').and.callThrough();
        });

        it("should make sure an @ exists in the string", function() {
            expect(checkEmail).toBeDefined();
            expect(checkEmail("fake@email.com")).toBe(true);
            expect(String.prototype.indexOf).toHaveBeenCalled();
            expect(spyIndexOf.calls.count()).toEqual(1);
        });

        it("should return false if there is no @ sign in the email", function() {
            expect(checkEmail).toBeDefined();
            expect(checkEmail("fakeemail.com")).toBe(false);
            expect(String.prototype.indexOf).toHaveBeenCalled();
            expect(spyIndexOf.calls.count()).toEqual(1);
        })

        it("should return false if the @ sign is at the beginning of email", function() {
            expect(checkEmail).toBeDefined();
            expect(checkEmail("@fakeemail.com")).toBe(false);
            expect(String.prototype.indexOf).toHaveBeenCalled();
            expect(spyIndexOf.calls.count()).toEqual(1);
        })

        it("should return false if the @ sign is at the end of email", function() {
            expect(checkEmail).toBeDefined();
            expect(checkEmail("fakeemail.com@")).toBe(false);
            expect(String.prototype.indexOf).toHaveBeenCalled();
            expect(spyIndexOf.calls.count()).toEqual(1);
        })
    });

    describe("checkPassword", function() {
        
        beforeEach(function() {
            spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.callThrough();
            spytoLowerCase = spyOn(String.prototype, 'toLowerCase').and.callThrough();
        });

        it("should return true if password contains a lowercase letter, uppercase letter and number", function() {
            expect(checkPassword).toBeDefined();
            expect(checkPassword("Pa5")).toBe(true);
            expect(String.prototype.toUpperCase).toHaveBeenCalled();
            expect(spytoUpperCase.calls.count()).toEqual(1);
            expect(String.prototype.toLowerCase).toHaveBeenCalled();
            expect(spytoLowerCase.calls.count()).toEqual(1);
        });

        it("should return false if missing a lowercase character", function() {
            expect(checkPassword).toBeDefined();
            expect(checkPassword("PA5")).toBe(false);
            expect(String.prototype.toUpperCase).toHaveBeenCalled();
            expect(spytoUpperCase.calls.count()).toEqual(1);
            //and logic will short circuit causing .toLowerCase not to be called
            expect(spytoLowerCase.calls.count()).toEqual(0);
        });

        it("should return false if missing an uppercase character", function() {
            expect(checkPassword).toBeDefined();
            expect(checkPassword("pa5")).toBe(false);
            expect(String.prototype.toUpperCase).toHaveBeenCalled();
            expect(spytoUpperCase.calls.count()).toEqual(1);
            expect(String.prototype.toLowerCase).toHaveBeenCalled();
            expect(spytoLowerCase.calls.count()).toEqual(1);
        });

        it("should return false if missing a number character", function() {
            expect(checkPassword).toBeDefined();
            expect(checkPassword("Pas")).toBe(false);
            expect(String.prototype.toUpperCase).toHaveBeenCalled();
            expect(spytoUpperCase.calls.count()).toEqual(1);
            expect(String.prototype.toLowerCase).toHaveBeenCalled();
            expect(spytoLowerCase.calls.count()).toEqual(1);
        });
    });
});