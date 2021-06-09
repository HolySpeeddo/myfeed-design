var aText = new Array(
"MyFeed"
);
var iSpeed = 200; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
 
function typewriter()
{
 sContents =  ' ';
 var destination = document.getElementById("text");
 

 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 200);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
