/**
 * Created by zhm on 17-7-18.
 */
let readlineSync = require('readline-sync');


class workshop{
    
    constructor(){
        let number1 = readlineSync.question('Please input number1 ');
        let number2 = readlineSync.question('Please input number2 ');
        let number3 = readlineSync.question('Please input number3 ');
        let number4 = readlineSync.question('Please input number4 ');
        this.number = [parseInt(number1),parseInt(number2),parseInt(number3),parseInt(number4)];
    }
    getUserNumber(){
        return this.number;
    }

    makeFourRandomNumber(){
        let randomNumber = new Array;
        for(let i = 0; ;i++){
            let j = parseInt(Math.random() * 10);
            if(randomNumber.indexOf(j) < 0  ){
                randomNumber.push(j);
            }
            if(randomNumber.length == 4){
                break;
            }
        }
        return randomNumber;
    }

    getResult(){
        let userNumber = this.getUserNumber();
        let randomNumber = this.makeFourRandomNumber();
        let a = 0;
        let b = 0;
        for(let i in randomNumber){
            if(userNumber.indexOf(randomNumber[i]) >= 0){
                if(userNumber.indexOf(randomNumber[i]) == i){
                    a++;
                }
                else{
                    b++;
                }
            }
        }
        console.log(userNumber.join(','));
        console.log(randomNumber.join(','));
        console.log(a + 'A' + b + 'B');
    }

}


module.exports.workshop = workshop;