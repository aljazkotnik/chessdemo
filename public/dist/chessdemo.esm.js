import * as d3$1 from 'd3';
import { makeObservable, action, observable, computed, autorun } from 'mobx';

// Formulate this as a class? The it can be called as:
// A = new dragdiv() ...


class dragdiv {
	constructor(){
		// Make a new div.
		let obj = this;
		
		// Absolute or relative position??
		obj.div = d3$1.create("div")
		  .style("position", "absolute")
		  .style("left", 0 + "px")
		  .style("top", 0 + "px");
		
		// Container that will hold the mouse coordinates.
		obj.mouseorigin = {};
		
		// Apply dragging to it. Store the movement data on the dragdiv object instead? So as to not pollute the actual object?
		let dragobj = d3$1.drag()
			.on("start", function(event){
				obj.div.raise();
				obj.mouseorigin = obj.mouseposition(event);
			})
			.on("drag", function(event){
				// let position = obj.position()
				let movement = obj.movement(event);
				
				// Rounding positions to full pixel value hasn't helped much. Maybe it's the css holding everything back?
				
				
				// Move the wrapper.
				obj.div
				  .style("left", (obj.position.x + movement.x) + "px")
				  .style("top", (obj.position.y + movement.y) + "px");
				  
				// Update the last mouse position
				obj.mouseorigin = obj.mouseposition(event);
			})
			.on("end", function(event){
				// The parent should update it's position automatically. How do I do that? Maybe the parent should listen to some action? Or maybe it's position should just be calculated when it's needed?
			});
		
		obj.div.call(dragobj);
		
		
		obj.node = obj.div.node();
		
	} // constructor
	
	
	get position(){
		// Get the position of the dragdiv.
		let obj = this;
		let divdom = obj.div.node();
		
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
		
		return {
			x: event.sourceEvent.clientX,
			y: event.sourceEvent.clientY
		}
		
	} // mouseposition
	
	
	
} // dragdiv

// ADDITIONAL IDEA.
// Could the filtering plots also be sprites?? Then they could be set up into groups also. Maybe this could be interesting for story telling??


// GENERAL SPRITE
// If the renderer needs to be passed in, then some background coding has to happen anyway. So maybe it's better to just provide different sprites at that point. And the sprite type will handle the rendering. Yes - abstract to sprite level!!

// Should have task, file, graphic. Both the task and the file should be passed in from outside - this ensures that an outside process handles the data loading. Furthermore, data to be used for clustering and embedding must be made available. This is passed in as `datahandler', and can be the data object directly, or an accessor that returns the data from the `file object'.







// This is an abstract sprite class that serves as a basis for sprite groups and specific sprite implementations (e.g.: `spritegroup', 'chesssprite', `webglsprite', `imagesprite', ...). As such it only contains the bare minimum to make a sprite frame, and position or resize it. 
class sprite {
  constructor(){
	let obj = this;
	

	// Currently no on drag-start/move/end functionality is prescribed. But it will be needed for webgl sprites, as a canvas element will have to be added to the sprite to contain the dragged sprite. Furthermore the main canvas will have to be redrawn on start and end. This would have to be passed in somehow, and it should collect the object along the way too. Maybe the dragdiv should just execute any onstart that it can find? maybe the event was only visible because there was no data object attached to the div yet?
	let div = new dragdiv();
	
	
	
	
	// Create teh DOM element corresponding to this contour, and add it to hte wrapper. Keep it without d3?
	let d3wrapper = d3$1.select(div.node)
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
	this.node.style.left = point[0] + "px";
	this.node.style.top = point[1] + "px";
  } // position
  
  get position(){
	// Get the DOM position of the contour relative to the canvas.
	let wrapper = this.node;
	return [parseInt(wrapper.style.left), parseInt(wrapper.style.top)]
  } // position
  
  
  get midpoint(){
	let wrapper = this.node;
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
	
	d3$1.select(obj.node)
	  .select("div.scene-element")
	  .style("width", width + "px")
	  .style("height", height + "px");
	  
	  
  } // size
	
  // Hide and show.
  show(){
	this.node.style.display = "block";
  } // show
  
  hide(){
	this.node.style.display = "none";
  } // hide
	
} // sprite

var colors = ['white', 'black'];
var files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];

let invRanks = [...ranks].reverse();
var allKeys = Array.prototype.concat(...files.map(c => ranks.map(r => c + r)));
var pos2key = (pos) => allKeys[8 * pos[0] + pos[1]];
var key2pos = (k) => [k.charCodeAt(0) - 97, k.charCodeAt(1) - 49];
var allPos = allKeys.map(key2pos);

function memo(f) {
    let v;
    const ret = () => {
        if (v === undefined)
            v = f();
        return v;
    };
    ret.clear = () => {
        v = undefined;
    };
    return ret;
}

var timer = () => {
    let startAt;
    return {
        start() {
            startAt = performance.now();
        },
        cancel() {
            startAt = undefined;
        },
        stop() {
            if (!startAt)
                return 0;
            const time = performance.now() - startAt;
            startAt = undefined;
            return time;
        },
    };
};

var opposite = (c) => (c === 'white' ? 'black' : 'white');

var distanceSq = (pos1, pos2) => {
    const dx = pos1[0] - pos2[0], dy = pos1[1] - pos2[1];
    return dx * dx + dy * dy;
};

