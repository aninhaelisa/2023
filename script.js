var fw_spread = 250 
var fw_scale = 2  
var fw_launch_rate = 333 

function createFirework(e) {  
  var f = document.createElement('div')
  f.className = 'firework'
  f.style.width = '3px'
  f.style.height = '3px'
  f.style.position = 'absolute'
  var fx = Math.random()*100 + '%'
  f.style.left = Math.random()*33 + 33 + '%'
  f.style.top = '100%'
  var clr = 'hsl('+Math.random()*360+'deg,100%,50%)'
  
  f.style.transition = 'ease-out '+(Math.random()*3) + 1 + 's'

  document.body.appendChild(f)

  for(var i=0;i<25;i++){
    var p = document.createElement('div')
    p.className = 'particle'
    p.style.width = '100%'
    p.style.height = '100%';
    p.style.backgroundColor = clr
    p.style.position = 'absolute'
    p.style.left = '0'
    p.style.top = '0'
    p.style.transition = '.5s'    
    f.appendChild(p)
  }

  setTimeout(function(){
    f.style.top = Math.random()*50 + 5 + '%'
    f.style.left = fx
    f.ontransitionend = function() {
      var p = this.querySelectorAll('.particle')
      p.forEach(function(elm){
        var x = Math.random() < .5 ? Math.random()*fw_spread : (-1)*Math.random()*fw_spread
        var y = Math.random() < .5 ? Math.random()*fw_spread : (-1)*Math.random()*fw_spread
        elm.style.left = x + 'px'
        elm.style.top = y +'px'
        elm.style.opacity = '0'
        elm.style.transform = 'scale('+fw_scale+')'
        elm.style.borderRadius = '50%'
        elm.style.filter = 'blur(1px)'
        elm.ontransitionend = function() {
          this.remove()          
        }
      })
      setTimeout(function(){
        f.remove()
      },1000)
    }
  }, 100)  
  
  setTimeout(createFirework, fw_launch_rate)
}

createFirework()

// contagem regressiva

var target_date = new Date("january 1, 2023").getTime();
var dias, horas, minutos, segundos;
//var regressiva = document.getElementById("regressiva");

setInterval(function () {
  var current_date = new Date().getTime();
  var segundos_f = (target_date - current_date) / 1000;
  
  dias = parseInt(segundos_f / 86400);
  segundos_f = segundos_f % 86400;
    
    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;
    
    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);

    document.getElementById('dia').innerHTML = dias;
document.getElementById('hora').innerHTML = horas;
document.getElementById('minuto').innerHTML = minutos;
document.getElementById('segundo').innerHTML = segundos;
  

}, 1000);
