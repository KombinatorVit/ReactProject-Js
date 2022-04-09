



function sumInput(){

    let numbers = [];


    while(true){

        let value = prompt('Введите число');
 
        if(value === '' || value === null || !isFinite(value)){
             break;
            }
            numbers.push(+value);
    }
    let sum = 0;


    for(let elArr of numbers){
        sum +=elArr;
    }
    return sum;

}


console.log(sumInput());