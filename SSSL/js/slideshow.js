//Presentational Slideshow Script- By Dynamic Drive
//For full source code and more DHTML scripts, visit http://www.dynamicdrive.com
//This credit MUST stay intact for legal use

var slideshow_width='1348px' //SET SLIDESHOW WIDTH (set to largest image's width if multiple dimensions exist)
var slideshow_height='410px' //SET SLIDESHOW HEIGHT (set to largest image's height if multiple dimensions exist)
var pause=1000 //SET PAUSE BETWEEN SLIDE (2000=2 seconds)
//var slidebgcolor="none"

var dropimages=new Array()
//SET IMAGE PATHS. Extend or contract array as needed
dropimages[0]="images/truck.png"
dropimages[1]="images/railway.png"
dropimages[2]="images/seaway.png"
dropimages[3]="images/airway.png"
//document.write("<a title=\"aeroprints.com [CC BY-SA 3.0 (http:\/\/creativecommons.org\/licenses\/by-sa\/3.0) or CC BY-SA 3.0 (http:\/\/creativecommons.org\/licenses\/by-sa\/3.0)], via Wikimedia Commons\" href=\"https:\/\/commons.wikimedia.org\/wiki\/File%3AVT-EJH_Airbus_A.310_Air_India_Cargo_(7179429859).jpg\"><img width=\"2048\" alt=\"VT-EJH Airbus A.310 Air India Cargo (7179429859)\" src=\"https:\/\/upload.wikimedia.org\/wikipedia\/commons\/thumb\/0\/0f\/VT-EJH_Airbus_A.310_Air_India_Cargo_%287179429859%29.jpg\/2048px-VT-EJH_Airbus_A.310_Air_India_Cargo_%287179429859%29.jpg\"\/><\/a>");



var droplinks=new Array()
//SET IMAGE URLs. Use "" if you wish particular image to NOT be linked:
droplinks[0]="services.html"
droplinks[1]="services.html"
droplinks[2]="services.html"
droplinks[3]="services.html"
//document.write("<a title=\"aeroprints.com [CC BY-SA 3.0 (http:\/\/creativecommons.org\/licenses\/by-sa\/3.0) or CC BY-SA 3.0 (http:\/\/creativecommons.org\/licenses\/by-sa\/3.0)], via Wikimedia Commons\" href=\"https:\/\/commons.wikimedia.org\/wiki\/File%3AVT-EJH_Airbus_A.310_Air_India_Cargo_(7179429859).jpg\"><img width=\"2048\" alt=\"VT-EJH Airbus A.310 Air India Cargo (7179429859)\" src=\"https:\/\/upload.wikimedia.org\/wikipedia\/commons\/thumb\/0\/0f\/VT-EJH_Airbus_A.310_Air_India_Cargo_%287179429859%29.jpg\/2048px-VT-EJH_Airbus_A.310_Air_India_Cargo_%287179429859%29.jpg\"\/><\/a>");



////NO need to edit beyond here/////////////

var preloadedimages=new Array()
for (p=0;p<dropimages.length;p++){
preloadedimages[p]=new Image()
preloadedimages[p].src=dropimages[p]
}

var ie4=document.all
var dom=document.getElementById

if (ie4||dom)
document.write('<div style="position:relative;width:'+slideshow_width+';height:'+slideshow_height+';overflow:hidden"><div id="canvas0" style="position:absolute;width:'+slideshow_width+';height:'+slideshow_height+';left:-'+slideshow_width+'"></div><div id="canvas1" style="position:absolute;width:'+slideshow_width+';height:'+slideshow_height+';left:-'+slideshow_width+'"></div></div>')
else
document.write('<a href="javascript:rotatelink()"><img name="defaultslide" src="'+dropimages[0]+'" border=0></a>')

var curpos=parseInt(slideshow_width)*(-1)
var degree=10
var curcanvas="canvas0"
var curimageindex=linkindex=0
var nextimageindex=1


function movepic(){
if (curpos<0){
curpos=Math.min(curpos+degree,0)
tempobj.style.left=curpos+"px"
}
else{

clearInterval(dropslide)
nextcanvas=(curcanvas=="canvas0")? "canvas0" : "canvas1"
tempobj=ie4? eval("document.all."+nextcanvas) : document.getElementById(nextcanvas)
var slideimage='<img src="'+dropimages[curimageindex]+'" border=0>'
tempobj.innerHTML=(droplinks[curimageindex]!="")? '<a href="'+droplinks[curimageindex]+'">'+slideimage+'</a>' : slideimage
nextimageindex=(nextimageindex<dropimages.length-1)? nextimageindex+1 : 0
setTimeout("rotateimage()",pause)
}
}

function rotateimage(){
if (ie4||dom){
resetit(curcanvas)
var crossobj=tempobj=ie4? eval("document.all."+curcanvas) : document.getElementById(curcanvas)
crossobj.style.zIndex++
var temp='setInterval("movepic()",30)'
dropslide=eval(temp)
curcanvas=(curcanvas=="canvas0")? "canvas1" : "canvas0"
}
else
document.images.defaultslide.src=dropimages[curimageindex]
linkindex=curimageindex
curimageindex=(curimageindex<dropimages.length-1)? curimageindex+1 : 0
}

function rotatelink(){
if (droplinks[linkindex]!="")
window.location=droplinks[linkindex]
}

function resetit(what){
curpos=parseInt(slideshow_width)*(-1)
var crossobj=ie4? eval("document.all."+what) : document.getElementById(what)
crossobj.style.left=curpos+"px"
}

function startit(){
var crossobj=ie4? eval("document.all."+curcanvas) : document.getElementById(curcanvas)
crossobj.innerHTML='<a href="'+droplinks[curimageindex]+'"><img src="'+dropimages[curimageindex]+'" border=0></a>'
rotateimage()
}

if (ie4||dom)
window.onload=startit
else
setInterval("rotateimage()",pause)
