// This part just calculates the node positioning etc. It does not need to be reactive - instead it should be static.




// Tricky to make it observable, because nodes are needed for bundles, but once bundles are made the nodes should be updated with links to them too. Similar for links. Maybe it can still be made observable, but then levels are completely new objects? That makes sense, as some bundles etc will actually disappear.




// SHOULD THE DATA ITSELF BE LOOSLY STRUCTURED SO THAT THE LEVELS THEMSELVES NEED TO BE ESTABLISHED INTERNALLY? PROBABLY A GOOD IDEA!
		
// ONE REQUIREMENT IS THAT ALL CHILDREN OF A NODE SHOULD BE BELOW IT, OR AT LEAST THE SAME LEVEL.

// BUT IF SOME LINES END, THEN IT'S POSSIBLE TO RECLAIM THE SPACE.


// IMPLEMENT BACKGROND HIERARCHY THAT CAN KEEP UP WITH THE USER ACTIONS. THEN ANOTHER METHOD CAN BE USED TO RECLAIM VERTICAL SPACE. THE ORDER OF NODES SHOULD BE DETERMINED BASED ON THE UNDERLYING DATA.


// Keep it as a class so that hte layout parameters can be tweaked as needed.


// Maybe it's better if it's a class so it can keep up with the user actions? Then it would also be good if it's reactive. How would I make it rective? The actions would have to come from outside? The same as the `ply' method in the chess demo.
export default class treehierarchy {
	constructor(trees){
		let obj = this;
		
		// What happens when there is more than one tree? Maybe I should first save that data as `trees', and then pass it on into nodes?
		obj.trees = trees;
		
		
		
		// Introduce computed values, then the nodes can be set, and the levels can be established afterwards.
		
		obj.map = {};
		
		
		obj.layout = {
		  node_height: 22, // This sets the offset??
		  node_width: 70, // distance between the nodes?? or length of text?
		  bundle_width: 14, // Width reserved for the bundle line when they turn vertical
		  level_y_padding: 16,
		  metro_d: 4, // Line width
		  c: 16,
		  min_family_height: 16
		} // layout
		
	} // constructor
	
