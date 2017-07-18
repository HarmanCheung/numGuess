/**
 * Created by zhm on 17-7-18.
 */
class workshop{
    constructor(number1,number2,number3,number4){
        this.number = [number1,number2,number3,number4];
    }

    makeFourRandomNumber(){
        var randomNumber = new Array;
        for(var i = 0; ;i++){
            var j = parseInt(Math.random() * 10);
            if(randomNumber.indexOf(j) < 0){
                randomNumber.push(j);
            }
            if(randomNumber.length == 4){
                break;
            }
        }
        return randomNumber;
    }

    getResult(){
        var randomNumber1 = this.makeFourRandomNumber();
        var a = 0;
        var b = 0;
        for(var i in randomNumber1){
            if(this.number.indexOf(randomNumber1[i]) >= 0){
                if(this.number.indexOf(randomNumber1[i]) == i){
                    a++;
                }
                else{
                    b++;
                }
            }
        }
        console.log(this.number.join(','));
        console.log(randomNumber1.join(','));
        return a + 'A' + b + 'B';
    }

}


