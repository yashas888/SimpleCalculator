let val = document.querySelector("input");
let btn = document.querySelectorAll(".btn");
let string = "";

Array.from(btn).forEach((btns)=>{
    btns.addEventListener("click",(e)=>{
        buttonVal = e.target.innerHTML;
        if(buttonVal == '='){
                    string = eval(string);
                    val.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = '';
            val.value = string;
        }
        else{
            buttonVal = e.target.innerHTML;
        string = string + buttonVal;
        val.value = string;
        }
        
    })
})