[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg

# Flock'n Roll

[![CC BY 4.0][cc-by-shield]][cc-by]

This explorable illustrates the dynamics of a model for collective behavior in swarms, like flocks of birds, or schools of fish. In the model, a collection of agents move at constants speeds, try to avoid collisions, try to align their heading to the motion of neighbors and are attracted to the swarm.

The explorable is part of the [**Complexity Exporables Collection**](https://www.complexity-explorables.org). For more information about the system and its behavior consult the explorable
> [**“Flock'n Roll” - Collective Behavior - Schooling Fish & Flocking Birds**](https://www.complexity-explorables.org/explorables/flockn-roll/)

## Usage & Installation


### Just running the explorable

If you just want to run the explorable: [**click to open**](https://raw.githack.com/dirkbrockmann/flockn_roll/main/dist/index.html)

(served from GitHub via [https://raw.githack.com/](https://raw.githack.com/))

### Running a local copy

If you want to run a local copy without having to rely on the nasty internet, the best way
is to install it via `npm`:

```shell
npm install @explorables/flockn_roll
open node_modules/@explorables/flockn_roll/dist/index.html 
```

### Embedding the explorable in your site

If you want to embed the explorable in your site, you need to do three things:

1. load the explorable package via `<script>` tag in your page header
2. add a `<div>` container element
3. add a `<script>` at the end of the document that loads the explorable
	
like so:

```html
<!doctype html>
<html>
	<head>
		...
		<script src="https://cdn.jsdelivr.net/npm/@explorables/flockn_roll"></script>
		...
	</head>
		...
	<body>
		...
	    <div id="explorable_container"></div>
		...
	</body>
		...
	<script type="text/javascript">
		flockn_roll.load("explorable_container")
	</script>
		...
</html>
```

The header `<script>` tag loads the bundle, the `<div>` in the document is the container in which the explorable gets anchored when the function `flockn_roll.load()` gets executed at the bottom. The `load` function needs the `<div>` container `id` as an argument.

### Installing the whole package locally

If you want to modify or edit the explorable to make your own version: 

Clone repository:

```shell
git clone https://github.com/dirkbrockmann/flockn_roll.git
```


Go to the directory, install, build and show using `npm`:

1. `cd flockn_roll`
2. `npm install`
3. `npm run build`
4. `npm run show`

## License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]


