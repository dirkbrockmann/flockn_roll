// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		N:200,
		L:128,
		agentsize: 6.0,
		dt:1,
		speed_variation: 0.5,
		angular_increment:0.2,
	
		speed: {
			range:[0,1],
			default:0.64
		},
		collision_radius: {
			range:[0,3],
			default:1
		},
		alignment_radius: {
			range:[0,10],
			default:5
		},
		attraction_radius: {
			range:[0,20],
			default:15
		},
		wiggle: {
			range:[0,60],
		default:15
		},
		blind_spot: {
			range:[1,360],
			default:120
		},
		orli_switch: {
			default: false
		}
		
}

