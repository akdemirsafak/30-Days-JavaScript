var age=26

// Else if
if(age>=18 && age<50){
    console.log('You young')
}else if(age<18){
    console.log('You are child')
}else{
    console.log('You are old')
}

// Switch Case

let date=new Date()
switch(date.getDay){
    case 0:
        console.log('Today is Sunday')
        break
    case 1:
        console.log('Today is Monday')
        break
    case 2:
        console.log('Today is Tuesday')
        break
    case 3:
        console.log('Today is Wednesday')
        break
    case 4:
        console.log('Today is Thursday')
        break
    case 5:
        console.log('Today is Friday')
        break
    case 6:
        console.log('Today is Saturday')
        break
    default:
        console.log('Invalid day')
        break
}

// Do while

// work 1 time and check condition
let number=1;
do{
    console.log('I am inside do while loop')
    number++;
}while(number==1)


// While
//When number == 1 will work
    while(number==1){
        console.log('I am inside while loop')
        number++;
    }