//example of conditional or control flow
/* If statement can have any number of else if's but onlyone else 
*/ 

age = 24;

if(age > 18){
    console.log('You are permitted');
} else if (age < 18){
    comnsole.log('You are not permitted');
}

else{
    console.log('this is impossible');
}

//ternary operator 
age >= 18 ? console.log('you are permitted') : console.log('You are allowed');

//switch statement 
switch(age){
    case age >= 18:
        console.log(' You are permitted');
        break;
        case age < 18:
            console.log('You are not permitted');
            break;
            default:
                console.log('This is impossible');
}