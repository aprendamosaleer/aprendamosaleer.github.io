(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"terror pantalla_atlas_", frames: [[0,824,1114,88],[1116,824,656,69],[1386,0,389,66],[1386,68,331,67],[0,0,1384,822]]}
];


// symbols:



(lib.Mapadebits1 = function() {
	this.spriteSheet = ss["terror pantalla_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.spriteSheet = ss["terror pantalla_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits3 = function() {
	this.spriteSheet = ss["terror pantalla_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits4 = function() {
	this.spriteSheet = ss["terror pantalla_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits5 = function() {
	this.spriteSheet = ss["terror pantalla_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.soyleyenda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Mapadebits4();
	this.instance.parent = this;
	this.instance.setTransform(12,2,0.93,0.93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.11,scaleY:1.11,x:-18,y:-4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12,2,308,62.4);


(lib.otravueltadetuerca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Mapadebits2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.12,x:-40},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,656,69);


(lib.frankenstein2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Mapadebits1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.08,scaleY:1.08,x:-42,y:-3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1114,88);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBoIgeg8QgNgZgDg/QgEhIAdABIAZgGQAdgFAZADQAgAFAFBjQAFBjgnAhQgPAMgOAAQgRAAgPgVg");
	this.shape.setTransform(104.1,99.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxCPQgTAAgQgJIgMgJQgdgNgQgeQgfg8BDhSQBDhTBOABQAoAAAaARIAPAKQASANAHARQAZA6hPBUQhPBWg9AAIgBAAg");
	this.shape_1.setTransform(122.4,51.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhNBMQhehFANg8QAFgUAOgQQAHgIAHgEIAQgMQAVgMAYgFQBNgQBRBFQBSBFgUA/QgJAggbATQgMAUgfAGQgJACgKAAQg5AAhOg6g");
	this.shape_2.setTransform(77,55.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjORJQAOjMhSjKQhTjKiPkNIh+jjImFmUQgCgEABgFQACgJALgCQBeAbBWAWQCpAtAQgeQgLg0gEhPQgKidAdiGQBbmtGyglQGygmDLGUQA/B+AgCcQARBNADA1IACAGQAHAFAZgHQBSgWDsiEIAIgBQAJAAAFAGQAJAKkRGVQgtA7gsBMQhYCXAGBVQAGBghzE3QhwEugoAaQgKAGg1A/Qg9BKg1AwQi1CnjIACQAXg9AIhlg");
	this.shape_3.setTransform(101.7,125.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,203.5,251.9), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2).p("AAvBnQAHAGAEAGQAHAHAFACIBDApQAJAFALAEIATAIQAUAKAFAIQAGAKgCAVQgCAhgSAaQgWAdgjgFQgcgDgXgKQgYgJgUgTQgVgUgOgPIgsgxQgFgGgIgFIAEBUQAAANgCAKQgCAQgHAHQgGAHgPADIgjADQgTABgQgCQgjgCgDglIgDgfQgBgKAAgUQgEiCgBh5QgBh0AEiBIABgJIACgKQAFgSAUgDQA3gIA7AHIAZADQAHABAUADQBmAVAzBDQAyBDgMBkQgIA8gjAsQgiAsg8AKgAg7gCIANACQAZgBATgMQATgMALgSQAMgSACgWQACgVgLgVQgFgLgKgKQgKgJgNgGQgNgGgOgCQgOgCgNADg");
	this.shape_4.setTransform(655.7,34.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2).p("AhWAJQgCAVAFAbQAGAbALAVQANAdATAUQAUATAWAAQAXABATgTIAOgOQAHgHAEgJQA9h3g8h2QgFgLgJgJQgHgJgLgKQgQgMgSgBQgRAAgSALQgLAIgJAMQgJALgHAMQgcA1ADBCgAD0gWQAABFgOA3QgOA4gfAyQgcAvgpAeQggAVgiAKQghAKghgCQghgCghgQQgggPgdgbQgjgjgWgoQgWgqgKguQgQhHAHhFQAGhFAfhCQAQgfAVgbQAUgbAcgVQAfgYAjgLQAigLAiADQAiACAhAQQAhAPAdAcQAlAjAUAoQAVArALAvQAFAWACAUg");
	this.shape_5.setTransform(606.3,33.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2).p("AAvBnQAHAGAEAGQAHAHAFACIBDApQAJAFALAEIATAIQAUAKAFAIQAGAKgCAVQgCAhgSAaQgWAdgjgFQgcgDgXgKQgYgJgUgTQgVgUgOgPIgsgxQgFgGgIgFIAEBUQAAANgCAKQgCAQgHAHQgGAHgPADIgjADQgTABgQgCQgjgCgDglIgDgfQgBgKAAgUQgEiCgBh5QgBh0AEiBIABgJIACgKQAFgSAUgDQA3gIA7AHIAZADQAHABAUADQBmAVAyBDQAzBDgMBkQgIA8gjAsQgiAsg8AKgAg7gCIANACQAZgBATgMQATgMALgSQAMgSACgWQACgVgLgVQgFgLgKgKQgKgJgNgGQgNgGgOgCQgOgCgNADg");
	this.shape_6.setTransform(557.2,34.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2).p("AAvBnIAMAMQAFAFAGAEIBDApQAJAFALAEIAUAIQATAJAFAJQAGAKgCAVQgCAhgSAaQgVAdgkgFQgbgCgYgLQgYgJgUgTQgVgUgOgPIgsgxQgGgHgHgEIACAeQABAKAAAUIABAYQAAAMgCALQgCAQgGAHQgHAHgPADIgjADQgSABgRgCQgjgCgDglIgEg9QgEiCgBh5QgBh6AEh7IABgJIACgKQAGgTATgCQA4gIA6AHIAZADQAJABASADQBmAVAzBDQAyBEgMBjQgIA7giAtQgjAsg8AKgAg7gCIANACQAZgBATgMQATgMALgSQAMgSACgWQACgVgLgVQgEgKgLgLQgKgJgNgGQgMgGgPgCQgOgCgNADg");
	this.shape_7.setTransform(511.6,34.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2).p("ACACyQAvgCABArQABAXgCAOIgDAjQgDAdgfACQhJABhCADQhEADg8gJQgSgDgKgMQgLgMgBgTQgFicAAhmIgBkLQABgSAEgOQAFgOAKgKQAKgJAUgBIAqgBQAOABAcgBIBmgGQAhgCARAAQAQAAAQAIQARAHAEAPQAOApgIApQgDATgLANQgMAOgYgCQgcgCgNAAIgqgCQgdAAgNADQgOACgGAHQgGAIgCALQgCAKAAAUQABASgBAbQAAANAMAEQANAEAKAAIAnAAQAVAAAQACQAMACAIAHQAIAGAAANIACAgQABAWAAAKQgCAlgnAAIg7gEQgHAAgNABQgKABgFADQgEAEAAAKIAAA4QABAQAFAFQAFAFARAAg");
	this.shape_8.setTransform(469.4,33.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2).p("ABLipIAIGAQABAPAAAeQAAAKgCALIgHAVQgDALgJAFQgIAFgMAAIgeAAQgKABgSgBQgMAAgIgDQgVgGgHgJQgGgHABgXIACkSQABgVgBgzIgEhgIhIABQgTAAgLgCQgLgBgGgHQgHgGgBgKQgCgLgBgSIgBgwQAAgSAGgJQAGgJARgFIArgHICagGICKADIAKADQAaAIACAZQABATAAATIAAAmQgBASgIAHQgIAHgRACQgfACgPAAg");
	this.shape_9.setTransform(427.6,33.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2).p("ACACyQAvgCABArQABAXgCAOIgDAjQgDAdgfACQhKABhBADQhEADg8gJQgRgCgMgNQgKgMgBgTQgEh8gBiGIgBkLQAAgQAFgQQAFgOAKgKQALgJATgBIAqgBQAOABAcgBIBmgGQAhgCARAAQAQAAAQAIQAQAHAFAPQAOArgIAnQgDATgLANQgMAOgYgCQgcgCgNAAIgqgCQgdAAgNADQgOACgGAHQgGAIgCALQgCAKAAAUQABAUgBAZQAAAOAMADQANAEAKAAIAnAAQAVAAAQACQANADAGAGQAIAFABAOIACAgQABAQgBAQQgBAlgnAAIg7gEQgHAAgNABQgKAAgFAEQgEAEAAAKIAAA4QABAQAFAFQAFAFARAAg");
	this.shape_10.setTransform(353.6,33.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2).p("AC9B0QgHAfgRAhQgPAggcAeQgbAdgmAVQgmAWgxAHQg1AHg0gIQgNgCgMgGQgKgEgKgKQgUgUABgXIAChAQACgggCgfIgDiqQgChGAAhYIABhMQABgWAHgIQAHgHAVgFQBJgNBJASQBMASAxAsQAwAsAYA8QAXA8ACBEQABBFgPBCgAgyCaQAPABAMgEQANgFAKgHQAQgNAKgSQAKgTAFgUQAGgXABgUIADgnQAAgegFgeQgEgegMgWQgMgYgUgLQgUgNggAGQAIBOAABSQAABYgEBJg");
	this.shape_11.setTransform(311.4,33.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(2).p("ADChyQgMAQgPAKQgQALgPACQgQACgNgHQgOgGgJgUQgDgGgJgTIgOgYQgIgMgNgJQgWgSgWAPQgMAHgFAKQgFALAAALQAAALAEAMQAEALAJAHIBCAxQASANAYAPQATALAWAPQAkAcARAmQARAlgCAtQgBAggLAeQgLAdgXAXQgnApgvAMQgvANg1gMQgrgJgigVQghgVgfggQgRgUgKgUQgLgXgFgYQgGgZAOgYQAKgTAPgOQAQgOAWgFQATgEARAHQASAIAIAPQAIAOADAHIAKAWQAKAVARALQARANARAEQARAEAOgIQAOgGADgVQACgPgIgQQgIgRgPgLIglgaQgZgRgNgIQg+gjgug4QgYgjgDglQgEgnAMgiQAMgjAcgaQAbgbApgNQAsgMApgBQAsgBAgAOQAaAKAcAVQAcAUASAaQAUAcADAeQAEAfgXAfg");
	this.shape_12.setTransform(233.1,33.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(2).p("AD0gWQAABDgOA5QgOA4gfAyQgcAvgpAeQggAWgiAJQgiAKghgCQghgCghgQQgggPgcgbQgjghgWgqQgVgogLgwQgQhJAGhDQAHhFAfhCQASgiATgYQAUgbAbgVQAhgYAigLQAhgLAjADQAiACAhAQQAfAOAfAdQAkAjAVAoQAVAqALAwgAhWAJQgCAYAFAYQAEAXAMAZQAPAfASASQATATAXAAQAXABATgTIAOgOQAIgJADgHQA9h2g8h3QgGgLgIgJIgSgTQgQgMgSgBQgSAAgRALQgNAKgHAKQgLANgFAKQgbA1ACBCg");
	this.shape_13.setTransform(183.5,33.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2).p("AAvBnQAFAEAHAIQAFAGAGADQAQAMARAJIAjAUQAIAFALAEIAUAIQASAJAGAJQAGAKgCAVQgBAggTAbQgVAdgkgFQgbgCgYgLQgYgKgUgSQgWgUgMgPIgtgxQgEgGgJgFIACAeQABAPAAAPIABAYQAAAMgCALQgBAPgHAIQgGAHgQADIgjADQgSABgRgCQgigCgEglIgDgfIgGkZQgBh6AEh7IABgJIACgKQAGgTATgCQA4gIA6AHIAZADQAJABASADQBnAVAyBDQAyBDgMBkQgIA7giAtQgjAsg8AKgAg6gCIAMACQAagBATgMQARgMANgSQALgTACgVQACgVgLgVQgEgKgLgLQgLgKgMgFQgMgGgPgCQgOgCgMADg");
	this.shape_14.setTransform(134.4,34.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2).p("ACQgOQAiAeARAnQAQAnADAuQAAAlgTAgQgRAegeAYQgcAWgjAPQgjAOgfACIiJAHQgKABgIgCIgSgDQgsgMgCguQAAgXABgLIAAjhIgOj2QAAgUADgPQACgNAIgKQAHgIANgGQAMgFATgCIBEABQAgAAAkAEQAiAFAdAHQAeAJAaAOQAbAPASATQASAUALAYQAKAXABAdQABAdgJAbQgGAUgLAXQgDAJgHALgAg9hZQANABAOgBQAOgCANgGQAKgFAJgKQAIgLgBgOQgCgRgJgLQgIgLgNgBQgLgCgJABQgHAAgOABQgNABACANIACAkQAAAUACASgAg3CfQASADATgFQASgFAPgJQAIgEAHgJQAHgJgDgNQgCgbgYgIQgPgFgRgCQgQgCgRAIIAABJg");
	this.shape_15.setTransform(88.3,34.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(2).p("ABTD1QAAASgDAWQgDAcgbAEIgpADQgOABgHAAQgIAAgJgBQgdgCgNgPQgNgOAAgdIAEmWQAAgoADhHIABgfQABgPAIgIQAHgJAPAAIBMABQAKAAANABQAQABAHAIQAFAHACARQABAMgBAOg");
	this.shape_16.setTransform(54.2,34);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2).p("AAPCdQAMgBAEAAIBmABQAOAAAIAHQAIAIADAOQALAvgLAvQgDAQgLAIQgKAIgPACIgdACQg4ACgtADQgwADg0gFQgWgDgOgOQgPgOgDgWQgDgUgBgKIgDgdIgGnjQAAgOAFgOQAGgOAQgBQAZgDAkAAQAgAAAeACQAMABAGAIQAFAIABALIADBCQADBRACBYg");
	this.shape_17.setTransform(23.1,34);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AidFAQgjgCgDglIgDgfIgBgeQgEiCgBh5QgBh0AEiBIABgJIACgKQAFgSAUgDQA3gIA7AHIAZADIAbAEQBmAVAzBDQAyBDgMBkQgIA8gjAsQgiAsg8AKQAHAGAEAGQAHAHAFACIBDApQAJAFALAEIATAIQAUAKAFAIQAGAKgCAVQgCAhgSAaQgWAdgjgFQgcgDgXgKQgYgJgUgTQgVgUgOgPIgsgxQgFgGgIgFIAEBUQAAANgCAKQgCAQgHAHQgGAHgPADIgjADIgQAAIgTgBgAg7ioIAACmIANACQAZgBATgMQATgMALgSQAMgSACgWQACgVgLgVQgFgLgKgKQgKgJgNgGQgNgGgOgCIgLgBQgIAAgIACg");
	this.shape_18.setTransform(655.7,34.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgQFEQghgCghgQQgggPgdgbQgjgjgWgoQgWgqgKguQgQhHAHhFQAGhFAfhCQAQgfAVgbQAUgbAcgVQAfgYAjgLQAigLAiADQAiACAhAQQAhAPAdAcQAlAjAUAoQAVArALAvQAFAWACAUIAEAhQAABFgOA3QgOA4gfAyQgcAvgpAeQggAVgiAKQgbAIgaAAIgNAAgAgZiZQgLAIgJAMQgJALgHAMQgcA1ADBCQgCAVAFAbQAGAbALAVQANAdATAUQAUATAWAAQAXABATgTIAOgOQAHgHAEgJQA9h3g8h2QgFgLgJgJIgSgTQgQgMgSgBQgRAAgSALg");
	this.shape_19.setTransform(606.3,33.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AidFAQgjgCgDglIgDgfIgBgeQgEiCgBh5QgBh0AEiBIABgJIACgKQAFgSAUgDQA3gIA7AHIAZADIAbAEQBmAVAyBDQAzBDgMBkQgIA8gjAsQgiAsg8AKQAHAGAEAGQAHAHAFACIBDApQAJAFALAEIATAIQAUAKAFAIQAGAKgCAVQgCAhgSAaQgWAdgjgFQgcgDgXgKQgYgJgUgTQgVgUgOgPIgsgxQgFgGgIgFIAEBUQAAANgCAKQgCAQgHAHQgGAHgPADIgjADIgQAAIgTgBgAg7ioIAACmIANACQAZgBATgMQATgMALgSQAMgSACgWQACgVgLgVQgFgLgKgKQgKgJgNgGQgNgGgOgCIgLgBQgIAAgIACg");
	this.shape_20.setTransform(557.2,34.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AidFAQgjgCgDglIgEg9QgEiCgBh5QgBh6AEh7IABgJIACgKQAGgTATgCQA4gIA6AHIAZADIAbAEQBmAVAzBDQAyBEgMBjQgIA7giAtQgjAsg8AKIAMAMQAFAFAGAEIBDApQAJAFALAEIAUAIQATAJAFAJQAGAKgCAVQgCAhgSAaQgVAdgkgFQgbgCgYgLQgYgJgUgTQgVgUgOgPIgsgxQgGgHgHgEIACAeIABAeIABAYQAAAMgCALQgCAQgGAHQgHAHgPADIgjADIgQAAIgTgBgAg7ioIAACmIANACQAZgBATgMQATgMALgSQAMgSACgWQACgVgLgVQgEgKgLgLQgKgJgNgGQgMgGgPgCIgLgBQgIAAgIACg");
	this.shape_21.setTransform(511.6,34.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AiBFAQgSgDgKgMQgLgMgBgTQgFicAAhmIgBkLQABgSAEgOQAFgOAKgKQAKgJAUgBIAqgBIAqAAIBmgGIAygCQAQAAAQAIQARAHAEAPQAOApgIApQgDATgLANQgMAOgYgCIgpgCIgqgCQgdAAgNADQgOACgGAHQgGAIgCALQgCAKAAAUQABASgBAbQAAANAMAEQANAEAKAAIAnAAQAVAAAQACQAMACAIAHQAIAGAAANIACAgIABAgQgCAlgnAAIg7gEIgUABQgKABgFADQgEAEAAAKIAAA4QABAQAFAFQAFAFARAAICEgDQAvgCABArQABAXgCAOIgDAjQgDAdgfACQhJABhCADIgdABQg0AAgvgHg");
	this.shape_22.setTransform(469.4,33.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgPFDQgMAAgIgDQgVgGgHgJQgGgHABgXIACkSIAAhIIgEhgIhIABQgTAAgLgCQgLgBgGgHQgHgGgBgKQgCgLgBgSIgBgwQAAgSAGgJQAGgJARgFIArgHICagGICKADIAKADQAaAIACAZQABATAAATIAAAmQgBASgIAHQgIAHgRACIguACIgvADIAIGAIABAtQAAAKgCALIgHAVQgDALgJAFQgIAFgMAAIgeAAIgIABIgUgBg");
	this.shape_23.setTransform(427.6,33.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AiBFAQgRgCgMgNQgKgMgBgTQgEh8gBiGIgBkLQAAgQAFgQQAFgOAKgKQALgJATgBIAqgBIAqAAIBmgGIAygCQAQAAAQAIQAQAHAFAPQAOArgIAnQgDATgLANQgMAOgYgCIgpgCIgqgCQgdAAgNADQgOACgGAHQgGAIgCALQgCAKAAAUQABAUgBAZQAAAOAMADQANAEAKAAIAnAAQAVAAAQACQANADAGAGQAIAFABAOIACAgQABAQgBAQQgBAlgnAAIg7gEIgUABQgKAAgFAEQgEAEAAAKIAAA4QABAQAFAFQAFAFARAAICEgDQAvgCABArQABAXgCAOIgDAjQgDAdgfACQhKABhBADIgdABQg0AAgvgHg");
	this.shape_24.setTransform(353.6,33.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AiHFAQgNgCgMgGQgKgEgKgKQgUgUABgXIAChAQACgggCgfIgDiqQgChGAAhYIABhMQABgWAHgIQAHgHAVgFQBJgNBJASQBMASAxAsQAwAsAYA8QAXA8ACBEQABBFgPBCQgHAfgRAhQgPAggcAeQgbAdgmAVQgmAWgxAHQgYADgZAAQgcAAgcgEgAg2inQAIBOAABSQAABYgEBJQAPABAMgEQANgFAKgHQAQgNAKgSQAKgTAFgUQAGgXABgUIADgnQAAgegFgeQgEgegMgWQgMgYgUgLQgOgJgTAAQgJAAgKACg");
	this.shape_25.setTransform(311.4,33.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgbFAQgrgJgigVQghgVgfggQgRgUgKgUQgLgXgFgYQgGgZAOgYQAKgTAPgOQAQgOAWgFQATgEARAHQASAIAIAPIALAVIAKAWQAKAVARALQARANARAEQARAEAOgIQAOgGADgVQACgPgIgQQgIgRgPgLIglgaIgmgZQg+gjgug4QgYgjgDglQgEgnAMgiQAMgjAcgaQAbgbApgNQAsgMApgBQAsgBAgAOQAaAKAcAVQAcAUASAaQAUAcADAeQAEAfgXAfQgMAQgPAKQgQALgPACQgQACgNgHQgOgGgJgUIgMgZIgOgYQgIgMgNgJQgWgSgWAPQgMAHgFAKQgFALAAALQAAALAEAMQAEALAJAHIBCAxQASANAYAPQATALAWAPQAkAcARAmQARAlgCAtQgBAggLAeQgLAdgXAXQgnApgvAMQgZAGgbAAQgWAAgagFg");
	this.shape_26.setTransform(233.1,33.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgRFEQghgCghgQQgggPgcgbQgjghgWgqQgVgogLgwQgQhJAGhDQAHhFAfhCQASgiATgYQAUgbAbgVQAhgYAigLQAhgLAjADQAiACAhAQQAfAOAfAdQAkAjAVAoQAVAqALAwIALBLQAABDgOA5QgOA4gfAyQgcAvgpAeQggAWgiAJQgbAIgaAAIgOAAgAgZiZQgNAKgHAKQgLANgFAKQgbA1ACBCQgCAYAFAYQAEAXAMAZQAPAfASASQATATAXAAQAXABATgTIAOgOQAIgJADgHQA9h2g8h3QgGgLgIgJIgSgTQgQgMgSgBQgSAAgRALg");
	this.shape_27.setTransform(183.5,33.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AidFAQgigCgEglIgDgfIgGkZQgBh6AEh7IABgJIACgKQAGgTATgCQA4gIA6AHIAZADIAbAEQBnAVAyBDQAyBDgMBkQgIA7giAtQgjAsg8AKIAMAMQAFAGAGADQAQAMARAJIAjAUQAIAFALAEIAUAIQASAJAGAJQAGAKgCAVQgBAggTAbQgVAdgkgFQgbgCgYgLQgYgKgUgSQgWgUgMgPIgtgxQgEgGgJgFIACAeQABAPAAAPIABAYQAAAMgCALQgBAPgHAIQgGAHgQADIgjADIgPAAIgUgBgAg6ioIAACmIAMACQAagBATgMQARgMANgSQALgTACgVQACgVgLgVQgEgKgLgLQgLgKgMgFQgMgGgPgCIgLgBQgIAAgHACg");
	this.shape_28.setTransform(134.4,34.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AiIFCIgSgDQgsgMgCguIABgiIAAjhIgOj2QAAgUADgPQACgNAIgKQAHgIANgGQAMgFATgCIBEABQAgAAAkAEQAiAFAdAHQAeAJAaAOQAbAPASATQASAUALAYQAKAXABAdQABAdgJAbQgGAUgLAXQgDAJgHALIgMAUQAiAeARAnQAQAnADAuQAAAlgTAgQgRAegeAYQgcAWgjAPQgjAOgfACIiJAHIgGABIgMgCgAg5BIIAABJIACAOQASADATgFQASgFAPgJQAIgEAHgJQAHgJgDgNQgCgbgYgIQgPgFgRgCIgHAAQgMAAgOAGgAghiyIgVABQgNABACANIACAkQAAAUACASQANABAOgBQAOgCANgGQAKgFAJgKQAIgLgBgOQgCgRgJgLQgIgLgNgBIgQgBIgEAAg");
	this.shape_29.setTransform(88.3,34.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgdFAQgdgCgNgPQgNgOAAgdIAEmWQAAgoADhHIABgfQABgPAIgIQAHgJAPAAIBMABIAXABQAQABAHAIQAFAHACARQABAMgBAOIgBH4QAAASgDAWQgDAcgbAEIgpADIgVABIgRgBg");
	this.shape_30.setTransform(54.2,34);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AhnE/QgWgDgOgOQgPgOgDgWIgEgeIgDgdIgGnjQAAgOAFgOQAGgOAQgBQAZgDAkAAQAgAAAeACQAMABAGAIQAFAIABALIADBCQADBRACBYIADDWIAQgBIBmABQAOAAAIAHQAIAIADAOQALAvgLAvQgDAQgLAIQgKAIgPACIgdACQg4ACgtADIgjACQggAAghgEg");
	this.shape_31.setTransform(23.1,34);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AidFAQgigCgEgmIgDgeQgCgPAAgQQgDiPgBhrQgBh0AEiBIABgKIACgJQAGgTATgCQA2gIA7AHIAaADIAbAEQBmAVAyBDQAzBDgMBkQgJA8giArQghAsg9ALIALALQAFAGAHAEIBDApQAJAFALAEIATAIQAUAJAFAJQAFAJgBAWQgCAggSAaQgWAdgjgEQgZgCgagLQgXgKgVgSIgjgjIgiglIgKgMQgFgGgJgFIAFBUQAAANgCAKQgCAQgHAHQgHAIgOACIgjADIgPAAIgUgBgAg7ioIAACmIANACQAZgCATgLQASgMAMgSQALgSADgWQACgVgLgWQgFgMgKgIQgLgKgMgFQgNgGgOgCIgLgBQgIAAgIACg");
	this.shape_32.setTransform(649.7,37.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgQFEQghgCghgQQghgPgcgaQgjgjgWgpQgWgrgKgtQgQhHAHhFQAGhFAfhCQAPgdAWgdQAVgbAbgVQAfgXAjgMQAkgKAgACQAiADAhAPQAhAPAdAcQAkAiAVAqQAVApALAwQAFAWACAVIAEAgQAABFgOA4QgOA5gfAwQgcAvgpAeQgfAWgjAKQgaAIgZAAIgPgBgAgZiZQgLAJgJALQgIAJgIAOQgbA1ACBCQgCAYAFAYQAGAcALAUQANAdATAUQAUATAWABQAXAAATgTIAOgNQAHgHAEgKQA9h2g8h2QgFgLgJgKIgSgSQgQgOgSAAIgDAAQgQAAgQALg");
	this.shape_33.setTransform(600.3,37);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AidFAQgigCgEgmIgDgeQgCgPAAgQIgEj6QgBh6AEh7IABgKIACgJQAGgTATgCQA2gIA7AHIAaADIAbAEQBmAVAyBDQAzBDgMBkQgJA8giArQghAsg9ALIALALQAFAGAHAEIBDApQAJAFALAEIATAIQATAJAGAJQAFAJgBAWQgCAfgSAbQgWAdgjgEQgZgCgagLQgXgKgVgSIgjgjIgtgxQgEgFgJgGIAFBUIgCAXQgCAPgHAIQgHAIgOACIgjADIgPAAIgUgBgAg7ioIAACmIAMACQAagCATgLQASgMAMgSQALgSADgWQABgXgKgUQgFgMgKgIQgLgKgMgFQgNgGgOgCIgLgBQgIAAgIACg");
	this.shape_34.setTransform(551.2,37.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AidFAQgigCgEgmIgDgeIgBgfQgEiBgBh5QgBh0AEiBIABgKIACgJQAGgTATgCQA2gIA8AHIAZADIAbAEQBlAVA0BDQAyBDgMBkQgJA8giArQghAsg9ALIALALQAFAGAHAEIBDApQAJAFALAEIATAIQAUAJAFAJQAGAKgCAVQgCAggSAaQgVAdgkgEQgZgCgagLQgXgKgVgSIgjgjIgiglIgKgMQgGgGgHgFIAEBUQAAAMgCALQgCARgHAGQgHAIgOACIgjADIgPAAIgUgBgAg7ioIAACmIANACQAZgCATgLQASgMAMgSQALgSADgWQACgVgLgWQgFgMgKgIQgLgKgMgFQgNgGgOgCIgLgBQgIAAgIACg");
	this.shape_35.setTransform(505.6,37.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AiAFAQgSgCgLgMQgLgNgBgSQgEh9gBiFIgBjpIABgjQABgSAEgOQAEgOAKgKQAKgJAUgBQATgBAXABIDCgJQAQAAAQAIQARAIAFAOQAOApgJApQgCASgMAOQgMAOgXgCIgqgCIgpgCQgfAAgLAEQgOACgGAGQgHAIgBALQgCAKAAAUQABASgBAbQAAAOALAEQALADAMAAIAnAAQARAAAVADQALABAIAHQAHAGACANIACAgQABAWgBALQgCAkgnAAIgTgBIg7gCQgLAAgEAEQgEAEAAALIAAA3QABAQAFAFQAGAFAPAAIBXgBIAZgBIAUgBQAwgCAAArQABAXgBAOIgDAkQgDAcgfACQhKABhCADIghABQgwAAgugHg");
	this.shape_36.setTransform(463.3,36.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgQFDQgIAAgLgDQgVgHgHgIQgHgKACgVIACkRQABgWgBgyIgEhgIhIAAQgUAAgKgBQgLgCgGgGQgHgHgCgKQgCgMAAgRIgBgvQAAgTAGgIQAHgKAQgEIArgIIEZgDIAVADQAaAIACAaIABAlIAAAmQgBATgIAGQgHAIgSABIguADIgvADIAJGtQAAAJgCAMIgHAVQgDALgJAEQgJAFgLABg");
	this.shape_37.setTransform(421.6,37.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AiBFAQgRgCgMgMQgLgNAAgSQgEh9gBiFIgBkMQABgRAEgPQAFgOAKgKQAKgJAUgBQASgBAYABIDBgJQAQAAARAIQAQAHAFAPQAOArgIAnQgCARgMAPQgMAOgYgCIgpgCIgqgCQgeAAgMAEQgNACgHAGQgGAHgCAMQgCAMAAASIAAAtQAAAOAMAEQALADAMAAIAnAAQAQAAAVADQALABAIAHQAIAGABANIACAgQABAOgBATQgBAkgnAAIgUgBIg7gCQgLABgEADQgEAEAAALIAAAbIAAAcQABAQAFAFQAGAFAQAAIBXgBIAZgBIAUgBQAvgCABArIgBAlIgDAkQgDAcgfACQhKABhBADIghABQgwAAgvgHg");
	this.shape_38.setTransform(347.6,36.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AiHFAQgLgCgOgGQgMgGgIgJQgUgTABgYIACg/QACgggCggIgDipIgCieIABhMQABgWAHgIQAIgIAUgEQBJgNBJASQBMASAwAsQAxAsAYA7QAXA8ACBFQABBFgPBCQgHAegRAiQgQAggbAeQgbAcgmAWQgmAWgxAHQgaADgYAAQgcAAgbgEgAg2inQAIBOAABSQAABKgEBWQAQACALgEQAMgEALgIQARgNAJgTQAKgSAFgVQAFgSACgYIADgnQAAgegFgeQgEgdgMgYQgNgXgTgMQgOgIgTAAQgJAAgKACg");
	this.shape_39.setTransform(305.4,36.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgbFAQgrgKgigVQgjgVgdgfQgRgUgKgUQgLgWgGgZQgEgZANgYQAKgUAPgNQAPgOAXgFQATgEARAHQAQAGAKARQAHAKAEALIAKAWQAJAUASAMQASANAQADQARAEAOgHQAOgGADgVQACgPgIgQQgIgRgPgLIglgbIgmgYQg+gjgug4QgYgjgEglQgDgoAMghQAMgjAcgbQAcgbAngMQAvgNAngBQAqAAAiANQAYAKAeAVQAbAUATAbQAUAbADAfQAEAfgXAeQgLAQgQAKQgOALgRACQgQADgNgHQgOgHgJgTIgagxQgIgMgNgJQgXgSgVAPQgLAGgGALQgFALAAALQAAALAEAMQAFALAIAHIBCAxQAZARARAKQAZAPAQAMQAkAcARAmQARAlgCAtQgCAjgLAbQgKAbgXAZQgnAogvANQgZAHgaAAQgXAAgagGg");
	this.shape_40.setTransform(227.1,36.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgRFEQghgCghgQQgfgOgdgbQgjgigWgqQgVgogLgwQgQhIAGhEQAHhFAfhCQARggAUgaQAWgcAZgUQAggXAjgMQAjgKAhACQAiADAhAPQAgAPAeAcQAkAiAVAqQAVAoALAxIAHArIAEAgQAABEgOA5QgPA4geAxQgcAvgqAeQgeAWgjAKQgbAIgYAAIgQgBgAgZiZQgNAKgIAKQgHAJgIAOQgbA2ACBBQgCAYAFAYQAFAZALAXQAPAfASASQATATAXABQAXAAATgTIAOgNQAHgJAEgIQA9h3g8h1QgFgLgJgKIgSgSQgRgOgRAAIgCAAQgQAAgRALg");
	this.shape_41.setTransform(177.5,37);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AidFAQgigCgEgmIgDgeIgGkZQgBh6AEh7IABgKIACgJQAGgTATgCQA2gIA8AHIAZADIAbAEQBmAVAzBDQAyBEgMBjQgIA7giAsQgjAsg8ALIAMALQADAEAIAGIBEApQAIAFALAEIAUAIQASAJAGAJQAGAKgCAVQgBAggTAaQgVAdgkgEQgYgCgbgLQgYgKgUgSQgTgRgPgSIgtgxQgGgGgHgFIACAeIABAeIABAYQAAAMgCALQgBAPgHAIQgHAIgPACIgjADIgPAAIgUgBgAg6ioIAACmIAMACQAagCATgLQARgLAMgTQAMgSACgWQACgVgLgWQgEgLgLgJQgLgKgMgFQgLgGgQgCIgLgBQgIAAgHACg");
	this.shape_42.setTransform(128.4,37.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AiIFDIgSgEQgsgMgCgtIgBljIgMiXQAAgSADgQQADgOAHgJQAIgKAMgFQAMgFATgCIBEABQAiABAiADQAbADAjAJQAdAIAcAPQAbAPASATQASATALAZQAKAYABAdQABAcgJAbQgIAXgJAUQgDAKgHAKIgMAUQAiAeARAoQAQAmADAuQAAAlgTAgQgTAggcAWQgcAXgjAOQgiAOggACIiJAIIgEAAIgOgBgAg5BIIAABJIACAOQAUADARgFQAQgEARgJQAJgGAGgIQAGgIgCgOQgCgbgYgHQgPgGgRgCIgFAAQgOAAgOAGgAg2ixQgMACAAAMIADAkQAAAUACASQAMACAPgCQAPgCAMgFQALgGAIgKQAIgJgBgQQgDgRgIgLQgIgKgNgCIgUgBg");
	this.shape_43.setTransform(82.3,37.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhHEwQgNgQAAgcIAEmVQABgoADhHIABgfQABgPAHgIQAHgJAQAAIAXAAIAaAAIAyACQAPABAHAIQAGAIABAQQACALgBAPIgCH4QAAASgCAWQgFAcgZADIgTACIg9ACQgcgCgOgPg");
	this.shape_44.setTransform(48.2,37);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhoE/QgVgDgOgOQgPgOgDgWQgDgTgBgKIgDgeIgGnjQAAgPAFgNQAGgOAQgBQAhgDAcAAQAjAAAbACQAMACAGAHQAFAJABALIADBBQADBJACBhIADDWIAQgCIBmABQAOAAAIAIQAIAIADANQALAvgLAvQgDAQgLAIQgLAIgOACIgdACIhlAFIglACQghAAgfgEg");
	this.shape_45.setTransform(17.1,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,-3.7,677.3,77.6), null);


(lib.elgatonegro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Mapadebits3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.23,scaleY:1.26,x:-44,y:-9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,389,66);


(lib.ATRAS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9800").s().p("ACQEKQAAighLhRQgYgZgcgNIgXgJIAABtIkPiNIEPjTIAABhIAqAJQAzARArAiQCLBxAJEFg");
	this.shape.setTransform(52.3,52.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A96A17").s().p("ACTEqQgBiuhOhbQgYgdgegPIgYgLIAAB8IkzigIEzjvIAABvIAxAKQA7ASAyAoQCgB9AKEjg");
	this.shape_1.setTransform(53.7,49.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFB560").s().p("AB+EDQAAiYhIhPQgWgZgbgNIgWgKIAABsIkLiLIELjPIAABfIAtAJQA2AQAvAiQCUBtAID+g");
	this.shape_2.setTransform(53.4,53.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxAzQgVgWAAgdQAAgdAVgUQAUgVAdAAQAdAAAVAVQAVAUAAAdQAAAdgVAWQgVAUgdAAQgdAAgUgUg");
	this.shape_3.setTransform(72.9,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyAyQgUgVAAgdQAAgdAUgUQAWgVAcAAQAeAAAUAVQAVAUAAAdQAAAdgVAVQgUAVgeAAQgcAAgWgVg");
	this.shape_4.setTransform(34.8,85.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DA5900").s().p("AheBeQgognAAg3QAAg2AognQAngnA3AAQA4AAAoAnQAnAnAAA2QAAA3gnAnQgoAng4AAQg3AAgngng");
	this.shape_5.setTransform(16.9,85.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DA5900").s().p("AheBeQgognAAg3QAAg2AognQAngnA3AAQA4AAAnAnQAoAnAAA2QAAA3goAnQgnAng4AAQg3AAgngng");
	this.shape_6.setTransform(91.2,16.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9F6950").s().p("AjCFrQhfgYgqgqQgmgmgVhVQgUhOAAhgQAAhfAUhPQAVhUAmgmQAqgqBfgYQBXgWBrAAQBrAABYAWQBeAYArAqQAmAmAVBUQAUBPAABfQAABggUBOQgVBVgmAmQgrAqheAYQhYAWhrAAQhrAAhXgWg");
	this.shape_7.setTransform(52.9,52.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7E4B35").s().p("AjYGSQhogagvgvQgqgqgYheQgWhXABhqQgBhpAWhYQAYhdAqgqQAvgvBogaQBigZB2AAQB3AABhAZQBpAaAvAvQAqAqAXBdQAXBYAABpQAABqgXBXQgXBegqAqQgvAvhpAaQhhAZh3AAQh2AAhigZg");
	this.shape_8.setTransform(53.7,52.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#893200").s().p("Ah3B2QgxgxAAhFQAAhEAxgxQAygxBFAAQBGAAAyAxQAxAxAABEQAABFgxAxQgyAxhGAAQhFAAgygxg");
	this.shape_9.setTransform(16.9,85.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#893200").s().p("Ah3B2QgxgxAAhFQAAhEAxgxQAygxBFAAQBGAAAyAxQAxAxAABEQAABFgxAxQgyAxhGAAQhFAAgygxg");
	this.shape_10.setTransform(91.3,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10,p:{scaleX:1,scaleY:1,x:91.3,y:16.7}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:16.9,y:85.3}},{t:this.shape_8,p:{scaleX:1,scaleY:1,y:52.4}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:52.9,y:52.4}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:91.2,y:16.7}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:16.9,y:85.3}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:34.8,y:85.3}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:72.9,y:16.8}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:53.4,y:53.2}},{t:this.shape_1,p:{scaleX:1,scaleY:1,y:49.4}},{t:this.shape,p:{scaleX:1,scaleY:1,x:52.3,y:52.6}}]}).to({state:[{t:this.shape_10,p:{scaleX:1.155,scaleY:1.155,x:97.1,y:12}},{t:this.shape_9,p:{scaleX:1.155,scaleY:1.155,x:11.2,y:91.2}},{t:this.shape_8,p:{scaleX:1.155,scaleY:1.155,y:53.2}},{t:this.shape_7,p:{scaleX:1.155,scaleY:1.155,x:52.8,y:53.2}},{t:this.shape_6,p:{scaleX:1.155,scaleY:1.155,x:97.1,y:11.9}},{t:this.shape_5,p:{scaleX:1.155,scaleY:1.155,x:11.2,y:91.2}},{t:this.shape_4,p:{scaleX:1.155,scaleY:1.155,x:31.8,y:91.2}},{t:this.shape_3,p:{scaleX:1.155,scaleY:1.155,x:75.9,y:12.1}},{t:this.shape_2,p:{scaleX:1.155,scaleY:1.155,x:53.3,y:54.1}},{t:this.shape_1,p:{scaleX:1.155,scaleY:1.155,y:49.7}},{t:this.shape,p:{scaleX:1.155,scaleY:1.155,x:52.1,y:53.4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108.2,102);


(lib.salir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.atras = new lib.ATRAS();
	this.atras.name = "atras";
	this.atras.parent = this;
	new cjs.ButtonHelper(this.atras, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.atras).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-7.3,124.9,117.8);


(lib.Fantasma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(101.8,125.9,1,1,0,0,0,101.8,125.9);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",7,7,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-9,239,287);


// stage content:
(lib.terrorpantalla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.terror1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("terror 1.html", "_self");
		}
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.terror2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("terror 2.html", "_selfk");
		}
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.terror3.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("terror 3.html", "_self");
		}
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.terror4.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_4() {
			window.open("terror 4.html", "_self");
		}
		
		
		this.salir.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			var audio = new Audio("/../efectos/clikcatrasyadelante.mp3");
			audio.play();
			
			audio.addEventListener("ended", function() {
			window.open("biblioteca.html", "_self");
				});
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 1
	this.instance = new lib.Fantasma();
	this.instance.parent = this;
	this.instance.setTransform(751.4,328.7,1,1,0,0,0,625.6,-20.5);

	this.instance_1 = new lib.Símbolo1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(189,480.2,1,1,0,0,0,101.8,125.9);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Capa 1
	this.terror4 = new lib.soyleyenda();
	this.terror4.name = "terror4";
	this.terror4.parent = this;
	this.terror4.setTransform(637.2,541.9,1,1,0,0,0,165.5,33.5);
	new cjs.ButtonHelper(this.terror4, 0, 1, 1);

	this.terror3 = new lib.elgatonegro();
	this.terror3.name = "terror3";
	this.terror3.parent = this;
	this.terror3.setTransform(657.5,453,1,1,0,0,0,194.5,33);
	new cjs.ButtonHelper(this.terror3, 0, 1, 1);

	this.terror2 = new lib.otravueltadetuerca();
	this.terror2.name = "terror2";
	this.terror2.parent = this;
	this.terror2.setTransform(648,352.5,1,1,0,0,0,328,34.5);
	new cjs.ButtonHelper(this.terror2, 0, 1, 1);

	this.terror1 = new lib.frankenstein2();
	this.terror1.name = "terror1";
	this.terror1.parent = this;
	this.terror1.setTransform(647,251,1,1,0,0,0,557,44);
	new cjs.ButtonHelper(this.terror1, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBNQggggAAgtQAAgsAgggQAfggAsAAIAUACQgmAHgZAeQgYAeAAAnQAAAoAYAeQAZAeAmAHIgUACQgsAAgfggg");
	this.shape.setTransform(468.4,537.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0401").s().p("AhMBNQgfggAAgtQAAgsAfggQAgggAsAAQAtAAAgAgQAfAgAAAsQAAAtgfAgQggAggtAAQgsAAggggg");
	this.shape_1.setTransform(472.8,537.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfBNQggggAAgtQAAgsAgggQAfggAsAAIAUACQgmAHgZAeQgYAeAAAnQAAAoAYAeQAZAeAmAHIgUACQgsAAgfggg");
	this.shape_2.setTransform(444.4,446.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0401").s().p("AhLBNQghggAAgtQAAgsAhggQAfggAsAAQAtAAAgAgQAgAggBAsQABAtggAgQggAggtAAQgsAAgfggg");
	this.shape_3.setTransform(448.8,446.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBNQggggAAgtQAAgsAgggQAfggAsAAIAUACQgmAHgZAeQgYAeAAAnQAAAoAYAeQAZAeAmAHIgUACQgsAAgfggg");
	this.shape_4.setTransform(302.4,343.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0401").s().p("AhMBNQgfgggBgtQABgsAfggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAggtAAQgsAAggggg");
	this.shape_5.setTransform(306.8,343.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBNQggggAAgtQAAgsAgggQAfggAsAAIAUACQgmAHgZAeQgYAeAAAnQAAAoAYAeQAZAeAmAHIgUACQgsAAgfggg");
	this.shape_6.setTransform(118.4,246.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0401").s().p("AhLBNQghggABgtQgBgsAhggQAfggAsAAQAtAAAgAgQAfAgAAAsQAAAtgfAgQggAggtAAQgsAAgfggg");
	this.shape_7.setTransform(122.8,246.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.terror1},{t:this.terror2},{t:this.terror3},{t:this.terror4}]}).wait(1));

	// Capa 1
	this.instance_2 = new lib.Group_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(629.3,114.8,1,1,0,0,0,338.6,35.1);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,0.749)",7,7,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Capa 1
	this.salir = new lib.salir();
	this.salir.name = "salir";
	this.salir.parent = this;
	this.salir.setTransform(1048.8,712.4,1,1,0,0,0,-64.8,164.1);
	new cjs.ButtonHelper(this.salir, 0, 1, 1);

	this.instance_3 = new lib.Mapadebits5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-46,-44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.salir}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(594,316,1384,822);
// library properties:
lib.properties = {
	id: '2BEB018837F7254D9D3FE1D9DEB2B1A0',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/terror pantalla_atlas_.png?1695656603537", id:"terror pantalla_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2BEB018837F7254D9D3FE1D9DEB2B1A0'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;