	update(){
		let obj = this;
		
		// Now recompute.
		obj.map = obj.dimension()
	} // update
	
	
	
	
	// When setting trees the nodes should already be curated and given unique internal ids. Then the unique nodes can be forwarded to nodes.
	set trees(trees){
		let obj = this;
		
		// The challenge is to setup different bundles using the same node data. The bundle creation relies on a node group, so the node groups of the two trees must be held separate for that. On the other hand, only one set of nodes should be used to compute the positions. This set should contain all the unique nodes (unique by their children - the children are the data of the group). A solution is to create the node registry here with all the unique nodes.
		
		// Just include the id for now and get it to work. Once the data is changed so that it represents groups and the contained elements we can change this here too. Because in the group data the `children' that are drawn are groups that are children of the group, and not all of the individual items.
		
		// The registry enforces all considered nodes have unique names by keeping only one copy for each id. This is the combined registry.
		obj.noderegistry = {};
		
		
		// Some trees are partial trees. To achieve that only the part of the branch that is needed is saved. They are attached to the rest of the tree correctly, but since their nodes can have their level calculated only relatively, they are drawn at the wrong x. Such trees don't have a "root" element, which can be used to identify them. Then an attachment point for them can be found.
		// Relative trees could be created by saving both the start and the nodes of the tree in the data. How to attach it correctly though, so that it does not override the levels of the central registry???
		let treetypes = trees.reduce((a,tree)=>{
			// If it includes a `root` node then it's absolute, otherwise it's relative.
			
			if(tree.nodes.map(n=>n.id).includes("root")){
				a.absolute.push(tree);
			} else {
				a.relative.push(tree);
			} // if
			
			return a
		},{absolute: [], relative: []})
		
		
		
		treetypes.absolute.forEach(tree=>{
			// Fill the nodes with additional attributes.
			tree.nodes = obj.unstructurednodes2nodes(tree.nodes);
			
			
			// Check if the node registry already contains this node. So, in this case the id itself is the data (!!!)(children of the group the node represents), and the `children' are other groups emanating from it. Basically we're allowing nodes to have different parents here.
			
			tree.nodes.forEach(node=>{
				// Is it in the registry already?
				if(!Object.getOwnPropertyNames(obj.noderegistry).includes(node.id)){
					// it's important to duplicate the node here. The nodes in the registry should keep track of all of it's children, not only the children it has in the tree that defines it. But at the same time the node of a tree shouldn't get modified.
					
					obj.noderegistry[node.id] = {
						id: node.id,
						parents: node.parents,
						children: node.children,
						_children: node._children,
						tasks: node.tasks,
						dim: {},
						descriptions: []
					};
				} // if 
			}) // forEach
			
			// But also create an internal registry, so that it is easy to query connections between the nodes of this tree.
			tree.registry = tree.nodes.reduce((a,node)=>{
				a[node.id] = node;
				return a
			},{}) // reduce
		}) // trees forEach
		
		
		
		
		// For relative trees swap out the tree in their registry by the tree in the general registry. But then how should the trees initialise? I won't be able to initialise them all at once, because the relative ones need to wait for the absolute ones.
		
		// What happens if a tree ends in a common node. And suppose that tree takes more levels than others to arrive there.
		
		
		
		
		
		// The merged nodes may not contain all of it's own children. Therefore `Innacurate plays' is classed as inactive. Enforce that the nodes adopt all appropriate children.
		
		trees.forEach(tree=>{
			tree.nodes.forEach(node=>{
				// Culd also be done by clearing the merged nodes in `obj.noderegistry' of all children, and then running the `parent2child' method again. Maybe this is a bit more explicit?
				
				// Adoption.
				node.parents.forEach(parent_id=>{
					let parent = obj.noderegistry[parent_id];
					if(parent.children.includes(node.id)){
						// All good, nothing to worry about.
					} else {
						parent.children.push(node.id)
					} // if
				}) // forEach parent_id
				
				// Make sure the nodes in the registry have all the descriptions possible. The descriptions will have to be stored as author-text pairs so that they can be displayed as messages.
				// The descriptions array is empty on creation, and since this runs once for every node in the data we can just push without checking the status for now. But only add if the node has a description.
				if(node.description){
					let mergednode = obj.noderegistry[node.id];

					mergednode.descriptions.push({
						author: tree.author,
						text: node.description
					}) // push

				} // if
				
				
				
			}) // forEach node
		}) // forEach tree
		
		
		
		
		
		let nodes = Object.getOwnPropertyNames(obj.noderegistry).map(nodeid=>{return obj.noderegistry[nodeid]})
		
		// Set the nodes here as opposed to in the constructor. How to untagle this apart? If the nodes would be just a computed value, then maybe it wouldn't need to be set anyway.
		this.nodes = nodes;
		
		
		this._trees = trees;
		
	} // set trees
	
	// Maybe the trees should be dedicated classes too. So that they can initialise and so on.
	get trees(){
		return this._trees;
	} // get trees
	
	
	
	// Nodes can be instances of a separate class, but the most important information are the relations between them. So maybe a nodegroup class could be established.
	set nodes(nodes){
		// The nodes are already structured when the tree is being set.		
		this._nodes = nodes;
	} // set nodes
	
