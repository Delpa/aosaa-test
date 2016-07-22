  var Trianglify = require('trianglify');
  var aosaa = require("aos-any-animation");
  var animation = function Animation() {
    var elm = this;
    var newone = elm.cloneNode(true);
    newone.addEventListener('click', animation);
    elm.parentNode.replaceChild(newone, elm);
  };
(function mountClaimForm() {
  
  
  var cubes = document.getElementsByClassName("item__inner");
  for (i=0;i<cubes.length;i++){
    cubes[i].parentElement.addEventListener('click', animation);
    cubes[i].style.background = 'url('+Trianglify({width: 300, height: 300}).png()+')';
  }

  aosaa.init({});


}());