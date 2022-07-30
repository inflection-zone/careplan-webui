<script>

import CarepalnScheduleweek from './careplan-scheduleweek.svelte';

	
	
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

	<CarepalnScheduleweek />
</form>