	get nodes(){
		let obj = this
				
		// Find which nodes are active. This is done by starting at the root, and then moving to children. So for this it's better if the background structure resembles the actual tree. But at some point the tree must be established, and then the structure will have to be traversed anyway...
		
		// Well, I also have access to the nodes parents. So just check if those nodes are still logged as children.
		
		
		// Propagate collapse using a recursive function.
		// The propagation always starts at a parent, and affects the children. Or should I just create an ancestor chain for all nodes. I could use the ancestor chain to position them at a later point also. And then we can just check if the node has some children available - that is enough. Because then I just need to make sure that all ancestors are active in some node as children no?
		
		
		function collapse(node){
			// Collapse the children, and if there are any children collapse them too.
			node.children = [];
			
			if(node._children.length > 0){
				node._children.forEach(child_id => {
					let _node = obj.noderegistry[child_id];
					collapse(_node);
				})
			} // if
			
		} // collapse
		
		
		// A collapse/uncollapse event was triggered.
		// Maybe at a later stage the collapsenode will also have to be erased at a point. E.g. when the label is clicked and the user moves to the group. But in that case the tree need not be updated.
		if(obj.collapsenode){
			let node = obj.collapsenode;
			// Determine whether it's collapse or uncollapse.
			if(node.children.length == 0){
				// Uncollapse - uncollapse level by level.
				node.children = node._children;
			} else {
				// Collapse - recursive function!
				collapse(node);
			} // if
		} // if
		
		
		
		// Finding all active nodes after the collapse has been propagated.
		let active = obj._nodes.filter(node=>{
			
			let parents = node.parents.map(parentid=>{return obj.noderegistry[parentid]})
			
			
			let isActive = true;
			if(parents.length > 0){
				// All parents must still list it. Some returns true when one item evaluates true. To enforce all are true, the test must return negative for all, and then the flag is reversed at the end.
				isActive = !parents.some(parent=>{
					return !parent.children.includes(node.id);
				}) // some
			
			} // if
			
			return isActive
		}) // filter
		
		
		// let activenodes = 
		
		// The levels can change based on which branches are active. Therefore calculate the levels here.
		
		
		// The bundles are initialised based on the levels of the individual tree. That's why all of the trees need to be initialised before the actual nodes are initialised.
		this.initialiselevels2( active );
		
		return active;
	} // get nodes
	
	
	
	// Just roll all of this into making a node class instance? Would clear up many things quite a bit.
	unstructurednodes2nodes(nodes){
		// Take in the unstructured nodes, add any missing parent or child id arrays, add children/parent information if necessary, and sort into levels.
		
		
		
		// Missing parents/children arrays.
		treehierarchy.enforceconsistency( nodes );
		
		// Fill in the missing arrays.
		treehierarchy.parent2child( nodes );
		
		
		// Duplicate the children data to _children
		nodes.forEach(node=>{
			node._children = node.children;
		})
		
		// Maybe for now keep everything the same, but rename parents to parentsnodes, and parents_id to parents. Then add in references to the nodes.
		
		return nodes
		
	} // unstructurednodes2nodes
	
	
	
	
	// Change to set bundles and links?? Bundles definitely need to be set. Links are accessed for drawing only through bundles.
	compute_bundle_id(node){
	  // This is a separate function for sake of consistency.
	  return node.parents.sort().join('--') + " level " + node.level
	}
	
	
	
	
	
	
	compute_bundles(nodes){
	    let obj = this;
		// Compute hte bundles based on the active nodes that have been passed in as `nodes'. The original trees contain the node groups with relationships concerning that tree - the original trees mst be used to find all different bundles. It also means that the trees must be looped over to get all the bundles.
		
		function make_bundle_id(node, author){
			// A unique bundle id is made of the bundle parents (where it originates from, which level the node it connects to is on, and the author). This should be enough for now.
			return node.parents.sort().join('--') + " level " + node.level + " author " + author
		} // bundle_id
		
		
		let activeNodeIds = nodes.map(node=>node.id);
		
	  
	    let bundle_ids = []
		let bundleregistry = {}
	    let bundles = []
		
		
		obj.trees.forEach( tree => {
			
			// Author is the tree unique id.
			let author = tree.author;
			
			
			// Find only the active nodes of this tree.
			let active = tree.nodes.filter( node => {
				// The node is active if it's in the array of nodes that were passed in.
				return activeNodeIds.includes(node.id)
			}) // filter;
			
			// Find the bundles for each tree.
			active.forEach(function(node){
		
			  if(node.parents.length > 0){
				let bundleid = make_bundle_id(node, author)
				
				
				// Collect everything required for the links here already. So parents and children.
				let bundle;
				if(!bundle_ids.includes(bundleid)){
				    // Make a new bundle.
				    bundle = {
					  id: bundleid,
					  author: author,
					  parents: node.parents,
					  children: [],
					  level: node.level,
					  links: [],
					  dim: {}
				    } // bundle
				  
				  
				    // Store the bundle
				    bundle_ids.push(bundleid)
				    bundleregistry[bundleid] = bundle;
				    bundles.push(bundle)
				} else {
					// Get the existing bundle, and add a child to it.
					bundle = bundleregistry[bundleid];
					
				} // if
				
				
				// After the bundle has been created or retrieved, create all of it's children.
				let childid = node.id;
				
				
				bundle.children.push(childid);
				
				// Make the links. These are connections between parents and children. We're looping over the children already, so just create the link between the specific child and all the parents here.
				bundle.parents.forEach(parentid=>{
					
					let link = {
						id: [childid, parentid].join("--") + "  " + author,
						source: obj.noderegistry[childid], 
						target: obj.noderegistry[parentid], 
						bundle_id: bundleid,
						level: node.level, 
						dim: {}
					}
					
					bundle.links.push(link);
					
				})
				
			  } // if
			}) // forEach
			
		}) // forEach tree
		
		
		// Store the bundle registry for later use.
		obj.bundleregistry = bundleregistry;
	    
	  return bundles
	  
	} // compute_bundles
	
