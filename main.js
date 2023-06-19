

function check_bmi() {
    let heights = document.getElementById("height");
let weights = document.getElementById("weight");
let ans = document.getElementById("result");
let check = document.getElementById("check");
let text = document.getElementById("result_text_comp");
var stat = document.getElementById("comp_statuses");
let text_mob = document.getElementById("result_text_mob");
var stat_mob = document.getElementById("mob_statuses");

  let height_m = parseFloat(heights.value) / 100;
  let weight = parseFloat(weights.value);
  let result = (weight / (height_m ** 2)).toFixed(2);
  console.log(result);
  ans.innerHTML = `${result}<p>BMI</p>`;
    if (result<=18.4){
        stat.innerHTML = `Under Weight`;
        text.style.opacity="1";
        stat.style.backgroundColor ="#ECED0E";
        stat_mob.innerHTML = `Under Weight`;
        text_mob.style.opacity="1";
        stat_mob.style.backgroundColor ="#ECED0E";

    }
    else if (result>=18.5 && result<=24.9 ){
        stat.innerHTML = `Normal Weight`;
        text.style.opacity="1";
        stat.style.backgroundColor ="#3CB721";
        stat_mob.innerHTML = `Normal Weight`;
        text_mob.style.opacity="1";
        stat_mob.style.backgroundColor ="#3CB721";

      
        }
    else if (result>=25 && result<=39.9 ){
        stat.innerHTML = `over Weight`;
        text.style.opacity="1";
        stat.style.backgroundColor ="#F2B409";
        stat_mob.innerHTML = `over Weight`;
        text_mob.style.opacity="1";
        stat_mob.style.backgroundColor ="#F2B409";
    
          
        }
    else{
        stat.innerHTML = `obese`;
        text.style.opacity="1";
        stat.style.backgroundColor ="#C00B06";
        stat_mob.innerHTML = `obese`;
        text_mob.style.opacity="1";
        stat_mob.style.backgroundColor ="#C00B06";
    }
}
window.addEventListener('DOMContentLoaded', function() {
    var check = document.getElementById("check");
    check.addEventListener('click', check_bmi);
  });