// here all functions are connected to the widgets, these functions can be defined here, like the 
// startstop function connected to the go button, or they can be functions defined elsewhere,
// like the initialization functions, or reset parameter functions. Regardless, here
// all functions that need to be execuded for example if a controls element is modified, are connected
// to the update() method of an widget object. See below.


import {interval} from "d3"
import * as ct from "./controls.js"
import cfg from "./config.js"
import param from "./parameters.js"
import parameters from "./parameters.js"
import resetparameters from "./reset_parameters.js"
import {iterate,initialize,update} from "./simulation.js"
import {each} from "lodash-es"
import {scope} from "./utils.js"
import styles from "./styles.module.css"

var timer = {}

// this defines a startstop simulation function that execute the function iterate() that is defined in simulation.js
// it also uses information defined in config.js, in this case the delay time between iteration steps.

const startstop = (display,config) => {
	ct.go.value() == 1 ? timer = interval(()=>iterate(display,config),cfg.simulation.delay) : timer.stop()

}

// this function is called by index.js to connect actions and update functions to the explorables.
// once this is called, all widgets are usable in the controls panel

const update_cartoon = (controls) => {
	controls.select("."+styles.attract_scope).attr("d",scope(cfg.widgets.cartoon_size*parameters.attraction_radius.widget.value(),270-parameters.blind_spot.widget.value() / 2))
	controls.select("."+styles.orient_scope).attr("d",scope(cfg.widgets.cartoon_size*parameters.alignment_radius.widget.value(),270-parameters.blind_spot.widget.value() / 2))
	controls.select("."+styles.repell_scope).attr("r",cfg.widgets.cartoon_size*parameters.collision_radius.widget.value())
	controls.select("."+styles.speed).attr("d",scope(cfg.widgets.cartoon_speed_factor*cfg.widgets.cartoon_size*parameters.speed.widget.value(),90+parameters.wiggle.widget.value() ))


}

export default (display,controls,config) => {
	
	ct.reset.update(()=>resetparameters(controls))	// one button gets the resetparameters() method defined in resetparameters.js
	ct.go.update(()=>startstop(display,config)) // one button gets the startstop function defined above
	ct.setup.update(()=>initialize(display,config)) // this once gets the initialize() method defined in simulation.js
//	param.number_of_particles.widget.update(()=>initialize(display,config)) // here we say that if a specific parameter is changed, in this case the number of particles, we also re_initialize the system (model and visuals)
	each(ct.sliders,sl => {sl.update(()=>update_cartoon(controls) ) })
	
	ct.toggles[0].update(()=>(update(display,config)))
	
}

