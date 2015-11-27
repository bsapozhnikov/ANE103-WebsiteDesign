var svg = d3.select("#nav-map")

var force = d3.layout.force()
	.size([width,height])
	.nodes(graph.nodes)
	.links(graph.links)
	.linkDistance(20)
	.charge(-3000)
	.friction(0.95)
	.gravity(0.4)
	.start();

setupDefs();

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
		    d3.select(this.parentNode.parentNode).attr('growing','false');
		});
	    force.charge(function(d2,i2){
		return d==d2 ? -3500 : -2500;
	    }).start();
	})
	.on("mouseout",function(d){
	    d3.select(this).attr('shrink','true');
	})
	.on('click',function(d){
	    
	});

var anchor = node.append("svg:a")
	.attr("xlink:href",function(d){return d.url;});

var circle = anchor.append("circle")
	.attr("class", "circle")
	.attr("r", r)
	.attr("fill","white")
	.attr("stroke","black");

var text = anchor.append("text")
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
