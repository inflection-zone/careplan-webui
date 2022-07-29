<script>
	import Collapse from '../../routes/careplan/daycollpase.svelte';
	let weeks = ['week 1', 'week 2', 'week 3', 'week 4', 'week 5', 'week 6', 'week 7'];
</script>

<form class="w-full max-w-6xl  bg-[#ECE4FC] mt-12  rounded-lg mx-auto">
	<div class="w-full  h-14 rounded-t-lg p-3  bg-[#7165E3]">
		<div class="ml-3 relative flex flex-row text-white text-xl">Carepaln Schedule</div>
	</div>

	<div class="flex items-center mb-4 mt-6 justify-center ">
		<div class="grid grid-cols-2 divide-x mb-4 h-8 w-1/4 text-center">
			<button class="rounded-l-md text-white font-semibold  bg-[#5832A1]">Week View</button>
			<button class="rounded-r-md text-white font-semibold  bg-[#7165E3]">Day View</button>
		</div>
	</div>

	{#each weeks as week}
		<div class="flex flex-col items-center  mt-6 justify-center  ">
			<div
				tabindex="0"
				class="w-full max-w-5xl mb-4 shadow-bottom-right  collapse collapse-arrow  rounded-xl"
			>
				<div class="collapse-title text-xl font-medium bg-[#7165E3]">
					{week}
				</div>
				<div class="collapse-content ">
					<Collapse />
				</div>
			</div>
		</div>
	{/each}
</form>
