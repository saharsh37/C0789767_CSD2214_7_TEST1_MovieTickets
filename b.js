$(document).ready(function() {
  $('input[type="checkbox"]').click(function () {
 var count=document.querySelectorAll("input:checked").length
  document.getElementById('no_seat').innerHTML = '';
  document.getElementById('no_seat').innerHTML = count;
var e = document.getElementById("m_name").value;
  
  if(e=="Dabbang")
  {

p=count*10;
document.getElementById('total').innerHTML = '';
  document.getElementById('total').innerHTML = p;
  }
  else if(e=="Master")
  {
p=count*12;
document.getElementById('total').innerHTML = '';
  document.getElementById('total').innerHTML = p;

  }
  else if(e=="Sultan")
  {
p=count*8;
document.getElementById('total').innerHTML = '';
  document.getElementById('total').innerHTML = p;

  }
  else{
p=count*9;
document.getElementById('total').innerHTML = '';
  document.getElementById('total').innerHTML = p;

  } 

});
 
});


function get_movie() {

      var e = document.getElementById("m_name").value;
      document.getElementById('movie_name').innerHTML = '';
      document.getElementById('movie_name').innerHTML = e;
      if(e=="Dabbang")
      {
document.getElementById('price').innerHTML = '';
      document.getElementById('price').innerHTML = "$10";
  document.getElementById('no_seat').innerHTML = '';

      }
      else if(e=="Master")
      {
document.getElementById('price').innerHTML = '';
      document.getElementById('price').innerHTML = "$12";
  document.getElementById('no_seat').innerHTML = '';

      }
      else if(e=="Sultan")
      {
document.getElementById('price').innerHTML = '';
      document.getElementById('price').innerHTML = "$8";
  document.getElementById('no_seat').innerHTML = '';

      }

      else{
            document.getElementById('price').innerHTML = '';
      document.getElementById('price').innerHTML = "$9";
  document.getElementById('no_seat').innerHTML = '';

      }
}
 
