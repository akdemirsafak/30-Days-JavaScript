// Functions

// Function declaration
function greet() {
    console.log('Hello there!');
    }


    greet(); // call function

    // Function expression
    // This function an anonymous function(without name)
    const speak = function(){
        console.log('Good day!');
        }

    speak(); //call function

    // Arrow function
    const arrow=()=>{
        console.log('Arrow function');
        }
    arrow();

    // Function with param
    const speakName=(name)=>{
        console.log(`Good day ${name}`);
        }
    speakName('Brad');
    //Function returning a value
    const sum=(a,b)=>{
        return a+b;
        }

    console.log(sum(3,5));

    // Unlimited params
    function sumAll(){
        let sum=0;
        for(let i=0;i<arguments.length;i++){
            sum+=arguments[i];
            }
        return sum;
        }
    console.log(sumAll(1,2,3,4,5));
    console.log(sumAll(1,2,3))

    // Unlimited params arrow function
    const sumAll1=(...args)=>{
        let sum=0;
        for(let arg of args){
            sum+=arg;
            }
        return sum;
        }
    console.log(sumAll1(1,2,3,4,5)); 

    // Function with default value
    const sumAll2=(a=1,b=2)=>{
        return a+b;
        }

    console.log(sumAll2());

    