var samePiece = (p1, p2) => p1.role === p2.role && p1.color === p2.color;
var posToTranslateBase = (pos, asWhite, xFactor, yFactor) => [
    (asWhite ? pos[0] : 7 - pos[0]) * xFactor,
    (asWhite ? 7 - pos[1] : pos[1]) * yFactor,
];
var posToTranslateAbs = (bounds) => {
    const xFactor = bounds.width / 8, yFactor = bounds.height / 8;
    return (pos, asWhite) => posToTranslateBase(pos, asWhite, xFactor, yFactor);
};
var posToTranslateRel = (pos, asWhite) => posToTranslateBase(pos, asWhite, 100, 100);
var translateAbs = (el, pos) => {
    el.style.transform = `translate(${pos[0]}px,${pos[1]}px)`;
};
var translateRel = (el, percents) => {
    el.style.transform = `translate(${percents[0]}%,${percents[1]}%)`;
};
var setVisible = (el, v) => {
    el.style.visibility = v ? 'visible' : 'hidden';
};
var eventPosition = (e) => {
    var _a;
    if (e.clientX || e.clientX === 0)
        return [e.clientX, e.clientY];
    if ((_a = e.targetTouches) === null || _a === void 0 ? void 0 : _a[0])
        return [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
    return;
};
var isRightButton = (e) => e.buttons === 2 || e.button === 2;
var createEl = (tagName, className) => {
    const el = document.createElement(tagName);
    if (className)
        el.className = className;
    return el;
};
function computeSquareCenter(key, asWhite, bounds) {
    const pos = key2pos(key);
    if (!asWhite) {
        pos[0] = 7 - pos[0];
        pos[1] = 7 - pos[1];
    }
    return [
        bounds.left + (bounds.width * pos[0]) / 8 + bounds.width / 16,
        bounds.top + (bounds.height * (7 - pos[1])) / 8 + bounds.height / 16,
    ];
}

function diff(a, b) {
    return Math.abs(a - b);
}
function pawn(color) {
    return (x1, y1, x2, y2) => diff(x1, x2) < 2 &&
        (color === 'white'
            ?
                y2 === y1 + 1 || (y1 <= 1 && y2 === y1 + 2 && x1 === x2)
            : y2 === y1 - 1 || (y1 >= 6 && y2 === y1 - 2 && x1 === x2));
}
var knight = (x1, y1, x2, y2) => {
    const xd = diff(x1, x2);
    const yd = diff(y1, y2);
    return (xd === 1 && yd === 2) || (xd === 2 && yd === 1);
};

const bishop = (x1, y1, x2, y2) => {
    return diff(x1, x2) === diff(y1, y2);
};
const rook = (x1, y1, x2, y2) => {
    return x1 === x2 || y1 === y2;
};
var queen = (x1, y1, x2, y2) => {
    return bishop(x1, y1, x2, y2) || rook(x1, y1, x2, y2);
};

function king(color, rookFiles, canCastle) {
    return (x1, y1, x2, y2) => (diff(x1, x2) < 2 && diff(y1, y2) < 2) ||
        (canCastle &&
            y1 === y2 &&
            y1 === (color === 'white' ? 0 : 7) &&
            ((x1 === 4 && ((x2 === 2 && rookFiles.includes(0)) || (x2 === 6 && rookFiles.includes(7)))) ||
                rookFiles.includes(x2)));
}
function rookFilesOf(pieces, color) {
    const backrank = color === 'white' ? '1' : '8';
    const files = [];
    for (const [key, piece] of pieces) {
        if (key[1] === backrank && piece.color === color && piece.role === 'rook') {
            files.push(key2pos(key)[0]);
        }
    }
    return files;
}
function premove(pieces, key, canCastle) {
    const piece = pieces.get(key);
    if (!piece)
        return [];
    const pos = key2pos(key), r = piece.role, mobility = r === 'pawn'
        ? pawn(piece.color)
        : r === 'knight'
            ? knight
            : r === 'bishop'
                ? bishop
                : r === 'rook'
                    ? rook
                    : r === 'queen'
                        ? queen
                        : king(piece.color, rookFilesOf(pieces, piece.color), canCastle);
    return allPos
        .filter(pos2 => (pos[0] !== pos2[0] || pos[1] !== pos2[1]) && mobility(pos[0], pos[1], pos2[0], pos2[1]))
        .map(pos2key);
}

function callUserFunction(f, ...args) {
    if (f)
        setTimeout(() => f(...args), 1);
}
function toggleOrientation(state) {
    state.orientation = opposite(state.orientation);
    state.animation.current = state.draggable.current = state.selected = undefined;
}
function setPieces(state, pieces) {
    for (const [key, piece] of pieces) {
        if (piece)
            state.pieces.set(key, piece);
        else
            state.pieces.delete(key);
    }
}
function setCheck(state, color) {
    state.check = undefined;
    if (color === true)
        color = state.turnColor;
    if (color)
        for (const [k, p] of state.pieces) {
            if (p.role === 'king' && p.color === color) {
                state.check = k;
            }
        }
}
function setPremove(state, orig, dest, meta) {
    unsetPredrop(state);
    state.premovable.current = [orig, dest];
    callUserFunction(state.premovable.events.set, orig, dest, meta);
}
function unsetPremove(state) {
    if (state.premovable.current) {
        state.premovable.current = undefined;
        callUserFunction(state.premovable.events.unset);
    }
}
function setPredrop(state, role, key) {
    unsetPremove(state);
    state.predroppable.current = { role, key };
    callUserFunction(state.predroppable.events.set, role, key);
}
function unsetPredrop(state) {
    const pd = state.predroppable;
    if (pd.current) {
        pd.current = undefined;
        callUserFunction(pd.events.unset);
    }
}
function tryAutoCastle(state, orig, dest) {
    if (!state.autoCastle)
        return false;
    const king = state.pieces.get(orig);
    if (!king || king.role !== 'king')
        return false;
    const origPos = key2pos(orig);
    const destPos = key2pos(dest);
    if ((origPos[1] !== 0 && origPos[1] !== 7) || origPos[1] !== destPos[1])
        return false;
    if (origPos[0] === 4 && !state.pieces.has(dest)) {
        if (destPos[0] === 6)
            dest = pos2key([7, destPos[1]]);
        else if (destPos[0] === 2)
            dest = pos2key([0, destPos[1]]);
    }
    const rook = state.pieces.get(dest);
    if (!rook || rook.color !== king.color || rook.role !== 'rook')
        return false;
    state.pieces.delete(orig);
    state.pieces.delete(dest);
    if (origPos[0] < destPos[0]) {
        state.pieces.set(pos2key([6, destPos[1]]), king);
        state.pieces.set(pos2key([5, destPos[1]]), rook);
    }
    else {
        state.pieces.set(pos2key([2, destPos[1]]), king);
        state.pieces.set(pos2key([3, destPos[1]]), rook);
    }
    return true;
}
function baseMove(state, orig, dest) {
    const origPiece = state.pieces.get(orig), destPiece = state.pieces.get(dest);
    if (orig === dest || !origPiece)
        return false;
    const captured = destPiece && destPiece.color !== origPiece.color ? destPiece : undefined;
    if (dest === state.selected)
        unselect(state);
    callUserFunction(state.events.move, orig, dest, captured);
    if (!tryAutoCastle(state, orig, dest)) {
        state.pieces.set(dest, origPiece);
        state.pieces.delete(orig);
    }
    state.lastMove = [orig, dest];
    state.check = undefined;
    callUserFunction(state.events.change);
    return captured || true;
}

function baseNewPiece(state, piece, key, force) {
    if (state.pieces.has(key)) {
        if (force)
            state.pieces.delete(key);
        else
            return false;
    }
    callUserFunction(state.events.dropNewPiece, piece, key);
    state.pieces.set(key, piece);
    state.lastMove = [key];
    state.check = undefined;
    callUserFunction(state.events.change);
    state.movable.dests = undefined;
    state.turnColor = opposite(state.turnColor);
    return true;
}

function baseUserMove(state, orig, dest) {
    const result = baseMove(state, orig, dest);
    if (result) {
        state.movable.dests = undefined;
        state.turnColor = opposite(state.turnColor);
        state.animation.current = undefined;
    }
    return result;
}
function userMove(state, orig, dest) {
    if (canMove(state, orig, dest)) {
        const result = baseUserMove(state, orig, dest);
        if (result) {
            const holdTime = state.hold.stop();
            unselect(state);
            const metadata = {
                premove: false,
                ctrlKey: state.stats.ctrlKey,
                holdTime,
            };
            if (result !== true)
                metadata.captured = result;
            callUserFunction(state.movable.events.after, orig, dest, metadata);
            return true;
        }
    }
    else if (canPremove(state, orig, dest)) {
        setPremove(state, orig, dest, {
            ctrlKey: state.stats.ctrlKey,
        });
        unselect(state);
        return true;
    }
    unselect(state);
    return false;
}

function dropNewPiece(state, orig, dest, force) {
    const piece = state.pieces.get(orig);
    if (piece && (canDrop(state, orig, dest) || force)) {
        state.pieces.delete(orig);
        baseNewPiece(state, piece, dest, force);
        callUserFunction(state.movable.events.afterNewPiece, piece.role, dest, {
            premove: false,
            predrop: false,
        });
    }
    else if (piece && canPredrop(state, orig, dest)) {
        setPredrop(state, piece.role, dest);
    }
    else {
        unsetPremove(state);
        unsetPredrop(state);
    }
    state.pieces.delete(orig);
    unselect(state);
}

function selectSquare(state, key, force) {
    callUserFunction(state.events.select, key);
    if (state.selected) {
        if (state.selected === key && !state.draggable.enabled) {
            unselect(state);
            state.hold.cancel();
            return;
        }
        else if ((state.selectable.enabled || force) && state.selected !== key) {
            if (userMove(state, state.selected, key)) {
                state.stats.dragged = false;
                return;
            }
        }
    }
    if (isMovable(state, key) || isPremovable(state, key)) {
        setSelected(state, key);
        state.hold.start();
    }
}

function setSelected(state, key) {
    state.selected = key;
    if (isPremovable(state, key)) {
        state.premovable.dests = premove(state.pieces, key, state.premovable.castle);
    }
    else
        state.premovable.dests = undefined;
}

function unselect(state) {
    state.selected = undefined;
    state.premovable.dests = undefined;
    state.hold.cancel();
}
function isMovable(state, orig) {
    const piece = state.pieces.get(orig);
    return (!!piece &&
        (state.movable.color === 'both' || (state.movable.color === piece.color && state.turnColor === piece.color)));
}
function canMove(state, orig, dest) {
    var _a, _b;
    return (orig !== dest && isMovable(state, orig) && (state.movable.free || !!((_b = (_a = state.movable.dests) === null || _a === void 0 ? void 0 : _a.get(orig)) === null || _b === void 0 ? void 0 : _b.includes(dest))));
}
function canDrop(state, orig, dest) {
    const piece = state.pieces.get(orig);
    return (!!piece &&
        (orig === dest || !state.pieces.has(dest)) &&
        (state.movable.color === 'both' || (state.movable.color === piece.color && state.turnColor === piece.color)));
}
function isPremovable(state, orig) {
    const piece = state.pieces.get(orig);
    return !!piece && state.premovable.enabled && state.movable.color === piece.color && state.turnColor !== piece.color;
}
function canPremove(state, orig, dest) {
    return (orig !== dest && isPremovable(state, orig) && premove(state.pieces, orig, state.premovable.castle).includes(dest));
}
function canPredrop(state, orig, dest) {
    const piece = state.pieces.get(orig);
    const destPiece = state.pieces.get(dest);
    return (!!piece &&
        (!destPiece || destPiece.color !== state.movable.color) &&
        state.predroppable.enabled &&
        (piece.role !== 'pawn' || (dest[1] !== '1' && dest[1] !== '8')) &&
        state.movable.color === piece.color &&
        state.turnColor !== piece.color);
}
function isDraggable(state, orig) {
    const piece = state.pieces.get(orig);
    return (!!piece &&
        state.draggable.enabled &&
        (state.movable.color === 'both' ||
            (state.movable.color === piece.color && (state.turnColor === piece.color || state.premovable.enabled))));
}
function playPremove(state) {
    const move = state.premovable.current;
    if (!move)
        return false;
    const orig = move[0], dest = move[1];
    let success = false;
    if (canMove(state, orig, dest)) {
        const result = baseUserMove(state, orig, dest);
        if (result) {
            const metadata = { premove: true };
            if (result !== true)
                metadata.captured = result;
            callUserFunction(state.movable.events.after, orig, dest, metadata);
            success = true;
        }
    }
    unsetPremove(state);
    return success;
}
function playPredrop(state, validate) {
    const drop = state.predroppable.current;
    let success = false;
    if (!drop)
        return false;
    if (validate(drop)) {
        const piece = {
            role: drop.role,
            color: state.movable.color,
        };
        if (baseNewPiece(state, piece, drop.key)) {
            callUserFunction(state.movable.events.afterNewPiece, drop.role, drop.key, {
                premove: false,
                predrop: true,
            });
            success = true;
        }
    }
    unsetPredrop(state);
    return success;
}
function cancelMove(state) {
    unsetPremove(state);
    unsetPredrop(state);
    unselect(state);
}
function stop(state) {
    state.movable.color = state.movable.dests = state.animation.current = undefined;
    cancelMove(state);
}
function getKeyAtDomPos(pos, asWhite, bounds) {
    let file = Math.floor((8 * (pos[0] - bounds.left)) / bounds.width);
    if (!asWhite)
        file = 7 - file;
    let rank = 7 - Math.floor((8 * (pos[1] - bounds.top)) / bounds.height);
    if (!asWhite)
        rank = 7 - rank;
    return file >= 0 && file < 8 && rank >= 0 && rank < 8 ? pos2key([file, rank]) : undefined;
}
function getSnappedKeyAtDomPos(orig, pos, asWhite, bounds) {
    const origPos = key2pos(orig);
    const validSnapPos = allPos.filter(pos2 => {
        return queen(origPos[0], origPos[1], pos2[0], pos2[1]) || knight(origPos[0], origPos[1], pos2[0], pos2[1]);
    });
    const validSnapCenters = validSnapPos.map(pos2 => computeSquareCenter(pos2key(pos2), asWhite, bounds));
    const validSnapDistances = validSnapCenters.map(pos2 => distanceSq(pos, pos2));
    const [, closestSnapIndex] = validSnapDistances.reduce((a, b, index) => (a[0] < b ? a : [b, index]), [
        validSnapDistances[0],
        0,
    ]);
    return pos2key(validSnapPos[closestSnapIndex]);
}
function whitePov(s) {
    return s.orientation === 'white';
}

var initial = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
const roles = {
    p: 'pawn',
    r: 'rook',
    n: 'knight',
    b: 'bishop',
    q: 'queen',
    k: 'king',
};
const letters = {
    pawn: 'p',
    rook: 'r',
    knight: 'n',
    bishop: 'b',
    queen: 'q',
    king: 'k',
};
function read(fen) {
    if (fen === 'start')
        fen = initial;
    const pieces = new Map();
    let row = 7, col = 0;
    for (const c of fen) {
        switch (c) {
            case ' ':
                return pieces;
            case '/':
                --row;
                if (row < 0)
                    return pieces;
                col = 0;
                break;
            case '~':
                const piece = pieces.get(pos2key([col, row]));
                if (piece)
                    piece.promoted = true;
                break;
            default:
                const nb = c.charCodeAt(0);
                if (nb < 57)
                    col += nb - 48;
                else {
                    const role = c.toLowerCase();
                    pieces.set(pos2key([col, row]), {
                        role: roles[role],
                        color: c === role ? 'black' : 'white',
                    });
                    ++col;
                }
        }
    }
    return pieces;
}

function write(pieces) {
    return invRanks
        .map(y => files
        .map(x => {
        const piece = pieces.get((x + y));
        if (piece) {
            const letter = letters[piece.role];
            return piece.color === 'white' ? letter.toUpperCase() : letter;
        }
        else
            return '1';
    })
        .join(''))
        .join('/')
        .replace(/1{2,}/g, s => s.length.toString());
}

function configure(state, config) {
    var _a;
    if ((_a = config.movable) === null || _a === void 0 ? void 0 : _a.dests)
        state.movable.dests = undefined;
    merge(state, config);
    if (config.fen) {
        state.pieces = read(config.fen);
        state.drawable.shapes = [];
    }
    if (config.hasOwnProperty('check'))
        setCheck(state, config.check || false);
    if (config.hasOwnProperty('lastMove') && !config.lastMove)
        state.lastMove = undefined;
    else if (config.lastMove)
        state.lastMove = config.lastMove;
    if (state.selected)
        setSelected(state, state.selected);
    if (!state.animation.duration || state.animation.duration < 100)
        state.animation.enabled = false;
    if (!state.movable.rookCastle && state.movable.dests) {
        const rank = state.movable.color === 'white' ? '1' : '8', kingStartPos = ('e' + rank), dests = state.movable.dests.get(kingStartPos), king = state.pieces.get(kingStartPos);
        if (!dests || !king || king.role !== 'king')
            return;
        state.movable.dests.set(kingStartPos, dests.filter(d => !(d === 'a' + rank && dests.includes(('c' + rank))) &&
            !(d === 'h' + rank && dests.includes(('g' + rank)))));
    }
}

function merge(base, extend) {
    for (const key in extend) {
        if (isObject(base[key]) && isObject(extend[key]))
            merge(base[key], extend[key]);
        else
            base[key] = extend[key];
    }
}
function isObject(o) {
    return typeof o === 'object';
}

function anim(mutation, state) {
    return state.animation.enabled ? animate(mutation, state) : render$1(mutation, state);
}
function render$1(mutation, state) {
    const result = mutation(state);
    state.dom.redraw();
    return result;
}
function makePiece(key, piece) {
    return {
        key: key,
        pos: key2pos(key),
        piece: piece,
    };
}
function closer(piece, pieces) {
    return pieces.sort((p1, p2) => {
        return distanceSq(piece.pos, p1.pos) - distanceSq(piece.pos, p2.pos);
    })[0];
}
function computePlan(prevPieces, current) {
    const anims = new Map(), animedOrigs = [], fadings = new Map(), missings = [], news = [], prePieces = new Map();
    let curP, preP, vector;
    for (const [k, p] of prevPieces) {
        prePieces.set(k, makePiece(k, p));
    }
    for (const key of allKeys) {
        curP = current.pieces.get(key);
        preP = prePieces.get(key);
        if (curP) {
            if (preP) {
                if (!samePiece(curP, preP.piece)) {
                    missings.push(preP);
                    news.push(makePiece(key, curP));
                }
            }
            else
                news.push(makePiece(key, curP));
        }
        else if (preP)
            missings.push(preP);
    }
    for (const newP of news) {
        preP = closer(newP, missings.filter(p => samePiece(newP.piece, p.piece)));
        if (preP) {
            vector = [preP.pos[0] - newP.pos[0], preP.pos[1] - newP.pos[1]];
            anims.set(newP.key, vector.concat(vector));
            animedOrigs.push(preP.key);
        }
    }
    for (const p of missings) {
        if (!animedOrigs.includes(p.key))
            fadings.set(p.key, p.piece);
    }
    return {
        anims: anims,
        fadings: fadings,
    };
}
function step(state, now) {
    const cur = state.animation.current;
    if (cur === undefined) {
        if (!state.dom.destroyed)
            state.dom.redrawNow();
        return;
    }
    const rest = 1 - (now - cur.start) * cur.frequency;
    if (rest <= 0) {
        state.animation.current = undefined;
        state.dom.redrawNow();
    }
    else {
        const ease = easing(rest);
        for (const cfg of cur.plan.anims.values()) {
            cfg[2] = cfg[0] * ease;
            cfg[3] = cfg[1] * ease;
        }
        state.dom.redrawNow(true);
        requestAnimationFrame((now = performance.now()) => step(state, now));
    }
}
function animate(mutation, state) {
    const prevPieces = new Map(state.pieces);
    const result = mutation(state);
    const plan = computePlan(prevPieces, state);
    if (plan.anims.size || plan.fadings.size) {
        const alreadyRunning = state.animation.current && state.animation.current.start;
        state.animation.current = {
            start: performance.now(),
            frequency: 1 / state.animation.duration,
            plan: plan,
        };
        if (!alreadyRunning)
            step(state, performance.now());
    }
    else {
        state.dom.redraw();
    }
    return result;
}
function easing(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

const brushes = ['green', 'red', 'blue', 'yellow'];
function start$2(state, e) {
    if (e.touches && e.touches.length > 1)
        return;
    e.stopPropagation();
    e.preventDefault();
    e.ctrlKey ? unselect(state) : cancelMove(state);
    const pos = eventPosition(e), orig = getKeyAtDomPos(pos, whitePov(state), state.dom.bounds());
    if (!orig)
        return;
    state.drawable.current = {
        orig,
        pos,
        brush: eventBrush(e),
        snapToValidMove: state.drawable.defaultSnapToValidMove,
    };
    processDraw(state);
}

function processDraw(state) {
    requestAnimationFrame(() => {
        const cur = state.drawable.current;
        if (cur) {
            const keyAtDomPos = getKeyAtDomPos(cur.pos, whitePov(state), state.dom.bounds());
            if (!keyAtDomPos) {
                cur.snapToValidMove = false;
            }
            const mouseSq = cur.snapToValidMove
                ? getSnappedKeyAtDomPos(cur.orig, cur.pos, whitePov(state), state.dom.bounds())
                : keyAtDomPos;
            if (mouseSq !== cur.mouseSq) {
                cur.mouseSq = mouseSq;
                cur.dest = mouseSq !== cur.orig ? mouseSq : undefined;
                state.dom.redrawNow();
            }
            processDraw(state);
        }
    });
}
function move$1(state, e) {
    if (state.drawable.current)
        state.drawable.current.pos = eventPosition(e);
}

function end$1(state) {
    const cur = state.drawable.current;
    if (cur) {
        if (cur.mouseSq)
            addShape(state.drawable, cur);
        cancel$1(state);
    }
}

function cancel$1(state) {
    if (state.drawable.current) {
        state.drawable.current = undefined;
        state.dom.redraw();
    }
}

function clear(state) {
    if (state.drawable.shapes.length) {
        state.drawable.shapes = [];
        state.dom.redraw();
        onChange(state.drawable);
    }
}

function eventBrush(e) {
    var _a;
    const modA = (e.shiftKey || e.ctrlKey) && isRightButton(e);
    const modB = e.altKey || e.metaKey || ((_a = e.getModifierState) === null || _a === void 0 ? void 0 : _a.call(e, 'AltGraph'));
    return brushes[(modA ? 1 : 0) + (modB ? 2 : 0)];
}
function addShape(drawable, cur) {
    const sameShape = (s) => s.orig === cur.orig && s.dest === cur.dest;
    const similar = drawable.shapes.find(sameShape);
    if (similar)
        drawable.shapes = drawable.shapes.filter(s => !sameShape(s));
    if (!similar || similar.brush !== cur.brush)
        drawable.shapes.push(cur);
    onChange(drawable);
}
function onChange(drawable) {
    if (drawable.onChange)
        drawable.onChange(drawable.shapes);
}

function start$1(s, e) {
    if (!e.isTrusted || (e.button !== undefined && e.button !== 0))
        return;
    if (e.touches && e.touches.length > 1)
        return;
    const bounds = s.dom.bounds(), position = eventPosition(e), orig = getKeyAtDomPos(position, whitePov(s), bounds);
    if (!orig)
        return;
    const piece = s.pieces.get(orig);
    const previouslySelected = s.selected;
    if (!previouslySelected && s.drawable.enabled && (s.drawable.eraseOnClick || !piece || piece.color !== s.turnColor))
        clear(s);
    if (e.cancelable !== false &&
        (!e.touches || !s.movable.color || piece || previouslySelected || pieceCloseTo(s, position)))
        e.preventDefault();
    const hadPremove = !!s.premovable.current;
    const hadPredrop = !!s.predroppable.current;
    s.stats.ctrlKey = e.ctrlKey;
    if (s.selected && canMove(s, s.selected, orig)) {
        anim(state => selectSquare(state, orig), s);
    }
    else {
        selectSquare(s, orig);
    }
    const stillSelected = s.selected === orig;
    const element = pieceElementByKey(s, orig);
    if (piece && element && stillSelected && isDraggable(s, orig)) {
        s.draggable.current = {
            orig,
            piece,
            origPos: position,
            pos: position,
            started: s.draggable.autoDistance && s.stats.dragged,
            element,
            previouslySelected,
            originTarget: e.target,
        };
        element.cgDragging = true;
        element.classList.add('dragging');
        const ghost = s.dom.elements.ghost;
        if (ghost) {
            ghost.className = `ghost ${piece.color} ${piece.role}`;
            translateAbs(ghost, posToTranslateAbs(bounds)(key2pos(orig), whitePov(s)));
            setVisible(ghost, true);
        }
        processDrag(s);
    }
    else {
        if (hadPremove)
            unsetPremove(s);
        if (hadPredrop)
            unsetPredrop(s);
    }
    s.dom.redraw();
}

function pieceCloseTo(s, pos) {
    const asWhite = whitePov(s), bounds = s.dom.bounds(), radiusSq = Math.pow(bounds.width / 8, 2);
    for (const key in s.pieces) {
        const center = computeSquareCenter(key, asWhite, bounds);
        if (distanceSq(center, pos) <= radiusSq)
            return true;
    }
    return false;
}
function dragNewPiece(s, piece, e, force) {
    const key = 'a0';
    s.pieces.set(key, piece);
    s.dom.redraw();
    const position = eventPosition(e);
    s.draggable.current = {
        orig: key,
        piece,
        origPos: position,
        pos: position,
        started: true,
        element: () => pieceElementByKey(s, key),
        originTarget: e.target,
        newPiece: true,
        force: !!force,
    };
    processDrag(s);
}

function processDrag(s) {
    requestAnimationFrame(() => {
        var _a;
        const cur = s.draggable.current;
        if (!cur)
            return;
        if ((_a = s.animation.current) === null || _a === void 0 ? void 0 : _a.plan.anims.has(cur.orig))
            s.animation.current = undefined;
        const origPiece = s.pieces.get(cur.orig);
        if (!origPiece || !samePiece(origPiece, cur.piece))
            cancel(s);
        else {
            if (!cur.started && distanceSq(cur.pos, cur.origPos) >= Math.pow(s.draggable.distance, 2))
                cur.started = true;
            if (cur.started) {
                if (typeof cur.element === 'function') {
                    const found = cur.element();
                    if (!found)
                        return;
                    found.cgDragging = true;
                    found.classList.add('dragging');
                    cur.element = found;
                }
                const bounds = s.dom.bounds();
                translateAbs(cur.element, [
                    cur.pos[0] - bounds.left - bounds.width / 16,
                    cur.pos[1] - bounds.top - bounds.height / 16,
                ]);
            }
        }
        processDrag(s);
    });
}
function move(s, e) {
    if (s.draggable.current && (!e.touches || e.touches.length < 2)) {
        s.draggable.current.pos = eventPosition(e);
    }
}

function end(s, e) {
    const cur = s.draggable.current;
    if (!cur)
        return;
    if (e.type === 'touchend' && e.cancelable !== false)
        e.preventDefault();
    if (e.type === 'touchend' && cur.originTarget !== e.target && !cur.newPiece) {
        s.draggable.current = undefined;
        return;
    }
    unsetPremove(s);
    unsetPredrop(s);
    const eventPos = eventPosition(e) || cur.pos;
    const dest = getKeyAtDomPos(eventPos, whitePov(s), s.dom.bounds());
    if (dest && cur.started && cur.orig !== dest) {
        if (cur.newPiece)
            dropNewPiece(s, cur.orig, dest, cur.force);
        else {
            s.stats.ctrlKey = e.ctrlKey;
            if (userMove(s, cur.orig, dest))
                s.stats.dragged = true;
        }
    }
    else if (cur.newPiece) {
        s.pieces.delete(cur.orig);
    }
    else if (s.draggable.deleteOnDropOff && !dest) {
        s.pieces.delete(cur.orig);
        callUserFunction(s.events.change);
    }
    if (cur.orig === cur.previouslySelected && (cur.orig === dest || !dest))
        unselect(s);
    else if (!s.selectable.enabled)
        unselect(s);
    removeDragElements(s);
    s.draggable.current = undefined;
    s.dom.redraw();
}

function cancel(s) {
    const cur = s.draggable.current;
    if (cur) {
        if (cur.newPiece)
            s.pieces.delete(cur.orig);
        s.draggable.current = undefined;
        unselect(s);
        removeDragElements(s);
        s.dom.redraw();
    }
}

function removeDragElements(s) {
    const e = s.dom.elements;
    if (e.ghost)
        setVisible(e.ghost, false);
}
function pieceElementByKey(s, key) {
    let el = s.dom.elements.board.firstChild;
    while (el) {
        if (el.cgKey === key && el.tagName === 'PIECE')
            return el;
        el = el.nextSibling;
    }
    return;
}

function explosion(state, keys) {
    state.exploding = { stage: 1, keys };
    state.dom.redraw();
    setTimeout(() => {
        setStage(state, 2);
        setTimeout(() => setStage(state, undefined), 120);
    }, 120);
}
function setStage(state, stage) {
    if (state.exploding) {
        if (stage)
            state.exploding.stage = stage;
        else
            state.exploding = undefined;
        state.dom.redraw();
    }
}

function start(state, redrawAll) {
    function toggleOrientation$1() {
        toggleOrientation(state);
        redrawAll();
    }
    return {
        set(config) {
            if (config.orientation && config.orientation !== state.orientation)
                toggleOrientation$1();
            (config.fen ? anim : render$1)(state => configure(state, config), state);
        },
        state,
        getFen: () => write(state.pieces),
        toggleOrientation: toggleOrientation$1,
        setPieces(pieces) {
            anim(state => setPieces(state, pieces), state);
        },
        selectSquare(key, force) {
            if (key)
                anim(state => selectSquare(state, key, force), state);
            else if (state.selected) {
                unselect(state);
                state.dom.redraw();
            }
        },
        move(orig, dest) {
            anim(state => baseMove(state, orig, dest), state);
        },
        newPiece(piece, key) {
            anim(state => baseNewPiece(state, piece, key), state);
        },
        playPremove() {
            if (state.premovable.current) {
                if (anim(playPremove, state))
                    return true;
                state.dom.redraw();
            }
            return false;
        },
        playPredrop(validate) {
            if (state.predroppable.current) {
                const result = playPredrop(state, validate);
                state.dom.redraw();
                return result;
            }
            return false;
        },
        cancelPremove() {
            render$1(unsetPremove, state);
        },
        cancelPredrop() {
            render$1(unsetPredrop, state);
        },
        cancelMove() {
            render$1(state => {
                cancelMove(state);
                cancel(state);
            }, state);
        },
        stop() {
            render$1(state => {
                stop(state);
                cancel(state);
            }, state);
        },
        explode(keys) {
            explosion(state, keys);
        },
        setAutoShapes(shapes) {
            render$1(state => (state.drawable.autoShapes = shapes), state);
        },
        setShapes(shapes) {
            render$1(state => (state.drawable.shapes = shapes), state);
        },
        getKeyAtDomPos(pos) {
            return getKeyAtDomPos(pos, whitePov(state), state.dom.bounds());
        },
        redrawAll,
        dragNewPiece(piece, event, force) {
            dragNewPiece(state, piece, event, force);
        },
        destroy() {
            stop(state);
            state.dom.unbind && state.dom.unbind();
            state.dom.destroyed = true;
        },
    };
}

function defaults() {
    return {
        pieces: read(initial),
        orientation: 'white',
        turnColor: 'white',
        coordinates: true,
        autoCastle: true,
        viewOnly: false,
        disableContextMenu: false,
        resizable: true,
        addPieceZIndex: false,
        pieceKey: false,
        highlight: {
            lastMove: true,
            check: true,
        },
        animation: {
            enabled: true,
            duration: 200,
        },
        movable: {
            free: true,
            color: 'both',
            showDests: true,
            events: {},
            rookCastle: true,
        },
        premovable: {
            enabled: true,
            showDests: true,
            castle: true,
            events: {},
        },
        predroppable: {
            enabled: false,
            events: {},
        },
        draggable: {
            enabled: true,
            distance: 3,
            autoDistance: true,
            showGhost: true,
            deleteOnDropOff: false,
        },
        dropmode: {
            active: false,
        },
        selectable: {
            enabled: true,
        },
        stats: {
            dragged: !('ontouchstart' in window),
        },
        events: {},
        drawable: {
            enabled: true,
            visible: true,
            defaultSnapToValidMove: true,
            eraseOnClick: true,
            shapes: [],
            autoShapes: [],
            brushes: {
                green: { key: 'g', color: '#15781B', opacity: 1, lineWidth: 10 },
                red: { key: 'r', color: '#882020', opacity: 1, lineWidth: 10 },
                blue: { key: 'b', color: '#003088', opacity: 1, lineWidth: 10 },
                yellow: { key: 'y', color: '#e68f00', opacity: 1, lineWidth: 10 },
                paleBlue: { key: 'pb', color: '#003088', opacity: 0.4, lineWidth: 15 },
                paleGreen: { key: 'pg', color: '#15781B', opacity: 0.4, lineWidth: 15 },
                paleRed: { key: 'pr', color: '#882020', opacity: 0.4, lineWidth: 15 },
                paleGrey: {
                    key: 'pgr',
                    color: '#4a4a4a',
                    opacity: 0.35,
                    lineWidth: 15,
                },
            },
            pieces: {
                baseUrl: 'https://lichess1.org/assets/piece/cburnett/',
            },
            prevSvgHash: '',
        },
        hold: timer(),
    };
}

function createElement(tagName) {
    return document.createElementNS('http://www.w3.org/2000/svg', tagName);
}

function renderSvg(state, svg, customSvg) {
    const d = state.drawable, curD = d.current, cur = curD && curD.mouseSq ? curD : undefined, arrowDests = new Map(), bounds = state.dom.bounds();
    for (const s of d.shapes.concat(d.autoShapes).concat(cur ? [cur] : [])) {
        if (s.dest)
            arrowDests.set(s.dest, (arrowDests.get(s.dest) || 0) + 1);
    }
    const shapes = d.shapes.concat(d.autoShapes).map((s) => {
        return {
            shape: s,
            current: false,
            hash: shapeHash(s, arrowDests, false, bounds),
        };
    });
    if (cur)
        shapes.push({
            shape: cur,
            current: true,
            hash: shapeHash(cur, arrowDests, true, bounds),
        });
    const fullHash = shapes.map(sc => sc.hash).join(';');
    if (fullHash === state.drawable.prevSvgHash)
        return;
    state.drawable.prevSvgHash = fullHash;
    const defsEl = svg.querySelector('defs');
    const shapesEl = svg.querySelector('g');
    const customSvgsEl = customSvg.querySelector('g');
    syncDefs(d, shapes, defsEl);
    syncShapes(state, shapes.filter(s => !s.shape.customSvg), d.brushes, arrowDests, shapesEl);
    syncShapes(state, shapes.filter(s => s.shape.customSvg), d.brushes, arrowDests, customSvgsEl);
}

function syncDefs(d, shapes, defsEl) {
    const brushes = new Map();
    let brush;
    for (const s of shapes) {
        if (s.shape.dest) {
            brush = d.brushes[s.shape.brush];
            if (s.shape.modifiers)
                brush = makeCustomBrush(brush, s.shape.modifiers);
            brushes.set(brush.key, brush);
        }
    }
    const keysInDom = new Set();
    let el = defsEl.firstChild;
    while (el) {
        keysInDom.add(el.getAttribute('cgKey'));
        el = el.nextSibling;
    }
    for (const [key, brush] of brushes.entries()) {
        if (!keysInDom.has(key))
            defsEl.appendChild(renderMarker(brush));
    }
}
function syncShapes(state, shapes, brushes, arrowDests, root) {
    const bounds = state.dom.bounds(), hashesInDom = new Map(), toRemove = [];
    for (const sc of shapes)
        hashesInDom.set(sc.hash, false);
    let el = root.firstChild, elHash;
    while (el) {
        elHash = el.getAttribute('cgHash');
        if (hashesInDom.has(elHash))
            hashesInDom.set(elHash, true);
        else
            toRemove.push(el);
        el = el.nextSibling;
    }
    for (const el of toRemove)
        root.removeChild(el);
    for (const sc of shapes) {
        if (!hashesInDom.get(sc.hash))
            root.appendChild(renderShape(state, sc, brushes, arrowDests, bounds));
    }
}
function shapeHash({ orig, dest, brush, piece, modifiers, customSvg }, arrowDests, current, bounds) {
    return [
        bounds.width,
        bounds.height,
        current,
        orig,
        dest,
        brush,
        dest && (arrowDests.get(dest) || 0) > 1,
        piece && pieceHash(piece),
        modifiers && modifiersHash(modifiers),
        customSvg && customSvgHash(customSvg),
    ]
        .filter(x => x)
        .join(',');
}
function pieceHash(piece) {
    return [piece.color, piece.role, piece.scale].filter(x => x).join(',');
}
function modifiersHash(m) {
    return '' + (m.lineWidth || '');
}
function customSvgHash(s) {
    let h = 0;
    for (let i = 0; i < s.length; i++) {
        h = (((h << 5) - h) + s.charCodeAt(i)) >>> 0;
    }
    return 'custom-' + h.toString();
}
function renderShape(state, { shape, current, hash }, brushes, arrowDests, bounds) {
    let el;
    if (shape.customSvg) {
        const orig = orient(key2pos(shape.orig), state.orientation);
        el = renderCustomSvg(shape.customSvg, orig, bounds);
    }
    else if (shape.piece)
        el = renderPiece(state.drawable.pieces.baseUrl, orient(key2pos(shape.orig), state.orientation), shape.piece, bounds);
    else {
        const orig = orient(key2pos(shape.orig), state.orientation);
        if (shape.dest) {
            let brush = brushes[shape.brush];
            if (shape.modifiers)
                brush = makeCustomBrush(brush, shape.modifiers);
            el = renderArrow(brush, orig, orient(key2pos(shape.dest), state.orientation), current, (arrowDests.get(shape.dest) || 0) > 1, bounds);
        }
        else
            el = renderCircle(brushes[shape.brush], orig, current, bounds);
    }
    el.setAttribute('cgHash', hash);
    return el;
}
function renderCustomSvg(customSvg, pos, bounds) {
    const { width, height } = bounds;
    const w = width / 8;
    const h = height / 8;
    const x = pos[0] * w;
    const y = (7 - pos[1]) * h;
    const g = setAttributes(createElement('g'), { transform: `translate(${x},${y})` });
    const svg = setAttributes(createElement('svg'), { width: w, height: h, viewBox: '0 0 100 100' });
    g.appendChild(svg);
    svg.innerHTML = customSvg;
    return g;
}
function renderCircle(brush, pos, current, bounds) {
    const o = pos2px(pos, bounds), widths = circleWidth(bounds), radius = (bounds.width + bounds.height) / 32;
    return setAttributes(createElement('circle'), {
        stroke: brush.color,
        'stroke-width': widths[current ? 0 : 1],
        fill: 'none',
        opacity: opacity(brush, current),
        cx: o[0],
        cy: o[1],
        r: radius - widths[1] / 2,
    });
}
function renderArrow(brush, orig, dest, current, shorten, bounds) {
    const m = arrowMargin(bounds, shorten && !current), a = pos2px(orig, bounds), b = pos2px(dest, bounds), dx = b[0] - a[0], dy = b[1] - a[1], angle = Math.atan2(dy, dx), xo = Math.cos(angle) * m, yo = Math.sin(angle) * m;
    return setAttributes(createElement('line'), {
        stroke: brush.color,
        'stroke-width': lineWidth(brush, current, bounds),
        'stroke-linecap': 'round',
        'marker-end': 'url(#arrowhead-' + brush.key + ')',
        opacity: opacity(brush, current),
        x1: a[0],
        y1: a[1],
        x2: b[0] - xo,
        y2: b[1] - yo,
    });
}
function renderPiece(baseUrl, pos, piece, bounds) {
    const o = pos2px(pos, bounds), size = (bounds.width / 8) * (piece.scale || 1), name = piece.color[0] + (piece.role === 'knight' ? 'n' : piece.role[0]).toUpperCase();
    return setAttributes(createElement('image'), {
        className: `${piece.role} ${piece.color}`,
        x: o[0] - size / 2,
        y: o[1] - size / 2,
        width: size,
        height: size,
        href: baseUrl + name + '.svg',
    });
}
function renderMarker(brush) {
    const marker = setAttributes(createElement('marker'), {
        id: 'arrowhead-' + brush.key,
        orient: 'auto',
        markerWidth: 4,
        markerHeight: 8,
        refX: 2.05,
        refY: 2.01,
    });
    marker.appendChild(setAttributes(createElement('path'), {
        d: 'M0,0 V4 L3,2 Z',
        fill: brush.color,
    }));
    marker.setAttribute('cgKey', brush.key);
    return marker;
}
function setAttributes(el, attrs) {
    for (const key in attrs)
        el.setAttribute(key, attrs[key]);
    return el;
}

function orient(pos, color) {
    return color === 'white' ? pos : [7 - pos[0], 7 - pos[1]];
}
function makeCustomBrush(base, modifiers) {
    return {
        color: base.color,
        opacity: Math.round(base.opacity * 10) / 10,
        lineWidth: Math.round(modifiers.lineWidth || base.lineWidth),
        key: [base.key, modifiers.lineWidth].filter(x => x).join(''),
    };
}
function circleWidth(bounds) {
    const base = bounds.width / 512;
    return [3 * base, 4 * base];
}
function lineWidth(brush, current, bounds) {
    return (((brush.lineWidth || 10) * (current ? 0.85 : 1)) / 512) * bounds.width;
}
function opacity(brush, current) {
    return (brush.opacity || 1) * (current ? 0.9 : 1);
}
function arrowMargin(bounds, shorten) {
    return ((shorten ? 20 : 10) / 512) * bounds.width;
}
function pos2px(pos, bounds) {
    return [((pos[0] + 0.5) * bounds.width) / 8, ((7.5 - pos[1]) * bounds.height) / 8];
}

function renderWrap(element, s, relative) {
    element.innerHTML = '';
    element.classList.add('cg-wrap');
    for (const c of colors)
        element.classList.toggle('orientation-' + c, s.orientation === c);
    element.classList.toggle('manipulable', !s.viewOnly);
    const helper = createEl('cg-helper');
    element.appendChild(helper);
    const container = createEl('cg-container');
    helper.appendChild(container);
    const board = createEl('cg-board');
    container.appendChild(board);
    let svg;
    let customSvg;
    if (s.drawable.visible && !relative) {
        svg = setAttributes(createElement('svg'), { 'class': 'cg-shapes' });
        svg.appendChild(createElement('defs'));
        svg.appendChild(createElement('g'));
        customSvg = setAttributes(createElement('svg'), { 'class': 'cg-custom-svgs' });
        customSvg.appendChild(createElement('g'));
        container.appendChild(svg);
        container.appendChild(customSvg);
    }
    if (s.coordinates) {
        const orientClass = s.orientation === 'black' ? ' black' : '';
        container.appendChild(renderCoords(ranks, 'ranks' + orientClass));
        container.appendChild(renderCoords(files, 'files' + orientClass));
    }
    let ghost;
    if (s.draggable.showGhost && !relative) {
        ghost = createEl('piece', 'ghost');
        setVisible(ghost, false);
        container.appendChild(ghost);
    }
    return {
        board,
        container,
        ghost,
        svg,
        customSvg,
    };
}

function renderCoords(elems, className) {
    const el = createEl('coords', className);
    let f;
    for (const elem of elems) {
        f = createEl('coord');
        f.textContent = elem;
        el.appendChild(f);
    }
    return el;
}

function drop(s, e) {
    if (!s.dropmode.active)
        return;
    unsetPremove(s);
    unsetPredrop(s);
    const piece = s.dropmode.piece;
    if (piece) {
        s.pieces.set('a0', piece);
        const position = eventPosition(e);
        const dest = position && getKeyAtDomPos(position, whitePov(s), s.dom.bounds());
        if (dest)
            dropNewPiece(s, 'a0', dest);
    }
    s.dom.redraw();
}

function bindBoard(s, boundsUpdated) {
    const boardEl = s.dom.elements.board;
    if (!s.dom.relative && s.resizable && 'ResizeObserver' in window) {
        const observer = new window['ResizeObserver'](boundsUpdated);
        observer.observe(boardEl);
    }
    if (s.viewOnly)
        return;
    const onStart = startDragOrDraw(s);
    boardEl.addEventListener('touchstart', onStart, {
        passive: false,
    });
    boardEl.addEventListener('mousedown', onStart, {
        passive: false,
    });
    if (s.disableContextMenu || s.drawable.enabled) {
        boardEl.addEventListener('contextmenu', e => e.preventDefault());
    }
}

function bindDocument(s, boundsUpdated) {
    const unbinds = [];
    if (!s.dom.relative && s.resizable && !('ResizeObserver' in window)) {
        unbinds.push(unbindable(document.body, 'chessground.resize', boundsUpdated));
    }
    if (!s.viewOnly) {
        const onmove = dragOrDraw(s, move, move$1);
        const onend = dragOrDraw(s, end, end$1);
        for (const ev of ['touchmove', 'mousemove'])
            unbinds.push(unbindable(document, ev, onmove));
        for (const ev of ['touchend', 'mouseup'])
            unbinds.push(unbindable(document, ev, onend));
        const onScroll = () => s.dom.bounds.clear();
        unbinds.push(unbindable(document, 'scroll', onScroll, { capture: true, passive: true }));
        unbinds.push(unbindable(window, 'resize', onScroll, { passive: true }));
    }
    return () => unbinds.forEach(f => f());
}


function unbindable(el, eventName, callback, options) {
    el.addEventListener(eventName, callback, options);
    return () => el.removeEventListener(eventName, callback, options);
}
function startDragOrDraw(s) {
    return e => {
        if (s.draggable.current)
            cancel(s);
        else if (s.drawable.current)
            cancel$1(s);
        else if (e.shiftKey || isRightButton(e)) {
            if (s.drawable.enabled)
                start$2(s, e);
        }
        else if (!s.viewOnly) {
            if (s.dropmode.active)
                drop(s, e);
            else
                start$1(s, e);
        }
    };
}
function dragOrDraw(s, withDrag, withDraw) {
    return e => {
        if (s.drawable.current) {
            if (s.drawable.enabled)
                withDraw(s, e);
        }
        else if (!s.viewOnly)
            withDrag(s, e);
    };
}

function render(s) {
    const asWhite = whitePov(s), posToTranslate = s.dom.relative ? posToTranslateRel : posToTranslateAbs(s.dom.bounds()), translate = s.dom.relative ? translateRel : translateAbs, boardEl = s.dom.elements.board, pieces = s.pieces, curAnim = s.animation.current, anims = curAnim ? curAnim.plan.anims : new Map(), fadings = curAnim ? curAnim.plan.fadings : new Map(), curDrag = s.draggable.current, squares = computeSquareClasses(s), samePieces = new Set(), sameSquares = new Set(), movedPieces = new Map(), movedSquares = new Map();
    let k, el, pieceAtKey, elPieceName, anim, fading, pMvdset, pMvd, sMvdset, sMvd;
    el = boardEl.firstChild;
    while (el) {
        k = el.cgKey;
        if (isPieceNode(el)) {
            pieceAtKey = pieces.get(k);
            anim = anims.get(k);
            fading = fadings.get(k);
            elPieceName = el.cgPiece;
            if (el.cgDragging && (!curDrag || curDrag.orig !== k)) {
                el.classList.remove('dragging');
                translate(el, posToTranslate(key2pos(k), asWhite));
                el.cgDragging = false;
            }
            if (!fading && el.cgFading) {
                el.cgFading = false;
                el.classList.remove('fading');
            }
            if (pieceAtKey) {
                if (anim && el.cgAnimating && elPieceName === pieceNameOf(pieceAtKey)) {
                    const pos = key2pos(k);
                    pos[0] += anim[2];
                    pos[1] += anim[3];
                    el.classList.add('anim');
                    translate(el, posToTranslate(pos, asWhite));
                }
                else if (el.cgAnimating) {
                    el.cgAnimating = false;
                    el.classList.remove('anim');
                    translate(el, posToTranslate(key2pos(k), asWhite));
                    if (s.addPieceZIndex)
                        el.style.zIndex = posZIndex(key2pos(k), asWhite);
                }
                if (elPieceName === pieceNameOf(pieceAtKey) && (!fading || !el.cgFading)) {
                    samePieces.add(k);
                }
                else {
                    if (fading && elPieceName === pieceNameOf(fading)) {
                        el.classList.add('fading');
                        el.cgFading = true;
                    }
                    else {
                        appendValue(movedPieces, elPieceName, el);
                    }
                }
            }
            else {
                appendValue(movedPieces, elPieceName, el);
            }
        }
        else if (isSquareNode(el)) {
            const cn = el.className;
            if (squares.get(k) === cn)
                sameSquares.add(k);
            else
                appendValue(movedSquares, cn, el);
        }
        el = el.nextSibling;
    }
    for (const [sk, className] of squares) {
        if (!sameSquares.has(sk)) {
            sMvdset = movedSquares.get(className);
            sMvd = sMvdset && sMvdset.pop();
            const translation = posToTranslate(key2pos(sk), asWhite);
            if (sMvd) {
                sMvd.cgKey = sk;
                translate(sMvd, translation);
            }
            else {
                const squareNode = createEl('square', className);
                squareNode.cgKey = sk;
                translate(squareNode, translation);
                boardEl.insertBefore(squareNode, boardEl.firstChild);
            }
        }
    }
    for (const [k, p] of pieces) {
        anim = anims.get(k);
        if (!samePieces.has(k)) {
            pMvdset = movedPieces.get(pieceNameOf(p));
            pMvd = pMvdset && pMvdset.pop();
            if (pMvd) {
                pMvd.cgKey = k;
                if (pMvd.cgFading) {
                    pMvd.classList.remove('fading');
                    pMvd.cgFading = false;
                }
                const pos = key2pos(k);
                if (s.addPieceZIndex)
                    pMvd.style.zIndex = posZIndex(pos, asWhite);
                if (anim) {
                    pMvd.cgAnimating = true;
                    pMvd.classList.add('anim');
                    pos[0] += anim[2];
                    pos[1] += anim[3];
                }
                translate(pMvd, posToTranslate(pos, asWhite));
            }
            else {
                const pieceName = pieceNameOf(p), pieceNode = createEl('piece', pieceName), pos = key2pos(k);
                pieceNode.cgPiece = pieceName;
                pieceNode.cgKey = k;
                if (anim) {
                    pieceNode.cgAnimating = true;
                    pos[0] += anim[2];
                    pos[1] += anim[3];
                }
                translate(pieceNode, posToTranslate(pos, asWhite));
                if (s.addPieceZIndex)
                    pieceNode.style.zIndex = posZIndex(pos, asWhite);
                boardEl.appendChild(pieceNode);
            }
        }
    }
    for (const nodes of movedPieces.values())
        removeNodes(s, nodes);
    for (const nodes of movedSquares.values())
        removeNodes(s, nodes);
}

function updateBounds(s) {
    if (s.dom.relative)
        return;
    const asWhite = whitePov(s), posToTranslate = posToTranslateAbs(s.dom.bounds());
    let el = s.dom.elements.board.firstChild;
    while (el) {
        if ((isPieceNode(el) && !el.cgAnimating) || isSquareNode(el)) {
            translateAbs(el, posToTranslate(key2pos(el.cgKey), asWhite));
        }
        el = el.nextSibling;
    }
}

function isPieceNode(el) {
    return el.tagName === 'PIECE';
}
function isSquareNode(el) {
    return el.tagName === 'SQUARE';
}
function removeNodes(s, nodes) {
    for (const node of nodes)
        s.dom.elements.board.removeChild(node);
}
function posZIndex(pos, asWhite) {
    let z = 2 + pos[1] * 8 + (7 - pos[0]);
    if (asWhite)
        z = 67 - z;
    return z + '';
}
function pieceNameOf(piece) {
    return `${piece.color} ${piece.role}`;
}
function computeSquareClasses(s) {
    var _a;
    const squares = new Map();
    if (s.lastMove && s.highlight.lastMove)
        for (const k of s.lastMove) {
            addSquare(squares, k, 'last-move');
        }
    if (s.check && s.highlight.check)
        addSquare(squares, s.check, 'check');
    if (s.selected) {
        addSquare(squares, s.selected, 'selected');
        if (s.movable.showDests) {
            const dests = (_a = s.movable.dests) === null || _a === void 0 ? void 0 : _a.get(s.selected);
            if (dests)
                for (const k of dests) {
                    addSquare(squares, k, 'move-dest' + (s.pieces.has(k) ? ' oc' : ''));
                }
            const pDests = s.premovable.dests;
            if (pDests)
                for (const k of pDests) {
                    addSquare(squares, k, 'premove-dest' + (s.pieces.has(k) ? ' oc' : ''));
                }
        }
    }
    const premove = s.premovable.current;
    if (premove)
        for (const k of premove)
            addSquare(squares, k, 'current-premove');
    else if (s.predroppable.current)
        addSquare(squares, s.predroppable.current.key, 'current-premove');
    const o = s.exploding;
    if (o)
        for (const k of o.keys)
            addSquare(squares, k, 'exploding' + o.stage);
    return squares;
}
function addSquare(squares, key, klass) {
    const classes = squares.get(key);
    if (classes)
        squares.set(key, `${classes} ${klass}`);
    else
        squares.set(key, klass);
}
function appendValue(map, key, value) {
    const arr = map.get(key);
    if (arr)
        arr.push(value);
    else
        map.set(key, [value]);
}

function Chessground(element, config) {
    const maybeState = defaults();
    configure(maybeState, config || {});
    function redrawAll() {
        const prevUnbind = 'dom' in maybeState ? maybeState.dom.unbind : undefined;
        const relative = maybeState.viewOnly && !maybeState.drawable.visible, elements = renderWrap(element, maybeState, relative), bounds = memo(() => elements.board.getBoundingClientRect()), redrawNow = (skipSvg) => {
            render(state);
            if (!skipSvg && elements.svg)
                renderSvg(state, elements.svg, elements.customSvg);
        }, boundsUpdated = () => {
            bounds.clear();
            updateBounds(state);
            if (elements.svg)
                renderSvg(state, elements.svg, elements.customSvg);
        };
        const state = maybeState;
        state.dom = {
            elements,
            bounds,
            redraw: debounceRedraw(redrawNow),
            redrawNow,
            unbind: prevUnbind,
            relative,
        };
        state.drawable.prevSvgHash = '';
        redrawNow(false);
        bindBoard(state, boundsUpdated);
        if (!prevUnbind)
            state.dom.unbind = bindDocument(state, boundsUpdated);
        state.events.insert && state.events.insert(elements);
        return state;
    }
    return start(redrawAll(), redrawAll);
}

function debounceRedraw(redrawNow) {
    let redrawing = false;
    return () => {
        if (redrawing)
            return;
        redrawing = true;
        requestAnimationFrame(() => {
            redrawNow();
            redrawing = false;
        });
    };
}

/*
 * Copyright (c) 2021, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 *----------------------------------------------------------------------------*/

function Chess(fen) {
  var BLACK = 'b';
  var WHITE = 'w';

  var EMPTY = -1;

  var PAWN = 'p';
  var KNIGHT = 'n';
  var BISHOP = 'b';
  var ROOK = 'r';
  var QUEEN = 'q';
  var KING = 'k';

  var SYMBOLS = 'pnbrqkPNBRQK';

  var DEFAULT_POSITION =
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

  var POSSIBLE_RESULTS = ['1-0', '0-1', '1/2-1/2', '*'];

  var PAWN_OFFSETS = {
    b: [16, 32, 17, 15],
    w: [-16, -32, -17, -15],
  };

  var PIECE_OFFSETS = {
    n: [-18, -33, -31, -14, 18, 33, 31, 14],
    b: [-17, -15, 17, 15],
    r: [-16, 1, 16, -1],
    q: [-17, -16, -15, 1, 17, 16, 15, -1],
    k: [-17, -16, -15, 1, 17, 16, 15, -1],
  };

  // prettier-ignore
  var ATTACKS = [
    20, 0, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0, 0,20, 0,
     0,20, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0,20, 0, 0,
     0, 0,20, 0, 0, 0, 0, 24,  0, 0, 0, 0,20, 0, 0, 0,
     0, 0, 0,20, 0, 0, 0, 24,  0, 0, 0,20, 0, 0, 0, 0,
     0, 0, 0, 0,20, 0, 0, 24,  0, 0,20, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0,20, 2, 24,  2,20, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0, 2,53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
    24,24,24,24,24,24,56,  0, 56,24,24,24,24,24,24, 0,
     0, 0, 0, 0, 0, 2,53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0,20, 2, 24,  2,20, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0,20, 0, 0, 24,  0, 0,20, 0, 0, 0, 0, 0,
     0, 0, 0,20, 0, 0, 0, 24,  0, 0, 0,20, 0, 0, 0, 0,
     0, 0,20, 0, 0, 0, 0, 24,  0, 0, 0, 0,20, 0, 0, 0,
     0,20, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0,20, 0, 0,
    20, 0, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0, 0,20
  ];

  // prettier-ignore
  var RAYS = [
     17,  0,  0,  0,  0,  0,  0, 16,  0,  0,  0,  0,  0,  0, 15, 0,
      0, 17,  0,  0,  0,  0,  0, 16,  0,  0,  0,  0,  0, 15,  0, 0,
      0,  0, 17,  0,  0,  0,  0, 16,  0,  0,  0,  0, 15,  0,  0, 0,
      0,  0,  0, 17,  0,  0,  0, 16,  0,  0,  0, 15,  0,  0,  0, 0,
      0,  0,  0,  0, 17,  0,  0, 16,  0,  0, 15,  0,  0,  0,  0, 0,
      0,  0,  0,  0,  0, 17,  0, 16,  0, 15,  0,  0,  0,  0,  0, 0,
      0,  0,  0,  0,  0,  0, 17, 16, 15,  0,  0,  0,  0,  0,  0, 0,
      1,  1,  1,  1,  1,  1,  1,  0, -1, -1,  -1,-1, -1, -1, -1, 0,
      0,  0,  0,  0,  0,  0,-15,-16,-17,  0,  0,  0,  0,  0,  0, 0,
      0,  0,  0,  0,  0,-15,  0,-16,  0,-17,  0,  0,  0,  0,  0, 0,
      0,  0,  0,  0,-15,  0,  0,-16,  0,  0,-17,  0,  0,  0,  0, 0,
      0,  0,  0,-15,  0,  0,  0,-16,  0,  0,  0,-17,  0,  0,  0, 0,
      0,  0,-15,  0,  0,  0,  0,-16,  0,  0,  0,  0,-17,  0,  0, 0,
      0,-15,  0,  0,  0,  0,  0,-16,  0,  0,  0,  0,  0,-17,  0, 0,
    -15,  0,  0,  0,  0,  0,  0,-16,  0,  0,  0,  0,  0,  0,-17
  ];

  var SHIFTS = { p: 0, n: 1, b: 2, r: 3, q: 4, k: 5 };

  var FLAGS = {
    NORMAL: 'n',
    CAPTURE: 'c',
    BIG_PAWN: 'b',
    EP_CAPTURE: 'e',
    PROMOTION: 'p',
    KSIDE_CASTLE: 'k',
    QSIDE_CASTLE: 'q',
  };

  var BITS = {
    NORMAL: 1,
    CAPTURE: 2,
    BIG_PAWN: 4,
    EP_CAPTURE: 8,
    PROMOTION: 16,
    KSIDE_CASTLE: 32,
    QSIDE_CASTLE: 64,
  };

  var RANK_1 = 7;
  var RANK_2 = 6;
  var RANK_7 = 1;
  var RANK_8 = 0;

  // prettier-ignore
  var SQUARES = {
    a8:   0, b8:   1, c8:   2, d8:   3, e8:   4, f8:   5, g8:   6, h8:   7,
    a7:  16, b7:  17, c7:  18, d7:  19, e7:  20, f7:  21, g7:  22, h7:  23,
    a6:  32, b6:  33, c6:  34, d6:  35, e6:  36, f6:  37, g6:  38, h6:  39,
    a5:  48, b5:  49, c5:  50, d5:  51, e5:  52, f5:  53, g5:  54, h5:  55,
    a4:  64, b4:  65, c4:  66, d4:  67, e4:  68, f4:  69, g4:  70, h4:  71,
    a3:  80, b3:  81, c3:  82, d3:  83, e3:  84, f3:  85, g3:  86, h3:  87,
    a2:  96, b2:  97, c2:  98, d2:  99, e2: 100, f2: 101, g2: 102, h2: 103,
    a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119
  };

  var ROOKS = {
    w: [
      { square: SQUARES.a1, flag: BITS.QSIDE_CASTLE },
      { square: SQUARES.h1, flag: BITS.KSIDE_CASTLE },
    ],
    b: [
      { square: SQUARES.a8, flag: BITS.QSIDE_CASTLE },
      { square: SQUARES.h8, flag: BITS.KSIDE_CASTLE },
    ],
  };

  var board = new Array(128);
  var kings = { w: EMPTY, b: EMPTY };
  var turn = WHITE;
  var castling = { w: 0, b: 0 };
  var ep_square = EMPTY;
  var half_moves = 0;
  var move_number = 1;
  var history = [];
  var header = {};
  var comments = {};

  /* if the user passes in a fen string, load it, else default to
   * starting position
   */
  if (typeof fen === 'undefined') {
    load(DEFAULT_POSITION);
  } else {
    load(fen);
  }

  function clear(keep_headers) {
    if (typeof keep_headers === 'undefined') {
      keep_headers = false;
    }

    board = new Array(128);
    kings = { w: EMPTY, b: EMPTY };
    turn = WHITE;
    castling = { w: 0, b: 0 };
    ep_square = EMPTY;
    half_moves = 0;
    move_number = 1;
    history = [];
    if (!keep_headers) header = {};
    comments = {};
    update_setup(generate_fen());
  }

  function prune_comments() {
    var reversed_history = [];
    var current_comments = {};
    var copy_comment = function (fen) {
      if (fen in comments) {
        current_comments[fen] = comments[fen];
      }
    };
    while (history.length > 0) {
      reversed_history.push(undo_move());
    }
    copy_comment(generate_fen());
    while (reversed_history.length > 0) {
      make_move(reversed_history.pop());
      copy_comment(generate_fen());
    }
    comments = current_comments;
  }

  function reset() {
    load(DEFAULT_POSITION);
  }

  function load(fen, keep_headers) {
    if (typeof keep_headers === 'undefined') {
      keep_headers = false;
    }

    var tokens = fen.split(/\s+/);
    var position = tokens[0];
    var square = 0;

    if (!validate_fen(fen).valid) {
      return false
    }

    clear(keep_headers);

    for (var i = 0; i < position.length; i++) {
      var piece = position.charAt(i);

      if (piece === '/') {
        square += 8;
      } else if (is_digit(piece)) {
        square += parseInt(piece, 10);
      } else {
        var color = piece < 'a' ? WHITE : BLACK;
        put({ type: piece.toLowerCase(), color: color }, algebraic(square));
        square++;
      }
    }

    turn = tokens[1];

    if (tokens[2].indexOf('K') > -1) {
      castling.w |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf('Q') > -1) {
      castling.w |= BITS.QSIDE_CASTLE;
    }
    if (tokens[2].indexOf('k') > -1) {
      castling.b |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf('q') > -1) {
      castling.b |= BITS.QSIDE_CASTLE;
    }

    ep_square = tokens[3] === '-' ? EMPTY : SQUARES[tokens[3]];
    half_moves = parseInt(tokens[4], 10);
    move_number = parseInt(tokens[5], 10);

    update_setup(generate_fen());

    return true
  }

  /* TODO: this function is pretty much crap - it validates structure but
   * completely ignores content (e.g. doesn't verify that each side has a king)
   * ... we should rewrite this, and ditch the silly error_number field while
   * we're at it
   */
  function validate_fen(fen) {
    var errors = {
      0: 'No errors.',
      1: 'FEN string must contain six space-delimited fields.',
      2: '6th field (move number) must be a positive integer.',
      3: '5th field (half move counter) must be a non-negative integer.',
      4: '4th field (en-passant square) is invalid.',
      5: '3rd field (castling availability) is invalid.',
      6: '2nd field (side to move) is invalid.',
      7: "1st field (piece positions) does not contain 8 '/'-delimited rows.",
      8: '1st field (piece positions) is invalid [consecutive numbers].',
      9: '1st field (piece positions) is invalid [invalid piece].',
      10: '1st field (piece positions) is invalid [row too large].',
      11: 'Illegal en-passant square',
    };

    /* 1st criterion: 6 space-seperated fields? */
    var tokens = fen.split(/\s+/);
    if (tokens.length !== 6) {
      return { valid: false, error_number: 1, error: errors[1] }
    }

    /* 2nd criterion: move number field is a integer value > 0? */
    if (isNaN(tokens[5]) || parseInt(tokens[5], 10) <= 0) {
      return { valid: false, error_number: 2, error: errors[2] }
    }

    /* 3rd criterion: half move counter is an integer >= 0? */
    if (isNaN(tokens[4]) || parseInt(tokens[4], 10) < 0) {
      return { valid: false, error_number: 3, error: errors[3] }
    }

    /* 4th criterion: 4th field is a valid e.p.-string? */
    if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
      return { valid: false, error_number: 4, error: errors[4] }
    }

    /* 5th criterion: 3th field is a valid castle-string? */
    if (!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2])) {
      return { valid: false, error_number: 5, error: errors[5] }
    }

    /* 6th criterion: 2nd field is "w" (white) or "b" (black)? */
    if (!/^(w|b)$/.test(tokens[1])) {
      return { valid: false, error_number: 6, error: errors[6] }
    }

    /* 7th criterion: 1st field contains 8 rows? */
    var rows = tokens[0].split('/');
    if (rows.length !== 8) {
      return { valid: false, error_number: 7, error: errors[7] }
    }

    /* 8th criterion: every row is valid? */
    for (var i = 0; i < rows.length; i++) {
      /* check for right sum of fields AND not two numbers in succession */
      var sum_fields = 0;
      var previous_was_number = false;

      for (var k = 0; k < rows[i].length; k++) {
        if (!isNaN(rows[i][k])) {
          if (previous_was_number) {
            return { valid: false, error_number: 8, error: errors[8] }
          }
          sum_fields += parseInt(rows[i][k], 10);
          previous_was_number = true;
        } else {
          if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
            return { valid: false, error_number: 9, error: errors[9] }
          }
          sum_fields += 1;
          previous_was_number = false;
        }
      }
      if (sum_fields !== 8) {
        return { valid: false, error_number: 10, error: errors[10] }
      }
    }

    if (
      (tokens[3][1] == '3' && tokens[1] == 'w') ||
      (tokens[3][1] == '6' && tokens[1] == 'b')
    ) {
      return { valid: false, error_number: 11, error: errors[11] }
    }

    /* everything's okay! */
    return { valid: true, error_number: 0, error: errors[0] }
  }

  function generate_fen() {
    var empty = 0;
    var fen = '';

    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      if (board[i] == null) {
        empty++;
      } else {
        if (empty > 0) {
          fen += empty;
          empty = 0;
        }
        var color = board[i].color;
        var piece = board[i].type;

        fen += color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
      }

      if ((i + 1) & 0x88) {
        if (empty > 0) {
          fen += empty;
        }

        if (i !== SQUARES.h1) {
          fen += '/';
        }

        empty = 0;
        i += 8;
      }
    }

    var cflags = '';
    if (castling[WHITE] & BITS.KSIDE_CASTLE) {
      cflags += 'K';
    }
    if (castling[WHITE] & BITS.QSIDE_CASTLE) {
      cflags += 'Q';
    }
    if (castling[BLACK] & BITS.KSIDE_CASTLE) {
      cflags += 'k';
    }
    if (castling[BLACK] & BITS.QSIDE_CASTLE) {
      cflags += 'q';
    }

    /* do we have an empty castling flag? */
    cflags = cflags || '-';
    var epflags = ep_square === EMPTY ? '-' : algebraic(ep_square);

    return [fen, turn, cflags, epflags, half_moves, move_number].join(' ')
  }

  function set_header(args) {
    for (var i = 0; i < args.length; i += 2) {
      if (typeof args[i] === 'string' && typeof args[i + 1] === 'string') {
        header[args[i]] = args[i + 1];
      }
    }
    return header
  }

  /* called when the initial board setup is changed with put() or remove().
   * modifies the SetUp and FEN properties of the header object.  if the FEN is
   * equal to the default position, the SetUp and FEN are deleted
   * the setup is only updated if history.length is zero, ie moves haven't been
   * made.
   */
  function update_setup(fen) {
    if (history.length > 0) return

    if (fen !== DEFAULT_POSITION) {
      header['SetUp'] = '1';
      header['FEN'] = fen;
    } else {
      delete header['SetUp'];
      delete header['FEN'];
    }
  }

  function get(square) {
    var piece = board[SQUARES[square]];
    return piece ? { type: piece.type, color: piece.color } : null
  }

  function put(piece, square) {
    /* check for valid piece object */
    if (!('type' in piece && 'color' in piece)) {
      return false
    }

    /* check for piece */
    if (SYMBOLS.indexOf(piece.type.toLowerCase()) === -1) {
      return false
    }

    /* check for valid square */
    if (!(square in SQUARES)) {
      return false
    }

    var sq = SQUARES[square];

    /* don't let the user place more than one king */
    if (
      piece.type == KING &&
      !(kings[piece.color] == EMPTY || kings[piece.color] == sq)
    ) {
      return false
    }

    board[sq] = { type: piece.type, color: piece.color };
    if (piece.type === KING) {
      kings[piece.color] = sq;
    }

    update_setup(generate_fen());

    return true
  }

  function remove(square) {
    var piece = get(square);
    board[SQUARES[square]] = null;
    if (piece && piece.type === KING) {
      kings[piece.color] = EMPTY;
    }

    update_setup(generate_fen());

    return piece
  }

  function build_move(board, from, to, flags, promotion) {
    var move = {
      color: turn,
      from: from,
      to: to,
      flags: flags,
      piece: board[from].type,
    };

    if (promotion) {
      move.flags |= BITS.PROMOTION;
      move.promotion = promotion;
    }

    if (board[to]) {
      move.captured = board[to].type;
    } else if (flags & BITS.EP_CAPTURE) {
      move.captured = PAWN;
    }
    return move
  }

  function generate_moves(options) {
    function add_move(board, moves, from, to, flags) {
      /* if pawn promotion */
      if (
        board[from].type === PAWN &&
        (rank(to) === RANK_8 || rank(to) === RANK_1)
      ) {
        var pieces = [QUEEN, ROOK, BISHOP, KNIGHT];
        for (var i = 0, len = pieces.length; i < len; i++) {
          moves.push(build_move(board, from, to, flags, pieces[i]));
        }
      } else {
        moves.push(build_move(board, from, to, flags));
      }
    }

    var moves = [];
    var us = turn;
    var them = swap_color(us);
    var second_rank = { b: RANK_7, w: RANK_2 };

    var first_sq = SQUARES.a8;
    var last_sq = SQUARES.h1;
    var single_square = false;

    /* do we want legal moves? */
    var legal =
      typeof options !== 'undefined' && 'legal' in options
        ? options.legal
        : true;

    var piece_type =
      typeof options !== 'undefined' &&
      'piece' in options &&
      typeof options.piece === 'string'
        ? options.piece.toLowerCase()
        : true;

    /* are we generating moves for a single square? */
    if (typeof options !== 'undefined' && 'square' in options) {
      if (options.square in SQUARES) {
        first_sq = last_sq = SQUARES[options.square];
        single_square = true;
      } else {
        /* invalid square */
        return []
      }
    }

    for (var i = first_sq; i <= last_sq; i++) {
      /* did we run off the end of the board */
      if (i & 0x88) {
        i += 7;
        continue
      }

      var piece = board[i];
      if (piece == null || piece.color !== us) {
        continue
      }

      if (piece.type === PAWN && (piece_type === true || piece_type === PAWN)) {
        /* single square, non-capturing */
        var square = i + PAWN_OFFSETS[us][0];
        if (board[square] == null) {
          add_move(board, moves, i, square, BITS.NORMAL);

          /* double square */
          var square = i + PAWN_OFFSETS[us][1];
          if (second_rank[us] === rank(i) && board[square] == null) {
            add_move(board, moves, i, square, BITS.BIG_PAWN);
          }
        }

        /* pawn captures */
        for (j = 2; j < 4; j++) {
          var square = i + PAWN_OFFSETS[us][j];
          if (square & 0x88) continue

          if (board[square] != null && board[square].color === them) {
            add_move(board, moves, i, square, BITS.CAPTURE);
          } else if (square === ep_square) {
            add_move(board, moves, i, ep_square, BITS.EP_CAPTURE);
          }
        }
      } else if (piece_type === true || piece_type === piece.type) {
        for (var j = 0, len = PIECE_OFFSETS[piece.type].length; j < len; j++) {
          var offset = PIECE_OFFSETS[piece.type][j];
          var square = i;

          while (true) {
            square += offset;
            if (square & 0x88) break

            if (board[square] == null) {
              add_move(board, moves, i, square, BITS.NORMAL);
            } else {
              if (board[square].color === us) break
              add_move(board, moves, i, square, BITS.CAPTURE);
              break
            }

            /* break, if knight or king */
            if (piece.type === 'n' || piece.type === 'k') break
          }
        }
      }
    }

    /* check for castling if: a) we're generating all moves, or b) we're doing
     * single square move generation on the king's square
     */
    if (piece_type === true || piece_type === KING) {
      if (!single_square || last_sq === kings[us]) {
        /* king-side castling */
        if (castling[us] & BITS.KSIDE_CASTLE) {
          var castling_from = kings[us];
          var castling_to = castling_from + 2;

          if (
            board[castling_from + 1] == null &&
            board[castling_to] == null &&
            !attacked(them, kings[us]) &&
            !attacked(them, castling_from + 1) &&
            !attacked(them, castling_to)
          ) {
            add_move(board, moves, kings[us], castling_to, BITS.KSIDE_CASTLE);
          }
        }

        /* queen-side castling */
        if (castling[us] & BITS.QSIDE_CASTLE) {
          var castling_from = kings[us];
          var castling_to = castling_from - 2;

          if (
            board[castling_from - 1] == null &&
            board[castling_from - 2] == null &&
            board[castling_from - 3] == null &&
            !attacked(them, kings[us]) &&
            !attacked(them, castling_from - 1) &&
            !attacked(them, castling_to)
          ) {
            add_move(board, moves, kings[us], castling_to, BITS.QSIDE_CASTLE);
          }
        }
      }
    }

    /* return all pseudo-legal moves (this includes moves that allow the king
     * to be captured)
     */
    if (!legal) {
      return moves
    }

    /* filter out illegal moves */
    var legal_moves = [];
    for (var i = 0, len = moves.length; i < len; i++) {
      make_move(moves[i]);
      if (!king_attacked(us)) {
        legal_moves.push(moves[i]);
      }
      undo_move();
    }

    return legal_moves
  }

  /* convert a move from 0x88 coordinates to Standard Algebraic Notation
   * (SAN)
   *
   * @param {boolean} sloppy Use the sloppy SAN generator to work around over
   * disambiguation bugs in Fritz and Chessbase.  See below:
   *
   * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
   * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
   * 4. ... Ne7 is technically the valid SAN
   */
  function move_to_san(move, moves) {
    var output = '';

    if (move.flags & BITS.KSIDE_CASTLE) {
      output = 'O-O';
    } else if (move.flags & BITS.QSIDE_CASTLE) {
      output = 'O-O-O';
    } else {
      if (move.piece !== PAWN) {
        var disambiguator = get_disambiguator(move, moves);
        output += move.piece.toUpperCase() + disambiguator;
      }

      if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
        if (move.piece === PAWN) {
          output += algebraic(move.from)[0];
        }
        output += 'x';
      }

      output += algebraic(move.to);

      if (move.flags & BITS.PROMOTION) {
        output += '=' + move.promotion.toUpperCase();
      }
    }

    make_move(move);
    if (in_check()) {
      if (in_checkmate()) {
        output += '#';
      } else {
        output += '+';
      }
    }
    undo_move();

    return output
  }
  // parses all of the decorators out of a SAN string
  function stripped_san(move) {
    return move.replace(/=/, '').replace(/[+#]?[?!]*$/, '')
  }

  function attacked(color, square) {
    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      /* did we run off the end of the board */
      if (i & 0x88) {
        i += 7;
        continue
      }

      /* if empty square or wrong color */
      if (board[i] == null || board[i].color !== color) continue

      var piece = board[i];
      var difference = i - square;
      var index = difference + 119;

      if (ATTACKS[index] & (1 << SHIFTS[piece.type])) {
        if (piece.type === PAWN) {
          if (difference > 0) {
            if (piece.color === WHITE) return true
          } else {
            if (piece.color === BLACK) return true
          }
          continue
        }

        /* if the piece is a knight or a king */
        if (piece.type === 'n' || piece.type === 'k') return true

        var offset = RAYS[index];
        var j = i + offset;

        var blocked = false;
        while (j !== square) {
          if (board[j] != null) {
            blocked = true;
            break
          }
          j += offset;
        }

        if (!blocked) return true
      }
    }

    return false
  }

  function king_attacked(color) {
    return attacked(swap_color(color), kings[color])
  }

  function in_check() {
    return king_attacked(turn)
  }

  function in_checkmate() {
    return in_check() && generate_moves().length === 0
  }

  function in_stalemate() {
    return !in_check() && generate_moves().length === 0
  }

  function insufficient_material() {
    var pieces = {};
    var bishops = [];
    var num_pieces = 0;
    var sq_color = 0;

    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      sq_color = (sq_color + 1) % 2;
      if (i & 0x88) {
        i += 7;
        continue
      }

      var piece = board[i];
      if (piece) {
        pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1;
        if (piece.type === BISHOP) {
          bishops.push(sq_color);
        }
        num_pieces++;
      }
    }

    /* k vs. k */
    if (num_pieces === 2) {
      return true
    } else if (
      /* k vs. kn .... or .... k vs. kb */
      num_pieces === 3 &&
      (pieces[BISHOP] === 1 || pieces[KNIGHT] === 1)
    ) {
      return true
    } else if (num_pieces === pieces[BISHOP] + 2) {
      /* kb vs. kb where any number of bishops are all on the same color */
      var sum = 0;
      var len = bishops.length;
      for (var i = 0; i < len; i++) {
        sum += bishops[i];
      }
      if (sum === 0 || sum === len) {
        return true
      }
    }

    return false
  }

  function in_threefold_repetition() {
    /* TODO: while this function is fine for casual use, a better
     * implementation would use a Zobrist key (instead of FEN). the
     * Zobrist key would be maintained in the make_move/undo_move functions,
     * avoiding the costly that we do below.
     */
    var moves = [];
    var positions = {};
    var repetition = false;

    while (true) {
      var move = undo_move();
      if (!move) break
      moves.push(move);
    }

    while (true) {
      /* remove the last two fields in the FEN string, they're not needed
       * when checking for draw by rep */
      var fen = generate_fen().split(' ').slice(0, 4).join(' ');

      /* has the position occurred three or move times */
      positions[fen] = fen in positions ? positions[fen] + 1 : 1;
      if (positions[fen] >= 3) {
        repetition = true;
      }

      if (!moves.length) {
        break
      }
      make_move(moves.pop());
    }

    return repetition
  }

  function push(move) {
    history.push({
      move: move,
      kings: { b: kings.b, w: kings.w },
      turn: turn,
      castling: { b: castling.b, w: castling.w },
      ep_square: ep_square,
      half_moves: half_moves,
      move_number: move_number,
    });
  }

  function make_move(move) {
    var us = turn;
    var them = swap_color(us);
    push(move);

    board[move.to] = board[move.from];
    board[move.from] = null;

    /* if ep capture, remove the captured pawn */
    if (move.flags & BITS.EP_CAPTURE) {
      if (turn === BLACK) {
        board[move.to - 16] = null;
      } else {
        board[move.to + 16] = null;
      }
    }

    /* if pawn promotion, replace with new piece */
    if (move.flags & BITS.PROMOTION) {
      board[move.to] = { type: move.promotion, color: us };
    }

    /* if we moved the king */
    if (board[move.to].type === KING) {
      kings[board[move.to].color] = move.to;

      /* if we castled, move the rook next to the king */
      if (move.flags & BITS.KSIDE_CASTLE) {
        var castling_to = move.to - 1;
        var castling_from = move.to + 1;
        board[castling_to] = board[castling_from];
        board[castling_from] = null;
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        var castling_to = move.to + 1;
        var castling_from = move.to - 2;
        board[castling_to] = board[castling_from];
        board[castling_from] = null;
      }

      /* turn off castling */
      castling[us] = '';
    }

    /* turn off castling if we move a rook */
    if (castling[us]) {
      for (var i = 0, len = ROOKS[us].length; i < len; i++) {
        if (
          move.from === ROOKS[us][i].square &&
          castling[us] & ROOKS[us][i].flag
        ) {
          castling[us] ^= ROOKS[us][i].flag;
          break
        }
      }
    }

    /* turn off castling if we capture a rook */
    if (castling[them]) {
      for (var i = 0, len = ROOKS[them].length; i < len; i++) {
        if (
          move.to === ROOKS[them][i].square &&
          castling[them] & ROOKS[them][i].flag
        ) {
          castling[them] ^= ROOKS[them][i].flag;
          break
        }
      }
    }

    /* if big pawn move, update the en passant square */
    if (move.flags & BITS.BIG_PAWN) {
      if (turn === 'b') {
        ep_square = move.to - 16;
      } else {
        ep_square = move.to + 16;
      }
    } else {
      ep_square = EMPTY;
    }

    /* reset the 50 move counter if a pawn is moved or a piece is captured */
    if (move.piece === PAWN) {
      half_moves = 0;
    } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
      half_moves = 0;
    } else {
      half_moves++;
    }

    if (turn === BLACK) {
      move_number++;
    }
    turn = swap_color(turn);
  }

  function undo_move() {
    var old = history.pop();
    if (old == null) {
      return null
    }

    var move = old.move;
    kings = old.kings;
    turn = old.turn;
    castling = old.castling;
    ep_square = old.ep_square;
    half_moves = old.half_moves;
    move_number = old.move_number;

    var us = turn;
    var them = swap_color(turn);

    board[move.from] = board[move.to];
    board[move.from].type = move.piece; // to undo any promotions
    board[move.to] = null;

    if (move.flags & BITS.CAPTURE) {
      board[move.to] = { type: move.captured, color: them };
    } else if (move.flags & BITS.EP_CAPTURE) {
      var index;
      if (us === BLACK) {
        index = move.to - 16;
      } else {
        index = move.to + 16;
      }
      board[index] = { type: PAWN, color: them };
    }

    if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
      var castling_to, castling_from;
      if (move.flags & BITS.KSIDE_CASTLE) {
        castling_to = move.to + 1;
        castling_from = move.to - 1;
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        castling_to = move.to - 2;
        castling_from = move.to + 1;
      }

      board[castling_to] = board[castling_from];
      board[castling_from] = null;
    }

    return move
  }

  /* this function is used to uniquely identify ambiguous moves */
  function get_disambiguator(move, moves) {
    var from = move.from;
    var to = move.to;
    var piece = move.piece;

    var ambiguities = 0;
    var same_rank = 0;
    var same_file = 0;

    for (var i = 0, len = moves.length; i < len; i++) {
      var ambig_from = moves[i].from;
      var ambig_to = moves[i].to;
      var ambig_piece = moves[i].piece;

      /* if a move of the same piece type ends on the same to square, we'll
       * need to add a disambiguator to the algebraic notation
       */
      if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
        ambiguities++;

        if (rank(from) === rank(ambig_from)) {
          same_rank++;
        }

        if (file(from) === file(ambig_from)) {
          same_file++;
        }
      }
    }

    if (ambiguities > 0) {
      /* if there exists a similar moving piece on the same rank and file as
       * the move in question, use the square as the disambiguator
       */
      if (same_rank > 0 && same_file > 0) {
        return algebraic(from)
      } else if (same_file > 0) {
        /* if the moving piece rests on the same file, use the rank symbol as the
         * disambiguator
         */
        return algebraic(from).charAt(1)
      } else {
        /* else use the file symbol */
        return algebraic(from).charAt(0)
      }
    }

    return ''
  }

  function infer_piece_type(san) {
    var piece_type = san.charAt(0);
    if (piece_type >= 'a' && piece_type <= 'h') {
      var matches = san.match(/[a-h]\d.*[a-h]\d/);
      if (matches) {
        return undefined
      }
      return PAWN
    }
    piece_type = piece_type.toLowerCase();
    if (piece_type === 'o') {
      return KING
    }
    return piece_type
  }
  function ascii() {
    var s = '   +------------------------+\n';
    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      /* display the rank */
      if (file(i) === 0) {
        s += ' ' + '87654321'[rank(i)] + ' |';
      }

      /* empty piece */
      if (board[i] == null) {
        s += ' . ';
      } else {
        var piece = board[i].type;
        var color = board[i].color;
        var symbol = color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
        s += ' ' + symbol + ' ';
      }

      if ((i + 1) & 0x88) {
        s += '|\n';
        i += 8;
      }
    }
    s += '   +------------------------+\n';
    s += '     a  b  c  d  e  f  g  h\n';

    return s
  }

  // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
  function move_from_san(move, sloppy) {
    // strip off any move decorations: e.g Nf3+?!
    var clean_move = stripped_san(move);

    // if we're using the sloppy parser run a regex to grab piece, to, and from
    // this should parse invalid SAN like: Pe2-e4, Rc1c4, Qf3xf7
    if (sloppy) {
      var matches = clean_move.match(
        /([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/
      );
      if (matches) {
        var piece = matches[1];
        var from = matches[2];
        var to = matches[3];
        var promotion = matches[4];
      }
    }
    var piece_type = infer_piece_type(clean_move);
    var moves = null;
    var legalMoves = generate_moves({
      legal: true,
      piece: piece ? piece : piece_type,
    });
    moves = legalMoves;
    if (sloppy) {
      var illegalMoves = generate_moves({
        legal: false,
        piece: piece ? piece : piece_type,
      });
      moves = illegalMoves;
    }

    for (var i = 0, len = moves.length; i < len; i++) {
      // try the strict parser first, then the sloppy parser if requested
      // by the user
      if (
        clean_move === stripped_san(move_to_san(moves[i], legalMoves)) ||
        (sloppy &&
          clean_move === stripped_san(move_to_san(moves[i], illegalMoves)))
      ) {
        return moves[i]
      } else {
        if (
          matches &&
          (!piece || piece.toLowerCase() == moves[i].piece) &&
          SQUARES[from] == moves[i].from &&
          SQUARES[to] == moves[i].to &&
          (!promotion || promotion.toLowerCase() == moves[i].promotion)
        ) {
          return moves[i]
        }
      }
    }

    return null
  }

  /*****************************************************************************
   * UTILITY FUNCTIONS
   ****************************************************************************/
  function rank(i) {
    return i >> 4
  }

  function file(i) {
    return i & 15
  }

  function algebraic(i) {
    var f = file(i),
      r = rank(i);
    return 'abcdefgh'.substring(f, f + 1) + '87654321'.substring(r, r + 1)
  }

  function swap_color(c) {
    return c === WHITE ? BLACK : WHITE
  }

  function is_digit(c) {
    return '0123456789'.indexOf(c) !== -1
  }

  /* pretty = external move object */
  function make_pretty(ugly_move) {
    var move = clone(ugly_move);
    move.san = move_to_san(move, generate_moves({ legal: true }));
    move.to = algebraic(move.to);
    move.from = algebraic(move.from);

    var flags = '';

    for (var flag in BITS) {
      if (BITS[flag] & move.flags) {
        flags += FLAGS[flag];
      }
    }
    move.flags = flags;

    return move
  }

  function clone(obj) {
    var dupe = obj instanceof Array ? [] : {};

    for (var property in obj) {
      if (typeof property === 'object') {
        dupe[property] = clone(obj[property]);
      } else {
        dupe[property] = obj[property];
      }
    }

    return dupe
  }

  function trim(str) {
    return str.replace(/^\s+|\s+$/g, '')
  }

  /*****************************************************************************
   * DEBUGGING UTILITIES
   ****************************************************************************/
  function perft(depth) {
    var moves = generate_moves({ legal: false });
    var nodes = 0;
    var color = turn;

    for (var i = 0, len = moves.length; i < len; i++) {
      make_move(moves[i]);
      if (!king_attacked(color)) {
        if (depth - 1 > 0) {
          var child_nodes = perft(depth - 1);
          nodes += child_nodes;
        } else {
          nodes++;
        }
      }
      undo_move();
    }

    return nodes
  }

  return {
    /***************************************************************************
     * PUBLIC CONSTANTS (is there a better way to do this?)
     **************************************************************************/
    WHITE: WHITE,
    BLACK: BLACK,
    PAWN: PAWN,
    KNIGHT: KNIGHT,
    BISHOP: BISHOP,
    ROOK: ROOK,
    QUEEN: QUEEN,
    KING: KING,
    SQUARES: (function () {
      /* from the ECMA-262 spec (section 12.6.4):
       * "The mechanics of enumerating the properties ... is
       * implementation dependent"
       * so: for (var sq in SQUARES) { keys.push(sq); } might not be
       * ordered correctly
       */
      var keys = [];
      for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
        if (i & 0x88) {
          i += 7;
          continue
        }
        keys.push(algebraic(i));
      }
      return keys
    })(),
    FLAGS: FLAGS,

    /***************************************************************************
     * PUBLIC API
     **************************************************************************/
    load: function (fen) {
      return load(fen)
    },

    reset: function () {
      return reset()
    },

    moves: function (options) {
      /* The internal representation of a chess move is in 0x88 format, and
       * not meant to be human-readable.  The code below converts the 0x88
       * square coordinates to algebraic coordinates.  It also prunes an
       * unnecessary move keys resulting from a verbose call.
       */

      var ugly_moves = generate_moves(options);
      var moves = [];

      for (var i = 0, len = ugly_moves.length; i < len; i++) {
        /* does the user want a full move object (most likely not), or just
         * SAN
         */
        if (
          typeof options !== 'undefined' &&
          'verbose' in options &&
          options.verbose
        ) {
          moves.push(make_pretty(ugly_moves[i]));
        } else {
          moves.push(
            move_to_san(ugly_moves[i], generate_moves({ legal: true }))
          );
        }
      }

      return moves
    },

    in_check: function () {
      return in_check()
    },

    in_checkmate: function () {
      return in_checkmate()
    },

    in_stalemate: function () {
      return in_stalemate()
    },

    in_draw: function () {
      return (
        half_moves >= 100 ||
        in_stalemate() ||
        insufficient_material() ||
        in_threefold_repetition()
      )
    },

    insufficient_material: function () {
      return insufficient_material()
    },

    in_threefold_repetition: function () {
      return in_threefold_repetition()
    },

    game_over: function () {
      return (
        half_moves >= 100 ||
        in_checkmate() ||
        in_stalemate() ||
        insufficient_material() ||
        in_threefold_repetition()
      )
    },

    validate_fen: function (fen) {
      return validate_fen(fen)
    },

    fen: function () {
      return generate_fen()
    },

    board: function () {
      var output = [],
        row = [];

      for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
        if (board[i] == null) {
          row.push(null);
        } else {
          row.push({ type: board[i].type, color: board[i].color });
        }
        if ((i + 1) & 0x88) {
          output.push(row);
          row = [];
          i += 8;
        }
      }

      return output
    },

    pgn: function (options) {
      /* using the specification from http://www.chessclub.com/help/PGN-spec
       * example for html usage: .pgn({ max_width: 72, newline_char: "<br />" })
       */
      var newline =
        typeof options === 'object' && typeof options.newline_char === 'string'
          ? options.newline_char
          : '\n';
      var max_width =
        typeof options === 'object' && typeof options.max_width === 'number'
          ? options.max_width
          : 0;
      var result = [];
      var header_exists = false;

      /* add the PGN header headerrmation */
      for (var i in header) {
        /* TODO: order of enumerated properties in header object is not
         * guaranteed, see ECMA-262 spec (section 12.6.4)
         */
        result.push('[' + i + ' "' + header[i] + '"]' + newline);
        header_exists = true;
      }

      if (header_exists && history.length) {
        result.push(newline);
      }

      var append_comment = function (move_string) {
        var comment = comments[generate_fen()];
        if (typeof comment !== 'undefined') {
          var delimiter = move_string.length > 0 ? ' ' : '';
          move_string = `${move_string}${delimiter}{${comment}}`;
        }
        return move_string
      };

      /* pop all of history onto reversed_history */
      var reversed_history = [];
      while (history.length > 0) {
        reversed_history.push(undo_move());
      }

      var moves = [];
      var move_string = '';

      /* special case of a commented starting position with no moves */
      if (reversed_history.length === 0) {
        moves.push(append_comment(''));
      }

      /* build the list of moves.  a move_string looks like: "3. e3 e6" */
      while (reversed_history.length > 0) {
        move_string = append_comment(move_string);
        var move = reversed_history.pop();

        /* if the position started with black to move, start PGN with 1. ... */
        if (!history.length && move.color === 'b') {
          move_string = move_number + '. ...';
        } else if (move.color === 'w') {
          /* store the previous generated move_string if we have one */
          if (move_string.length) {
            moves.push(move_string);
          }
          move_string = move_number + '.';
        }

        move_string =
          move_string +
          ' ' +
          move_to_san(move, generate_moves({ legal: false }));
        make_move(move);
      }

      /* are there any other leftover moves? */
      if (move_string.length) {
        moves.push(append_comment(move_string));
      }

      /* is there a result? */
      if (typeof header.Result !== 'undefined') {
        moves.push(header.Result);
      }

      /* history should be back to what it was before we started generating PGN,
       * so join together moves
       */
      if (max_width === 0) {
        return result.join('') + moves.join(' ')
      }

      var strip = function () {
        if (result.length > 0 && result[result.length - 1] === ' ') {
          result.pop();
          return true
        }
        return false
      };

      /* NB: this does not preserve comment whitespace. */
      var wrap_comment = function (width, move) {
        for (var token of move.split(' ')) {
          if (!token) {
            continue
          }
          if (width + token.length > max_width) {
            while (strip()) {
              width--;
            }
            result.push(newline);
            width = 0;
          }
          result.push(token);
          width += token.length;
          result.push(' ');
          width++;
        }
        if (strip()) {
          width--;
        }
        return width
      };

      /* wrap the PGN output at max_width */
      var current_width = 0;
      for (var i = 0; i < moves.length; i++) {
        if (current_width + moves[i].length > max_width) {
          if (moves[i].includes('{')) {
            current_width = wrap_comment(current_width, moves[i]);
            continue
          }
        }
        /* if the current move will push past max_width */
        if (current_width + moves[i].length > max_width && i !== 0) {
          /* don't end the line with whitespace */
          if (result[result.length - 1] === ' ') {
            result.pop();
          }

          result.push(newline);
          current_width = 0;
        } else if (i !== 0) {
          result.push(' ');
          current_width++;
        }
        result.push(moves[i]);
        current_width += moves[i].length;
      }

      return result.join('')
    },

    load_pgn: function (pgn, options) {
      // allow the user to specify the sloppy move parser to work around over
      // disambiguation bugs in Fritz and Chessbase
      var sloppy =
        typeof options !== 'undefined' && 'sloppy' in options
          ? options.sloppy
          : false;

      function mask(str) {
        return str.replace(/\\/g, '\\')
      }

      function has_keys(object) {
        for (var key in object) {
          return true
        }
        return false
      }

      function parse_pgn_header(header, options) {
        var newline_char =
          typeof options === 'object' &&
          typeof options.newline_char === 'string'
            ? options.newline_char
            : '\r?\n';
        var header_obj = {};
        var headers = header.split(new RegExp(mask(newline_char)));
        var key = '';
        var value = '';

        for (var i = 0; i < headers.length; i++) {
          key = headers[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/, '$1');
          value = headers[i].replace(/^\[[A-Za-z]+\s"(.*)"\ *\]$/, '$1');
          if (trim(key).length > 0) {
            header_obj[key] = value;
          }
        }

        return header_obj
      }

      var newline_char =
        typeof options === 'object' && typeof options.newline_char === 'string'
          ? options.newline_char
          : '\r?\n';

      // RegExp to split header. Takes advantage of the fact that header and movetext
      // will always have a blank line between them (ie, two newline_char's).
      // With default newline_char, will equal: /^(\[((?:\r?\n)|.)*\])(?:\r?\n){2}/
      var header_regex = new RegExp(
        '^(\\[((?:' +
          mask(newline_char) +
          ')|.)*\\])' +
          '(?:' +
          mask(newline_char) +
          '){2}'
      );

      // If no header given, begin with moves.
      var header_string = header_regex.test(pgn)
        ? header_regex.exec(pgn)[1]
        : '';

      // Put the board in the starting position
      reset();

      /* parse PGN header */
      var headers = parse_pgn_header(header_string, options);
      for (var key in headers) {
        set_header([key, headers[key]]);
      }

      /* load the starting position indicated by [Setup '1'] and
       * [FEN position] */
      if (headers['SetUp'] === '1') {
        if (!('FEN' in headers && load(headers['FEN'], true))) {
          // second argument to load: don't clear the headers
          return false
        }
      }

      /* NB: the regexes below that delete move numbers, recursive
       * annotations, and numeric annotation glyphs may also match
       * text in comments. To prevent this, we transform comments
       * by hex-encoding them in place and decoding them again after
       * the other tokens have been deleted.
       *
       * While the spec states that PGN files should be ASCII encoded,
       * we use {en,de}codeURIComponent here to support arbitrary UTF8
       * as a convenience for modern users */

      var to_hex = function (string) {
        return Array.from(string)
          .map(function (c) {
            /* encodeURI doesn't transform most ASCII characters,
             * so we handle these ourselves */
            return c.charCodeAt(0) < 128
              ? c.charCodeAt(0).toString(16)
              : encodeURIComponent(c).replace(/\%/g, '').toLowerCase()
          })
          .join('')
      };

      var from_hex = function (string) {
        return string.length == 0
          ? ''
          : decodeURIComponent('%' + string.match(/.{1,2}/g).join('%'))
      };

      var encode_comment = function (string) {
        string = string.replace(new RegExp(mask(newline_char), 'g'), ' ');
        return `{${to_hex(string.slice(1, string.length - 1))}}`
      };

      var decode_comment = function (string) {
        if (string.startsWith('{') && string.endsWith('}')) {
          return from_hex(string.slice(1, string.length - 1))
        }
      };

      /* delete header to get the moves */
      var ms = pgn
        .replace(header_string, '')
        .replace(
          /* encode comments so they don't get deleted below */
          new RegExp(`(\{[^}]*\})+?|;([^${mask(newline_char)}]*)`, 'g'),
          function (match, bracket, semicolon) {
            return bracket !== undefined
              ? encode_comment(bracket)
              : ' ' + encode_comment(`{${semicolon.slice(1)}}`)
          }
        )
        .replace(new RegExp(mask(newline_char), 'g'), ' ');

      /* delete recursive annotation variations */
      var rav_regex = /(\([^\(\)]+\))+?/g;
      while (rav_regex.test(ms)) {
        ms = ms.replace(rav_regex, '');
      }

      /* delete move numbers */
      ms = ms.replace(/\d+\.(\.\.)?/g, '');

      /* delete ... indicating black to move */
      ms = ms.replace(/\.\.\./g, '');

      /* delete numeric annotation glyphs */
      ms = ms.replace(/\$\d+/g, '');

      /* trim and get array of moves */
      var moves = trim(ms).split(new RegExp(/\s+/));

      /* delete empty entries */
      moves = moves.join(',').replace(/,,+/g, ',').split(',');
      var move = '';

      for (var half_move = 0; half_move < moves.length - 1; half_move++) {
        var comment = decode_comment(moves[half_move]);
        if (comment !== undefined) {
          comments[generate_fen()] = comment;
          continue
        }
        move = move_from_san(moves[half_move], sloppy);

        /* move not possible! (don't clear the board to examine to show the
         * latest valid position)
         */
        if (move == null) {
          return false
        } else {
          make_move(move);
        }
      }

      comment = decode_comment(moves[moves.length - 1]);
      if (comment !== undefined) {
        comments[generate_fen()] = comment;
        moves.pop();
      }

      /* examine last move */
      move = moves[moves.length - 1];
      if (POSSIBLE_RESULTS.indexOf(move) > -1) {
        if (has_keys(header) && typeof header.Result === 'undefined') {
          set_header(['Result', move]);
        }
      } else {
        move = move_from_san(move, sloppy);
        if (move == null) {
          return false
        } else {
          make_move(move);
        }
      }
      return true
    },

    header: function () {
      return set_header(arguments)
    },

    ascii: function () {
      return ascii()
    },

    turn: function () {
      return turn
    },

    move: function (move, options) {
      /* The move function can be called with in the following parameters:
       *
       * .move('Nxb7')      <- where 'move' is a case-sensitive SAN string
       *
       * .move({ from: 'h7', <- where the 'move' is a move object (additional
       *         to :'h8',      fields are ignored)
       *         promotion: 'q',
       *      })
       */

      // allow the user to specify the sloppy move parser to work around over
      // disambiguation bugs in Fritz and Chessbase
      var sloppy =
        typeof options !== 'undefined' && 'sloppy' in options
          ? options.sloppy
          : false;

      var move_obj = null;

      if (typeof move === 'string') {
        move_obj = move_from_san(move, sloppy);
      } else if (typeof move === 'object') {
        var moves = generate_moves();

        /* convert the pretty move object to an ugly move object */
        for (var i = 0, len = moves.length; i < len; i++) {
          if (
            move.from === algebraic(moves[i].from) &&
            move.to === algebraic(moves[i].to) &&
            (!('promotion' in moves[i]) ||
              move.promotion === moves[i].promotion)
          ) {
            move_obj = moves[i];
            break
          }
        }
      }

      /* failed to find move */
      if (!move_obj) {
        return null
      }

      /* need to make a copy of move because we can't generate SAN after the
       * move is made
       */
      var pretty_move = make_pretty(move_obj);

      make_move(move_obj);

      return pretty_move
    },

    undo: function () {
      var move = undo_move();
      return move ? make_pretty(move) : null
    },

    clear: function () {
      return clear()
    },

    put: function (piece, square) {
      return put(piece, square)
    },

    get: function (square) {
      return get(square)
    },

    remove: function (square) {
      return remove(square)
    },

    perft: function (depth) {
      return perft(depth)
    },

    square_color: function (square) {
      if (square in SQUARES) {
        var sq_0x88 = SQUARES[square];
        return (rank(sq_0x88) + file(sq_0x88)) % 2 === 0 ? 'light' : 'dark'
      }

      return null
    },

    history: function (options) {
      var reversed_history = [];
      var move_history = [];
      var verbose =
        typeof options !== 'undefined' &&
        'verbose' in options &&
        options.verbose;

      while (history.length > 0) {
        reversed_history.push(undo_move());
      }

      while (reversed_history.length > 0) {
        var move = reversed_history.pop();
        if (verbose) {
          move_history.push(make_pretty(move));
        } else {
          move_history.push(move_to_san(move, generate_moves({ legal: true })));
        }
        make_move(move);
      }

      return move_history
    },

    get_comment: function () {
      return comments[generate_fen()]
    },

    set_comment: function (comment) {
      comments[generate_fen()] = comment.replace('{', '[').replace('}', ']');
    },

    delete_comment: function () {
      var comment = comments[generate_fen()];
      delete comments[generate_fen()];
      return comment
    },

    get_comments: function () {
      prune_comments();
      return Object.keys(comments).map(function (fen) {
        return { fen: fen, comment: comments[fen] }
      })
    },

    delete_comments: function () {
      prune_comments();
      return Object.keys(comments).map(function (fen) {
        var comment = comments[fen];
        delete comments[fen];
        return { fen: fen, comment: comment }
      })
    },
  }
}

