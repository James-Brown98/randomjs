var element = document.getElementById('html')
var chars = '0123456789ABCDEF'.split('');

function randomColour(){
  var colour = '#';

  for(var i = 0;i<6; i++)
  colour += chars[Math.floor(Math.random()*16)];

  return colour;

}

function change(){setInterval(function(){
  document.body.style.background = randomColour();
},1000);
};

var button = document.getElementById('random');

function setB(){
  document.body.style.background = randomColour();
}
