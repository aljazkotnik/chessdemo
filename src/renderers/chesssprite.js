// We're making a sprite, so first import that.
import sprite from "../core/sprite.js";

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
import {makeObservable, observable, autorun, action, computed} from "mobx";


// IMPLEMENT DATA HANDLER!!

// Let's see if I can make a custom chess sprite now.
export default class chesssprite extends sprite {
	constructor(game){
		// `game' contains some metadata, and the pgn in game.Game.
		
		
		// Construct a basic sprite.
		super()
		let obj = this;
		
		
		// Store the game metadata. Create a unique ID for the task too. Maybe players + time and date? Lichess enforces unique user names, and two users can only start a single game at a time
		game.id = `${ game.White } vs. ${ game.Black }, ${ game.UTCDate } at ${ game.UTCTime }`;
		obj.task = game;
		
		
		
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
		obj.board = Chessground(drawdiv.node(), {viewOnly: true});
		
		
		
		// Make the class observable.
		makeObservable(obj, {
            ply: action,
			fen: observable,
			data: computed
        })
		
		
		autorun(()=>{obj.render()})
		
		
	} // constructor
	
	
	// Basic functionality.
	render(){
		var obj = this
		
		// The FEN changed, therefore redraw.
		obj.board.set({fen: obj.fen})
		
		
	} // render
	
	
	get data(){
		// Find the pawn positions in the fen.
		let obj = this
		// COMPUTED VALUE!!
		let fen = obj.fen; // this is the observed value!
		
		// Each of the 16 dimensions is a file for one side. Since FEN notation begins with rank 8
		let emptystructure = [];
		for(let i=0; i<16; i++){
			emptystructure.push([])
		} // for

		let pawnstructure = fen
		  .split(" ")[0]
		  .split("/")
		  .reduce((a,pieces,row)=>{
			let col = 0;
			let vals = [...pieces];
			vals.forEach(v=>{
				let v_ = parseInt(v)
				if(v_){
					// Empty squares
					col += v_;
				} else {
					// Some piece.
					
					switch(v){
						case "P":
							// White pieces.
							a[  col].push(7-row);
							break;
						case "p":
							// Black pieces.
							a[8+col].push(7-row);
							break;
					} // switch
				
					col += 1
				} // if
			})
			
			return a
		},emptystructure)
		
		
		return pawnstructure
		
		
	} // get data
	
	
	// Specific functionality.
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