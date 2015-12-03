var width2 =  d3.select("#d3Gallery").attr('width'),
    height2 = d3.select("#d3Gallery").attr('height'),
    r2=30;

var imageGraph = {
    "nodes":[
	{'name':'IMAGE','x':width2/2,'y':height2/2, 'id':'ane', 'url':'http://sites.fas.harvard.edu/~ancientlives/index.html'},
	{'name':'exhibits','x':width2/2-50,'y':height2/2, 'id':'exhibits', 'url':'http://sites.fas.harvard.edu/~ancientlives/slider/index2.html'},
	{'name':'blogs','x':width2/2-30,'y':height2/2-50, 'id':'blogs', 'url':'http://sites.fas.harvard.edu/~ancientlives/webpres_mainpage.html'},
	{'name':'casting','x':width2/2-30,'y':height2/2+50, 'id':'casting', 'url':'http://sites.fas.harvard.edu/~ancientlives/casting_recipe.html'},
	{'name':'lab','x':width2/2+50,'y':height2/2-30, 'id':'lab', 'url':'http://sites.fas.harvard.edu/~ancientlives/slider/index2.html'},
	{'name':'paper','x':width2/2+50,'y':height2/2+30,'id':'paper', 'url':'http://sites.fas.harvard.edu/~ancientlives/term_papers.html'}
    ],
    "links":[
	{"source":0,"target":1},
	{"source":0,"target":2},
	{"source":0,"target":3},
	{"source":0,"target":4},
	{"source":0,"target":5}
    ]
};

var setupDefs2 = function(){
    /** https://groups.google.com/forum/#!topic/d3-js/1P5IphE319g 
     and http://stackoverflow.com/questions/32221296/d3-js-codeflower-image-as-circle-background**/
    var defs2 = svg2.append('svg:defs');
    var formats2 = {'ane':'.jpg',
		   'lab':'.png',
		   'paper':'.jpg',
		   'casting':'.jpg',
		   'exhibits':'.jpg',
		   'blogs':'.jpg'
		  };
    for (name in formats2){
	defs2.append('svg:pattern')
	    .attr('id',name+'Img')
	    .attr('width',r2*4)
	    .attr('height',r2*4)
	    .attr('patternUnits','objectBoundingBox')
	    .attr('width',1)
	    .attr('height',1)
	    .append('svg:image')
	    .attr('xlink:xlink:href','http://sites.fas.harvard.edu/~ancientlives/'+name+formats2[name])
	    .attr('x',0)
	    .attr('y',0)
	    .attr('width',r2*4)
	    .attr('height',r2*4)
	    .attr('preserveAspectRatio','xMinYMin slice');
	defs2.append('svg:pattern')
	    .attr('id',name+'ImgMini')
	    .attr('width',r2*2)
	    .attr('height',r2*2)
	    .attr('patternUnits','objectBoundingBox')
	    .attr('width',1)
	    .attr('height',1)
	    .append('svg:image')
	    .attr('xlink:xlink:href','http://sites.fas.harvard.edu/~ancientlives/'+name+formats2[name])
	    .attr('x',0)
	    .attr('y',0)
	    .attr('width',r2*2)
	    .attr('height',r2*2)
	    .attr('preserveAspectRatio','xMinYMin slice');
    };
};
