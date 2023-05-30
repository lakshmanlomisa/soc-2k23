var num1=document.getElementById('num1');
var num2=document.getElementById('num2');
var result=document.getElementById('result');
var form=document.getElementById('whatpercent');
form.addEventListener('submit',function(){
    if(!num1.value || !num2.value ){
        alert("enter values ra chinna");
    } else{
        var x=parseFloat(num1.value);
        var y=parseFloat(num2.value); 
        var a=x/y;
        var b=a*100;
        result.innerText="answer"+b+"%";
        event.preventDefault();

        
    }

}
)