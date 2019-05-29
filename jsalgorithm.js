document.onkeydown = function(e){
    tecla = (document.all) ? e.keyCode : e.which;
    //alert(tecla)
    if (tecla == 116){
    //   if (confirm("Seguro que quieres refrescar la página ") == true) {
    //      return true;
    //    } else {
    //      return false;
    //   }
    return false;
    }
   }


   function NoBack(){
    history.go(1)
    }

var button0 = document.getElementById("angry"),
    text0 = document.getElementById("clickme_00"),
    count0 = 0;

button0.onclick = function() {
  count0 += 1;

  text0.innerHTML = count0;
}




var button1 = document.getElementById("like"),
    text1 = document.getElementById("clickme_01"),
    count1 = 0;

button1.onclick = function() {
  count1 += 1;
  text1.innerHTML = count1;
}

var button2 = document.getElementById("love"),
    text2 = document.getElementById("clickme_02"),
    count2 = 0;

button2.onclick = function() {
  count2 += 1;
  text2.innerHTML = count2;
};