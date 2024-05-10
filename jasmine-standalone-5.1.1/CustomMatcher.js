const CustomMatcher = {
    toBeCalculator: function(){
        return {
            compare: function(actual, expected){
                const result = {
                    pass: false,
                    message: ''
                }
                if(actual instanceof Calculator){
                    result.pass = true;
                    result.message = '';
                }
                else{
                    result.pass = false;
                    result.message = `Expected ${actual} to be instanceof Calculator`;
                }
                return result;
            }
        }
    }
}