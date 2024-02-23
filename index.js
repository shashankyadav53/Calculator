let elm = document.getElementById('data'); // return Element 
let btn = document.querySelectorAll('button'); // return NodeList
let string = "";

btn.forEach((btn)=> {
    btn.addEventListener('click',function(e){

        if(e.target.innerText == 'Enter'){
            string = eval(string)
            elm.value = string;
        }
        else if(e.target.innerText == 'AC'){
            string = ""
            elm.value = string;
        }
        else if(e.target.innerText == 'DE'){
            string = string.substring(0,string.length-1)
            elm.value = string;
        }
        else{
            string = string + e.target.innerText;
            elm.value = string;
        }
    })
});