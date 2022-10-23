var guess=Math.floor(Math.random()*100)+1;

function response()
{
  var n=document.getElementById("in").value;
  if(n==guess)
    {
      document.getElementById("out").innerHTML="Congrats! Got it corectly";
    }
  else if(n>guess)
   {
     document.getElementById("out").innerHTML="Guess a smaller number";
   }
  else if(guess>n)
    {
      document.getElementById("out").innerHTML="Guess a greater number";
    }
}