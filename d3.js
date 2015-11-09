var width = 500,
    height = 500;

var r = 30;

var graph = {
    "nodes":[
	{'name':'ANE','x':width/2,'y':height/2, 'id':'ane'},
	{'name':'exhibits','x':width/2-50,'y':height/2, 'id':'exhibits'},
	{'name':'blogs','x':width/2-30,'y':height/2-50, 'id':'blogs'},
	{'name':'casting','x':width/2-30,'y':height/2+50, 'id':'casting'},
	{'name':'lab','x':width/2+50,'y':height/2-30, 'id':'lab'},
	{'name':'paper','x':width/2+50,'y':height/2+30,'id':'paper'}
    ],
    "links":[
	{"source":0,"target":1},
	{"source":0,"target":2},
	{"source":0,"target":3},
	{"source":0,"target":4},
	{"source":0,"target":5}
    ]
};

var svg = d3.select("#nav-map")
	.attr("width",width)
	.attr("height",height);

var force = d3.layout.force()
	.size([width,height])
	.nodes(graph.nodes)
	.links(graph.links)
	.linkDistance(20)
	.charge(-3000)
	.friction(0.95)
	.gravity(0.4)
	.start();

/** https://groups.google.com/forum/#!topic/d3-js/1P5IphE319g 
 and http://stackoverflow.com/questions/32221296/d3-js-codeflower-image-as-circle-background**/
var defs = svg.append('svg:defs');
defs.append('svg:pattern')
    .attr('id','aneImg')
    .attr('width',r*4)
    .attr('height',r*4)
    .attr('patternUnits','objectBoundingBox')
    .attr('width',1)
    .attr('height',1)
    .append('svg:image')
    .attr('xlink:xlink:href','ane.jpg')
    .attr('x',-10)
    .attr('y',-10)
    .attr('width',r*4)
    .attr('height',r*4)
    .attr('preserveAspectRatio','xMinYMin slice');
defs.append('svg:pattern')
    .attr('id','labImg')
    .attr('width',r*4)
    .attr('height',r*4)
    .attr('patternUnits','objectBoundingBox')
    .attr('width',1)
    .attr('height',1)
    .append('svg:image')
    .attr('xlink:xlink:href','lab.png')
    .attr('x',0)
    .attr('y',0)
    .attr('width',r*4)
    .attr('height',r*4)
    .attr('preserveAspectRatio','xMinYMin slice');
defs.append('svg:pattern')
    .attr('id','paperImg')
    .attr('width',r*4)
    .attr('height',r*4)
    .attr('patternUnits','objectBoundingBox')
    .attr('width',1)
    .attr('height',1)
    .append('svg:image')
    .attr('xlink:xlink:href','paper.jpg')
    .attr('x',0)
    .attr('y',0)
    .attr('width',r*4)
    .attr('height',r*4)
    .attr('preserveAspectRatio','xMinYMin slice');
defs.append('svg:pattern')
    .attr('id','castingImg')
    .attr('width',r*4)
    .attr('height',r*4)
    .attr('patternUnits','objectBoundingBox')
    .attr('width',1)
    .attr('height',1)
    .append('svg:image')
    .attr('xlink:xlink:href','casting.jpg')
    .attr('x',0)
    .attr('y',0)
    .attr('width',r*4)
    .attr('height',r*4)
    .attr('preserveAspectRatio','xMinYMin slice');
defs.append('svg:pattern')
    .attr('id','exhibitsImg')
    .attr('width',r*4)
    .attr('height',r*4)
    .attr('patternUnits','objectBoundingBox')
    .attr('width',1)
    .attr('height',1)
    .append('svg:image')
    .attr('xlink:xlink:href','exhibit.jpg')
    .attr('x',0)
    .attr('y',0)
    .attr('width',r*4)
    .attr('height',r*4)
    .attr('preserveAspectRatio','xMinYMin slice');
defs.append('svg:pattern')
    .attr('id','blogsImg')
    .attr('width',r*4-20)
    .attr('height',r*4-20)
    .attr('patternUnits','objectBoundingBox')
    .attr('width',1)
    .attr('height',1)
    .append('svg:image')
    .attr('xlink:xlink:href','blog.jpg')
    .attr('x',10)
    .attr('y',10)
    .attr('width',r*4-20)
    .attr('height',r*4-20)
    .attr('preserveAspectRatio','xMinYMin slice');


var link = svg.selectAll(".link")
	.data(graph.links)
	.enter().append("line")
	.attr("class","link")
	.attr("stroke","black");


var node = svg.selectAll(".node")
	.data(graph.nodes)
	.enter().append("g")
	.call(force.drag)
	.attr("class","node")
	.on("mouseover",function(d,i){
	    var img = '#'+d.id+'Img';
	    d3.select(this).attr('growing','true');
	    d3.select(this).select('text').style('visibility','hidden');
	    d3.select(this).select('circle').transition()
		.attr('r',r*2)
		.attr("fill","url("+img+")")
		.each("end",function(){
		    d3.select(this.parentNode).attr('growing','false');
		});
	    force.charge(function(d2,i2){
		return d==d2 ? -3500 : -2500;
	    }).start();
	})
	.on("mouseout",function(d){
	    d3.select(this).attr('shrink','true');
	});

var circle = node.append("circle")
	.attr("class", "circle")
	.attr("r", r)
	.attr("fill","white")
	.attr("stroke","black");

var text = node.append("text")
	.text(function(d){return d.name;})
	.attr("text-anchor","middle");

force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
    
    circle.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });

    text.attr("x",function(d){return d.x;})
	.attr("y",function(d){return d.y;});

    d3.selectAll('.node[shrink="true"][growing="false"]').each(function(d){
	d3.select(this).attr('shrink','false');
	d3.select(this).select('text').style('visibility','visible');
	d3.select(this).select('circle').attr("fill","#fff")
	    .transition()
	    .attr('r',r);
	force.charge(function(d2,i2){
	    return -3000;
	}).start();
    });
});
