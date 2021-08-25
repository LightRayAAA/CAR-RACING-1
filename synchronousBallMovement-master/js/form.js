class Form{

constructor(){
this.title = createElement("h1")
this.input = createInput("name");
this.playButton = createButton("apply")
this.message = createElement("h2")

}
hide(){
this.title.hide();
this.input.hide();
this.playButton.hide();
}
display(){
this.title.html("Car Racing Game");
this.title.position(100,0);
this.input.position(140, 230);

this.playButton.position(270, 230);

this.playButton.mousePressed(()=>{
this.input.hide();
this.playButton.hide();
var name = this.input.value()
this.message.html("Hello " + name)
this.message.position(150,230)
playerCount = playerCount + 1
})
}
}