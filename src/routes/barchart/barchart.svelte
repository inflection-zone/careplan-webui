<script>

import { scaleLinear } from 'd3-scale';


const points = [
    { month: "Jan", birthrate: 16.7 },
    { month: "Feb", birthrate: 14.6 },
    { month: "Mar", birthrate: 14.4 },
    { month: "Apr", birthrate: 14 },
    { month: "May", birthrate: 13 },
    { month: "june", birthrate: 12.4 },
    { month: "July", birthrate: 16.7 },
    { month: "Aug", birthrate: 14.6 },
    { month: "Sep", birthrate: 14.4 },
    { month: "Oct", birthrate: 14 },
    { month: "Nov", birthrate: 13 },
    { month: "Dec", birthrate: 12.4 }
];



const xTicks = ["Jan","Feb","Mar","Apr","May","june","July","Aug","Sep","Oct","Nov","Dec"];
const yTicks = [0, 5, 10, 15, 20];
const padding = { top: 10, right: 10, bottom: 5, left: 10 };

let width = 400;
let height = 100;

function formatMobile(tick) {
    return "'" + tick.toString().slice(-2);
}

$: xScale = scaleLinear()
    .domain([0, xTicks.length])
    .range([padding.left, width - padding.right]);

$: yScale = scaleLinear()
    .domain([0, Math.max.apply(null, yTicks)])
    .range([height - padding.bottom, padding.top]);

$: innerWidth = width - (padding.left + padding.right);
$: barWidth = innerWidth / xTicks.length;

</script>



<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
	<svg>
		<!-- y axis -->
		<g class="axis y-axis">
			{#each yTicks as tick}
				<g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
					<line x2="100%" />
					<text y="-4">{tick} {tick === 20 ? ' per 1,000 population' : ''}</text>
				</g>
			{/each}
		</g>

		<!-- x axis -->
		<g class="axis x-axis">
			{#each points as point, i}
				<g class="tick" transform="translate({xScale(i)},{height})">
					<text x={barWidth / 2} y="-4"
						>{width > 380 ? point.month : formatMobile(point.month)}</text
					>
				</g>
			{/each}
		</g>

		<g class="bars">
			{#each points as point, i}
				<rect
					x={xScale(i) + 2}
					y={yScale(point.birthrate)}
					width={barWidth - 4}
					height={yScale(0) - yScale(point.birthrate)}
				/>
			{/each}
		</g>
	</svg>
</div>

<style>
	

	.chart {
		width: 100%;
		max-width: 700px;
		margin: 0 auto;
	}

	svg {
		position: relative;
		width: 100%;
		height: 150px;
	}

	.tick {
		font-family: Helvetica, Arial;
		font-size: 0.725em;
		font-weight: 200;
	}

	.tick line {
		stroke: #e2e2e2;
		stroke-dasharray: 2;
	}

	.tick text {
		fill: #ccc;
		text-anchor: start;
	}

	.tick.tick-0 line {
		stroke-dasharray: 0;
	}

	.x-axis .tick text {
		text-anchor: middle;
	}

	.bars rect {
		fill: #a11;
		stroke: none;
		opacity: 0.65;
	}
</style>
