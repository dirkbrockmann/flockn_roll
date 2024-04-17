import {scaleLinear} from "d3"
import * as widgets from "d3-widgets"
import {range,map,toPairs} from "lodash-es"
import cfg from "./config.js"
import parameters from "./parameters.js"
import {toArray,add_id_label,add_widget,get_variables,get_booleans,get_choices,tadpole,scope} from "./utils.js"
import styles from "./styles.module.css"

const variables = get_variables(parameters);
const booleans = get_booleans(parameters);

add_id_label(variables)
add_id_label(booleans)

const va = toArray(variables);
const bo = toArray(booleans);

const sliders = map(va,
		v => widgets.slider()
					.id(v.id)
					.label(v.label)
					.range(v.range)
					.value(v.default)
					.girth(cfg.widgets.slider_girth)	
					.knob(cfg.widgets.slider_knob)
					.size(cfg.widgets.slider_size)
		);

		
const toggles = map(bo, 
		v => widgets.toggle()
					.id(v.id)
					.label(v.label)
					.value(v.default)
					.labelposition(cfg.widgets.toggle_label_pos)
					.size(13)
		);

	
add_widget(bo,toggles);
add_widget(va,sliders);

const go = widgets.button().actions(["play","pause"])
const setup = widgets.button().actions(["back"])
const reset = widgets.button().actions(["rewind"])

		
const buttons = [go,setup,reset];

//toggles[0].label("Orli's Magic Switch")

export default (controls,grid)=>{
		
	const ct_pos=grid.position(cfg.widgets.cartoon_anchor.x,cfg.widgets.cartoon_anchor.y);	

	const cartoon = controls.append("g").attr("id","cartoon")
		.attr("transform","translate("+ct_pos.x +","+ ct_pos.y +")")

	cartoon.append("path")
		.attr("d",scope(cfg.widgets.cartoon_size*parameters.attraction_radius.widget.value(),270-parameters.blind_spot.widget.value() / 2))
		.attr("class",styles.attract_scope)
	
	 cartoon.append("path")
		.attr("d",scope(cfg.widgets.cartoon_size*parameters.alignment_radius.widget.value(),270-parameters.blind_spot.widget.value() / 2))
		.attr("class",styles.orient_scope)

	cartoon.append("path") 		.attr("d",scope(cfg.widgets.cartoon_speed_factor*cfg.widgets.cartoon_size*parameters.speed.widget.value(),90+parameters.wiggle.widget.value() ))
 	.attr("class",styles.speed)
	
	cartoon.append("path")
		.attr("class",styles.drop)
		.attr("transform","scale(4)translate(0,"+(3)+")rotate(-90)")
		.attr("d",tadpole(cfg.widgets.cartoon_tadpole_size))
		
	 
	cartoon.append("circle")
 		.attr("r",cfg.widgets.cartoon_size*parameters.collision_radius.widget.value())
 		.attr("class",styles.repell_scope)


	const sl_pos=grid.position(cfg.widgets.slider_anchor.x,range(sliders.length)
			.map(x=>(cfg.widgets.slider_anchor.y+cfg.widgets.slider_gap*x)));
	
	const tg_pos=grid.position(cfg.widgets.toggle_anchor.x,cfg.widgets.toggle_anchor.y);	

	
	sliders.forEach((sl,i) => sl.position(sl_pos[i]));

	toggles[0].position(tg_pos).labelposition(cfg.widgets.toggle_label_pos)
	
	go.position(grid.position(cfg.widgets.playbutton_anchor.x,cfg.widgets.playbutton_anchor.y))
		.size(cfg.widgets.playbutton_size);
	
	reset.position(grid.position(cfg.widgets.backbutton_anchor.x,cfg.widgets.backbutton_anchor.y));
	
	setup.position(grid.position(cfg.widgets.resetbutton_anchor.x,cfg.widgets.resetbutton_anchor.y));
	

	controls.selectAll(null).data(sliders).enter().append(widgets.widget);
	controls.selectAll(null).data(toggles).enter().append(widgets.widget);
	controls.selectAll(null).data(buttons).enter().append(widgets.widget);

}

export {sliders,toggles,go,setup,reset,variables,booleans}


