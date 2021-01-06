import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


(function() { 
    function init ( ) { 
    var canvas = document.getElementsByTagName('canvas') [0] ; 
    var c = canvas.getContext('2d'); 
    c.fillStyle = 'white';
     
    c.fillRect(0,0,canvas.width,canvas.height) ; 
    var radius = 1;

    function draw () {
      c.fillStyle = '#945cc2';
      c.beginPath();
      c.arc(200,200,radius,0,2*Math.PI,false);
      c.fill() ;
      radius +=6;
      if(radius < 200) {
        requestAnimationFrame(draw);
      }
    }

    draw();

  }

  window.addEventListener('load',init,false);
  
  
} () );



(function() { 
    function init ( ) { 
    var canvas = document.getElementsByTagName('canvas') [0] ; 
    var c = canvas.getContext('2d'); 
    c.fillStyle = 'white';
     
    c.fillRect(0,0,canvas.width,canvas.height) ; 
    var radius = 1;
        
    function draw () {
      c.fillStyle = '#945cc2';
      c.beginPath();
      c.arc(770,200,radius,0,2*Math.PI,false);
      c.fill() ;
      radius +=6;
      if(radius < 200) {
        requestAnimationFrame(draw);
      }
    }

    draw();

  }

  window.addEventListener('load',init,false);
  
  
} () );




(function() { 
  function init ( ) { 
  var canvas = document.getElementsByTagName('canvas') [0] ; 
  var c = canvas.getContext('2d'); 
  c.fillStyle = 'white';
   
  c.fillRect(0,0,canvas.width,canvas.height) ; 
  var radius = 1;
      
  function draw () {
    c.fillStyle = '#945cc2';
    c.beginPath();
    c.arc(1337,200,radius,0,2*Math.PI,false);
    c.fill() ;
    radius +=6;
    if(radius < 200) {
      requestAnimationFrame(draw);
    }
  }

  draw();

}

window.addEventListener('load',init,false);


} () );