	compute_links(bundles){
	  let obj = this
	  
	  // Compute hte links based on the bundles. There may be more than one link going between the same two nodes!!

	  let links = []
	  bundles.forEach( bundle => {
		  // For each bundle create all the nodes needed.
		  links = links.concat(bundle.links);
	  }) // forEach
	  
	  return links
	  
	} // compute_links
	
	
	
	
	
	
	bundles_of_node(nodes, bundles){
	  // 'bundles_of_node' creates a map that goes from a node to all of the bundles in which that node is a parent. By way of bundle definition the node can only be a child of one bundle.
	  
	  return nodes.reduce( (a,node) => {
		
		a[node.id] = bundles.filter( bundle => {
		  // Is the node a parent in this bundle?
		  return bundle.parents.includes(node.id)
		})
	  
		return a
	  }, {}) // reduce
	} // bundles_of_node
	
	
	

	
	
	// This should be the getter instead!!
	get levels(){
		// Creates the tree visualisation elements with cross referencing in preparation for dimesnioning.
		let obj = this
		
		
		// How to compute bundles for the trees separately. Maybe feed in the nodes separately? Compute bundles requires the basic
		
		// Bundles can be based on the very basic data. But the nodes can have different children based on the tree they are on. How to enforce interactivity propagation in this case?? 
		
		// maybe it would be better to just have a separate hierarchy for each of the trees until the point where they have to be dimensioned. But isn't this what is done already? The node can have children of more than just one tree - it's the bundles that determine the lines after all. And that way the tree is interactive - when a node is closed all the children are closed. And always only the active nodes can be used.
		
	    let nodes = this.nodes;
	    
		// The bundles need to be calculated using a subset of nodes, not all the nodes!!
		let bundles = this.compute_bundles(nodes);
	    let links = this.compute_links(bundles);
		
		
	  
	    /* 
	      Cross references are necessary for dimensioning and positioning of nodes, e.g. node ('station') size depends on the number of bundles that are coming in/out.
	  
	      Create access both ways:
	  
	      nodes -> 
		    node marker size depends on number of child bundles. Ah, but now it will also depend on number of parent bundles (because there are parallel trees).
	      bundles -> parent/child nodes and links.
	      links -> parent/child node, bundle
	    */
		
		
		
		// Links should be created directly when the bundles are made. 
		
		
		
		
		
		
		// Other registries. Can I simplify this somehow? Maybe by moving the dimesnioning to loop over bundles within a level??
	    let child_bundles_of_node = obj.bundles_of_node(nodes, bundles)
	    
	  
	    nodes.forEach(node => {
			// With parallel trees the parent bundles need to be tracked also.
		  node.child_bundles = child_bundles_of_node[node.id];
	    })
	  
	    
	  
	    
		
		
		
		
	  
	    // Dimensioning must be done in levels in the end. The number of bundles in a level determines the x-size of the level. The nodes in a level determine its y-size. The nodes must know the number of bundles they are a part of to dimension the markers.
		
		// The incoming data won't be in levels in the end. Maybe skip this for now? But it's also important to how the treehierarchy is structured, and how branches will be collapsed off. For collapsing it's probably best to keep all children called children. Maybe instead of basing it off of the original data the nodes etc should be precomupted before the dimesnioning.
		
		// Find all the levels from the nodes.
		let maxlevel = nodes.reduce((a,node)=>{
			if(a > node.level){
				return a;
			} else {
				return node.level;
			} // if
		}, 0);
		
	    let levels = []
		for(let i=0; i<maxlevel+1; i++){
		  levels.push({
		    i: i,
		    nodes: nodes.filter( node => {return node.level == i}),
		    bundles: bundles.filter( bundle => {return bundle.level == i}),
		    links: links.filter( link => {return link.level == i})
		  })
	    } // for
	  
	  
	    return levels

	} // get levels

	
	
	
	// Dimesnion the tree.
	dimension(){
	    // `dimension' calculates the positions of the nodes on the screen, and dimensions the connecting links.
	    let obj = this
	  
	 

	    // Temp unwrapping.
		let node_height =       obj.layout.node_height;
		let node_width =        obj.layout.node_width;
		let bundle_width =      obj.layout.bundle_width;
		let level_y_padding =   obj.layout.level_y_padding;
		let metro_d =           obj.layout.metro_d;
		let c =                 obj.layout.c;
		let min_family_height = obj.layout.min_family_height;
		
	  
		let levels = obj.levels;
	  
	  
	  // MARKER SIZE: determined by the number of bundles that the node participates in as a parent.
	  levels.forEach(lvl => {
		lvl.nodes.forEach(node => node.dim.height = (Math.max(1, node.child_bundles.length)-1)*metro_d)  
	  })
	  
	  
	  // NODE POSITION:
	  var x_offset = 0
	  var y_offset = 0
	  levels.forEach(level => {
		// Distance between different levels depends on the number of bundles in that level! Essentially more space is needed for more bundles.
		x_offset += level.bundles.length*bundle_width
		y_offset += level_y_padding
		level.nodes.forEach((node, i) => {
		  let dim = node.dim
		  dim.markersize = ( Math.max(1, node.child_bundles.length) - 1 )*metro_d
		  dim.x = x_offset + node.level*node_width
		  dim.y = y_offset + node_height + dim.markersize/2
		  
		  y_offset += node_height + dim.markersize
		})
	  })
	  
	  
	  
	  // A line is made up of two horizontal segments, one before the curve and one after. Since both horizontal segments either start or end at a node, it is sufficient to know the length of one, along with the turn radius to have both sufficiently defined. The length of the first horizontal segment will differ among lines of a single level to ensure they do not overlap unnecessarily.
	  
	  
	  
	  // Calculate hte position of the bundle line where it turns vertical in preparaton of branching out to children.
	  levels.forEach(level => {
		level.bundles.forEach( (bundle,i) => {
		  // Find the parent furthest to the right. That will be the parent one level above the current bundle level
		  let farthest_parent_x = d3.max(bundle.parents, node_id=>{
			  return obj.noderegistry[node_id].dim.x
		  })
		  bundle.dim.x = farthest_parent_x + node_width + (level.bundles.length - 1 - i)*bundle_width
		}) // forEach
	  }) // forEach
	  
	  
	  // LINKS
	  levels.forEach(lvl=>{
		// Change to operate on a node basis. Then the bundleid etc will be clearer.
		  
		// the links of a level are the incoming links. 
		  
		lvl.links.forEach(link => {
			let source = link.source.dim
			let target = link.target.dim
			let dim = link.dim
			
			// Find index of bundle of the parent.
			let bundle = obj.bundleregistry[link.bundle_id];
			let bundles_of_target = link.target.child_bundles
			let bundle_ind = bundles_of_target.indexOf(bundle)
			
			
			// target is the parent node, source is the child!
			// xb is the location of the vertical file that starts distributing the children.
			dim.xt = target.x
			
			// l.target.bundles_index[l.bundle.id].i*metro_d - l.target.bundles.length*metro_d/2 + metro_d/2
			// yt has to be offset so that the lines emerge from a node side by side.
			dim.bundle_ind = bundle_ind
			dim.yt = target.y + bundle_ind*metro_d - bundles_of_target.length*metro_d/2 + metro_d/2
			dim.xb = bundle.dim.x
			dim.xs = source.x
			dim.ys = source.y
		  })
	  })
	  
	  
	  
	  // Originally all levels are moved one underneath another. Now an attempt is made to reclaim some of the vertical space. A minimum height of the turn is enforced through "min_family_height"
	  var y_negative_offset = 0
	  levels.forEach(lvl => {
		// MY BUNDLES DON'T HAVE REFERENCES TO LINKS!!
		
		// f(link)
		// find min f(link) for all links in a bundle
		// find min of min(f(link)) for all bundles in level
		// == find min(f(link)) for all links in the level
		
		y_negative_offset += -min_family_height + d3.min(lvl.links, link => (link.dim.ys-c)-(link.dim.yt+c)) || 0
		// y_negative_offset = -100 + d3.min(lvl.links, link => link.dim.ys) || 0
		lvl.nodes.forEach(n => n.dim.y -= y_negative_offset)
	  })
	  
	  
	  // WHAT DOES THIS DO??
	  // very ugly, I know
	  levels.forEach(lvl => {
		  lvl.links.forEach(link => {
			let target = link.target.dim;
			let source = link.source.dim;
			let l = link.dim
			
			l.yt = target.y + l.bundle_ind*metro_d - link.target.child_bundles.length*metro_d/2 + metro_d/2
			l.ys = source.y
			l.c1 = source.level-target.level > 1 ? node_width+c : c
			l.c2 = c
		  }) // forEach
	  }) // forEach
	  
	  
	  
	  // Instead of outputting an aggregate, the nodes and bundles should be accessed through the class itself. This way the same node objects can be used to communicate the user actions back to the hierarchy for recalculation.
	  
	  // Create an alternate aggregate for drawing. This can be changed if the drawing changes also.
	  let agg = levels.reduce((a,lvl)=>{
		  a.nodes = a.nodes.concat(lvl.nodes);
		  a.bundles = a.bundles.concat(lvl.bundles);
		  return a
	  },{nodes: [], bundles: []})
	  
	  // The aggregate is stored separately as to not override the internally stored nodes. These must remain there so they can be drawn after they were hidden.
	  return agg;
	} // dimension
	
	
	
	
	
	
	// SOME UTILITY
	initialiselevels2(nodes){
		let obj = this;
		// The initialisation should be done for all trees separately. In the end the maximum levels for each node should be taken.
		let active_node_ids = nodes.map(node=>node.id);
		
		// Loop through the trees and calculate the levels for the nodes. The loop through all the active nodes and collect the highest level for that node.
		obj.trees.forEach(tree=>{
			
			// The levels of nodes may change depending on which nodes are active. So first the set of active nodes must be recreated using the trees nodes here.
			
			let active = tree.nodes.filter(node=>{
				return active_node_ids.includes(node.id);
			}) // filter
			
			obj.initialiselevels(tree.registry, active)
			
		}) // forEach tree
		
		
		// Why don't I try to just initialise the levels of the currently active nodes? Why do I need to go through two trees. I know which nodes I have, and I know what connections will be needed.
		
		
		
		// Now with the trees all initialised let's loop over the nodes and collect their appropriate levels.
		nodes.forEach(node=>{
			let candidates = obj.trees.map(tree=>{
				// It's possible that the tree does not feature this particular node, in which case return the default level of 0.
				let tree_node_ids = Object.getOwnPropertyNames(tree.registry)
				if(tree_node_ids.includes(node.id)){
					return tree.registry[node.id].level;
				} else {
					return 0
				}; // if
				
				
				// HERE MAKE SURE THAT AFTER THE MERGER NO NODE HAS A HIGHER LEVEL THAN ITS CHILD!!! THIS COULD HAPPEN!!
				
			})
			
			node.level = Math.max(...candidates)
		})
		
		
		
	} // initialiselevels2
	
	initialiselevels(registry, nodes){
		let obj = this;
		// Pass through the levels and assign level: 0 to those without parents. Nodes are passed in as they may be a subset of all nodes.
		
		// First clear all the levels?
		nodes.forEach(node=>{
			node.level = undefined;
		}) // forEach
		
		
		// Set the root levels.
		nodes.forEach(node=>{
			if(node.parents.length == 0){
				node.level = 0;
			} // if
		})
		
		// Now move through the nodes and check if all parents already had a level assigned. If so the level of the node is max(parents.level) + 1. This must be done until all the nodes have an assigned level.
		
		
		let unassignednodes = nodes.filter(node=>node.level==undefined);
		
		
		let ind = 0
		let breakind = unassignednodes.length;
		while (unassignednodes.length > 0){
			
			unassignednodes.forEach(node=>{
				// All parents must have an assigned level, otherwise skip. Check if any don't have level.
				let parents = node.parents.map(parentid=>registry[parentid])
				
				
				if( parents.some(parent=>parent.level==undefined) ){
					// Some don't have level assigned. Skip.
				} else {
					node.level = d3.max(parents, parent=>parent.level) + 1;
				}
			})
			
			
			if(ind > breakind){
				break;
			} else {
				ind += 1;
			} // if
			
			unassignednodes = unassignednodes.filter(node=>node.level==undefined)
			
		} // while
		
	} // initialiselevels
	
	
	
