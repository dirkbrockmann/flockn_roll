// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default { 
	widgets:{
		slider_size: 200,
		slider_show: true,
		slider_gap : 1.666,
		slider_girth: 12,
		slider_knob: 14,
		slider_anchor: {x:6,y:1},
		toggle_anchor: {x:10,y:11},
		toggle_size:120,
		//toggle_fontsize:20,
		toggle_label_pos:"left",
		playbutton_size: 120,
		playbutton_anchor:{x:3,y:2},
		backbutton_anchor:{x:4,y:5},
		resetbutton_anchor:{x:2,y:5},
		cartoon_anchor:{x:3,y:9},
		cartoon_size:4,
		cartoon_speed_factor:30,
		cartoon_tadpole_size:6
	},
	simulation: {
		delay:0
	}
}