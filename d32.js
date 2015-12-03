var svg2 = d3.select("#d3Gallery");

var force2 = d3.layout.force()
	.size([width2,height2])
	.nodes(imageGraph.nodes)
	.links(imageGraph.links)
	.linkDistance(20)
	.charge(-1200)
	.friction(0.95)
	.gravity(0.43)
	.start();

setupDefs2();

var link2 = svg2.selectAll(".link2")
	.data(imageGraph.links)
	.enter().append("line")
	.attr("class","link2")
	.attr("stroke","black");


var node2 = svg2.selectAll(".node2")
	.data(imageGraph.nodes)
	.enter().append("g")
	.call(force2.drag)
	.attr("class","node2")
	.on("mouseover",function(d,i){
	    var img = '#'+d.id+'Img';
	    d3.select(this).attr('growing','true');
	    d3.select(this).attr('big','true')
	    //d3.select(this).select('text').style('visibility','hidden');
	    d3.select(this).select('rect'/*'circle'*/).transition()
	    //.attr('r',r2*scaling)
		.attr('width',function(d){return r2*scaling*2*d.ratio;})
		.attr('height',r2*scaling*2)
		.attr("fill","url("+img+")")
		.each("end",function(){
		    d3.select(this.parentNode.parentNode).attr('growing','false');
		})
		.duration(500);
	    force2.charge(function(d2,i2){
		return d==d2 ? -50000 : -50;
	    }).start();
	})
	.on("mouseout",function(d){
	    d3.select(this).attr('shrink','true');
	})
	.on('click',function(d){
	    
	});

var anchor2 = node2.append("svg:a");
	//.attr("xlink:href",function(d){return d.url;});

var circle2 = anchor2.append("rect"/*"circle"*/)
	.attr("class", "circle2")
//.attr("r", r2)
	.attr("width",function(d){return r2*2*d.ratio;})
	.attr("height",r2*2)
	.attr("fill",function(d){return "url(#"+d.id+"ImgMini)";})
	.attr("stroke","black");
/*
var text2 = anchor2.append("text")
	.text(function(d){return d.name;})
	.attr("text-anchor","middle");
*/
force2.on("tick", function() {
    link2.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
    
    circle2.attr("x"/*"cx"*/, function(d) { return d.x-parseInt(d3.select(this).attr('width'))/2; })
        .attr("y"/*"cy"*/, function(d) { return d.y-parseInt(d3.select(this).attr('height'))/2; });
/*
    text2.attr("x",function(d){return d.x;})
	.attr("y",function(d){return d.y;});
*/
    d3.selectAll('.node2[shrink="true"][growing="false"]').each(function(d){
	d3.select(this).attr('shrink','false');
	//d3.select(this).select('text').style('visibility','visible');
	d3.select(this).select('rect')
	    .attr("fill",function(d){return "url(#"+d.id+"ImgMini)";})
	    .transition()
	//.attr('r',r2);
	    .attr('width',function(d){return r2*2*d.ratio;})
	    .attr('height',r2*2);
	force2.charge(function(d2,i2){
	    return -1200;
	}).start();
    });
});
    
