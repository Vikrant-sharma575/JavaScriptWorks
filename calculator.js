function addtoscreen(x) 
{
	var input = document.getElementById('display');
    input.value+=x;
    if(x=='C')
    {
    	input.value='';
    }
	
}

function equals( )
{
	var input = document.getElementById('display');
	x = input.value;
	x=eval(x);
	input.value=x;
}

function squareRoot( ) 
{
	var input = document.getElementById('display');
    x=input.value;
    x=Math.sqrt(x);
    input.value=x;
}

function square() 
{
	var input = document.getElementById('display');
	x=input.value;
    x=Math.pow(x,2);
    input.value=x;
}

function backspace() 
{
	var input = document.getElementById('display');
	var char = input.value;
	var len = char.length-1;
    var reduced = char.substring(0,len);
    input.value = reduced;
}