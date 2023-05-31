// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {each,range,map,meanBy,filter} from "lodash-es"
import {rad2deg,deg2rad,dist} from "./utils"

const L = param.L;
const dt = param.dt;
const N = param.N;

// typically objects needed for the explorable
// are defined here

var agents = [];

// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;

	agents = map(range(N), i => {
			return {id:i, 
				x: Math.random() * L, 
				y: Math.random() * L, 
				theta: Math.random() * 360,
				speed_var:(1+Math.random()*param.speed_variation)
			}
	})
	
	
};

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.

const go  = () => {
	
	param.tick++;
	
	// we first compute the anticipated orientation based on attraction, alignment
	// and collission
	
	let blind = Math.cos(( 180 - param.blind_spot.widget.value() / 2 )/180*Math.PI);
	
	each(agents,a=>{
		let colliders = [];
		var wanted_x,wanted_y;
		var theta_orient;
		var theta_attract;
		
		
		colliders = filter(agents,d=>{
			return (dist(a,d) < param.collision_radius.widget.value()) && (d.id != a.id);
		})	
		
		if(colliders.length>0) {		
			
			wanted_x = a.x - meanBy(colliders,d => d.x);
			wanted_y = a.y - meanBy(colliders,d => d.y);			
			
		} else {
			
			const vx = Math.cos(deg2rad(a.theta));
			const vy = Math.sin(deg2rad(a.theta));
			const vabs = Math.sqrt(vx*vx + vy*vy);

			const neighbors = filter(agents,d => {
				let dx = d.x-a.x;
				let dy = d.y-a.y;
				d.r = Math.sqrt(dx*dx+dy*dy);
				let sight = (dx*vx + dy*vy) / (vabs * d.r);
				return (d.r < param.attraction_radius.widget.value() && (sight > blind)  &&  d.id!=a.id)
			})

		// now we separate them into the agents to align with and those to be attracted to

			const alignors = filter(neighbors,d => d.r < param.alignment_radius.widget.value())
			const attractors = filter(neighbors,d => d.r > param.alignment_radius.widget.value())
			
			theta_orient = a.theta;
			theta_attract = a.theta;

			if (alignors.length > 0){
				const mx = meanBy(alignors,x=> Math.cos(deg2rad(x.theta)))
				const my = meanBy(alignors,x=> Math.sin(deg2rad(x.theta)))
				theta_orient = rad2deg(Math.atan2(my,mx));
			}
		
			if (attractors.length > 0){
				const mx = meanBy(attractors,d => d.x)
				const my = meanBy(attractors,d => d.y)
				theta_attract = rad2deg(Math.atan2(my-a.y,mx-a.x));
			} 
				
			wanted_x = 0.5*( Math.cos(deg2rad(theta_orient)) + Math.cos(deg2rad(theta_attract)))
			wanted_y = 0.5*( Math.sin(deg2rad(theta_orient)) + Math.sin(deg2rad(theta_attract)))
		}
		
		const new_x = Math.cos(deg2rad(a.theta)) +  param.angular_increment * wanted_x;
		const new_y = Math.sin(deg2rad(a.theta)) +  param.angular_increment * wanted_y;

		a.theta = rad2deg(Math.atan2(new_y,new_x));
		
	})
	
	// we add some noise to the angle
	
	each(agents, d=> {
		d.theta = d.theta + (Math.random() -  0.5) * param.wiggle.widget.value();
	})
	
	// now we make a step with an environmentally determined speed
	
	each(agents, d => {

		const v = param.speed.widget.value();
		const phi = deg2rad(d.theta);
		let dx =  dt * v*d.speed_var * Math.cos(phi);
		let dy =  dt * v*d.speed_var * Math.sin(phi);

		let x_new = (d.x + dx);
		let y_new = (d.y + dy);

		// this takes care of the boundaries

		if (x_new < 0 || x_new > L) dx *= -1;
		if (y_new < 0 || y_new > L) dy *= -1;

		d.x = (d.x + dx)
		d.y = (d.y + dy)
		
		d.theta = rad2deg(Math.atan2(dy,dx))
	})
	
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 

const update = () => {
	
	// each(agents,x => {x.active = x.index < param.number_of_particles.widget.value() ? true : false})

}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {agents,initialize,go,update}
