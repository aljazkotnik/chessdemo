import * as d3 from "d3";

// Formulate this as a class? The it can be called as:
// A = new dragdiv() ...


export default class dragdiv {
	constructor(){
		// Make a new div.
		let obj = this;
		
		// Absolute or relative position??
		obj.div = d3.create("div")
		  .style("position", "relative")
		  .style("left", 0 + "px")
		  .style("top", 0 + "px");
		
		// Container that will hold the mouse coordinates.
		obj.mouseorigin = {};
		
		// Apply dragging to it. Store the movement data on the dragdiv object instead? So as to not pollute the actual object?
		let dragobj = d3.drag()
			.on("start", function(event){
				obj.mouseorigin = obj.mouseposition(event)
			})
			.on("drag", function(event){
				// let position = obj.position()
				let movement = obj.movement(event)
				
				// Move the wrapper.
				obj.div
				  .style("left", (obj.position.x + movement.x) + "px")
				  .style("top", (obj.position.y + movement.y) + "px")
				  
				// Update the last mouse position
				obj.mouseorigin = obj.mouseposition(event)
			})
			.on("end", function(event){
				// The parent should update it's position automatically. How do I do that? Maybe the parent should listen to some action? Or maybe it's position should just be calculated when it's needed?
			})
		
		obj.div.call(dragobj)
		
		
		obj.node = obj.div.node()
		
	} // constructor
	
	
	get position(){
		// Get the position of the dragdiv.
		let obj = this;
		let divdom = obj.div.node()
		
		return {
			x: parseInt( divdom.style.left ),
			y: parseInt( divdom.style.top ),
			w: divdom.offsetWidth,
			h: divdom.offsetHeight
		}
		
	} // position
	
	
	movement(event){
		// Get the delta of the movement from hte origin to the current mouse position.
		let obj = this;
		
		let origin = obj.mouseorigin;
		let current = obj.mouseposition(event);
		
		return {
			x: current.x - origin.x,
			y: current.y - origin.y
		}
		
	} // movement
	
	mouseposition(event){
		// Get the position of the mouse relative to something. Could I just take it relative to the position of the dragdiv itself?
		let obj = this;
		
		return {
			x: event.sourceEvent.clientX,
			y: event.sourceEvent.clientY
		}
		
	} // mouseposition
	
	
	
} // dragdiv



	