// We're making a sprite, so first import that.


// IMPLEMENT DATA HANDLER!!

// Let's see if I can make a custom chess sprite now.
class chesssprite extends sprite {
	constructor(game){
		// `game' contains some metadata, and the pgn in game.Game.
		
		
		// Construct a basic sprite.
		super();
		let obj = this;
		
		
		// Store the game metadata. Create a unique ID for the task too. Maybe players + time and date? Lichess enforces unique user names, and two users can only start a single game at a time
		game.id = `${ game.White } vs. ${ game.Black }, ${ game.UTCDate } at ${ game.UTCTime }`;
		obj.task = game;
		
		
		
		// Add a chessboard into the scene element. `.chessboard' is defined in the `chessground.css', and defines the initial size of the board in pixel.
		let drawdiv = d3$1.select(obj.node)
		  .select("div.scene-element")
		  .append("div")
		    .attr("class", "chessboard");
		
		// `Chess' finds the available legal moves.
		obj.chess = new Chess();
		
		
		// `pgn' is teh sequence of moves played, `fen' is the current state of the game.
		obj.pgn = game.Game;
		obj.fen = obj.chess.fen();
		
		// Position within the series.
		obj.plies = game.Game.split(" ").filter(function(v,i){return i%3 != 0});
		obj.plyind = -1; // The first increment will make plyind=0, which is the first index of an array.
		
		

		// Configure the chess board renderer.
		obj.board = Chessground(drawdiv.node(), {viewOnly: true});
		
		
		
		// Make the class observable.
		makeObservable(obj, {
            ply: action,
			fen: observable,
			data: computed
        });
		
		
		autorun(()=>{obj.render();});
		
		
	} // constructor
	
	
	// Basic functionality.
	render(){
		var obj = this;
		
		// The FEN changed, therefore redraw.
		obj.board.set({fen: obj.fen});
		
		
	} // render
	
	
	get data(){
		// Find the pawn positions in the fen.
		let obj = this;
		// COMPUTED VALUE!!
		let fen = obj.fen; // this is the observed value!
		
		// Each of the 16 dimensions is a file for one side. Since FEN notation begins with rank 8
		let emptystructure = [];
		for(let i=0; i<16; i++){
			emptystructure.push([]);
		} // for

		let pawnstructure = fen
		  .split(" ")[0]
		  .split("/")
		  .reduce((a,pieces,row)=>{
			let col = 0;
			let vals = [...pieces];
			vals.forEach(v=>{
				let v_ = parseInt(v);
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
				
					col += 1;
				} // if
			});
			
			return a
		},emptystructure);
		
		
		return pawnstructure
		
		
	} // get data
	
	
	// Specific functionality.
	ply(){
		// This increments the plyind. I could then even make a computed value of `fen`, and only then ask the rerender.
		var obj = this;
		obj.plyind += 1;
		
		
		// Find and play the next ply.
		let ply = obj.plies[obj.plyind];
		obj.chess.move(ply);
		obj.fen = obj.chess.fen();
		
	} // ply
	
} // chesssprite

