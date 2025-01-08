
//declaring the variables of the keys in the numberpad
const one = document.getElementById('num1')
const two = document.getElementById('num2')
const three = document.getElementById('num3')

const four = document.getElementById('num4')
const five = document.getElementById('num5')
const six = document.getElementById('num6')

const seven = document.getElementById('num7')
const eight = document.getElementById('num8')
const nine = document.getElementById('num9')
const zero = document.getElementById('num0')
const point = document.getElementById('point')

//operators
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const mult = document.getElementById('mult')
const divi = document.getElementById('divi')

//function keys
const eql = document.getElementById('eql')
const clear = document.getElementById('clear')
const bksp = document.getElementById('bksp')

//declaring the result pad and input display
const display = document.getElementById('display')
const result = document.getElementById('res')

//set the result to zero
//result.value = 0



//function to type-in input numbers and operators on the keypad
function typeInput(num){

    //replace the display with the number if the display is just a zero
    if (display.value=='0'){   
        display.value = num
        result.value = result.value
    } 

    //add the numbers to the string value
    else {
        //special case for the '.'
        //make sure only one . is typed-in to avoid NaN values
        if(display.value.includes('.')){
            if(num=='.'){
                display.value = display.value
            }

            else {
                display.value += num
            }
        }

        else{
            display.value += num
        }    
    } 
}

//function to type in the operator
function typeOperator(oper){
    display.value = ""
    display.value = oper
}


//function for calculations(+-*/)
function calculation(oper){
    //if there is a +, do the addition
    if (display.value.includes('+')){
        //if the display is just the '+'
        if (display.value=='+'){
            display.value = oper
        }

        else{
            result.value = Number(result.value)+Number(display.value.replace('+',""))
        }     
    }

    //if there is a -, do the subtraction
    else if (display.value.includes('-')){
        //if the display is just the '-'
        if (display.value=='-'){
            display.value = oper
        }

        else{
            result.value = Number(result.value)-Number(display.value.replace('-',""))
        }
    }

    //if there is a *, do the multiplication
    else if (display.value.includes('*')){
        //if the display is just the '*'
        if (display.value=='*'){
            display.value = oper
        }

        else{
            result.value = Number(result.value)*Number(display.value.replace('*',""))
        }
    }

    //if there is a /, do the division
    else if (display.value.includes('/')){
        //if the display is just the '/'
        if (display.value=='/'){
            display.value = oper
        }

        else{
            result.value = Number(result.value)/Number(display.value.replace('/',""))
        }
    }

    //this is to make sure that calculations can be done to the result element 
    //even after there is a 0 or 
    else if (display.value=='0'){
        display.value = oper
    }

    else {
        result.value = display.value
    }
}

//function to clear the display when '=' is clicked
function eqlToClr(){
    display.value = 0
}

//event listeners for number pad
one.addEventListener("click", function(){typeInput(1)})
two.addEventListener("click", function(){typeInput(2)})
three.addEventListener("click", function(){typeInput(3)})
four.addEventListener("click", function(){typeInput(4)})
five.addEventListener("click", function(){typeInput(5)})
six.addEventListener("click", function(){typeInput(6)})
seven.addEventListener("click", function(){typeInput(7)})
eight.addEventListener("click", function(){typeInput(8)})
nine.addEventListener("click", function(){typeInput(9)})
zero.addEventListener("click", function(){typeInput(0)})
point.addEventListener("click", function(){typeInput('.')})


//function to clear the input
function clearDisplay(){
    display.value = ""
    result.value = 0
}

//backspace function
function backsp(){
    display.value = display.value.slice(0,-1)
}



//event listeners for operator pad
plus.addEventListener("click", function(){calculation('+')})
plus.addEventListener("click", function(){typeOperator('+')})

minus.addEventListener("click", function(){calculation('-')})
minus.addEventListener("click", function(){typeOperator('-')})

mult.addEventListener("click", function(){calculation('*')})
mult.addEventListener("click", function(){typeOperator('*')})

divi.addEventListener("click", function(){calculation('/')})
divi.addEventListener("click", function(){typeOperator('/')})


eql.addEventListener("click", function(){calculation()})
eql.addEventListener("click", function(){eqlToClr()})

clear.addEventListener("click", function(){clearDisplay()})
bksp.addEventListener("click", function(){backsp()})





/*
logic
5=any number 
+=any operator
-->when display is 5 and result is 0, clicking + makes result 5 and display+
-->when display is + and typing a 5 will just add the 5 to the display, dont 
    have to take care of that.
-->when display is +5, typing a - should do result value+5
-->when result value is 5, typing a 6 or a 300 and typing a + eventually should make 
    the result value to be 6 or 300 by replacing the 5
*/