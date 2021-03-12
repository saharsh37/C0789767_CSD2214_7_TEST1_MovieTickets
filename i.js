function myfun()
           {
            
             var a = document.getElementById("Card Holder Name").value;
                
             if(a=="") {
	         alert("Please Enter Card Holder Name");
             return false;
             }

             var b = document.getElementById("Card Number").value;
                
             if(b=="") {
	         alert("Please Enter Card Number");
             return false;
             }
              if(isNaN(b)){
             alert("Please Enter only numbers in card number");
             return false;
             }

             var c = document.getElementById("CVV").value;
                
             if(c=="") {
	         alert("Please Enter CVV");
             return false;
             }
             if(isNaN(c)){
             alert("Please Enter only numbers in CVV");
             return false;
             }
             if(c.length<3){
             alert("Please Enter 3 digit CVV");
             return false;
             } 
             if(c.length>3){
             alert("Please Enter 3 digit CVV");
             return false;
             } 

             var d = document.getElementById("Expiration Date").value;
                
             if(d=="") {
	         alert("Please Enter expiration month and year");
             return false;
             }
            
   
             
           }