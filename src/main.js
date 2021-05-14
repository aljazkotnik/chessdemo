// import chessgame from "./renderers/chessgame.js";
// import dragdiv from "./core/dragdiv.js";
import chesssprite from "./renderers/chesssprite.js";


/* 
First setup a webpage that will display the result.

In this example first include:
	- WORKS!! arrow functions
	- WORKS!! classes
	- WORKS!! nested methods in classes (as static!)
	- WORKS!! promises
	- NOT CLEAR HOW TO PROCEED: promise.allSettled
*/

// Cant use piling js because then you have to use their chosen webGL renderer.


d3.select("#app")
  .append("h1")
  .html( "Hello World!" )



let state = {
	games: [],
	groups: {}
}

// Ply functionality
d3.select("#ply").on("click", () => {
	state.games.forEach( game => {
		game.ply()
	})
})


// What should be observable here? I guess the ply number? How to make independent modules using mobX?
  


// Wrap the chess game further. Put it into a card that can be dragged around, and move the ply button elsewhere - to the header.
let annotatedgamefile = "./data/lichess_study_kasparov-vs-topalov-1999-annotated_kasparov-g_custom.json"
d3.json(annotatedgamefile).then(function(game){
	
	
	let sprite = new chesssprite(game);
	state.games.push(sprite)
	

	
	// Finally add the sprite to the container.
	let container = document.getElementById("tabletop");
	container.appendChild(sprite.node)

	

})


// Make another module which creates a draggable div into which the graphic can be placed?

/*
d3.json("./data/lichess_db_subset.json").then( json => {
	console.log(json)
})
*/