// This part just calculates the node positioning etc. It does not need to be reactive - instead it should be static.




// Tricky to make it observable, because nodes are needed for bundles, but once bundles are made the nodes should be updated with links to them too. Similar for links. Maybe it can still be made observable, but then levels are completely new objects? That makes sense, as some bundles etc will actually disappear.




// SHOULD THE DATA ITSELF BE LOOSLY STRUCTURED SO THAT THE LEVELS THEMSELVES NEED TO BE ESTABLISHED INTERNALLY? PROBABLY A GOOD IDEA!
		
// ONE REQUIREMENT IS THAT ALL CHILDREN OF A NODE SHOULD BE BELOW IT, OR AT LEAST THE SAME LEVEL.

// BUT IF SOME LINES END, THEN IT'S POSSIBLE TO RECLAIM THE SPACE.


// IMPLEMENT BACKGROND HIERARCHY THAT CAN KEEP UP WITH THE USER ACTIONS. THEN ANOTHER METHOD CAN BE USED TO RECLAIM VERTICAL SPACE. THE ORDER OF NODES SHOULD BE DETERMINED BASED ON THE UNDERLYING DATA.


// Keep it as a class so that hte layout parameters can be tweaked as needed.


// Maybe it's better if it's a class so it can keep up with the user actions? Then it would also be good if it's reactive. How would I make it rective? The actions would have to come from outside? The same as the `ply' method in the chess demo.
class treehierarchy {
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
		}; // layout
		
	} // constructor
	
	update(){
		let obj = this;
		
		// Now recompute.
		obj.map = obj.dimension();
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
		},{absolute: [], relative: []});
		
		
		
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
			}); // forEach
			
			// But also create an internal registry, so that it is easy to query connections between the nodes of this tree.
			tree.registry = tree.nodes.reduce((a,node)=>{
				a[node.id] = node;
				return a
			},{}); // reduce
		}); // trees forEach
		
		
		
		
		// For relative trees swap out the tree in their registry by the tree in the general registry. But then how should the trees initialise? I won't be able to initialise them all at once, because the relative ones need to wait for the absolute ones.
		
		// What happens if a tree ends in a common node. And suppose that tree takes more levels than others to arrive there.
		
		
		
		
		
		// The merged nodes may not contain all of it's own children. Therefore `Innacurate plays' is classed as inactive. Enforce that the nodes adopt all appropriate children.
		
		trees.forEach(tree=>{
			tree.nodes.forEach(node=>{
				// Culd also be done by clearing the merged nodes in `obj.noderegistry' of all children, and then running the `parent2child' method again. Maybe this is a bit more explicit?
				
				// Adoption.
				node.parents.forEach(parent_id=>{
					let parent = obj.noderegistry[parent_id];
					if(parent.children.includes(node.id)); else {
						parent.children.push(node.id);
					} // if
				}); // forEach parent_id
				
				// Make sure the nodes in the registry have all the descriptions possible. The descriptions will have to be stored as author-text pairs so that they can be displayed as messages.
				// The descriptions array is empty on creation, and since this runs once for every node in the data we can just push without checking the status for now. But only add if the node has a description.
				if(node.description){
					let mergednode = obj.noderegistry[node.id];

					mergednode.descriptions.push({
						author: tree.author,
						text: node.description
					}); // push

				} // if
				
				
				
			}); // forEach node
		}); // forEach tree
		
		
		
		
		
		let nodes = Object.getOwnPropertyNames(obj.noderegistry).map(nodeid=>{return obj.noderegistry[nodeid]});
		
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
		let obj = this;
				
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
				});
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
			
			let parents = node.parents.map(parentid=>{return obj.noderegistry[parentid]});
			
			
			let isActive = true;
			if(parents.length > 0){
				// All parents must still list it. Some returns true when one item evaluates true. To enforce all are true, the test must return negative for all, and then the flag is reversed at the end.
				isActive = !parents.some(parent=>{
					return !parent.children.includes(node.id);
				}); // some
			
			} // if
			
			return isActive
		}); // filter
		
		
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
		});
		
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
		
	  
	    let bundle_ids = [];
		let bundleregistry = {};
	    let bundles = [];
		
		
		obj.trees.forEach( tree => {
			
			// Author is the tree unique id.
			let author = tree.author;
			
			
			// Find only the active nodes of this tree.
			let active = tree.nodes.filter( node => {
				// The node is active if it's in the array of nodes that were passed in.
				return activeNodeIds.includes(node.id)
			}); // filter;
			
			// Find the bundles for each tree.
			active.forEach(function(node){
		
			  if(node.parents.length > 0){
				let bundleid = make_bundle_id(node, author);
				
				
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
				    }; // bundle
				  
				  
				    // Store the bundle
				    bundle_ids.push(bundleid);
				    bundleregistry[bundleid] = bundle;
				    bundles.push(bundle);
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
					};
					
					bundle.links.push(link);
					
				});
				
			  } // if
			}); // forEach
			
		}); // forEach tree
		
		
		// Store the bundle registry for later use.
		obj.bundleregistry = bundleregistry;
	    
	  return bundles
	  
	} // compute_bundles
	
	compute_links(bundles){
	  
	  // Compute hte links based on the bundles. There may be more than one link going between the same two nodes!!

	  let links = [];
	  bundles.forEach( bundle => {
		  // For each bundle create all the nodes needed.
		  links = links.concat(bundle.links);
	  }); // forEach
	  
	  return links
	  
	} // compute_links
	
	
	
	
	
	
	bundles_of_node(nodes, bundles){
	  // 'bundles_of_node' creates a map that goes from a node to all of the bundles in which that node is a parent. By way of bundle definition the node can only be a child of one bundle.
	  
	  return nodes.reduce( (a,node) => {
		
		a[node.id] = bundles.filter( bundle => {
		  // Is the node a parent in this bundle?
		  return bundle.parents.includes(node.id)
		});
	  
		return a
	  }, {}) // reduce
	} // bundles_of_node
	
	
	

	
	
	// This should be the getter instead!!
	get levels(){
		// Creates the tree visualisation elements with cross referencing in preparation for dimesnioning.
		let obj = this;
		
		
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
	    let child_bundles_of_node = obj.bundles_of_node(nodes, bundles);
	    
	  
	    nodes.forEach(node => {
			// With parallel trees the parent bundles need to be tracked also.
		  node.child_bundles = child_bundles_of_node[node.id];
	    });
	  
	    
	  
	    
		
		
		
		
	  
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
		
	    let levels = [];
		for(let i=0; i<maxlevel+1; i++){
		  levels.push({
		    i: i,
		    nodes: nodes.filter( node => {return node.level == i}),
		    bundles: bundles.filter( bundle => {return bundle.level == i}),
		    links: links.filter( link => {return link.level == i})
		  });
	    } // for
	  
	  
	    return levels

	} // get levels

	
	
	
	// Dimesnion the tree.
	dimension(){
	    // `dimension' calculates the positions of the nodes on the screen, and dimensions the connecting links.
	    let obj = this;
	  
	 

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
		lvl.nodes.forEach(node => node.dim.height = (Math.max(1, node.child_bundles.length)-1)*metro_d);  
	  });
	  
	  
	  // NODE POSITION:
	  var x_offset = 0;
	  var y_offset = 0;
	  levels.forEach(level => {
		// Distance between different levels depends on the number of bundles in that level! Essentially more space is needed for more bundles.
		x_offset += level.bundles.length*bundle_width;
		y_offset += level_y_padding;
		level.nodes.forEach((node, i) => {
		  let dim = node.dim;
		  dim.markersize = ( Math.max(1, node.child_bundles.length) - 1 )*metro_d;
		  dim.x = x_offset + node.level*node_width;
		  dim.y = y_offset + node_height + dim.markersize/2;
		  
		  y_offset += node_height + dim.markersize;
		});
	  });
	  
	  
	  
	  // A line is made up of two horizontal segments, one before the curve and one after. Since both horizontal segments either start or end at a node, it is sufficient to know the length of one, along with the turn radius to have both sufficiently defined. The length of the first horizontal segment will differ among lines of a single level to ensure they do not overlap unnecessarily.
	  
	  
	  
	  // Calculate hte position of the bundle line where it turns vertical in preparaton of branching out to children.
	  levels.forEach(level => {
		level.bundles.forEach( (bundle,i) => {
		  // Find the parent furthest to the right. That will be the parent one level above the current bundle level
		  let farthest_parent_x = d3.max(bundle.parents, node_id=>{
			  return obj.noderegistry[node_id].dim.x
		  });
		  bundle.dim.x = farthest_parent_x + node_width + (level.bundles.length - 1 - i)*bundle_width;
		}); // forEach
	  }); // forEach
	  
	  
	  // LINKS
	  levels.forEach(lvl=>{
		// Change to operate on a node basis. Then the bundleid etc will be clearer.
		  
		// the links of a level are the incoming links. 
		  
		lvl.links.forEach(link => {
			let source = link.source.dim;
			let target = link.target.dim;
			let dim = link.dim;
			
			// Find index of bundle of the parent.
			let bundle = obj.bundleregistry[link.bundle_id];
			let bundles_of_target = link.target.child_bundles;
			let bundle_ind = bundles_of_target.indexOf(bundle);
			
			
			// target is the parent node, source is the child!
			// xb is the location of the vertical file that starts distributing the children.
			dim.xt = target.x;
			
			// l.target.bundles_index[l.bundle.id].i*metro_d - l.target.bundles.length*metro_d/2 + metro_d/2
			// yt has to be offset so that the lines emerge from a node side by side.
			dim.bundle_ind = bundle_ind;
			dim.yt = target.y + bundle_ind*metro_d - bundles_of_target.length*metro_d/2 + metro_d/2;
			dim.xb = bundle.dim.x;
			dim.xs = source.x;
			dim.ys = source.y;
		  });
	  });
	  
	  
	  
	  // Originally all levels are moved one underneath another. Now an attempt is made to reclaim some of the vertical space. A minimum height of the turn is enforced through "min_family_height"
	  var y_negative_offset = 0;
	  levels.forEach(lvl => {
		// MY BUNDLES DON'T HAVE REFERENCES TO LINKS!!
		
		// f(link)
		// find min f(link) for all links in a bundle
		// find min of min(f(link)) for all bundles in level
		// == find min(f(link)) for all links in the level
		
		y_negative_offset += -min_family_height + d3.min(lvl.links, link => (link.dim.ys-c)-(link.dim.yt+c)) || 0;
		// y_negative_offset = -100 + d3.min(lvl.links, link => link.dim.ys) || 0
		lvl.nodes.forEach(n => n.dim.y -= y_negative_offset);
	  });
	  
	  
	  // WHAT DOES THIS DO??
	  // very ugly, I know
	  levels.forEach(lvl => {
		  lvl.links.forEach(link => {
			let target = link.target.dim;
			let source = link.source.dim;
			let l = link.dim;
			
			l.yt = target.y + l.bundle_ind*metro_d - link.target.child_bundles.length*metro_d/2 + metro_d/2;
			l.ys = source.y;
			l.c1 = source.level-target.level > 1 ? node_width+c : c;
			l.c2 = c;
		  }); // forEach
	  }); // forEach
	  
	  
	  
	  // Instead of outputting an aggregate, the nodes and bundles should be accessed through the class itself. This way the same node objects can be used to communicate the user actions back to the hierarchy for recalculation.
	  
	  // Create an alternate aggregate for drawing. This can be changed if the drawing changes also.
	  let agg = levels.reduce((a,lvl)=>{
		  a.nodes = a.nodes.concat(lvl.nodes);
		  a.bundles = a.bundles.concat(lvl.bundles);
		  return a
	  },{nodes: [], bundles: []});
	  
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
			}); // filter
			
			obj.initialiselevels(tree.registry, active);
			
		}); // forEach tree
		
		
		// Why don't I try to just initialise the levels of the currently active nodes? Why do I need to go through two trees. I know which nodes I have, and I know what connections will be needed.
		
		
		
		// Now with the trees all initialised let's loop over the nodes and collect their appropriate levels.
		nodes.forEach(node=>{
			let candidates = obj.trees.map(tree=>{
				// It's possible that the tree does not feature this particular node, in which case return the default level of 0.
				let tree_node_ids = Object.getOwnPropertyNames(tree.registry);
				if(tree_node_ids.includes(node.id)){
					return tree.registry[node.id].level;
				} else {
					return 0
				}				
				
				// HERE MAKE SURE THAT AFTER THE MERGER NO NODE HAS A HIGHER LEVEL THAN ITS CHILD!!! THIS COULD HAPPEN!!
				
			});
			
			node.level = Math.max(...candidates);
		});
		
		
		
	} // initialiselevels2
	
	initialiselevels(registry, nodes){
		// Pass through the levels and assign level: 0 to those without parents. Nodes are passed in as they may be a subset of all nodes.
		
		// First clear all the levels?
		nodes.forEach(node=>{
			node.level = undefined;
		}); // forEach
		
		
		// Set the root levels.
		nodes.forEach(node=>{
			if(node.parents.length == 0){
				node.level = 0;
			} // if
		});
		
		// Now move through the nodes and check if all parents already had a level assigned. If so the level of the node is max(parents.level) + 1. This must be done until all the nodes have an assigned level.
		
		
		let unassignednodes = nodes.filter(node=>node.level==undefined);
		
		
		let ind = 0;
		let breakind = unassignednodes.length;
		while (unassignednodes.length > 0){
			
			unassignednodes.forEach(node=>{
				// All parents must have an assigned level, otherwise skip. Check if any don't have level.
				let parents = node.parents.map(parentid=>registry[parentid]);
				
				
				if( parents.some(parent=>parent.level==undefined) ); else {
					node.level = d3.max(parents, parent=>parent.level) + 1;
				}
			});
			
			
			if(ind > breakind){
				break;
			} else {
				ind += 1;
			} // if
			
			unassignednodes = unassignednodes.filter(node=>node.level==undefined);
			
		} // while
		
	} // initialiselevels
	
	
	
	static parent2child(nodes){
		
		let nodeDictionary = nodes.reduce((a,node)=>{
			a[node.id] = node;
			return a
		},{});
		
		// Here I want to find all the parents of a particular node, and add this node as a child to them. Why would this duplicate the results?
		nodes.forEach(node=>{
			node.parents.forEach(parentId=>{
				// Get the parent so the child can be pushed to it. Allow the parent not to be found - e.g. if just a branch of an existing branch is made.
				let parent = nodeDictionary[parentId];
				if(parent){
					parent.children.push(node.id);
				} // if
				
			});
		});
		return nodes;
	} // parent2child
	
	static child2parent(nodes){	
	
		let nodeDictionary = nodes.reduce((a,node)=>{
			a[node.id] = node;
			return a
		},{});
	
		nodes.forEach(node=>{
			node.children.forEach(childId=>{
				let child = nodeDictionary[childId];
				child.parents.push(node.id);
			});
		});
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
			
			
		});
	} // enforceconsistency
	
	
} // treerender

// import {autorun, action} from "mobx";

// NO TRANSITION FOR NOW.
// const duration = 0;

// Split the code into hierarchy and render.


// MAYBE ENFORCE THE PADDING AND SIZE OF THE TREE HERE? OR USE A ZOOMABLE TREE?


// MAYBE POSITION THE G ELEMENTS AND THEN ONLY ADD THE RELATIVE POSITIONS? AH, BUT WON'T WORK FOR PATHS...

// Make this as a class. Pass in the data, and then start it up etc.

// make it reactive with respect to data so that it updates itself? Then it should also create it's own DOM element.
class treerender {
	constructor(data){
		
		this.svg = d3$1.create("svg")
		  .attr("width", 600 + "px")
		  .attr("height", 600 + "px");
		
		// Add groups for nodes and bundles to make sure they are always drawn in the right order on-screen.
		this.svg
		  .append("g")
		  .attr("class", "bundles");
		
		this.svg
		  .append("g")
		  .attr("class", "nodes");
		
		
		this.nodetooltip = this.svg
		  .append("g")
		  .attr("class", "nodetooltip");
		
		this.linktooltip = this.svg
		  .append("g")
		  .attr("class", "linktooltip");
		
		
		this.hierarchy = new treehierarchy(data);
		
		
		this.color = d3$1.scaleOrdinal(d3$1.schemeCategory10);
		
		
	} // constructor
	
	
	update(){
		let obj = this;
		
		
		// Recalculate the tree here.
		obj.hierarchy.update();
		
		
		// Adjust the svg viewport.
		obj.scalesvgviewport();
		
		
		// Redraw. How should this execute with transitions?
		obj.updatelines();
		obj.updatenodes();
		
		
		console.log(obj.hierarchy.map);
		
		// Update the tooltip also. Where should this tooltip come from? There will be only one tooltip node, and then
		
	} // update
	
	
	scalesvgviewport(){
		let obj = this;
		
		let padding = 16;
		
		// Calculate the max extent of the data.
		d3$1.extent( obj.hierarchy.map.nodes, node=>node.dim.x );
		d3$1.extent( obj.hierarchy.map.nodes, node=>node.dim.y );
		
		
		// Maybe jujt setup some values for the demo for now.
		
		obj.svg.attr("viewBox", [-padding, padding, 500, 500] );
		
		
	} // scalesvgviewport
	
	
	updatenodes(){
		let obj = this;
		
		
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
		  ); // join
		  
		function drawnode(node){
			let n = node.dim;
			return `M${ n.x } ${ n.y-n.height/2 } L${ n.x } ${ n.y+n.height/2 }`;
		} // drawnode
		
		
		
		
		function enternode(){
			// this = g.node
			
			d3$1.select(this)
			  .append("path")
			    .attr("class", n=>n._children.length>0 ? "node node-expandable":"node")
			    .attr("d", drawnode) // "M0 0 L0 0"
				.attr("stroke", "black")
				.attr("stroke-width", 8)
			  .clone()
			    .attr("class", "node")
				.attr("stroke", "white")
				.attr("stroke-width", 4);
							
			d3$1.select(this)
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
				});
				
			
			
			
			// Add the events. Clicking on texts should move to a group, whereas clicking on the node collapse/uncollapse a branch.
			d3$1.select(this)
			  .selectAll("text")
			  .on("click", (event, node) => {
				  console.log("Move to",event, node);
			  });
			  
			d3$1.select(this)
			  .selectAll("path")
			  .on("click", (event, node) => {
				  // Communicate that a node has been collapsed.
				  obj.hierarchy.collapsenode = node;
				  
				  // And now update.
				  obj.update();
			  });
			  
			// Add teh tooltip.
			d3$1.select(this)
			  .selectAll("path")
			  .on("mouseover", (event, node)=>{
				  console.log(event, node.descriptions);
				  
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
					  .html(d=>`${d.author}: ${d.text}`);
				  } // if
			  })
			  .on("mouseout", ()=>{
				  obj.nodetooltip.selectAll("*").remove();
			  });
			
		} // enternode
		
		function updatenode(d){
			// For some reason datums must be set manually.
			d3$1.select(this)
			  .selectAll("path")
			  .datum(d)
			  .attr("d", drawnode);
			  
			d3$1.select(this)
			  .selectAll("text")
			  .datum(d)
			  .attr("x", node => node.dim.x+4 )
			  .attr("y", node => node.dim.y - node.dim.height/2 - 4 );
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
		  ); // join
		   
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
			d3$1.select(this)
			  .append("path")
			    .attr("class", "link")
			    .attr("d", drawbundle) // "M0 0 L0 0 A0 0 90 0 1 0 0 L0 0 A0 0 90 0 0 0 0 L0 0"
				.attr("stroke", "white")
				.attr("stroke-width", 5)
			  .clone()
				.attr("stroke", bundlecolor)
				.attr("stroke-width", 2);
			
		} // drawbundle
		
		function updatebundle(d){
			d3$1.select(this)
			  .selectAll("path")
			  .datum(d)
			  .attr("d", drawbundle);
		} // updatebundle
		
	} // updatelines
	
	
	
	updatetooltip(){
		
		// Two tooltips have been added to hte svg. One just shows the author name. The other will show a short description of hte group. One is appended to the paths, and the other is appended to the nodes.
		
		
	} // updatetooltip
	
	
	
} // treerender

// import chessgame from "./renderers/chessgame.js";


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
  .html( "Hello World!" );



let state = {
	games: []
};

// Ply functionality
d3.select("#ply").on("click", () => {
	state.games.forEach( game => {
		game.ply();
	});
});



let container = document.getElementById("tabletop");



// Add teh chess sprites.
d3.json("./data/lichess_db_subset.json").then( json => {
	// make 10 sprites - should be enough to test making groups etc.
	for(let i=0; i<10; i++){
		let sprite = new chesssprite(json.games[i]);
		state.games.push( sprite );
		container.appendChild(sprite.node);
	} // for
	
	console.log(state.games);
}); // then


// Add the navigation tree/
d3.json("./data/treedata.json").then( json =>{
	let r = new treerender(json.trees);
	document.getElementById("navigationtree").appendChild(r.svg.node());
	r.update();
	
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
		}); // forEach
		
		// Now also change the font of the clicked node so we knwo where in the tree we are.
		d3.selectAll("text").style("font-weight", "normal");
		event.currentTarget.style.fontWeight = "bold";
	});
	
});
