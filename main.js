canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
rover_height = 100;
rover_width = 60;
rover_x = 50;
rover_y = 50;
background_img = "mars.jpg";
rover_img = "rover.png";
function add()
{
 image_background = new Image();
 image_background.onload = upload_background;
 image_background.src = background_img;
 rover_image = new Image();
 rover_image.onload = upload_image;
 rover_image.src = rover_img;
 }
 function upload_background() {
   ctx.drawImage(image_background, 0, 0, canvas.width, canvas.height);
 }
 function upload_image()
 {
    ctx.drawImage(rover_image, rover_x, rover_y, rover_width, rover_height);   
 }
 window.addEventListener("keydown",keydown);
 function keydown(e)
 {
 keypressed = e.keyCode;
 if (keypressed = "37")
 {
    Left(); 
 }
 if (keypressed = "38")
 {
    up(); 
 }
 if (keypressed = "39")
 {
    right(); 
 }
 if (keypressed = "40")
 {
    down(); 
 }   
 }
 function Left()
 {
  if (rover_x >= 0)
  {
    rover_x = rover_x - 10;
    upload_background();
    upload_image();
  }
}
function right()
 {
  if (rover_x <= 740)
  {
    rover_x = rover_x + 10;
    upload_background();
    upload_image();
  }
}
function up()
 {
  if (rover_y >=0)
  {
    rover_y = rover_y - 10;
    upload_background();
    upload_image();
  }
}
function down()
 {
  if (rover_y <= 400)
  {
    rover_y = rover_y + 10;
    upload_background();
    upload_image();
  }
}
