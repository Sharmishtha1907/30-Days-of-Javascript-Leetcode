**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
 
var createCounter = function(init) {
    let initt=init;
    let obj={
        increment:function(){
            initt=initt+1;
            return initt;
        },
        decrement:function(){
            initt=initt-1;
            return initt;
        },
        reset:function(){

            initt=init;
            return initt;
        }
    }
    return obj;

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */