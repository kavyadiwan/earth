const $climate = document.getElementById("climate");
const $consumption = document.getElementById("consumption");
const $resources = document.getElementById("resources");
const $people = document.getElementById("people");

$climate.onclick = () =>{
    document.body.style.background = "url('https://i1.faceprep.in/prograd-junior/climate-change-bg.png')";
    document.body.style.backgroundsize = "100% 100%";
    $climate.style.backgroundColor = "#2f80ed";
    $consumption.style.backgroundColor = "transparent";
    $resources.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
    document.getElementById("amount").innerHTML = "2,911,343,321";
    document.getElementById("cause").innerHTML = "Tons of CO2 emitted in the atmosphere";
}
$consumption.onclick = () =>{
   
     document.body.style.background = "url('https://i1.faceprep.in/prograd-junior/food-wastage-bg.png')";
    document.body.style.backgroundsize = "100% 100%"
    $climate.style.backgroundColor = "transparent";
    $consumption.style.backgroundColor = "#2f80ed";
    $resources.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
    document.getElementById("amount").innerHTML = "878,262,909";
    document.getElementById("cause").innerHTML = "Tons of food lost and water wasted";
}
$resources.onclick = () =>{
 document.body.style.background = "url('https://i1.faceprep.in/prograd-junior/natural-resources-bg.png')";
    document.body.style.backgroundsize = "100% 100%"
    $climate.style.backgroundColor = "transparent";
    $consumption.style.backgroundColor = "transparent";
    $resources.style.backgroundColor = "#2f80ed";
    $people.style.backgroundColor = "transparent";
    document.getElementById("amount").innerHTML = "59,859,183,999";
      document.getElementById("cause").innerHTML = "Tons of minerals extracted m Earth";
      document.getElementById("save").innerHTML = "  Do your bit!Avoid Plastic,Believe in reduce, reuse, recycle"
}
$people.onclick = () =>{
    document.body.style.background = "url('https://i1.faceprep.in/prograd-junior/poverty-bg.png')";
    document.body.style.backgroundsize = "100% 100%"
    $climate.style.backgroundColor = "transparent";
    $consumption.style.backgroundColor = "transparent";
    $resources.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "#2f80ed";
    document.getElementById("amount").innerHTML = "6,080,888";
    document.getElementById("cause").innerHTML = "People who died from hunger";  
    document.getElementById("save").innerHTML = "Do your bit! Never waste  food.Rather offer it to people or animals who are in need.";
};