document.getElementById("copy").onclick = function() {
   const elem = document.createElement('textarea');
   elem.value = document.getElementById("output").value;
   document.body.appendChild(elem);
   elem.select();
   document.execCommand('copy');
   document.body.removeChild(elem);
}

var save = "";

setInterval(function() {
  if(save != document.getElementById("input").value) {
    save = document.getElementById("input").value;
    document.getElementById("output").value = "";
    for(var i = 0;i < save.length;i++) {
      var now = save[i];
      var now_code = now.charCodeAt(0);
      document.getElementById("output").value += getConstantVowel(now);
    }
  }
  window.document.getElementById('output').scrollTo(0,document.getElementById('output').scrollHeight);
});
