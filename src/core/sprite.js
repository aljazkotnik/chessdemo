import dragdiv from "./dragdiv.js";
import * as d3 from "d3";


// ADDITIONAL IDEA.
// Could the filtering plots also be sprites?? Then they could be set up into groups also. Maybe this could be interesting for story telling??


// GENERAL SPRITE
// If the renderer needs to be passed in, then some background coding has to happen anyway. So maybe it's better to just provide different sprites at that point. And the sprite type will handle the rendering. Yes - abstract to sprite level!!

// Should have task, file, graphic. Both the task and the file should be passed in from outside - this ensures that an outside process handles the data loading. Furthermore, data to be used for clustering and embedding must be made available. This is passed in as `datahandler', and can be the data object directly, or an accessor that returns the data from the `file object'.







// This is an abstract sprite class that serves as a basis for sprite groups and specific sprite implementations (e.g.: `spritegroup', 'chesssprite', `webglsprite', `imagesprite', ...). As such it only contains the bare minimum to make a sprite frame, and position or resize it. 
export default class sprite {
  constructor(){
	let obj = this;
	
	
	obj.graphic = undefined;


	// Currently no on drag-start/move/end functionality is prescribed. But it will be needed for webgl sprites, as a canvas element will have to be added to the sprite to contain the dragged sprite. Furthermore the main canvas will have to be redrawn on start and end. This would have to be passed in somehow, and it should collect the object along the way too. Maybe the dragdiv should just execute any onstart that it can find? maybe the event was only visible because there was no data object attached to the div yet?
	let div = new dragdiv();
	
	
	
	
	// Create teh DOM element corresponding to this contour, and add it to hte wrapper. Keep it without d3?
	let d3wrapper = d3.select(div.node)
	  .attr("class", "sprite-item")
	  .datum(obj);
	d3wrapper.append("div").attr("class", "scene-element");
	d3wrapper.append("div").attr("class", "description-element");
	
	
	
	// Create a connection from the object instance to the DOM element. The vice versa has already been established above.
	obj.node = div.node;
	
	
  } // constructor
	

 // POSITIONING.
 // Just set the DOM coordinates, and let another module worry about the internal values. In cases where relative positions should be stored it should be the task of the broader module to do that.
 
  set position(point){
	// Position the DOM wrapper to the coordinates in point.
	this.node.style.left = point[0] + "px"
	this.node.style.top = point[1] + "px"
  } // position
  
  get position(){
	// Get the DOM position of the contour relative to the canvas.
	let wrapper = this.node
	return [parseInt(wrapper.style.left), parseInt(wrapper.style.top)]
  } // position
  
  
  get midpoint(){
	let wrapper = this.node
	return [
		parseInt(wrapper.style.left) + wrapper.offsetWidth/2,
		parseInt(wrapper.style.top) + wrapper.offsetHeight/2
	]
  } // midpoint
	
  set size(_size){
	// When sizing size the scene element.
	let obj = this;
	  
	let width = _size[0];
	let height = _size[1];
	
	d3.select(obj.node)
	  .select("div.scene-element")
	  .style("width", width + "px")
	  .style("height", height + "px")
	  
	  
  } // size
	
  // Hide and show.
  show(){
	this.node.style.display = "block"
  } // show
  
  hide(){
	this.node.style.display = "none"
  } // hide
	
} // sprite