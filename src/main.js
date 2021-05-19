// import chessgame from "./renderers/chessgame.js";
// import dragdiv from "./core/dragdiv.js";
import chesssprite from "./renderers/chesssprite.js";


import treerender from "./external/treerender.js";


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
	games: []
}

// Ply functionality
d3.select("#ply").on("click", () => {
	state.games.forEach( game => {
		game.ply()
	})
})



let container = document.getElementById("tabletop");



// Add teh chess sprites.
d3.json("./data/lichess_db_subset.json").then( json => {
	// make 10 sprites - should be enough to test making groups etc.
	for(let i=0; i<10; i++){
		let sprite = new chesssprite(json.games[i])
		state.games.push( sprite )
		container.appendChild(sprite.node)
	} // for
	
	console.log(state.games)
}) // then


// Add the navigation tree/
d3.json("./data/treedata.json").then( json =>{
	let r = new treerender(json.trees)
	document.getElementById("navigationtree").appendChild(r.svg.node())
	r.update()
	
	console.log(r);
	
	// Also collect all the drawn texts, and when they are clicked on toggle the displays of the sprites of that group.
	
	d3.selectAll("text").on("click", (event, node)=>{
		// node.tasks has the ids of all the sprites that should be visisble.
		let activesprites = node.tasks;
		
		state.games.forEach(game=>{
			if(activesprites.includes(game.task.id)){
				game.show();
			} else {
				game.hide();
			} // if
		}) // forEach
		
		// Now also change the font of the clicked node so we knwo where in the tree we are.
		d3.selectAll("text").style("font-weight", "normal")
		event.currentTarget.style.fontWeight = "bold";
	})
	
})



