(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"cupsoul_atlas_1", frames: [[0,1004,500,500],[1068,729,78,77],[1287,718,79,77],[1068,283,404,165],[502,1004,500,500],[1362,0,250,250],[1489,699,150,159],[1287,504,200,212],[1068,450,217,277],[566,0,500,500],[566,502,500,500],[1474,252,250,250],[1004,1004,500,500],[0,0,564,1002],[1068,0,292,281],[1489,504,198,193],[1614,0,270,186]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.arpeggio = function() {
	this.initialize(ss["cupsoul_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.initialize(ss["cupsoul_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.initialize(ss["cupsoul_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.initialize(ss["cupsoul_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.capriccio = function() {
	this.initialize(ss["cupsoul_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.colombia11 = function() {
	this.initialize(ss["cupsoul_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cosi = function() {
	this.initialize(ss["cupsoul_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.crmel = function() {
	this.initialize(ss["cupsoul_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.envivo = function() {
	this.initialize(ss["cupsoul_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.fortissiolungo = function() {
	this.initialize(ss["cupsoul_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.napoli = function() {
	this.initialize(ss["cupsoul_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.nik = function() {
	this.initialize(ss["cupsoul_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.rist = function() {
	this.initialize(ss["cupsoul_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.shish = function() {
	this.initialize(ss["cupsoul_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.vivlto = function() {
	this.initialize(ss["cupsoul_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.voloto = function() {
	this.initialize(ss["cupsoul_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.פולקפה = function() {
	this.initialize(ss["cupsoul_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.X = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("X", "normal 700 39px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 53;
	this.text.lineWidth = 74;
	this.text.parent = this;
	this.text.setTransform(39.2,2);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC33FF").ss(5,1,1).p("AmHjhIMPAAIAAHDIsPAAg");
	this.shape.setTransform(39.225,22.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmHDiIAAnDIMPAAIAAHDg");
	this.shape_1.setTransform(39.225,22.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"normal 700 39px 'Assistant'",lineHeight:52.6}}]}).to({state:[{t:this.text,p:{font:"normal 700 30px 'Assistant'",lineHeight:40.95}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{font:"normal 700 30px 'Assistant'",lineHeight:40.95}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,83.5,57.1);


(lib.pul = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.פולקפה();
	this.instance.setTransform(0,54.8,0.203,0.2512,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pul, new cjs.Rectangle(0,0,46.7,54.8), null);


(lib.textText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this; 
		
		self.stop();
	}
	this.frame_2 = function() {
		var self=this; 
		
		self.stop();
	}
	this.frame_3 = function() {
		var self=this; 
		
		self.stop();
	}
	this.frame_4 = function() {
		var self=this; 
		
		self.stop();
	}
	this.frame_5 = function() {
		var self=this; 
		
		self.stop();
	}
	this.frame_6 = function() {
		var self=this; 
		
		self.stop();
	}
	this.frame_7 = function() {
		var self=this; 
		
		self.stop();
	}
	this.frame_8 = function() {
		var self=this; 
		
		self.stop();
	}
	this.frame_9 = function() {
		var self=this; 
		
		self.stop();
	}
	this.frame_10 = function() {
		var self=this; 
		
		self.stop();
	}
	this.frame_11 = function() {
		var self=this; 
		
		self.stop();
	}
	this.frame_12 = function() {
		var self=this; 
		
		self.stop();
	}
	this.frame_13 = function() {
		var self=this; 
		
		self.stop();
	}
	this.frame_14 = function() {
		var self=this; 
		
		self.stop();
	}
	this.frame_15 = function() {
		var self=this; 
		
		self.stop();
	}
	this.frame_16 = function() {
		var self=this; 
		
		self.stop();
	}
	this.frame_17 = function() {
		var self=this; 
		
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1));

	// Layer_1
	this.nameOf = new cjs.Text("בחר מדינה או קפסולה שעליה תרצה ללמוד", "normal 400 41px 'Secular One'");
	this.nameOf.name = "nameOf";
	this.nameOf.textAlign = "center";
	this.nameOf.lineHeight = 62;
	this.nameOf.lineWidth = 342;
	this.nameOf.parent = this;
	this.nameOf.setTransform(173,1);
	if(!lib.properties.webfonts['Secular One']) {
		lib.webFontTxtInst['Secular One'] = lib.webFontTxtInst['Secular One'] || [];
		lib.webFontTxtInst['Secular One'].push(this.nameOf);
	}

	this.text = new cjs.Text("פורטיסיו לונגו", "normal 400 41px 'Secular One'", "#006666");
	this.text.textAlign = "center";
	this.text.lineHeight = 62;
	this.text.lineWidth = 333;
	this.text.parent = this;
	this.text.setTransform(179.35,103.4);
	if(!lib.properties.webfonts['Secular One']) {
		lib.webFontTxtInst['Secular One'] = lib.webFontTxtInst['Secular One'] || [];
		lib.webFontTxtInst['Secular One'].push(this.text);
	}

	this.text_1 = new cjs.Text("ריסטרטו", "normal 400 41px 'Secular One'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 62;
	this.text_1.lineWidth = 309;
	this.text_1.parent = this;
	this.text_1.setTransform(177.25,29.65);
	if(!lib.properties.webfonts['Secular One']) {
		lib.webFontTxtInst['Secular One'] = lib.webFontTxtInst['Secular One'] || [];
		lib.webFontTxtInst['Secular One'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("אנביבו לונגו", "normal 400 41px 'Secular One'", "#996600");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 62;
	this.text_2.lineWidth = 309;
	this.text_2.parent = this;
	this.text_2.setTransform(177.1,-43.55);
	if(!lib.properties.webfonts['Secular One']) {
		lib.webFontTxtInst['Secular One'] = lib.webFontTxtInst['Secular One'] || [];
		lib.webFontTxtInst['Secular One'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("נפולי", "normal 400 41px 'Secular One'", "#FF0033");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 62;
	this.text_3.lineWidth = 309;
	this.text_3.parent = this;
	this.text_3.setTransform(181.05,-51.2);
	if(!lib.properties.webfonts['Secular One']) {
		lib.webFontTxtInst['Secular One'] = lib.webFontTxtInst['Secular One'] || [];
		lib.webFontTxtInst['Secular One'].push(this.text_3);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nameOf}]}).to({state:[{t:this.nameOf}]},1).to({state:[{t:this.nameOf}]},1).to({state:[{t:this.nameOf}]},1).to({state:[{t:this.nameOf}]},1).to({state:[{t:this.nameOf}]},1).to({state:[{t:this.nameOf}]},1).to({state:[{t:this.nameOf}]},1).to({state:[{t:this.nameOf}]},1).to({state:[{t:this.nameOf}]},1).to({state:[{t:this.nameOf}]},1).to({state:[{t:this.nameOf}]},1).to({state:[{t:this.nameOf}]},1).to({state:[{t:this.nameOf}]},1).to({state:[{t:this.text_2,p:{x:177.1,y:-43.55,text:"אנביבו לונגו",color:"#996600"}},{t:this.text_1,p:{x:177.25,y:29.65,lineWidth:309,text:"ריסטרטו",color:"#000000"}},{t:this.text,p:{x:179.35,y:103.4,text:"פורטיסיו לונגו",color:"#006666",lineWidth:333}},{t:this.nameOf}]},1).to({state:[{t:this.text_3},{t:this.text_2,p:{x:181.2,y:22,text:"וולוטו",color:"#D3AD7C"}},{t:this.text_1,p:{x:183.3,y:95.75,lineWidth:333,text:"ריסטרטו",color:"#000000"}},{t:this.text,p:{x:181.2,y:213.35,text:"קפריסיו",color:"#003300",lineWidth:309}},{t:this.nameOf}]},1).to({state:[{t:this.text,p:{x:173,y:41,text:"ויולאו לונגו",color:"#2F5597",lineWidth:342}},{t:this.nameOf}]},1).to({state:[{t:this.text_1,p:{x:173,y:2,lineWidth:342,text:"קולומביה",color:"#E19BCF"}},{t:this.text,p:{x:173,y:63.15,text:"ולוטו",color:"#D3AD7C",lineWidth:342}},{t:this.nameOf}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.nameOf).wait(1).to({text:"",lineHeight:55.75},0).wait(1).to({y:63,text:"ניקרגואה",color:"#D3AD7C"},0).wait(1).to({y:59,text:"קולומביה",color:"#E19BCF"},0).wait(1).to({text:"נפולי",color:"#FF0000"},0).wait(1).to({y:60,text:"לונגו ויולטו",color:"#2F5597"},0).wait(1).to({y:58,text:"ולוטו",color:"#D3AD7C"},0).wait(1).to({y:60,text:"אנביבו לונגו",color:"#875118"},0).wait(1).to({y:59,text:"ארפג'יו",color:"#7030A0"},0).wait(1).to({y:58,text:"ריסטרטו",color:"#000000"},0).wait(1).to({y:74,text:"פורטיסיו לונגו",color:"#336666"},0).wait(1).to({y:60,text:"קוסי",color:"#CC9999"},0).wait(1).to({y:59,text:"קרמל",color:"#FF9933"},0).wait(1).to({y:60,text:"קפריסיו",color:"#003300"},0).wait(1).to({x:177.25,y:177.15,lineHeight:61.65,lineWidth:309},0).wait(1).to({x:181.2,y:153.5,text:"קרמל",color:"#CC6600"},0).wait(1).to({x:173,y:102.15,text:"קוסי",color:"#CC9966",lineWidth:342},0).wait(1).to({y:120.9,text:"פורטיסיו לונגו",color:"#336666"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-53.2,351.8,338.3);


(lib.next = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("<", "57px 'Eras Bold ITC'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 67;
	this.text.lineWidth = 68;
	this.text.alpha = 0.90196078;
	this.text.parent = this;
	this.text.setTransform(35.9,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC33FF").ss(1,1,1).p("AlklkILJAAIAALJIrJAAg");
	this.shape.setTransform(35.725,35.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.91)").s().p("AlkFlIAArJILJAAIAALJg");
	this.shape_1.setTransform(35.725,35.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"57px 'Eras Bold ITC'",lineHeight:67.3}}]}).to({state:[{t:this.text,p:{font:"56px 'Eras Bold ITC'",lineHeight:66.15}}]},1).to({state:[{t:this.text,p:{font:"56px 'Eras Bold ITC'",lineHeight:66.15}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{font:"57px 'Eras Bold ITC'",lineHeight:67.3}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,73.5,73.5);


(lib.information = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap19();
	this.instance.setTransform(0,0,0.481,0.4805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,37);


(lib.hitLogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap20();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,404,165);


(lib.mexico = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.047)").s().p("ApNDNIAAmZISbAAIAAGZg");
	this.shape.setTransform(58.975,20.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Am4AAINxAA");
	this.shape_1.setTransform(44.075,33.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("ApNDNIAAhNIAAlMISbAAIAAGZgAEkCAItxAAg");
	this.shape_2.setTransform(58.975,20.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,119,41);


(lib.volotoBlack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.voloto();
	this.instance.setTransform(0,0,0.5626,0.7034);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.volotoBlack, new cjs.Rectangle(0,0,111.4,135.8), null);


(lib.vivaltoBlack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.vivlto();
	this.instance.setTransform(0,0,0.3814,0.4832);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vivaltoBlack, new cjs.Rectangle(0,0,111.4,135.8), null);


(lib.ristBalck = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rist();
	this.instance.setTransform(0,0,0.2228,0.2715);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ristBalck, new cjs.Rectangle(0,0,111.4,135.8), null);


(lib.nikBlack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.nik();
	this.instance.setTransform(0,0,0.4456,0.543);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nikBlack, new cjs.Rectangle(0,0,111.4,135.8), null);


(lib.napoliBalck = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.napoli();
	this.instance.setTransform(0,0,0.2228,0.2715);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.napoliBalck, new cjs.Rectangle(0,0,111.4,135.8), null);


(lib.fortiBalck = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.fortissiolungo();
	this.instance.setTransform(0,0,0.2228,0.2715);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fortiBalck, new cjs.Rectangle(0,0,111.4,135.8), null);


(lib.envivoBlack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.envivo();
	this.instance.setTransform(0,0,0.5134,0.5376);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.envivoBlack, new cjs.Rectangle(0,0,111.4,148.9), null);


(lib.cosiBlack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cosi();
	this.instance.setTransform(0,0,0.7428,0.8539);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cosiBlack, new cjs.Rectangle(0,0,111.4,135.8), null);


(lib.colombiaBlack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.colombia11();
	this.instance.setTransform(0,0,0.4455,0.5431);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.colombiaBlack, new cjs.Rectangle(0,0,111.4,135.8), null);


(lib.carmelBlack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.crmel();
	this.instance.setTransform(0,0,0.557,0.6404);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carmelBlack, new cjs.Rectangle(0,0,111.4,135.8), null);


(lib.capBlack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.capriccio();
	this.instance.setTransform(0,0,0.2228,0.2715);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.capBlack, new cjs.Rectangle(0,0,111.4,135.8), null);


(lib.arpBlack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.arpeggio();
	this.instance.setTransform(0,0,0.2228,0.2715);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arpBlack, new cjs.Rectangle(0,0,111.4,135.8), null);


(lib.abutus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap18();
	this.instance.setTransform(0,0,0.4872,0.4805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,37);


(lib.nik1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("ניקרגואה", "normal 400 25px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 96;
	this.text.parent = this;
	this.text.setTransform(50.1,2);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.instance = new lib.pul();
	this.instance.setTransform(120.4,19.25,0.6345,0.6298,0,0,0,23.5,27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nik1, new cjs.Rectangle(0,0,135.2,36.8), null);


(lib.mexico1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("מקסיקו", "normal 400 25px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 79;
	this.text.parent = this;
	this.text.setTransform(41.5,2);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.instance = new lib.pul();
	this.instance.setTransform(103.2,20.15,0.6345,0.6298,0,0,0,23.5,27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mexico1, new cjs.Rectangle(0,0,118,37.4), null);


(lib.kosta1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("קוסטה ריקה", "normal 400 25px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 143;
	this.text.parent = this;
	this.text.setTransform(73.7,2);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.instance = new lib.pul();
	this.instance.setTransform(162.35,19.5,0.6345,0.6298,0,0,0,23.5,27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kosta1, new cjs.Rectangle(0,0,177.1,36.8), null);


(lib.india1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("הודו", "normal 400 25px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 46;
	this.text.parent = this;
	this.text.setTransform(25.05,2);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.instance = new lib.pul();
	this.instance.setTransform(70.3,19.5,0.6345,0.6298,0,0,0,23.5,27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.india1, new cjs.Rectangle(0,0,85.1,36.8), null);


(lib.etupya1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("אתיופיה", "normal 400 25px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 96;
	this.text.parent = this;
	this.text.setTransform(50.1,2);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.instance = new lib.pul();
	this.instance.setTransform(115.1,19.5,0.6345,0.6298,0,0,0,23.5,27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.etupya1, new cjs.Rectangle(0,0,129.9,36.8), null);


(lib.colombia1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("קולומביה", "normal 400 25px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 106;
	this.text.parent = this;
	this.text.setTransform(55.1,2);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.instance = new lib.pul();
	this.instance.setTransform(127.1,20.15,0.6345,0.6298,0,0,0,23.5,27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.colombia1, new cjs.Rectangle(0,0,141.9,37.4), null);


(lib.brazil1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("ברזיל", "normal 400 25px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 62;
	this.text.parent = this;
	this.text.setTransform(33,2);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.instance = new lib.pul();
	this.instance.setTransform(86.2,17.25,0.6345,0.6298,0,0,0,23.5,27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.brazil1, new cjs.Rectangle(0,0,101,36.8), null);


(lib.auganda1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.text = new cjs.Text("אוגנדה", "normal 400 25px 'Varela Round'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 92;
	this.text.parent = this;
	this.text.setTransform(48.1,2);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.instance = new lib.pul();
	this.instance.setTransform(108.05,18.25,0.6345,0.6298,0,0,0,23.4,27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.instance},{t:this.text,p:{color:"#0000FF"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122.9,36.8);


(lib.nikC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.nik1();
	this.instance.setTransform(67.5,20.5,1,1,0,0,0,67.5,18.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.047)").s().p("AnLDNIAAmZIOXAAIAAGZg");
	this.shape.setTransform(48.075,20.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AnzAAIAVAAIOXAAIA7AA");
	this.shape_1.setTransform(49.95,38.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,153,153,0.047)").s().p("AnLDCIAAmDIOXAAIAAGDg");
	this.shape_2.setTransform(48.075,19.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,136.2,41);


(lib.kosta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.kosta1();
	this.instance.setTransform(88.5,18.4,1,1,0,0,0,88.5,18.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ap8AAIT5AA");
	this.shape.setTransform(74.525,33.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177.1,36.8);


(lib.india = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.india1();
	this.instance.setTransform(53.75,18.4,1,1,0,0,0,42.5,18.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.047)").s().p("AnLDNIAAmZIOXAAIAAGZg");
	this.shape.setTransform(45.975,20.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AkvAAIJfAA");
	this.shape_1.setTransform(37.8,35.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AnLDNIAAmZIOXAAIAAGZgADeCZIpfAAg");
	this.shape_2.setTransform(45.975,20.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.3,41);


(lib.etyopya = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.etupya1();
	this.instance.setTransform(64.9,22.6,1,1,0,0,0,64.9,18.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.047)").s().p("AnLDNIAAmZIOXAAIAAGZg");
	this.shape.setTransform(51.525,20.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AmfAAIM/AA");
	this.shape_1.setTransform(50.775,35.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AnLDNIAAmZIOXAAIAAGZgAGYCTIs+AAg");
	this.shape_2.setTransform(51.525,20.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129.9,41);


(lib.colimbiaC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.colombia1();
	this.instance.setTransform(70.9,18.7,1,1,0,0,0,70.9,18.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.047)").s().p("AqpDNIAAmZIVTAAIAAGZg");
	this.shape.setTransform(70.925,20.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AnnAAIPPAA");
	this.shape_1.setTransform(55.775,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AqpDNIAAmZIVTAAIAAGZgAFQCHIvOAAg");
	this.shape_2.setTransform(70.925,20.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141.9,41);


(lib.brazil = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.brazil1();
	this.instance.setTransform(50.5,21,1,1,0,0,0,50.5,18.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.047)").s().p("AnLDNIAAmZIOXAAIAAGZg");
	this.shape.setTransform(49.975,20.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AkwAAIJhAA");
	this.shape_1.setTransform(34.525,33.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AnLDNIAAhHIAAlSIOXAAIAAGZgACXCGIpiAAg");
	this.shape_2.setTransform(49.975,20.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,41);


(lib.auganda = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.auganda = new lib.auganda1();
	this.auganda.name = "auganda";
	this.auganda.setTransform(61.4,20.3,1,1,0,0,0,61.4,18.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.047)").s().p("AnLDNIAAmZIOXAAIAAGZg");
	this.shape.setTransform(53.875,20.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AmNAAIMbAA");
	this.shape_1.setTransform(47.725,34.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.047)").s().p("AnLDNIAAhCIAAlXIOXAAIAAGZgAFRCLIscAAg");
	this.shape_2.setTransform(53.875,20.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.auganda}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.auganda}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122.9,41);


(lib.voloto_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.voloto();
	this.instance.setTransform(0,0,0.5626,0.7034);

	this.instance_1 = new lib.volotoBlack();
	this.instance_1.setTransform(55.7,67.8,1,1,0,0,0,55.7,67.8);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-16, 0, -100, 0))];
	this.instance_1.cache(-2,-2,115,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,139);


(lib.vivlto_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.vivlto();
	this.instance.setTransform(0,0,0.3814,0.4832);

	this.instance_1 = new lib.vivaltoBlack();
	this.instance_1.setTransform(55.7,67.8,1,1,0,0,0,55.7,67.8);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(12, 0, -100, 0))];
	this.instance_1.cache(-2,-2,115,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,139);


(lib.rist_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.rist();
	this.instance.setTransform(0,0,0.2228,0.2715);

	this.instance_1 = new lib.ristBalck();
	this.instance_1.setTransform(55.7,66.8,1,1,0,0,0,55.7,67.8);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60, 0, -100, 0))];
	this.instance_1.cache(-2,-2,115,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,115,139);


(lib.nik_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.nik();
	this.instance.setTransform(0,0,0.4456,0.543);

	this.instance_1 = new lib.nikBlack();
	this.instance_1.setTransform(55.7,67.8,1,1,0,0,0,55.7,67.8);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.instance_1.cache(-2,-2,115,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,139);


(lib.napoli_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.napoli();
	this.instance.setTransform(0,0,0.2228,0.2715);

	this.instance_1 = new lib.napoliBalck();
	this.instance_1.setTransform(55.7,67.8,1,1,0,0,0,55.7,67.8);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(40, 0, -100, 0))];
	this.instance_1.cache(-2,-2,115,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,139);


(lib.fortisio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.fortissiolungo();
	this.instance.setTransform(0,0,0.2228,0.2715);

	this.instance_1 = new lib.fortiBalck();
	this.instance_1.setTransform(55.7,67.8,1,1,0,0,0,55.7,67.8);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(33, 0, -100, 0))];
	this.instance_1.cache(-2,-2,115,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,139);


(lib.envivo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.envivo();
	this.instance.setTransform(0,0,0.5134,0.5376);

	this.instance_1 = new lib.envivoBlack();
	this.instance_1.setTransform(55.7,74.5,1,1,0,0,0,55.7,74.5);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(38, 0, -100, 0))];
	this.instance_1.cache(-2,-2,115,153);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,152);


(lib.cosi_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.cosi();
	this.instance.setTransform(0,0,0.7428,0.8539);

	this.instance_1 = new lib.cosiBlack();
	this.instance_1.setTransform(55.7,67.8,1,1,0,0,0,55.7,67.8);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.instance_1.cache(-2,-2,115,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,139);


(lib.colombia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.colombia11();
	this.instance.setTransform(0,0,0.4455,0.5431);

	this.colombiaBlack = new lib.colombiaBlack();
	this.colombiaBlack.name = "colombiaBlack";
	this.colombiaBlack.setTransform(55.7,67.8,1,1,0,0,0,55.7,67.8);
	this.colombiaBlack.compositeOperation = "multiply";
	this.colombiaBlack.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.colombiaBlack.cache(-2,-2,115,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.colombiaBlack}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,139);


(lib.caramel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.crmel();
	this.instance.setTransform(0,0,0.557,0.6404);

	this.instance_1 = new lib.carmelBlack();
	this.instance_1.setTransform(55.7,67.8,1,1,0,0,0,55.7,67.8);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-39, 0, -100, 0))];
	this.instance_1.cache(-2,-2,115,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,139);


(lib.capriso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.capriccio();
	this.instance.setTransform(0,0,0.2228,0.2715);

	this.instance_1 = new lib.capBlack();
	this.instance_1.setTransform(55.7,67.8,1,1,0,0,0,55.7,67.8);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(50, 0, -100, 0))];
	this.instance_1.cache(-2,-2,115,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,139);


(lib.arpeggio_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.arpeggio();
	this.instance.setTransform(0,0,0.2228,0.2715);

	this.instance_1 = new lib.arpBlack();
	this.instance_1.setTransform(55.7,67.8,1,1,0,0,0,55.7,67.8);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(64, 0, -100, 0))];
	this.instance_1.cache(-2,-2,115,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,139);


(lib.tab = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
	}
	this.frame_3 = function() {
		var self=this;
		self.stop();
	}
	this.frame_4 = function() {
		var self=this;
		self.stop();
	}
	this.frame_5 = function() {
		var self=this;
		self.stop();
	}
	this.frame_6 = function() {
		var self=this;
		self.stop();
	}
	this.frame_7 = function() {
		var self=this;
		self.stop();
	}
	this.frame_8 = function() {
		var self=this;
		self.stop();
	}
	this.frame_9 = function() {
		var self=this;
		self.stop();
	}
	this.frame_10 = function() {
		var self=this;
		self.stop();
	}
	this.frame_11 = function() {
		var self=this;
		self.stop();
	}
	this.frame_12 = function() {
		var self=this;
		self.stop();
	}
	this.frame_13 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(2));

	// X
	this.btnX = new lib.X();
	this.btnX.name = "btnX";
	this.btnX.setTransform(-202.6,39.6);
	new cjs.ButtonHelper(this.btnX, 0, 1, 2, false, new lib.X(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnX).wait(12).to({x:-294.75,y:-3},0).wait(3));

	// V
	this.nextP = new lib.next();
	this.nextP.name = "nextP";
	this.nextP.setTransform(-234.15,557.75,1,1,0,0,0,35.9,35.5);
	new cjs.ButtonHelper(this.nextP, 0, 1, 2, false, new lib.next(), 3);

	this.backP = new lib.next();
	this.backP.name = "backP";
	this.backP.setTransform(642.1,557.75,1,1,180,0,0,35.9,35.5);
	new cjs.ButtonHelper(this.backP, 0, 1, 2, false, new lib.next(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.nextP}]},12).to({state:[{t:this.backP}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.aaa = new lib.nik_1();
	this.aaa.name = "aaa";
	this.aaa.setTransform(-89.75,184.75,1,1,0,0,0,55.7,67.8);

	this.text = new cjs.Text("זני הקפה: ערביקה\n\nארץ מקור: ניקרגואה\n\nשיטת קלייה: קליה עם שכבת הסוכרים של הפרי\n\nתווים ארומטיים: דבש , מתקתק\n\nעוצמה: 5 מ13\n\nצורת הגשה: אספרסו, קפוצ'ינו ", "normal 400 30px 'Varela Round'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 41;
	this.text.lineWidth = 681;
	this.text.alpha = 0.90588235;
	this.text.parent = this;
	this.text.setTransform(608.95,88.25);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.heder = new cjs.Text("ניקרגואה Nicaragua", "normal 400 30px 'Varela Round'", "#FFFFFF");
	this.heder.name = "heder";
	this.heder.textAlign = "center";
	this.heder.lineHeight = 41;
	this.heder.lineWidth = 309;
	this.heder.alpha = 0.90588235;
	this.heder.parent = this;
	this.heder.setTransform(207.55,21.45);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.heder);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC33FF").ss(5,1,1).p("Eg8RgueMB4jAAAQEBAAC1C1QC2C2AAEAMAAABJnQAAEAi2C2Qi1C1kBAAMh4jAAAQkBAAi1i1Qi2i2AAkAMAAAhJnQAAkAC2i2QC1i1EBAAg");
	this.shape.setTransform(209.275,297.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.929)").s().p("Eg8RAufQkBAAi1i1Qi2i2AAkAMAAAhJnQAAkAC2i2QC1i1EBAAMB4jAAAQEBAAC1C1QC2C2AAEAMAAABJnQAAEAi2C2Qi1C1kBAAg");
	this.shape_1.setTransform(209.275,297.525);

	this.aaa_1 = new lib.colombia();
	this.aaa_1.name = "aaa_1";
	this.aaa_1.setTransform(-89.75,184.75,1,1,0,0,0,55.7,67.8);

	this.aaa_2 = new lib.napoli_1();
	this.aaa_2.name = "aaa_2";
	this.aaa_2.setTransform(-89.75,184.75,1,1,0,0,0,55.7,67.8);

	this.aaa_3 = new lib.vivlto_1();
	this.aaa_3.name = "aaa_3";
	this.aaa_3.setTransform(-89.75,184.75,1,1,0,0,0,55.7,67.8);

	this.aaa_4 = new lib.voloto_1();
	this.aaa_4.name = "aaa_4";
	this.aaa_4.setTransform(-89.75,184.75,1,1,0,0,0,55.7,67.8);

	this.aaa_5 = new lib.envivo_1();
	this.aaa_5.name = "aaa_5";
	this.aaa_5.setTransform(-89.75,184.75,1,1,0,0,0,55.7,67.8);

	this.aaa_6 = new lib.arpeggio_1();
	this.aaa_6.name = "aaa_6";
	this.aaa_6.setTransform(-89.75,184.75,1,1,0,0,0,55.7,67.8);

	this.aaa_7 = new lib.rist_1();
	this.aaa_7.name = "aaa_7";
	this.aaa_7.setTransform(-89.75,184.75,1,1,0,0,0,55.7,67.8);

	this.aaa_8 = new lib.fortisio();
	this.aaa_8.name = "aaa_8";
	this.aaa_8.setTransform(-89.75,184.75,1,1,0,0,0,55.7,67.8);

	this.aaa_9 = new lib.cosi_1();
	this.aaa_9.name = "aaa_9";
	this.aaa_9.setTransform(-89.75,184.75,1,1,0,0,0,55.7,67.8);

	this.aaa_10 = new lib.caramel();
	this.aaa_10.name = "aaa_10";
	this.aaa_10.setTransform(-89.75,184.75,1,1,0,0,0,55.7,67.8);

	this.aaa_11 = new lib.capriso();
	this.aaa_11.name = "aaa_11";
	this.aaa_11.setTransform(-89.75,184.75,1,1,0,0,0,55.7,67.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CC33FF").ss(5,1,1).p("EhNzg1qMCbnAAAQFLAADqDSQDrDRAAEpMAAABU+QAAEojrDRQjqDSlLAAMibnAAAQlLAAjqjSQjrjRAAkoMAAAhU+QAAkpDrjRQDqjSFLAAg");
	this.shape_2.setTransform(209.3,297.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.929)").s().p("EhNyA1qQlMAAjqjRQjqjRAAkoMAAAhU+QAAkpDqjRQDqjSFMAAMCbmAAAQFLAADqDSQDqDRAAEpMAAABU+QAAEojqDRQjqDRlLAAg");
	this.shape_3.setTransform(209.3,297.55);

	this.text_1 = new cjs.Text("הרחב את הידע בתחום הקפה\n\nהריח שמתקבל בעת הרחת הקפה (ריח מתקתק, מר וכו')\n\n\n\n\nאספרסו\nלונגו- אספרסו כפול\nלאטה-קפה הפוך (קפה שמוזגים בו קודם חלב)\nקפוצ'ינו- קפה עם חלב מוקצף", "normal 400 30px 'Varela Round'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 41;
	this.text_1.lineWidth = 952;
	this.text_1.alpha = 0.90196078;
	this.text_1.parent = this;
	this.text_1.setTransform(211.1521,44.85,1.0194,1);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text_1);
	}

	this.hit = new lib.hitLogo();
	this.hit.name = "hit";
	this.hit.setTransform(211,391.5,1,1,0,0,0,202,82.5);
	new cjs.ButtonHelper(this.hit, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.shape,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.heder,p:{x:207.55,text:"ניקרגואה Nicaragua",lineWidth:309,y:21.45,color:"#FFFFFF"}},{t:this.text,p:{text:"זני הקפה: ערביקה\n\nארץ מקור: ניקרגואה\n\nשיטת קלייה: קליה עם שכבת הסוכרים של הפרי\n\nתווים ארומטיים: דבש , מתקתק\n\nעוצמה: 5 מ13\n\nצורת הגשה: אספרסו, קפוצ'ינו ",x:608.95,y:88.25,color:"#FFFFFF",textAlign:"right",lineWidth:681,scaleX:1,lineHeight:41.35}},{t:this.aaa}]}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.shape,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.heder,p:{x:213.9,text:"קולומביה Colombia",lineWidth:305,y:21.45,color:"#FFFFFF"}},{t:this.text,p:{text:"זני הקפה: ערביקה\n\nארץ מקור: קולומביה\n\nשיטת קלייה: קליה בהירה\n\nתווים ארומטיים: פירותיים\n\nעוצמה: 6 מ13\n\nצורת הגשה: לונגו 110 מ\"ל",x:608.95,y:88.25,color:"#FFFFFF",textAlign:"right",lineWidth:681,scaleX:1,lineHeight:41.35}},{t:this.aaa_1}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.shape,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.heder,p:{x:179.15,text:"נפולי NAPOLI",lineWidth:259,y:21.45,color:"#FFFFFF"}},{t:this.text,p:{text:"זני הקפה: ערביקה ורובוסטה\n\nארץ מקור: ערביקה מברזיל, רובסטה מאוגנדה\n\nשיטת קלייה: קליה כהה\n\nתווים ארומטיים: מרירות של קקאו\n\nעוצמה: 13 מ13\n\nצורת הגשה: אספרסו 40 מ\"ל, ריסטרטו 25",x:608.95,y:88.25,color:"#FFFFFF",textAlign:"right",lineWidth:681,scaleX:1,lineHeight:41.35}},{t:this.aaa_2}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.shape,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.heder,p:{x:212,text:"ויולטו לונגו vivalto longo",lineWidth:335,y:21.45,color:"#FFFFFF"}},{t:this.text,p:{text:"זני הקפה: ערביקה\n\nארץ מקור: אתיופיה ודרום אמריקה\n\nשיטת קלייה: קליה בהירה\n\nתווים ארומטיים: פרחוניים, דשא\n\nעוצמה: 4 מ13\n\nצורת הגשה: לונגו 110 מ\"ל, לאטה",x:608.95,y:88.25,color:"#FFFFFF",textAlign:"right",lineWidth:681,scaleX:1,lineHeight:41.35}},{t:this.aaa_3}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.shape,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.heder,p:{x:179.15,text:"ולוטו Voloto",lineWidth:259,y:21.45,color:"#FFFFFF"}},{t:this.text,p:{text:"זני הקפה: ערביקה\n\nארץ מקור: ברזיל וקולומביה\n\nשיטת קלייה: בינונית\n\nתווים ארומטיים: דגניים\n\nעוצמה: 4 מ13\n\nצורת הגשה: אספרסו וקפוצ'ינו ",x:608.95,y:88.25,color:"#FFFFFF",textAlign:"right",lineWidth:681,scaleX:1,lineHeight:41.35}},{t:this.aaa_4}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.shape,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.heder,p:{x:237.1,text:"אנביבו לונגו Envivo longo",lineWidth:345,y:21.45,color:"#FFFFFF"}},{t:this.text,p:{text:"זני הקפה: ערביקה ורובוסטה\n\nארץ מקור: ערביקה מהודו ורובוסטה ממקסיקו\n\nשיטת קלייה: שיטה כהה\n\nתווים ארומטיים: מריר עוצמתי\n\nעוצמה: 9 מ13\n\nצורת הגשה: לונגו 110 מ\"ל ",x:608.95,y:88.25,color:"#FFFFFF",textAlign:"right",lineWidth:681,scaleX:1,lineHeight:41.35}},{t:this.aaa_5}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.shape,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.heder,p:{x:179.15,text:"ארפג'יו Arpeggio",lineWidth:259,y:21.45,color:"#FFFFFF"}},{t:this.text,p:{text:"זני הקפה: ערביקה\n\nארץ מקור: קוסטריקה\n\nשיטת קלייה: קלייה כהה\n\nתווים ארומטיים: מרירות מעודנת \n\nעוצמה: 8 מ13\n\nצורת הגשה: לונגו 110 מ\"ל ",x:608.95,y:88.25,color:"#FFFFFF",textAlign:"right",lineWidth:681,scaleX:1,lineHeight:41.35}},{t:this.aaa_6}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.shape,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.heder,p:{x:179.15,text:"ריסטרטו Ristreto",lineWidth:259,y:21.45,color:"#FFFFFF"}},{t:this.text,p:{text:"זני הקפה: ערביקה ורובוסטה\n\nארץ מקור: ערביקה מברזיל, רובסטה מהודו\n\nשיטת קלייה: קליה בינונית, לזמן ממושך\n\nתווים ארומטיים: מרירות עדינה, חמוציות קלה\n\nעוצמה: 10 מ13\n\nצורת הגשה: אספרסו 40 מ\"ל, ריסטרטו 25",x:608.95,y:88.25,color:"#FFFFFF",textAlign:"right",lineWidth:681,scaleX:1,lineHeight:41.35}},{t:this.aaa_7}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.shape,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.heder,p:{x:221.05,text:"פורטיסו לונגו Fortisso longo",lineWidth:392,y:21.45,color:"#FFFFFF"}},{t:this.text,p:{text:"זני הקפה: ערביקה\n\nארץ מקור: הודו וקולומביה\n\nשיטת קלייה: קלייה איטית בטמפרטורה גבוה\n\nתווים ארומטיים: דגני קטיפתי\n\nעוצמה: 8 מ13\n\nצורת הגשה: לונגו 110 מ\"ל ",x:608.95,y:88.25,color:"#FFFFFF",textAlign:"right",lineWidth:681,scaleX:1,lineHeight:41.35}},{t:this.aaa_8}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.shape,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.heder,p:{x:179.15,text:"קוסי Cosi",lineWidth:259,y:21.45,color:"#FFFFFF"}},{t:this.text,p:{text:"זני הקפה: ערביקה\n\nארץ מקור: אתיופיה וברזיל\n\nשיטת קלייה: קלייה עדינה\n\nתווים ארומטיים: דגני קטיפתי\n\nעוצמה: 4 מ13\n\nצורת הגשה: אספרסו, לאטה ",x:608.95,y:88.25,color:"#FFFFFF",textAlign:"right",lineWidth:681,scaleX:1,lineHeight:41.35}},{t:this.aaa_9}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.shape,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.heder,p:{x:179.15,text:"קרמל קרם בורלה",lineWidth:259,y:21.45,color:"#FFFFFF"}},{t:this.text,p:{text:"זני הקפה: ערביקה\n\nארץ מקור: ברזיל\n\nשיטת קלייה: קלייה כהה לאורך זמן\n\nתווים ארומטיים: קקאו\n\nעוצמה: 6 מ13\n\nצורת הגשה: לאטה ",x:608.95,y:88.25,color:"#FFFFFF",textAlign:"right",lineWidth:681,scaleX:1,lineHeight:41.35}},{t:this.aaa_10}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.shape,p:{scaleX:1,scaleY:1,x:209.275,y:297.525}},{t:this.heder,p:{x:179.15,text:"קפריסיו Capriccio  ",lineWidth:259,y:21.45,color:"#FFFFFF"}},{t:this.text,p:{text:"זני הקפה: ערביקה ורובוסטה\n\nארץ מקור: ברזיל והודו\n\nשיטת קלייה: קלייה קלה\n\nתווים ארומטיים: דגניים\n\nעוצמה: 5 מ13\n\nצורת הגשה: אספרסו 40 מ\"ל ",x:608.95,y:88.25,color:"#FFFFFF",textAlign:"right",lineWidth:681,scaleX:1,lineHeight:41.35}},{t:this.aaa_11}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.heder,p:{x:200.55,text:"הרחב את הידע בתחום הקפה\n\nקלייה בהירה\n  הקלייה קצרה ולתרכובות המקוריות של הפול אין זמן להפתח כך שהקפה נשאר נאמן לטעם המקורי המאופיין בטעמי אגוזים או דגניים\n\nקלייה בינונית\nהקפה מתהדר בתכונות האורגניות של הפול. רמת החמיצות יורדת, תוך חיתוך חלק מהטעמים הפירותיים של קלייה בהירה. מאופיין בטעמי קרמל, דבש ורמיזות של פרי\n\nקלייה כהה\n פרופיל זה הוא מה שאתם מכירים כקפה אספרסו מסורתי. המרירות מובחנת ומתחילים לצוץ כמה מהטעמים המעושנים יותר\nמאופיין בטעמי וניל, וויסקי או טבק ",lineWidth:1044,y:-9.25,color:"#FFFFFF"}},{t:this.text,p:{text:"-סוגי קלייה-",x:202.45,y:31.85,color:"#FF9966",textAlign:"center",lineWidth:176,scaleX:1,lineHeight:41.35}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1.2907,scaleY:1.1543,x:209.3077,y:297.5599}},{t:this.shape,p:{scaleX:1.2907,scaleY:1.1543,x:209.3077,y:297.5599}},{t:this.text_1},{t:this.heder,p:{x:210.05,text:"-תווים ארומטיים-",lineWidth:271,y:86.65,color:"#FF9933"}},{t:this.text,p:{text:"-צורת הגשה-",x:211.15,y:279.2,color:"#E78B2F",textAlign:"center",lineWidth:205,scaleX:1,lineHeight:41.35}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1.2907,scaleY:1.1543,x:209.3077,y:297.5599}},{t:this.shape,p:{scaleX:1.2907,scaleY:1.1543,x:209.3077,y:297.5599}},{t:this.text,p:{text:"שם הפרוייקט: CUPSOUL\nשם הקורס: תכנות אנימציה, ארגון וייצוג ידע\nשמות חברי הצוות: דן גריס וירדן שפאר\nשנה: שנה א\nפקולטה: הפקולטה לטכנולוגיות למידה, \n\n\n\n\n\n",x:211.1521,y:44.85,color:"#FFFFFF",textAlign:"center",lineWidth:952,scaleX:1.0194,lineHeight:42.5}},{t:this.hit}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-371.1,-48.4,1160.9,691.9);


// stage content:
(lib.cupsoul = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		stage.enableMouseOver(24); //אישור מעברי עכבר
		self.nameOf.gotoAndStop(1);
		resetAll(); //קורא לפונקציה שמחזירה הכל למראה של ההתחלה
		
		var countryClick = false; //דגל-מדינה נלחצה
		
		////////////////////////////////////////////////////////////////////
		////////////////////////פונקציות גלובליות///////////////////////////
		////////////////////////////////////////////////////////////////////
		
		
		function resetAll() // בהזזת עכבר משחזרת את כל הצבעים ומגיע להתחלה
		{
			self.colombia.gotoAndStop(0);
			self.napoli.gotoAndStop(0);
			self.cap.gotoAndStop(0);
			self.nik.gotoAndStop(0);
			self.carmel.gotoAndStop(0);
			self.cosi.gotoAndStop(0);
			self.forti.gotoAndStop(0);
			self.rist.gotoAndStop(0);
			self.arp.gotoAndStop(0);
			self.envivo.gotoAndStop(0);
			self.voloto.gotoAndStop(0);
			self.vivalto.gotoAndStop(0);
		
			self.auganda.mouseEnabled = true;
			self.nikc.mouseEnabled = true;
			self.india.mouseEnabled = true;
			self.kosta.mouseEnabled = true;
			self.brazil.mouseEnabled = true;
			self.etyopya.mouseEnabled = true;
			self.colimbiaC.mouseEnabled = true;
			self.mexico.mouseEnabled = true;
			trueCapsules();
			underline();
		
			self.nameOf.gotoAndStop(1);
			self.txt.text = "העבר את העכבר על הקפסולה כדי לגלות את שמה";
			self.txt1.text = "העבר את העכבר על המדינה כדי לגלות איזה קפסולה הגיעה ממנה";
		
			self.tabs.visible = false;
		
		
		
			countryClick = false;
			capsulClick = false;
		}
		function changeColor() //פונקציה שמחליפה צבע לקפוסולה 
		{
		
			self.colombia.gotoAndStop(1);
			self.napoli.gotoAndStop(1);
			self.cap.gotoAndStop(1);
			self.nik.gotoAndStop(1);
			self.carmel.gotoAndStop(1);
			self.cosi.gotoAndStop(1);
			self.forti.gotoAndStop(1);
			self.rist.gotoAndStop(1);
			self.arp.gotoAndStop(1);
			self.envivo.gotoAndStop(1);
			self.voloto.gotoAndStop(1);
			self.vivalto.gotoAndStop(1);
		
		
		}
		
		
		function unhoverCapsules() { //מחזירה את הקפסולות להיות לחיצות
		
			self.nik.mouseEnabled = false;
			self.cap.mouseEnabled = false;
			self.carmel.mouseEnabled = false;
			self.cosi.mouseEnabled = false;
			self.forti.mouseEnabled = false;
			self.rist.mouseEnabled = false;
			self.arp.mouseEnabled = false;
			self.envivo.mouseEnabled = false;
			self.voloto.mouseEnabled = false;
			self.vivalto.mouseEnabled = false;
			self.napoli.mouseEnabled = false;
			self.colombia.mouseEnabled = false;
		}
		function trueCapsules() { //מונעה מהקפסולות להיות לחיצות
		
			self.nik.mouseEnabled = true;
			self.cap.mouseEnabled = true;
			self.carmel.mouseEnabled = true;
			self.cosi.mouseEnabled = true;
			self.forti.mouseEnabled = true;
			self.rist.mouseEnabled = true;
			self.arp.mouseEnabled = true;
			self.envivo.mouseEnabled = true;
			self.voloto.mouseEnabled = true;
			self.vivalto.mouseEnabled = true;
			self.napoli.mouseEnabled = true;
			self.colombia.mouseEnabled = true;
		}
		function underline() { //שם קו תחתון מתחת למדינות
		
			self.auganda.gotoAndStop(0);
			self.brazil.gotoAndStop(0);
			self.colimbiaC.gotoAndStop(0);
			self.etyopya.gotoAndStop(0);
			self.india.gotoAndStop(0);
			self.kosta.gotoAndStop(0);
			self.mexico.gotoAndStop(0);
			self.nikc.gotoAndStop(0);
		
		}
		
		function mouselement() { //נותן לעכבר אלנמטיים שונים 
			self.auganda.cursor = "pointer";
			self.nikc.cursor = "pointer";
			self.india.cursor = "pointer";
			self.kosta.cursor = "pointer";
			self.brazil.cursor = "pointer";
			self.etyopya.cursor = "pointer";
			self.colimbiaC.cursor = "pointer";
			self.mexico.cursor = "pointer";
			self.cap.cursor = "help";
			self.carmel.cursor = "help";
			self.cosi.cursor = "help";
			self.rist.cursor = "help";
			self.arp.cursor = "help";
			self.envivo.cursor = "help";
			self.voloto.cursor = "help";
			self.vivalto.cursor = "help";
			self.napoli.cursor = "help";
			self.colombia.cursor = "help";
			self.nik.cursor = "help";
			self.forti.cursor = "help";
		
		
		}
		
		/////////////////////////////////////////////////////
		////////////////////אירועי עכבר אוגנדה///////////////
		/////////////////////////////////////////////////////
		
		self.auganda.addEventListener("mouseover", overAuganda);
		self.auganda.addEventListener("mouseout", outAuganda);
		self.auganda.addEventListener("click", clickAuganda);
		var augandaClick = false;
		function lightAuganda() {
		
			changeColor();
		
			self.napoli.gotoAndStop(0);
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
			self.txt.text = "לחיצה על המדינה תקבע את הקפסולות המגיעות ממנה";
		}
		function overAuganda() {
			mouselement();
			if (capsulClick == false && countryClick == false) {
				lightAuganda();
				self.nameOf.gotoAndStop(4);
		
		
			}
		}
		
		function outAuganda() {
			if (capsulClick == false && countryClick == false)
				resetAll();
		
		}
		
		function clickAuganda() {
		
			if (augandaClick == false) {
				lightAuganda();
				augandaClick = true;
				countryClick = true;
				unhoverCapsules(); //קראות לפונקציה שמקבעות את המסך
				countryClick == true;
				self.auganda.mouseEnabled = true;
				self.auganda.gotoAndStop(1); //מסמן לי בקו תחתון 
				self.napoli.mouseEnabled = true; //נותן לקפסולה מעבר עכבר (לחיצה)
			} else {
				augandaClick = false;
				resetAll()
			}
		
		}
		
		/////////////////////////////////////////////////////
		////////////////אירועי עכבר נקיראגוואה///////////////
		/////////////////////////////////////////////////////
		
		self.nikc.addEventListener("mouseover", overNikc);
		self.nikc.addEventListener("mouseout", outNikc);
		self.nikc.addEventListener("click", clickNikc);
		var nikClick = false;
		function lightNikc() {
			changeColor();
		
			self.nik.gotoAndStop(0);
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
			self.txt.text = "לחיצה על המדינה תקבע את הקפסולות המגיעות ממנה";
		}
		function overNikc() {
			if (capsulClick == false && countryClick == false) {
				lightNikc();
				self.nameOf.gotoAndStop(2);
			}
		
		}
		function outNikc() {
		
			if (capsulClick == false && countryClick == false)
				resetAll();
		
		}
		function clickNikc() {
			if (nikClick == false) {
				lightNikc();
				nikClick = true;
				unhoverCapsules();
				countryClick = true;
				self.nikc.mouseEnabled = true;
				self.nikc.gotoAndStop(1);
		
				self.nik.mouseEnabled = true; // נותן לקפסולה מעבר עכבר (לחיצה) ופתיחת כרטסיה
		
			} else {
				nikClick = false;
				resetAll()
			}
		}
		
		/////////////////////////////////////////////////////
		///////////////////אירועי עכבר הודו/////////////////
		/////////////////////////////////////////////////////
		
		
		self.india.addEventListener("mouseover", overIndia);
		self.india.addEventListener("mouseout", outIndia);
		self.india.addEventListener("click", clickIndia);
		var indiaClick = false;
		function lightIndia() {
			changeColor();
		
		
			self.envivo.gotoAndStop(0);
			self.rist.gotoAndStop(0);
			self.cap.gotoAndStop(0);
			self.forti.gotoAndStop(0);
		
			self.nameOf.gotoAndStop(14);
		
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
			self.txt.text = "לחיצה על המדינה תקבע את הקפסולות המגיעות ממנה";
		}
		function overIndia() {
			if (capsulClick == false && countryClick == false) {
				lightIndia();
			}
		}
		
		function outIndia() {
			if (capsulClick == false && countryClick == false)
				resetAll();
		}
		
		function clickIndia() {
			if (indiaClick == false) {
				lightIndia();
				indiaClick = true;
				unhoverCapsules();
				countryClick = true;
				self.india.mouseEnabled = true;
				self.envivo.mouseEnabled = true;
				self.india.gotoAndStop(1);
				self.nameOf.gotoAndStop(14);
		
				self.envivo.mouseEnabled = true; // נותן לקפסולה מעבר עכבר (לחיצה) ופתיחת כרטסיה
				self.forti.mouseEnabled = true; // נותן לקפסולה מעבר עכבר (לחיצה) ופתיחת כרטסיה
				self.rist.mouseEnabled = true; // נותן לקפסולה מעבר עכבר (לחיצה) ופתיחת כרטסיה
				self.cap.mouseEnabled = true; // נותן לקפסולה מעבר עכבר (לחיצה) ופתיחת כרטסיה
		
		
			} else {
				indiaClick = false;
				resetAll()
			}
		}
		
		/////////////////////////////////////////////////////
		///////////////////קוסטה ריקה////////////////////////
		/////////////////////////////////////////////////////
		
		
		self.kosta.addEventListener("mouseover", overKosta);
		self.kosta.addEventListener("mouseout", outKosta);
		self.kosta.addEventListener("click", clickKosta);
		var kostaClick = false;
		function lightKosta() {
			changeColor();
		
		
			self.arp.gotoAndStop(0);
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
			self.txt.text = "לחיצה על המדינה תקבע את הקפסולות המגיעות ממנה";
		}
		function overKosta() {
			if (capsulClick == false && countryClick == false) {
				lightKosta();
				self.nameOf.gotoAndStop(8);
			}
		}
		function outKosta() {
			if (capsulClick == false && countryClick == false)
				resetAll();
		}
		function clickKosta() {
			if (kostaClick == false) {
				lightKosta();
				kostaClick = true;
				unhoverCapsules();
				countryClick = true;
				self.kosta.mouseEnabled = true;
				self.kosta.gotoAndStop(1); //מסמן לי בקו תחתון 
				self.arp.mouseEnabled = true; // נותן לקפסולה מעבר עכבר (לחיצה) ופתיחת כרטסיה
				self.nameOf.gotoAndStop(8);
		
			} else {
				kostaClick = false;
				resetAll()
			}
		}
		/////////////////////////////////////////////////////
		/////////////////////////אירועי עכבר ברזיל///////////
		/////////////////////////////////////////////////////
		
		
		self.brazil.addEventListener("mouseover", overBrazil);
		self.brazil.addEventListener("mouseout", outBrazil);
		self.brazil.addEventListener("click", clickBrazil);
		var brazilClick = false;
		function lightBrazil() {
			changeColor();
		
		
			self.voloto.gotoAndStop(0);
			self.rist.gotoAndStop(0);
			self.cap.gotoAndStop(0);
			self.carmel.gotoAndStop(0);
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
			self.txt.text = "לחיצה על המדינה תקבע את הקפסולות המגיעות ממנה";
		}
		function overBrazil() {
			if (capsulClick == false && countryClick == false) {
				lightBrazil();
				self.nameOf.gotoAndStop(15);
			}
		}
		function outBrazil() {
			if (capsulClick == false && countryClick == false)
				resetAll();
		}
		
		function clickBrazil() {
		
			if (brazilClick == false) {
				lightBrazil();
				brazilClick = true;
				unhoverCapsules();
				countryClick = true;
				self.brazil.mouseEnabled = true;
				self.brazil.gotoAndStop(1); //מסמן לי בקו תחתון 
		
				self.napoli.mouseEnabled = true;
				self.voloto.mouseEnabled = true;
				self.rist.mouseEnabled = true;
				self.carmel.mouseEnabled = true;
				self.cap.mouseEnabled = true;
				self.nameOf.gotoAndStop(15);
		
			} else {
				brazilClick = false;
				resetAll()
			}
		}
		
		/////////////////////////////////////////////////////
		/////////////אירועי עכבר אתיופה////////////////////////
		/////////////////////////////////////////////////////
		
		
		self.etyopya.addEventListener("mouseover", overEtyopya);
		self.etyopya.addEventListener("mouseout", outEtyopya);
		self.etyopya.addEventListener("click", clickEtyopya);
		var etyopyaClick = false;
		
		function lightEthyopya() {
			changeColor();
		
		
			self.vivalto.gotoAndStop(0);
			self.cosi.gotoAndStop(0);
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
			self.txt.text = "לחיצה על המדינה תקבע את הקפסולות המגיעות ממנה";
		}
		
		function overEtyopya() {
			if (capsulClick == false && countryClick == false) {
				self.nameOf.gotoAndStop(16);
				lightEthyopya();
			}
		}
		
		function outEtyopya() {
			if (capsulClick == false && countryClick == false)
				resetAll();
		}
		
		function clickEtyopya() {
		
			if (etyopyaClick == false) {
				lightEthyopya();
				etyopyaClick = true;
				unhoverCapsules();
				countryClick = true;
				self.etyopya.mouseEnabled = true;
				self.etyopya.gotoAndStop(1); //מסמן לי בקו תחתון
				self.nameOf.gotoAndStop(16);
				self.vivalto.mouseEnabled = true;
				self.cosi.mouseEnabled = true;
		
			} else {
				etyopyaClick = false;
				resetAll()
			}
		}
		/////////////////////////////////////////////////////
		/////////////אירועי עכבר קולמביה מדינה /////////////
		/////////////////////////////////////////////////////
		
		
		self.colimbiaC.addEventListener("mouseover", overcolimbiaC);
		self.colimbiaC.addEventListener("mouseout", outcolimbiaC);
		self.colimbiaC.addEventListener("click", clickcolimbiaC);
		var colimbiaClick = false;
		function lightColombiaC() {
			changeColor();
		
			self.envivo.gotoAndStop(0);
			changeColor();
		
		
			self.colombia.gotoAndStop(0);
			self.voloto.gotoAndStop(0);
			self.cosi.gotoAndStop(0);
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
			self.txt.text = "לחיצה על המדינה תקבע את הקפסולות המגיעות ממנה";
			self.colombia.mouseEnabled = true;
			self.voloto.mouseEnabled = true;
			self.cosi.mouseEnabled = true;
		
		
		
		}
		function overcolimbiaC() {
			if (capsulClick == false && countryClick == false) {
				self.nameOf.gotoAndStop(17);
				lightColombiaC();
			}
		}
		
		function outcolimbiaC() {
			if (capsulClick == false && countryClick == false)
				resetAll();
		}
		function clickcolimbiaC() {
		
			if (colimbiaClick == false) {
				unhoverCapsules();
				lightColombiaC();
				colimbiaClick = true;
		
				countryClick = true;
				self.colimbiaC.mouseEnabled = true;
				self.colimbiaC.gotoAndStop(1); //מסמן לי בקו תחתון
				self.nameOf.gotoAndStop(17);
			} else {
				colimbiaClick = false;
				resetAll()
			}
		}
		/////////////////////////////////////////////////////
		///////////////////אירועי עכבר מקסיקו///////////////
		/////////////////////////////////////////////////////
		
		self.mexico.addEventListener("mouseover", overMexico);
		self.mexico.addEventListener("mouseout", outMexico);
		self.mexico.addEventListener("click", clickMexico);
		var mexicoClick = false;
		function lightMexico() {
			changeColor();
		
			self.envivo.gotoAndStop(0);
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
			self.txt.text = "לחיצה על המדינה תקבע את הקפסולות המגיעות ממנה";
			self.envivo.mouseEnabled = true;
		}
		function overMexico() {
			if (capsulClick == false && countryClick == false) {
				self.nameOf.gotoAndStop(7);
				lightMexico();
			}
		}
		function outMexico() {
			if (capsulClick == false && countryClick == false)
				resetAll();
		
		}
		function clickMexico() {
		
			if (mexicoClick == false) {
				lightMexico();
				mexicoClick = true;
				unhoverCapsules();
				countryClick = true;
				self.mexico.mouseEnabled = true;
				self.mexico.gotoAndStop(1); //מסמן לי בקו תחתון
				self.nameOf.gotoAndStop(7);
		
				self.envivo.mouseEnabled = true;
			} else {
				mexicoClick = false;
				resetAll()
			}
		}
		
		
		
		
		//---------------------------------------------------//
		///////////////////////////////////////////////////////
		/////-----------------קפסולות---------------------/////
		///////////////////////////////////////////////////////
		//---------------------------------------------------//
		
		
		var capsulClick = false;
		
		////////////////////אירועי עכבר ניקראגווה//////////////
		
		self.nik.addEventListener("mouseover", overNik);
		self.nik.addEventListener("mouseout", outNik);
		self.nik.addEventListener("click", clickNik);
		
		
		function overNik() {
			mouselement();
			if (capsulClick == false) {
				changeColor();
				self.nik.gotoAndStop(0);
				self.nameOf.gotoAndStop(2);
				self.txt.text = "העבר את העכבר על הקפסולה כדי לגלות את שמה";
				self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
			}
		}
		function outNik() {
		
			if (capsulClick == false) {
				if (nikClick == true)
					lightNikC();
				else
					resetAll();
			}
		
		}
		function clickNik() {
			
			self.tabs.visible = true; //פותח כרטסית מידע 
			capsulClick = true; //נלחצה קפסולה 
			self.tabs.gotoAndStop(0); //פותח את הכרטסיה בפריים הנכון
			countryClick = true;
		}
		////////////////////אירועי עכבר קולומביה//////////////
		
		
		self.colombia.addEventListener("mouseover", overcolo);
		self.colombia.addEventListener("mouseout", outcolo);
		self.colombia.addEventListener("click", clickcolo);
		
		
		function overcolo() {
			mouselement();
			changeColor();
			self.colombia.gotoAndStop(0);
			self.nameOf.gotoAndStop(3);
			self.txt.text = "העבר את העכבר על הקפסולה כדי לגלות את שמה";
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
		
		}
		function outcolo() {
			if (capsulClick == false) {
				if (colimbiaClick == true)
					lightColombiaC();
				else
					resetAll();
			}
		
		}
		function clickcolo() {
			console.log("קליק קולומביה");
			self.tabs.visible = true; //פותח כרטסית מידע 
			capsulClick = true; //נלחצה קפסולה 
			self.tabs.gotoAndStop(1); //פותח את הכרטסיה בפריים הנכון
		}
		////////////////////אירועי עכבר נפולי//////////////
		
		
		self.napoli.addEventListener("mouseover", ovenapoli);
		self.napoli.addEventListener("mouseout", outnapoli);
		self.napoli.addEventListener("click", clicknapoli);
		
		
		
		function ovenapoli() {
			mouselement();
			changeColor(); //פונקציה שמשנה צבעים לאפור
			self.napoli.gotoAndStop(0);
			self.nameOf.gotoAndStop(4);
			self.txt.text = "העבר את העכבר על הקפסולה כדי לגלות את שמה";
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
		
		}
		function outnapoli() {
			if (capsulClick == false) {
				if (augandaClick == true)
					lightAuganda();
				else if (indiaClick == true)
					lightIndia();
				else
					resetAll();
			}
		}
		function clicknapoli() {
			self.tabs.visible = true; //פותח כרטסית מידע 
			capsulClick = true; //נלחצה קפסולה 
			self.tabs.gotoAndStop(2); //פותח את הכרטסיה בפריים הנכון
		}
		
		////////////////////אירועי עכבר ויולטו//////////////
		
		
		self.vivalto.addEventListener("mouseover", overvivalto);
		self.vivalto.addEventListener("mouseout", outvivalto);
		self.vivalto.addEventListener("click", clickvivalto);
		
		
		function overvivalto() {
			mouselement();
			changeColor();
			self.vivalto.gotoAndStop(0);
			self.nameOf.gotoAndStop(5);
			self.txt.text = "העבר את העכבר על הקפסולה כדי לגלות את שמה";
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
		
		}
		function outvivalto() {
		
			if (capsulClick == false) {
				if (etyopyaClick == true)
					lightEthyopya();
				else
					resetAll();
			}
		}
		function clickvivalto() {
			c
			self.tabs.visible = true; //פותח כרטסית מידע 
			capsulClick = true; //נלחצה קפסולה 
			self.tabs.gotoAndStop(3); //פותח את הכרטסיה בפריים הנכון
		}
		
		////////////////////אירועי עכבר ולוטו//////////////
		
		
		self.voloto.addEventListener("mouseover", overvoloto);
		self.voloto.addEventListener("mouseout", outvoloto);
		self.voloto.addEventListener("click", clickvoloto);
		
		
		function overvoloto() {
			mouselement();
			changeColor();
			self.voloto.gotoAndStop(0);
			self.nameOf.gotoAndStop(6);
			self.txt.text = "העבר את העכבר על הקפסולה כדי לגלות את שמה";
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
		
		}
		function outvoloto() {
			if (capsulClick == false) {
				if (brazilClick == true)
					lightBrazil();
				else if (colimbiaClick == true)
					lightColombiaC();
				else
					resetAll();
			}
		}
		
		function clickvoloto() {
			console.log("קליקולוטו");
			self.tabs.visible = true; //פותח כרטסית מידע 
			capsulClick = true; //נלחצה קפסולה 
			self.tabs.gotoAndStop(4); //פותח את הכרטסיה בפריים הנכון
		}
		////////////////////אירועי עכבר אנביבו//////////////
		
		
		self.envivo.addEventListener("mouseover", overenvivo);
		self.envivo.addEventListener("mouseout", outenvivo);
		self.envivo.addEventListener("click", clickenvivo);
		
		
		function overenvivo() {
			changeColor();
			self.envivo.gotoAndStop(0);
			self.nameOf.gotoAndStop(7);
			self.txt.text = "העבר את העכבר על הקפסולה כדי לגלות את שמה";
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
		}
		function outenvivo() {
			if (capsulClick == false) {
				if (indiaClick == true)
					lightIndia();
				else if (mexicoClick == true)
					lightMexico();
				else
					resetAll();
			}
		
		}
		function clickenvivo() {
			console.log("קליקווילטו");
			self.tabs.visible = true; //פותח כרטסית מידע 
			capsulClick = true; //נלחצה קפסולה 
			self.tabs.gotoAndStop(5); //פותח את הכרטסיה בפריים הנכון
		}
		
		////////////////////אירועי עכבר ארפג'יו//////////////
		
		
		self.arp.addEventListener("mouseover", overarp);
		self.arp.addEventListener("mouseout", outarp);
		self.arp.addEventListener("click", clickarp);
		
		
		function overarp() {
			mouselement();
			changeColor();
			self.arp.gotoAndStop(0);
			self.nameOf.gotoAndStop(8);
			self.txt.text = "העבר את העכבר על הקפסולה כדי לגלות את שמה";
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
		
		}
		function outarp() {
			if (capsulClick == false) {
				if (kostaClick == true)
					lightKosta();
		
				else
					resetAll();
			}
		}
		function clickarp() {
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			capsulClick = true; //נלחצה קפסולה 
			self.tabs.gotoAndStop(6); //פותח את הכרטסיה בפריים הנכון
		}
		
		////////////////////אירועי עכבר ריסטרו//////////////
		
		
		self.rist.addEventListener("mouseover", overrist);
		self.rist.addEventListener("mouseout", outrist);
		self.rist.addEventListener("click", clickrist);
		
		
		function overrist() {
			mouselement();
			changeColor();
			self.rist.gotoAndStop(0);
			self.nameOf.gotoAndStop(9);
			self.txt.text = "העבר את העכבר על הקפסולה כדי לגלות את שמה";
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
		
		}
		function outrist() {
			if (capsulClick == false) {
				if (brazilClick == true)
					lightBrazil();
				else if (indiaClick == true)
					lightIndia();
				else
					resetAll();
			}
		}
		
		function clickrist() {
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			capsulClick = true; //נלחצה קפסולה 
			self.tabs.gotoAndStop(7); //פותח את הכרטסיה בפריים הנכון
		}
		////////////////////אירועי עכבר פורטיסיו//////////////
		
		
		self.forti.addEventListener("mouseover", overforti);
		self.forti.addEventListener("mouseout", outforti);
		self.forti.addEventListener("click", clickforti);
		
		
		function overforti() {
			mouselement();
			changeColor();
			self.forti.gotoAndStop(0);
			self.nameOf.gotoAndStop(10);
			self.txt.text = "העבר את העכבר על הקפסולה כדי לגלות את שמה";
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
		
		}
		function outforti() {
			if (capsulClick == false) {
				if (brazilClick == true)
					lightBrazil();
				else if (indiaClick == true)
					lightIndia();
				else if (colimbiaClick == true)
					lightColombiaC();
				else
					resetAll();
			}
		}
		function clickforti() {
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			capsulClick = true; //נלחצה קפסולה 
			self.tabs.gotoAndStop(8); //פותח את הכרטסיה בפריים הנכון
		}
		////////////////////אירועי עכבר קוסי//////////////
		
		
		self.cosi.addEventListener("mouseover", overcosi);
		self.cosi.addEventListener("mouseout", outcosi);
		self.cosi.addEventListener("click", clickcosi);
		
		
		function overcosi() {
			mouselement();
			changeColor();
			self.cosi.gotoAndStop(0);
			self.nameOf.gotoAndStop(11);
			self.txt.text = "העבר את העכבר על הקפסולה כדי לגלות את שמה";
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
		
		}
		function outcosi() {
			if (capsulClick == false) {
				if (etyopyaClick == true)
					lightEthyopya();
				else
					resetAll();
			}
		}
		function clickcosi() {
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			capsulClick = true; //נלחצה קפסולה 
			self.tabs.gotoAndStop(9); //פותח את הכרטסיה בפריים הנכון
		}
		////////////////////אירועי עכבר כרמל//////////////
		
		
		self.carmel.addEventListener("mouseover", overcarmel);
		self.carmel.addEventListener("mouseout", outcarmel);
		self.carmel.addEventListener("click", clickcarmel);
		
		
		function overcarmel() {
			mouselement();
			changeColor();
			self.carmel.gotoAndStop(0);
			self.nameOf.gotoAndStop(12);
			self.txt.text = "העבר את העכבר על הקפסולה כדי לגלות את שמה";
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
		
		}
		function outcarmel() {
		
			if (capsulClick == false) {
				if (brazilClick == true)
					lightBrazil();
				else
					resetAll();
			}
		}
		function clickcarmel() {
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			capsulClick = true; //נלחצה קפסולה 
			self.tabs.gotoAndStop(10); //פותח את הכרטסיה בפריים הנכון
		}
		
		////////////////////אירועי עכבר קפריסויו//////////////
		
		
		self.cap.addEventListener("mouseover", overcap);
		self.cap.addEventListener("mouseout", outcap);
		self.cap.addEventListener("click", clickcap);
		
		
		function overcap() {
			mouselement();
			changeColor();
			self.cap.gotoAndStop(0);
			self.nameOf.gotoAndStop(13);
			self.txt.text = "העבר את העכבר על הקפסולה כדי לגלות את שמה";
			self.txt1.text = "לחץ על הקפסולה וגלה דברים נוספים";
		
		}
		function outcap() {
			if (capsulClick == false) {
				if (brazilClick == true)
					lightBrazil();
				else if (indiaClick == true)
					lightIndia();
				else
					resetAll();
			}
		}
		
		function clickcap() {
		
			self.tabs.visible = true; //פותח כרטסית מידע 
			capsulClick = true; //נלחצה קפסולה 
			self.tabs.gotoAndStop(11); //פותח את הכרטסיה בפריים הנכון
		}
		
		///////////////////////////////////////////////////
		/////////////////////////לחיצה על X///////////////
		//////////////////////////////////////////////////
		
		self.tabs.btnX.addEventListener("click", clickX);
		
		function clickX() {
			self.tabs.visible = false; //סוגר את הכרטסיה 
		
			capsulClick = false; //מרויד את הדגל
		
		}
		
		
		
		///////////////////////////////////////////////////
		///////////////לחיצה על informtion///////////////
		//////////////////////////////////////////////////
		self.info.addEventListener("click", clickI);
		self.tabs.nextP.addEventListener("click", clicknextp);
		self.tabs.backP.addEventListener("click", clickbeckp);
		
		function clickI() {
			self.info.cursor = "help";
			self.tabs.visible = true;
			self.tabs.gotoAndStop(12);
			capsulClick = true; //נלחצה קפסולה 
		
		}
		
		function clicknextp() {
			self.tabs.gotoAndStop(13);
		}
		function clickbeckp() {
			self.tabs.gotoAndStop(12);
		}
		self.about.addEventListener("click", clickabout);
		function clickabout() {
		
			self.tabs.visible = true;
			self.tabs.gotoAndStop(14);
			capsulClick = true;
		}
		
		self.tabs.hit.addEventListener("click", goURL);
		function goURL() {
		
			window.open("https://www.hit.ac.il/telem/overview");
		
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tab
	this.tabs = new lib.tab();
	this.tabs.name = "tabs";
	this.tabs.setTransform(644.4,348.55,0.9688,0.9475,0,0,0,233,286.2);

	this.timeline.addTween(cjs.Tween.get(this.tabs).wait(1));

	// text
	this.txt1 = new cjs.Text("", "normal 400 25px 'Varela Round'");
	this.txt1.name = "txt1";
	this.txt1.textAlign = "center";
	this.txt1.lineHeight = 35;
	this.txt1.lineWidth = 424;
	this.txt1.parent = this;
	this.txt1.setTransform(224.1,618.45);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.txt1);
	}

	this.txt = new cjs.Text("", "normal 400 25px 'Varela Round'");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 35;
	this.txt.lineWidth = 424;
	this.txt.parent = this;
	this.txt.setTransform(224.45,544.5);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.txt);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt},{t:this.txt1}]}).wait(1));

	// Country
	this.kosta = new lib.kosta();
	this.kosta.name = "kosta";
	this.kosta.setTransform(1169.3,351.15,1,1,0,0,0,88.5,18.4);

	this.mexico = new lib.mexico();
	this.mexico.name = "mexico";
	this.mexico.setTransform(1199,595.9,1,1,0,0,0,59,20.4);

	this.colimbiaC = new lib.colimbiaC();
	this.colimbiaC.name = "colimbiaC";
	this.colimbiaC.setTransform(1187,537.45,1,1,0,0,0,70.9,20.4);

	this.etyopya = new lib.etyopya();
	this.etyopya.name = "etyopya";
	this.etyopya.setTransform(1193,473.9,1,1,0,0,0,64.9,20.4);

	this.brazil = new lib.brazil();
	this.brazil.name = "brazil";
	this.brazil.setTransform(1207.5,417.75,1,1,0,0,0,50.5,20.4);

	this.india = new lib.india();
	this.india.name = "india";
	this.india.setTransform(1209.75,298.1,1,1,0,0,0,48.1,20.4);

	this.nikc = new lib.nikC();
	this.nikc.name = "nikc";
	this.nikc.setTransform(1190.3,236.25,1,1,0,0,0,67.5,20.4);

	this.auganda = new lib.auganda();
	this.auganda.name = "auganda";
	this.auganda.setTransform(1196.5,175.85,1,1,0,0,0,61.4,20.4);

	this.instance = new lib.mexico1();
	this.instance.setTransform(1198.95,594.2,1,1,0,0,0,59,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.auganda},{t:this.nikc},{t:this.india},{t:this.brazil},{t:this.etyopya},{t:this.colimbiaC},{t:this.mexico},{t:this.kosta}]}).wait(1));

	// Capsules
	this.text = new cjs.Text("אודות", "normal 400 12px 'Secular One'");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 29;
	this.text.parent = this;
	this.text.setTransform(1146.6,690.55);
	if(!lib.properties.webfonts['Secular One']) {
		lib.webFontTxtInst['Secular One'] = lib.webFontTxtInst['Secular One'] || [];
		lib.webFontTxtInst['Secular One'].push(this.text);
	}

	this.text_1 = new cjs.Text("i", "normal 400 12px 'Secular One'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 6;
	this.text_1.parent = this;
	this.text_1.setTransform(1200.5,692.45);
	if(!lib.properties.webfonts['Secular One']) {
		lib.webFontTxtInst['Secular One'] = lib.webFontTxtInst['Secular One'] || [];
		lib.webFontTxtInst['Secular One'].push(this.text_1);
	}

	this.about = new lib.abutus();
	this.about.name = "about";
	this.about.setTransform(1147,671.5,1,1,0,0,0,19,18.5);
	new cjs.ButtonHelper(this.about, 0, 1, 1);

	this.info = new lib.information();
	this.info.name = "info";
	this.info.setTransform(1200,671.5,1,1,0,0,0,19,18.5);
	new cjs.ButtonHelper(this.info, 0, 1, 1);

	this.nameOf = new lib.textText();
	this.nameOf.name = "nameOf";
	this.nameOf.setTransform(722.1,341.4,1,1,0,0,0,173,84.6);

	this.cap = new lib.capriso();
	this.cap.name = "cap";
	this.cap.setTransform(594.85,130.3,1,1,0,0,0,55.7,67.8);

	this.carmel = new lib.caramel();
	this.carmel.name = "carmel";
	this.carmel.setTransform(483.85,223.3,1,1,0,0,0,55.7,67.8);

	this.cosi = new lib.cosi_1();
	this.cosi.name = "cosi";
	this.cosi.setTransform(372.15,291.5);

	this.forti = new lib.fortisio();
	this.forti.name = "forti";
	this.forti.setTransform(476.85,482.3,1,1,0,0,0,55.7,67.8);

	this.rist = new lib.rist_1();
	this.rist.name = "rist";
	this.rist.setTransform(579.85,568.3,1,1,0,0,0,55.7,67.8);

	this.arp = new lib.arpeggio_1();
	this.arp.name = "arp";
	this.arp.setTransform(719.85,610.3,1,1,0,0,0,55.7,67.8);

	this.envivo = new lib.envivo_1();
	this.envivo.name = "envivo";
	this.envivo.setTransform(846.85,575,1,1,0,0,0,55.7,74.5);

	this.voloto = new lib.voloto_1();
	this.voloto.name = "voloto";
	this.voloto.setTransform(957.85,495.3,1,1,0,0,0,55.7,67.8);

	this.vivalto = new lib.vivlto_1();
	this.vivalto.name = "vivalto";
	this.vivalto.setTransform(1003.85,359.3,1,1,0,0,0,55.7,67.8);

	this.napoli = new lib.napoli_1();
	this.napoli.name = "napoli";
	this.napoli.setTransform(950.85,223.3,1,1,0,0,0,55.7,67.8);

	this.colombia = new lib.colombia();
	this.colombia.name = "colombia";
	this.colombia.setTransform(846.85,130.3,1,1,0,0,0,55.7,67.8);

	this.nik = new lib.nik_1();
	this.nik.name = "nik";
	this.nik.setTransform(719.85,87.3,1,1,0,0,0,55.7,67.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nik},{t:this.colombia},{t:this.napoli},{t:this.vivalto},{t:this.voloto},{t:this.envivo},{t:this.arp},{t:this.rist},{t:this.forti},{t:this.cosi},{t:this.carmel},{t:this.cap},{t:this.nameOf},{t:this.info},{t:this.about},{t:this.text_1},{t:this.text}]}).wait(1));

	// backgrund
	this.text_2 = new cjs.Text("Cupsoul", "36px 'Showcard Gothic'", "#3366FF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 47;
	this.text_2.lineWidth = 239;
	this.text_2.alpha = 0.90196078;
	this.text_2.parent = this;
	this.text_2.setTransform(123.65,21.5);

	this.instance_1 = new lib.shish();
	this.instance_1.setTransform(1279.9,-1,1.2783,1.2754,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_2}]}).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Ehljg5zMDLHAAAMAAABznMjLHAAAg");
	this.shape.setTransform(640,360);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhljA50MAAAhznMDLHAAAMAAABzng");
	this.shape_1.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(629,349,662,382);
// library properties:
lib.properties = {
	id: '672AEBDFAD8D6B4898776D2082E28ADE',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/cupsoul_atlas_1.png?1602340560649", id:"cupsoul_atlas_1"}
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
an.compositions['672AEBDFAD8D6B4898776D2082E28ADE'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;