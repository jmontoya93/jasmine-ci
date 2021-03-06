describe('calculator.js', function(){
    describe('Calculator', function(){
        let calculator;
        let calculator2;

        beforeEach(function() {
            calculator = new Calculator();
            calculator2 = new Calculator();
        });

        afterEach(function() {
            // Ready for possible cleanup
        });

        it('should initialize the total', function() {
            expect(calculator.total).toBe(0);
            expect(calculator.total).toBeFalsy();
        }); 

        it('can be instanciated', function() {
            jasmine.addMatchers(customMatchers);

            expect(calculator).toBeTruthy();
            expect(calculator2).toBeTruthy();
            expect(calculator).toEqual(calculator2);
            expect(calculator).toBeCalculator();
            expect(3).not.toBeCalculator();

            expect(calculator.constructor.name).toContain('Calc');
        });

        it('instanciates unique object', function() {
            expect(calculator).not.toBe(calculator2);
        });

        it('has common operations', function() {
            expect(calculator.add).not.toBeUndefined();
            expect(calculator.subtract).toBeDefined();
            expect(calculator.multiply).not.toBeUndefined();
            expect(calculator.divide).toBeDefined();
        });

        it('can overwrite total', function() {
            calculator.total = null;

            expect(calculator.total).toBeNull();
        });

        describe('add()', function(){
            it('should add numbers to total ', function(){
                calculator.add(5);
    
                expect(calculator.total).toBe(5);
            });

            it('returns total', function() {
                calculator.total= 50;
    
                expect(calculator.add(20)).toBe(70);
                expect(calculator.total).toMatch(/-?\d+/);
                expect(typeof calculator.total).toMatch('number');
                expect(calculator.total).toBeNumber();
            });
        });

        describe('subtract()', function(){
            it('should subtract numbers from total ', function(){
                calculator.total = 30;
                calculator.subtract(5);
    
                expect(calculator.total).toBe(25);
            });
        });

        describe('multiply()', function(){
            it('should multiply total by number ', function(){
                calculator.total = 4;
                calculator.multiply(5);
    
                expect(calculator.total).toBe(20);    
            });

            it('does not handle NaN', function(){    
                calculator.total= 20;
                calculator.multiply('a');
    
                expect(calculator.total).toBeNaN();
            });
        });

        describe('divide()', function(){
            it('should divide total by number ', function(){
                calculator.total = 9;
                calculator.divide(3);
    
                expect(calculator.total).toBe(3);    
            });

            it('handles divide by 0', function() {
                expect(function() {calculator.divide(0)}).toThrow();
                expect(function() {calculator.divide(0)}).toThrowError(Error);
                expect(function() {calculator.divide(0)}).toThrowError(Error, 'Cannot divide by 0');
            });
        });

        describe('get version', function() {
            it('fetches version from external source', function(done) {
                spyOn(window,'fetch').and.returnValue(Promise.resolve(
                    new Response('{"version": "0.1"}')
                ));
                calculator.version.then(function(version) {
                    expect(version).toBe('0.1');

                    done();
                });
            })

            it('fetches version from external source (async)', async function(done) {
                spyOn(window,'fetch').and.returnValue(Promise.resolve(
                    new Response('{"version": "0.1"}')
                ));
                const version = await calculator.version;
                
                expect(version).toBe('0.1');

                done();
            })
        });
    });
});