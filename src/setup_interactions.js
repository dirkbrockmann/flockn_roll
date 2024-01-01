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

const startstop = (display,config) => {
	ct.go.value() == 1 ? timer = interval(()=>iterate(display,config),cfg.simulation.delay) : timer.stop()

}

const update_cartoon = (controls) => {
	controls.select("."+styles.attract_scope)
	.attr("d",scope(cfg.widgets.cartoon_size*parameters.attraction_radius.widget.value(),270-parameters.blind_spot.widget.value() / 2))
	controls.select("."+styles.orient_scope).attr("d",scope(cfg.widgets.cartoon_size*parameters.alignment_radius.widget.value(),270-parameters.blind_spot.widget.value() / 2))
	controls.select("."+styles.repell_scope).attr("r",cfg.widgets.cartoon_size*parameters.collision_radius.widget.value())
	controls.select("."+styles.speed).attr("d",scope(cfg.widgets.cartoon_speed_factor*cfg.widgets.cartoon_size*parameters.speed.widget.value(),90+parameters.wiggle.widget.value() ))


}

export default (display,controls,config) => {
	
	ct.reset.update(()=>resetparameters(controls))	
	ct.go.update(()=>startstop(display,config)) 
	ct.setup.update(()=>initialize(display,config)) 
	each(ct.sliders,sl => {sl.update(()=>update_cartoon(controls) ) })
	
	ct.toggles[0].update(()=>(update(display,config)))
	
}