	static parent2child(nodes){
		
		let nodeDictionary = nodes.reduce((a,node)=>{
			a[node.id] = node;
			return a
		},{})
		
		// Here I want to find all the parents of a particular node, and add this node as a child to them. Why would this duplicate the results?
		nodes.forEach(node=>{
			node.parents.forEach(parentId=>{
				// Get the parent so the child can be pushed to it. Allow the parent not to be found - e.g. if just a branch of an existing branch is made.
				let parent = nodeDictionary[parentId];
				if(parent){
					parent.children.push(node.id);
				} // if
				
			})
		})
		return nodes;
	} // parent2child
	
	static child2parent(nodes){	
	
		let nodeDictionary = nodes.reduce((a,node)=>{
			a[node.id] = node;
			return a
		},{})
	
		nodes.forEach(node=>{
			node.children.forEach(childId=>{
				let child = nodeDictionary[childId];
				child.parents.push(node.id);
			})
		})
		return nodes;
	} // parent2child
	
	static enforceconsistency(nodes){
		
		// First initialise empty children arrays.
		nodes.forEach(node=>{
			// Initialise an empty array if needed.
			
			if(!node.parents){
				node.parents = [];
			} // if
			
			if(!node.children){
				node.children = [];
			} // if
			
			// A separate `_children' array is used to store the children data permanently. By changing the `children' array the branches can be closed off.
			if(!node._children){
				node._children = [];
			}
			
			
			// Add on a `dim' object that will wrap all the dimesnions of the node.
			node.dim = {};
			
			
		})
	} // enforceconsistency
	
	
} // treerender