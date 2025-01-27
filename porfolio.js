// js code for the running text on intro 
var typed = new Typed('#element', {
    strings: ['Front-End Developer', 'UI/UX Designer','Video Editor','Graphics Designer'],
    typeSpeed: 35,
  });

//js code to hide items under div on edu_section
var div= document.getElementById("div1");
function hideshow()
{
  // div.style.visibility="visible";
  if (div.style.display==="none")
  {
    div.style.display="block";
  }
  else
  {
    div.style.display="none";
  }
}
var divv= document.getElementById("div2");
function hideshow2()
{
  // divv.style.visibility="visible";
  if (divv.style.display==="none")
  {
    divv.style.display="block";
  }
  else
  {
    divv.style.display="none";
  }
}
var divvv= document.getElementById("div3");
function hideshow3()
{
  // divvv.style.display="none";
  if (divvv.style.display==="none")
  {
    divvv.style.display="block";
  }
  else
  {
    divvv.style.display="none";
  }
}

//js code to rewrite button sign and reverse

document.getElementById("plus").addEventListener("click",rewrite);
function rewrite(){
  if (div.style.display==="none"){
  document.getElementById("plus").innerHTML="+";
  }
  else
  {
  document.getElementById("plus").innerHTML="-";
  }
}

document.getElementById("plus2").addEventListener("click",rewrite2);
function rewrite2(){
  if (divv.style.display==="none"){
  document.getElementById("plus2").innerHTML="+";
  }
  else
  {
  document.getElementById("plus2").innerHTML="-";
  }
}

document.getElementById("plus3").addEventListener("click",rewrite3);
function rewrite3(){
  if (divvv.style.display==="none"){
  document.getElementById("plus3").innerHTML="+";
  }
  else
  {
  document.getElementById("plus3").innerHTML="-";
  }
}


// var scrl=document.getElementById("slider").addEventListener("scroll",sliscr)
// function sliscr(){
//   scrl.style.d
// }



document.getElementById()