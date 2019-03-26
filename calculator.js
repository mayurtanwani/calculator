var input =document.querySelector("#input1");
var input1 =document.querySelector("#input2");

var allbuttons = document.querySelectorAll(".button");
var clear = document.querySelector(".clear");
var operators = document.querySelectorAll(".operator");
var decimal = document.querySelector(".decimal");
var show = "";

var equals = document.querySelector(".answer")
var operand1=0;
var operand2=0;
var d =0;
var a;
var b;
var c = 0;
var a1=0;
var a2=0;
input.value=0;
input1.value =0;


for( var i=0; i<allbuttons.length; i++){
    
    allbuttons[i].addEventListener("click", function(){
        show = show + this.value;
        input1.value = show;
        if (c==0){

            if(d==0){
                operand1 = operand1*10 + Number(this.value);
                input.value = operand1;
                console.log(operand1);
                a=operand1;

            } else if(d==1){
                operand1 = (operand1*10 + Number(this.value))/10;
                input.value = operand1;
                console.log(operand1);
                a=operand1;

            }
        
        } else{
            if(d==0){
                operand2 = operand2*10 + Number(this.value);
            input.value = operand2;
            b = Number(operand2);
            console.log(a);
            console.log(b);
            input.value = Number(operate( a,b,operator));
            
            }  else if(d==1){
            operand2 = (operand2*10 + Number(this.value))/10;
            input.value = operand2;
            b = Number(operand2);
            console.log(a);
            console.log(b);
            input.value = Number(operate( a,b,operator));

        
        }
        }
        
    })

}

    
for(var i=0; i< operators.length; i++){

    operators[i].addEventListener("click", function(){


        show = show + this.value;
        input1.value = show;



            operator = this.value;
            if(c!=0){
            //input.value = operate( a,b,operator);
            a =  input.value;
            b = 0;
            operand2 = 0;
            }
            c = 1;
            d=0;
      
      }
    )

}



decimal.addEventListener("click", function(){

    d=1;
    show = show + this.value;
        input1.value = show;
})

equals.addEventListener("click", function(){
    
    input.classList.add("bold");

})
    
function operate (a,b,e){
    
    
    if(e == "+"){

        input.value = add(Number(a),Number(b));
    }else if(e == "-"){

        input.value = subtract(Number(a),Number(b));
    }else if(e == "*"){

        input.value = multiply(Number(a),Number(b));
    }else if(e == "%"){

        input.value = divide(Number(a),Number(b));
    }

    return (Number(input.value));

}

function add(a,b){

    return(a+b)
}

function divide(a,b){

    return(a/b)
}

function multiply(a,b){

    return(a*b)
}

function subtract(a,b){

    return(a-b);
}

clear.addEventListener("click", function(){


    reset();
})


function reset(){

    input.value = 0;
    a=0;
    b=0;
    operand1=0;
    operand2=0;
    c=0;
    d=0;
    input1.value = 0;
    show = "";


}