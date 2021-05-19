import * as d3 from "d3"; // this is a dev version d3js
import treehierarchy from "./treehierarchy.js"
// import {autorun, action} from "mobx";

// NO TRANSITION FOR NOW.
// const duration = 0;

// Split the code into hierarchy and render.


// MAYBE ENFORCE THE PADDING AND SIZE OF THE TREE HERE? OR USE A ZOOMABLE TREE?


// MAYBE POSITION THE G ELEMENTS AND THEN ONLY ADD THE RELATIVE POSITIONS? AH, BUT WON'T WORK FOR PATHS...

// Make this as a class. Pass in the data, and then start it up etc.

// make it reactive with respect to data so that it updates itself? Then it should also create it's own DOM element.
export default class treerender {
	constructor(data){
		
		this.svg = d3.create("svg")
		  .attr("width", 600 + "px")
		  .attr("height", 600 + "px");
		
		// Add groups for nodes and bundles to make sure they are always drawn in the right order on-screen.
		this.svg
		  .append("g")
		  .attr("class", "bundles")
		
		this.svg
		  .append("g")
		  .attr("class", "nodes")
		
		
		this.nodetooltip = this.svg
		  .append("g")
		  .attr("class", "nodetooltip")
		
		this.linktooltip = this.svg
		  .append("g")
		  .attr("class", "linktooltip")
		
		
		this.hierarchy = new treehierarchy(data)
		
		
		this.color = d3.scaleOrdinal(d3.schemeCategory10);
		
		
	} // constructor
	
	
	update(){
		let obj = this;
		
		
		// Recalculate the tree here.
		obj.hierarchy.update();
		
		
		// Adjust the svg viewport.
		obj.scalesvgviewport()
		
		
		// Redraw. How should this execute with transitions?
		obj.updatelines()
		obj.updatenodes()
		
		
		console.log(obj.hierarchy.map)
		
		// Update the tooltip also. Where should this tooltip come from? There will be only one tooltip node, and then
		
	} // update
	
	
	scalesvgviewport(){
		let obj = this;
		
		let padding = 16;
		
		// Calculate the max extent of the data.
		let x = d3.extent( obj.hierarchy.map.nodes, node=>node.dim.x )
		let y = d3.extent( obj.hierarchy.map.nodes, node=>node.dim.y )
		
		
		// Maybe jujt setup some values for the demo for now.
		
		obj.svg.attr("viewBox", [-padding, padding, 500, 500] )
		
		
	} // scalesvgviewport
	
	
	updatenodes(){
		let obj = this
		
		
		// Keep the paths in bundle wrappers.
		obj.svg
		  .select("g.nodes")
		  .selectAll("g.node")
		  .data( obj.hierarchy.map.nodes, b=>b.id )
		  .join(
			enter => enter
			  .append("g")
			  .attr("class", "node")
			  .each(enternode),
			update => update.each(updatenode),
			exit => exit.remove()
		  ) // join
		  
		function drawnode(node){
			let n = node.dim
			return `M${ n.x } ${ n.y-n.height/2 } L${ n.x } ${ n.y+n.height/2 }`;
		} // drawnode
		
		
		
		
		function enternode(){
			// this = g.node
			
			d3.select(this)
			  .append("path")
			    .attr("class", n=>n._children.length>0 ? "node node-expandable":"node")
			    .attr("d", drawnode) // "M0 0 L0 0"
				.attr("stroke", "black")
				.attr("stroke-width", 8)
			  .clone()
			    .attr("class", "node")
				.attr("stroke", "white")
				.attr("stroke-width", 4)
							
			d3.select(this)
			  .append("text")
			    .attr("class", "selectable")
				.attr("x", node => node.dim.x+4 )
				.attr("y", node => node.dim.y - node.dim.height/2 - 4 )
				.attr("stroke", "white")
				.attr("stroke-width", 2)
				.html(node=>node.id)
			  .clone()
			    .attr("stroke", "black")
				.attr("stroke-width", .5)
				.html(node=>{
					let n = node._children.length;
					return `${node.id} ${n > 0 ? `(${n})`: ""}`
				})
				
			
			
			
			// Add the events. Clicking on texts should move to a group, whereas clicking on the node collapse/uncollapse a branch.
			d3.select(this)
			  .selectAll("text")
			  .on("click", (event, node) => {
				  console.log("Move to",event, node)
			  })
			  
			d3.select(this)
			  .selectAll("path")
			  .on("click", (event, node) => {
				  // Communicate that a node has been collapsed.
				  obj.hierarchy.collapsenode = node;
				  
				  // And now update.
				  obj.update()
			  })
			  
			// Add teh tooltip.
			d3.select(this)
			  .selectAll("path")
			  .on("mouseover", (event, node)=>{
				  console.log(event, node.descriptions)
				  
				  if(node.descriptions.length>0){
					  
					// This is just hacked to work roughly
					let x = 0.69*event.screenX - 50;
					let y = 0.7*event.screenY - 90;
					
					obj.nodetooltip
				    .attr("transform", `translate(${x},${y})`)
					.selectAll("text")
					.data( node.descriptions )
					.enter()
					.append("text")
					  .attr("stroke", "white")
				      .attr("stroke-width", 2)
					  .attr("transform", (d,i)=>`translate(0,${i*12})`)
					  .html(d=>`${d.author}: ${d.text}`)
					.clone()
					  .attr("stroke", "black")
				      .attr("stroke-width", 0.5)
					  .html(d=>`${d.author}: ${d.text}`)
				  } // if
			  })
			  .on("mouseout", ()=>{
				  obj.nodetooltip.selectAll("*").remove()
			  })
			
		} // enternode
		
		function updatenode(d){
			// For some reason datums must be set manually.
			d3.select(this)
			  .selectAll("path")
			  .datum(d)
			  .attr("d", drawnode)
			  
			d3.select(this)
			  .selectAll("text")
			  .datum(d)
			  .attr("x", node => node.dim.x+4 )
			  .attr("y", node => node.dim.y - node.dim.height/2 - 4 )
		} // updatenode
		
	} // updatenodes
	
	
	updatelines(){
		let obj = this;
		
		// LINES DONT TRANSITION CORRECTLY. THIS IS LESS IMPORTANT - HANDLE LATER.
		
		// Lines are drawn in bundles, as otherwise the connections of lines of the same bundle will not be rendered correctly.
		
		// Use a string template literal to create the required paths.
		  
		// Keep the paths in bundle wrappers.
		obj.svg
		  .select("g.bundles")
		  .selectAll("g.bundle")
		  .data( obj.hierarchy.map.bundles, b=>b.id )
		  .join(
			enter => enter
			  .append("g")
			  .attr("class", "bundle")
			  .each(enterbundle),
			update => update.each(updatebundle),
			exit => exit.remove()
		  ) // join
		   
		function bundlecolor(bundle){
			return obj.color(bundle.author);
		} // bundlecolor
			
		function drawbundle(bundle){
			return bundle.links.map( link => {
				let l = link.dim;
				return `
					M${ l.xt } ${ l.yt }
					L${ l.xb-l.c1 } ${ l.yt }
					A${ l.c1 } ${ l.c1 } 90 0 1 ${ l.xb } ${ l.yt+l.c1 }
					L${ l.xb } ${ l.ys-l.c2 }
					A${ l.c2 } ${ l.c2 } 90 0 0 ${ l.xb+l.c2 } ${ l.ys }
					L${ l.xs } ${ l.ys }
				`
			}).join("")			
		} // drawline
			
			
		function enterbundle(){
			// Enter at origin, then transition into position. Note that for transitioning the lines the initial state must follow the same exact segments.
			d3.select(this)
			  .append("path")
			    .attr("class", "link")
			    .attr("d", drawbundle) // "M0 0 L0 0 A0 0 90 0 1 0 0 L0 0 A0 0 90 0 0 0 0 L0 0"
				.attr("stroke", "white")
				.attr("stroke-width", 5)
			  .clone()
				.attr("stroke", bundlecolor)
				.attr("stroke-width", 2)
			
		} // drawbundle
		
		function updatebundle(d){
			d3.select(this)
			  .selectAll("path")
			  .datum(d)
			  .attr("d", drawbundle)
		} // updatebundle
		
	} // updatelines
	
	
	
	updatetooltip(){
		
		// Two tooltips have been added to hte svg. One just shows the author name. The other will show a short description of hte group. One is appended to the paths, and the other is appended to the nodes.
		
		
	} // updatetooltip
	
	
	
} // treerender