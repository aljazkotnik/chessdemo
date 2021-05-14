// We're making a sprite, so first import that.
import sprite from "./sprite.js";

// `Chessground` is the drawing utility, and `Chess` enforces the rules.
// The files they are read from were made manually, because the original modules are not directly usable.
import Chessground from "../external/chessground_es.js";
import Chess from "../external/chess.js";

import * as d3 from "d3";

/*
observable - designate which attributes need to be observed
autorun - reactions that should occur hen the state changes
action - how the observed attributes can be changed
*/
// observable - which properties are observable
import {makeObservable, observable, autorun, action} from "mobx";




// Let's see if I can make a custom chess sprite now.
export default class chesssprite extends sprite {
	constructor(game){
		// `game' contains some metadata, and the pgn in game.Game.
		
		
		// Construct a basic sprite.
		super()
		let obj = this;
		
		
		// Add a chessboard into the scene element. `.chessboard' is defined in the `chessground.css', and defines the initial size of the board in pixel.
		let drawdiv = d3.select(obj.node)
		  .select("div.scene-element")
		  .append("div")
		    .attr("class", "chessboard")
		
		// `Chess' finds the available legal moves.
		obj.chess = new Chess();
		
		
		// `pgn' is teh sequence of moves played, `fen' is the current state of the game.
		obj.pgn = game.Game;
		obj.fen = obj.chess.fen();
		
		// Position within the series.
		obj.plies = game.Game.split(" ").filter(function(v,i){return i%3 != 0})
		obj.plyind = -1; // The first increment will make plyind=0, which is the first index of an array.
		
		

		// Configure the chess board renderer.
		obj.config = {viewOnly: true};
		
		obj.board = Chessground(drawdiv.node(), obj.config);
		
		
		
		// Make the class observable.
		makeObservable(obj, {
			fen: observable,
            ply: action
        })
		
		
		autorun(()=>{obj.render()})
		
		
	} // constructor
	
	render(){
		var obj = this
		
		// The FEN changed, therefore redraw.
		obj.board.set({fen: obj.fen})
		
		
	} // render
	
	
	ply(){
		// This increments the plyind. I could then even make a computed value of `fen`, and only then ask the rerender.
		var obj = this;
		obj.plyind += 1
		
		
		// Find and play the next ply.
		let ply = obj.plies[obj.plyind]
		obj.chess.move(ply)
		obj.fen = obj.chess.fen();
		
	} // ply
	
} // chesssprite