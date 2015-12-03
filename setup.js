var width =  d3.select("#nav-map").attr('width'),
    height = d3.select("#nav-map").attr('height'),
    r=30;

var graph = {
    "nodes":[
	{'name':'ANE','x':width/2,'y':height/2, 'id':'ane', 'url':'http://sites.fas.harvard.edu/~ancientlives/index.html'},
	{'name':'exhibits','x':width/2-50,'y':height/2, 'id':'exhibits', 'url':'http://sites.fas.harvard.edu/~ancientlives/exhibit.html'},
	{'name':'blogs','x':width/2-30,'y':height/2-50, 'id':'blogs', 'url':'http://sites.fas.harvard.edu/~ancientlives/webpres_mainpage.html'},
	{'name':'casting','x':width/2-30,'y':height/2+50, 'id':'casting', 'url':'http://sites.fas.harvard.edu/~ancientlives/casting_recipe.html'},
	{'name':'lab','x':width/2+50,'y':height/2-30, 'id':'lab', 'url':'http://sites.fas.harvard.edu/~ancientlives/slider/index2.html'},
	{'name':'paper','x':width/2+50,'y':height/2+30,'id':'paper', 'url':'http://sites.fas.harvard.edu/~ancientlives/term_papers.html'}
    ],
    "links":[
	{"source":0,"target":1},
	{"source":0,"target":2},
	{"source":0,"target":3},
	{"source":0,"target":4},
	{"source":0,"target":5}
    ]
};

var setupDefs = function(){
    /** https://groups.google.com/forum/#!topic/d3-js/1P5IphE319g 
     and http://stackoverflow.com/questions/32221296/d3-js-codeflower-image-as-circle-background**/
    var defs = svg.append('svg:defs');
    var formats = {'ane':'.jpg',
		   'lab':'.png',
		   'paper':'.jpg',
		   'casting':'.jpg',
		   'exhibits':'.jpg',
		   'blogs':'.jpg'
		  };
    for (name in formats){
	defs.append('svg:pattern')
	    .attr('id',name+'Img')
	    .attr('width',r*4)
	    .attr('height',r*4)
	    .attr('patternUnits','objectBoundingBox')
	    .attr('width',1)
	    .attr('height',1)
	    .append('svg:image')
	    .attr('xlink:xlink:href','http://sites.fas.harvard.edu/~ancientlives/'+name+formats[name])
	    .attr('x',0)
	    .attr('y',0)
	    .attr('width',r*4)
	    .attr('height',r*4)
	    .attr('preserveAspectRatio','xMinYMin slice');
    };
};

