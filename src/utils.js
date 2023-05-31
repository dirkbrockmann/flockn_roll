import * as d3 from "d3"
import {map, replace, capitalize, each, has, isBoolean, pickBy, toPairs,range } from "lodash-es"

// const add_id_label = (x) => map(toPairs(x), d => {d[1]["id"]=d[0]; d[1]["label"]=replace(capitalize(d[0]),/_/g," "); return d[1]} );

const add_id_label = (x) => map(toPairs(x), d => {d[1]["id"]=d[0]; d[1]["label"]=replace(capitalize(d[0]),/_/g," ")} );

const toArray = (x) => map(toPairs(x),d=>d[1]);

const add_widget = (p,w) => each(p,(v,i) => v["widget"]=w[i]);	

const get_variables = (p) => pickBy(p, v =>  has(v, "range"))  
const get_booleans = (p) => pickBy(p, v =>  isBoolean(v.default))  
const get_choices = (p) => pickBy(p, v =>  has(v, "choices"))  

const deg2rad = d3.scaleLinear().domain([0,360]).range([0,2*Math.PI]);
const rad2deg = d3.scaleLinear().range([0,360]).domain([0,2*Math.PI]);

const dist = (a,b) => {
	const dx = (a.x-b.x);
	const dy = (a.y-b.y);
	return Math.sqrt(dx*dx + dy*dy);
}

const tadpole = (scale) => {
	const M = 30;
	const line = d3.line()
		.x(d => scale*d.x)
		.y(d => scale*d.y);
			
	const drop = map(range(M),i => {
			return { 
				x: -2 * Math.cos(i/M*Math.PI*2), 
				y: Math.sin(i/M*Math.PI*2) * Math.pow( Math.sin(i/M/2*Math.PI*2) , 6 )
			};
		})
		
	return line(drop);
}	

function scope(r,theta){
	var x0 =  r*Math.cos(theta/360*2*Math.PI);
	var y0 = -r*Math.sin(theta/360*2*Math.PI);
	var x1 =  -x0;
	var y1 = y0;
	var donkey = theta < 180 ? 0 : 1;
	return "M 0,0 L " +x0+","+y0+" A "+r+" "+r+" 0 "+donkey+" 1 "+x1+","+y1+ "L 0,0" 
}	


export {scope,tadpole,dist,toArray,add_id_label,add_widget,get_variables,get_booleans,get_choices,deg2rad,rad2deg}