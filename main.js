var FRAME_RATE = 60;
var GRAVITY = 0.2;
var PLAER_RUN_SPEED=60;
var JUMP_SPEED=3;
function Level(player){
  this.player = player;
  this.$level =$('#level');

  this.$level.keydown((function(e){
    if(e.keyCode===39){
      this.player.speedHorizontal=PLAER_RUN_SPEED;

    if(e.keyCode===37)
      this.player.speedHorizontal=-PLAER_RUN_SPEED;
      if(e.keyCode===38)
        this.player.speedVertical=-JUMP_SPEED;
  }).bind(this));
  this.$level.keyup((function(){
    if(e.keyCode===39||e.keyCode===37) this.player.speedHorizontal=0;
  }).bind(this));
  this.movePlayer = (function(){
    this.player.moveHorizontal();
    this.player.moveVertical;
  }).bind(this));
  setInterval(function(){

  },1000/FRAME_RATE)
}
function Player(top,left){
  this.$player = $("<div id='player'></div>");
  this.$player.css('top',top);
  this.$player.css('left',left);
  this.$player.appendTo('#level');

  this.speedHorizontal =0;
  this.speedVertical =0;

  this.moveHorizontal = (function(){
    this.$player.css('left',this.$player.position().left)+this.speedHorizontal);

  }).bind(this));
  this.moveVertical = (function(){
    this.speedVertical = +=GRAVITY;
    this.$player.css('top',this.$player.position().top)+this.speedHorizontal);

  }).bind(this));
}
function Obstale($obj)
var player = new Player(50,100);
var level = new Level(player);
