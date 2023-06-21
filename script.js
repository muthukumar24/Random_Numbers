function ransomFunction()
{
  var x = Number(document.getElementById("input").value);
  var a = Math.floor(Math.random()*x);
  document.getElementById("output").innerHTML = a;
 }