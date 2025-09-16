import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"
import {tadpole,dist} from "./utils.js"
import styles from "./styles.module.css"

const L = param.L;
const X = d3.scaleLinear().domain([0,L]);
const Y = d3.scaleLinear().domain([0,L]);


function agent_color(a){
	return param.orli_switch.widget.value() ? d3.interpolateRainbow(a.theta / 360) : null
}


const initialize = (display,config) => {

	const W = config.display_size.width;
	const H = config.display_size.height;
	
	X.range([0,W]);
	Y.range([0,H]);
		
	display.select("#origin").remove()
		
	const origin = display.append("g").attr("id","origin")
	
	const agent = origin.selectAll("."+styles.agent).data(agents).enter().append("g")
		.attr("class",styles.agent)
		.attr("transform",d => "translate("+X(d.x)+","+Y(d.y)+")rotate("+(d.theta)+")")
		.style("fill",agent_color)
	
	agent.append("path").attr("d",tadpole(param.agentsize))

};


const go = (display,config) => {
		
	display.selectAll("."+styles.agent)
		.attr("transform",d => "translate("+X(d.x)+","+Y(d.y)+")rotate("+(d.theta)+")")
		.style("fill",agent_color)
	
}

const update = (display,config) => {
	display.selectAll("."+styles.agent)
		.attr("transform",d => "translate("+X(d.x)+","+Y(d.y)+")rotate("+(d.theta)+")")
		.style("fill",agent_color)
}


export {initialize,go,update}
