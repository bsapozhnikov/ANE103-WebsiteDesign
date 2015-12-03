var width2 =  d3.select("#d3Gallery").attr('width'),
    height2 = d3.select("#d3Gallery").attr('height'),
    r2=30,
    scaling=10;

var imageGraph = {
    "nodes":[
	{'name':'beforeA',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeA', 'url':'http://i.imgur.com/yuqCaam.jpg', 'ratio':518/691},
	{'name':'beforeB',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeB', 'url':'http://i.imgur.com/t3xwjVg.jpg', 'ratio':691/518},
	{'name':'beforeC',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeC', 'url':'http://i.imgur.com/MTF2Xlq.jpg', 'ratio':691/518},
	{'name':'beforeD',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeD', 'url':'http://i.imgur.com/sIkYHNa.jpg', 'ratio':691/518},
	{'name':'beforeE',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeE', 'url':'http://i.imgur.com/YiTjixu.jpg', 'ratio':691/518},
	{'name':'beforeF',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeF', 'url':'http://i.imgur.com/OeAZuwZ.jpg', 'ratio':691/518},
	{'name':'beforeG',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeG', 'url':'http://i.imgur.com/T53SxsR.jpg', 'ratio':691/518},
	{'name':'beforeH',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeH', 'url':'http://i.imgur.com/aZ4bzcr.jpg', 'ratio':691/518},
	{'name':'beforeI',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeI', 'url':'http://i.imgur.com/zPIvPWt.jpg', 'ratio':691/518},
	{'name':'beforeJ',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeJ', 'url':'http://i.imgur.com/iDPUVYC.jpg', 'ratio':691/518},
	{'name':'beforeK',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeK', 'url':'http://i.imgur.com/GeXDeiK.jpg', 'ratio':691/518},
	{'name':'beforeL',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeL', 'url':'http://i.imgur.com/6tOAfs7.jpg', 'ratio':691/518},
	{'name':'beforeM',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeM', 'url':'http://i.imgur.com/wL5TYtt.jpg', 'ratio':691/518},
	{'name':'beforeN',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeN', 'url':'http://i.imgur.com/BQYhbdo.jpg', 'ratio':691/518},
	{'name':'beforeO',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeO', 'url':'http://i.imgur.com/i1hIT3V.jpg', 'ratio':691/518},
	{'name':'beforeP',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeP', 'url':'http://i.imgur.com/oJyimKd.jpg', 'ratio':691/518},
	{'name':'beforeQ',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeQ', 'url':'http://i.imgur.com/au7neSh.jpg', 'ratio':691/518},
	{'name':'beforeR',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeR', 'url':'http://i.imgur.com/rb48A3u.jpg', 'ratio':518/691},
	{'name':'beforeS',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeS', 'url':'http://i.imgur.com/NuZz6IZ.jpg', 'ratio':691/518},
	{'name':'beforeT',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeT', 'url':'http://i.imgur.com/rgLuk3F.jpg', 'ratio':691/518},
	{'name':'beforeU',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeU', 'url':'http://i.imgur.com/m8F2bD2.jpg', 'ratio':691/518},
	{'name':'beforeV',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeV', 'url':'http://i.imgur.com/sskbllp.jpg', 'ratio':691/518},
	{'name':'beforeW',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeW', 'url':'http://i.imgur.com/hgtTbjq.jpg', 'ratio':691/518},
	{'name':'beforeX',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeX', 'url':'http://i.imgur.com/kv61cMb.jpg', 'ratio':691/518},
	{'name':'beforeY',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeY', 'url':'http://i.imgur.com/Ipg2nS3.jpg', 'ratio':691/518},
	{'name':'beforeZ',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeZ', 'url':'http://i.imgur.com/LRI2psV.jpg', 'ratio':691/518},
	{'name':'beforeAA',/*'x':width2/2,'y':height2/2,*/ 'id':'beforeAA', 'url':'http://i.imgur.com/xS6eCmK.jpg', 'ratio':691/518}
    ],
    "links":[
	{"source":0,"target":1},
	{"source":1,"target":2},
	{"source":2,"target":3},
	{"source":3,"target":4},
	{"source":4,"target":5},
	{"source":5,"target":6},
	{"source":6,"target":7},
	{"source":7,"target":8},
	{"source":8,"target":9},
	{"source":9,"target":10},
	{"source":10,"target":11},
	{"source":11,"target":12},
	{"source":12,"target":13},
	{"source":13,"target":14},
	{"source":14,"target":15},
	{"source":15,"target":16},
	{"source":16,"target":17},
	{"source":17,"target":18},
	{"source":18,"target":19},
	{"source":19,"target":20},
	{"source":20,"target":21},
	{"source":21,"target":22},
	{"source":22,"target":23},
	{"source":23,"target":24},
	{"source":24,"target":25},
	{"source":25,"target":26},
	{"source":26,"target":0}
    ]
};

var setupDefs2 = function(){
    /** https://groups.google.com/forum/#!topic/d3-js/1P5IphE319g 
     and http://stackoverflow.com/questions/32221296/d3-js-codeflower-image-as-circle-background**/
    var defs2 = svg2.append('svg:defs');
    /*var formats2 = {'beforeA':['http://i.imgur.com/yuqCaam.jpg.jpg',691/518],
		    'beforeB':['http://i.imgur.com/t3xwjVg.jpg',518/691],
		    'paper':['paper.jpg',1],
		    'casting':['casting.jpg',1],
		    'exhibits':['exhibits.jpg',1],
		    'blogs':['blogs.jpg',1]
     };*/
    for (image in imageGraph.nodes){
	defs2.append('svg:pattern')
	    .attr('id',imageGraph.nodes[image].name+'Img')
	    .attr('width',r2*2*scaling*imageGraph.nodes[image].ratio)
	    .attr('height',r2*2*scaling)
	    .attr('patternUnits','objectBoundingBox')
	    .attr('width',1)
	    .attr('height',1)
	    .append('svg:image')
	    .attr('xlink:xlink:href',/*'http://sites.fas.harvard.edu/~ancientlives/'+*/imageGraph.nodes[image].url/*formats2[name]*/)
	    .attr('x',0)
	    .attr('y',0)
	    .attr('width',r2*2*scaling*imageGraph.nodes[image].ratio)
	    .attr('height',r2*2*scaling)
	    .attr('preserveAspectRatio','xMinYMin meet');
	defs2.append('svg:pattern')
	    .attr('id',imageGraph.nodes[image].name+'ImgMini')
	    .attr('width',r2*2*imageGraph.nodes[image].ratio)
	    .attr('height',r2*2)
	    .attr('patternUnits','objectBoundingBox')
	    .attr('width',1)
	    .attr('height',1)
	    .append('svg:image')
	    .attr('xlink:xlink:href',/*'http://sites.fas.harvard.edu/~ancientlives/'+*/imageGraph.nodes[image].url)
	    .attr('x',0)
	    .attr('y',0)
	    .attr('width',r2*2*imageGraph.nodes[image].ratio)
	    .attr('height',r2*2)
	    .attr('preserveAspectRatio','xMinYMin meet');
    };
};
