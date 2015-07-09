var k='';

function gettext(z)
{   
	if(z=="DEL")
	k=k.substr(0,k.length-1);
 else if(z=="=")
	{
	 k=eval(k);
	 document.getElementById("Answer_Box").innerHTML='';
	 document.getElementById("Answer_Box").innerHTML=k;
	 k=k+"!";
	 return;
	}
	else
	{   if(k.charAt(k.length-1)=="!")
			if(z=="+" || z=="-" || z=="/" || z=="*")
			{k=k.substr(0,k.length-1);
			k=k+z;
			
			}
			else
			{
			
			k=k.substr(0,k.length-1);
			document.getElementById("Answer_Box").innerHTML='';
			k='';
			k=k+z;
			}
		else
			k=k+z;
	}	
    document.getElementById("Answer_Box").innerHTML=k;
}