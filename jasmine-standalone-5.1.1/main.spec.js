

describe("main.js", () => {
    describe("schema", () => {
        describe('handleUserInput()', () => {
            beforeAll(() => {

            })
            afterAll(() => {

            })

            it('check if input and display elements are defined', () => {
                expect(num).toBeDefined();
                expect(display).toBeDefined();
            })


            it('should throw an error when first number entered by user is invalid', () => {
                spyOn(sch, 'valiDateExpression');
                sch.handleUserInput("a + 5");
                expect(sch.valiDateExpression).toHaveBeenCalled();
                expect(sch.valiDateExpression).toHaveBeenCalledWith("invalid expression, operation not recognized.");
                expect(sch.valiDateExpression).toHaveBeenCalledTimes(1);
            })

            it('should throw an error when second number entered by user is invalid', () => {
                spyOn(sch, 'valiDateExpression');
                sch.handleUserInput("5 + a");
                expect(sch.valiDateExpression).toHaveBeenCalled();
                expect(sch.valiDateExpression).toHaveBeenCalledWith("invalid expression, operation not recognized.");
                expect(sch.valiDateExpression).toHaveBeenCalledTimes(1);
            })

            it('should throw an error when operator entered by user is invalid', () => {
                spyOn(sch, 'valiDateExpression');
                sch.handleUserInput("5 _ 5");
                expect(sch.valiDateExpression).toHaveBeenCalled();
                expect(sch.valiDateExpression).toHaveBeenCalledWith("invalid expression, operation not recognized.");
                expect(sch.valiDateExpression).toHaveBeenCalledTimes(1);
            })

        })

        describe('handleCases()', () => {
            it('should call add()', () => {
                spyOn(sch, 'add')
                sch.handleUserInput("5 + 3");
                expect(sch.add).toHaveBeenCalled();
                expect(sch.add).toHaveBeenCalledWith(5, 3);
                expect(sch.add).toHaveBeenCalledTimes(1);
            })

            it('should call add() and throw an error(Demo example)', () => {
                spyOn(sch, 'add').and.throwError("add method error")
                expect(() => sch.handleUserInput("5 + 3")).toThrowError("add method error");
                expect(sch.add).toHaveBeenCalled();
                expect(sch.add).toHaveBeenCalledWith(5, 3);
                expect(sch.add).toHaveBeenCalledTimes(1);
            })

            it('should call substract()', () => {
                spyOn(sch, 'substract');
                sch.handleUserInput("5 - 3");
                expect(sch.substract).toHaveBeenCalled();
                expect(sch.substract).toHaveBeenCalledWith(5, 3);
                expect(sch.substract).toHaveBeenCalledTimes(1);
            })

            it('should call multiply()', () => {
                spyOn(sch, 'multiply');
                sch.handleUserInput("5 * 3");
                expect(sch.multiply).toHaveBeenCalled();
                expect(sch.multiply).toHaveBeenCalledWith(5, 3)
                expect(sch.multiply).toHaveBeenCalledTimes(1);
            })

            it('should call divide()', () => {
                spyOn(sch, 'division');
                sch.handleUserInput("10 / 5");
                expect(sch.division).toHaveBeenCalled();
                expect(sch.division).toHaveBeenCalledWith(10, 5)
                expect(sch.division).toHaveBeenCalledTimes(1);
            })
        })
    })

    describe("asyncSchema", () => {
        describe("handleAsyncCalls()", () => {
            it("fetch list of users", async () => {
                const users = [
                    {id: 1, firstname: "Smith", lastname: "Blake"},
                    {id: 2, firstname: "Mary", lastname: "Payne"}
                ]
                spyOn(window, 'fetch').and.returnValue(Promise.resolve([{id: 1, firstname: "Smith", lastname: "Blake"},
                {id: 2, firstname: "Mary", lastname: "Payne"}]));

                const result = await asySch.handleAsyncCalls("https://jsonplaceholder.typicode.com/users");
                
                expect(result).toEqual(users);

            })
        })
    })

    // * .and.stub()
    // * .and.callThrough()
    // * .and.callFake(() => value)
    // * .and.returnValue(value)
    // * .and.returnValues(value1, value2, ...rest)
    // * .and.throwError(message)

    // .and.callThrough calls the mock method() and also call the actual implementation of the method()

    // Jasmine is made for unit testing. Unit tests are supposed to test only one [component] of your application.

    // [Component] can be a [function], [an object], [a module] basically everything self-contained that acts like a black box to the outside world.

    // You usually want to avoid that your unit tests failed because another component failed. That's why you want to test your component in isolation as much as possible.

    // We don't want these dependencies to execute when we write suites for our specs.

    // We need to isolate those dependencies, this is the use case for spies.

    // Spies create [test doubles] and help us isolate for true unit testing

    // [A test double is an object] that can stand in for a real object in a test i.e like a duplicate object
    //[Note test doubles is also called spies]


})