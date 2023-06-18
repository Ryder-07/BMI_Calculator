let heights = document.getElementById("height");
let weights = document.getElementById("weight");
let ans = document.getElementById("result");
let check = document.getElementById("check");
let text = document.getElementById("result_text");
var stat = document.getElementById("statuses");

function check_bmi() {
  let height_m = parseFloat(heights.value) / 100;
  let weight = parseFloat(weights.value);
  let result = (weight / (height_m ** 2)).toFixed(2);
  console.log(result);
  ans.innerHTML = `${result}<p>BMI</p>`;
    if (result<=18.4){
        stat.innerHTML = `Under Weight`;
        text.style.opacity="1";
        stat.style.backgroundColor ="#ECED0E";

    }
    else if (result>=18.5 && result<=24.9 ){
        text.style.opacity="1";

      
        }
    else if (result>=25 && result<=39.9 ){
        stat.innerHTML = `over Weight`;
        text.style.opacity="1";
        stat.style.backgroundColor ="#F2B409";
    
          
        }
    else{
        stat.innerHTML = `obese`;
        text.style.opacity="1";
        stat.style.backgroundColor ="#C00B06";
    }
}