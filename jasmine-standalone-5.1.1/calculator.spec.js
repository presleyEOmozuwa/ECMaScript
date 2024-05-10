
describe("calculator.js", () => {
    let cal = null;
    beforeEach(() => {
        cal = new Calculator();
    })

    afterEach(() => {
        // used to clean up after each spec execution
    })
    
    describe('calculator', () => {
        describe('add()', () => {
            it("should add two numbers", () => {
                const { add } = cal;
                expect(add(10, 5)).toBe(15);
            })
        })

        describe('substract()', () => {
            it("should substract a number from another number", () => {
                const { substract } = cal;
                expect(substract(10, 5)).toBe(5);
            })
        })

        describe('multiply()', () => {
            it("should multiply two numbers", () => {
                const { multiply } = cal;
                expect(multiply(10, 5)).toBe(50);
            })
        })

        describe('divide()', () => {
            it("should divide a number with another number", () => {
                const { divide } = cal;
                expect(divide(10, 5)).toBe(2);
            })
        })

        it("should throw a message error when any of the input parameter is zero", () => {
            const { divide } = cal;
            expect(() => divide(0, 5)).toThrowError("parameter cannot be zero");
        })

        it("should match regex", () => {
            const question = "What is your name?";
            expect(question).toMatch(/What is your name/);
        })

        it("should return a value", () => {
            const user = { name: "Smith", lname: "Blake" };
            // use jasmine.anything() when you are not sure of the actual value but certain that is not a null or undefined value
            expect(user).toEqual(jasmine.anything())
        })

        it("should check any", () => {
            class User {
                constructor(firstname, lastname) {
                    this.firstname = firstname;
                    this.lastname = lastname;
                }
            }
            const user = new User("Smith", "Blake");
            expect(user).toEqual(jasmine.any(User));
        })

        it("should check object keys", () => {
            class User {
                constructor(firstname, lastname) {
                    this.firstname = firstname;
                    this.lastname = lastname;
                }
            }
            const user = new User("Smith", "Blake");
            expect(user).toBeDefined();
            expect(user).toEqual(jasmine.objectContaining({
                firstname: "Smith",
                lastname: "Blake"
            }));
        })

        it("should be instance of Calculator", () => {
            jasmine.addMatchers(CustomMatcher);
            const cal = new Calculator();
            expect(cal).toBeCalculator()
        })

        it("should be of type number", () => {
            const num = 10;
            expect(num).toEqual(jasmine.any(Number));
        })

    })

    // Setup and Teardown is part of the life circle for our suites i.e describe level

    // Setup is where you place prerequisite for your specs i.e things that should happen [before] your tests run.

    // jasmine provides two methods for this
        // beforeEach
        // beforeAll
        
    // Teardown in the life cycle of our suite is used to clean up the steps for your specs i.e things that should happen [after] your tests run

    // jasmine provides two methods for this
        // afterEach
        // afterAll

})