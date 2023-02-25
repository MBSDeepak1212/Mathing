const button = document.getElementById("touch");
const del = document.getElementById("DE");
const alc = document.getElementById("AC");
const disp = document.getElementById("disp");

button.addEventListener("click", function() {
  const name = eval(disp.value);
  disp.value = name.toString();  
});

alc.addEventListener("click", function(){
  disp.value = "";
});

del.addEventListener("click", function(){
  const name = disp.value;
  disp.value = name.slice(0,-1);
});