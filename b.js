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
  document.getElementById('no_seat').innerHTML = ';

      }
}
             
            
