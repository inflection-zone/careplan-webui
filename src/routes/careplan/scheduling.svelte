<script>
	// @ts-nocheck
	import Careplanform from "../../components/cutom/careplanform.svelte";
	import Scheduleinfo from "../../components/cutom/scheduleinfo.svelte";

    let show=false;

	
</script>


<div class=" breadcrumbs text-xl  text-[#7165E3] ml-14 mt-10">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="">Carepaln Scheduling</a></li>
		
	</ul>
</div>

<div class="flex flex-row mx-14 mt-4 ">
	<div class="basis-1/2 justify-center items-center ">
		<div class="relative flex-col items-center  ">
			<h3 class="font-semibold text-3xl mb-6">Care Plans - Sports Injury (Post-Op)</h3>
			<div class="flex flex-row ml-2 mb-2">
				<h3 class="font-bold w-1/3 ">Carepaln Category</h3>
				<h3 class="font-semibold w-11/12 ">Carepaln Category</h3>
		</div>
		<div class="flex flex-row ml-2 mb-2">
			<h3 class="font-bold w-1/3 ">Carepaln Category</h3>
			<h3 class="font-semibold w-11/12 ">Carepaln Category</h3>
	</div>
		</div>
		
			<!-- svelte-ignore a11y-label-has-associated-control -->
			

	</div>
	
	
	
	
</div>

<Careplanform />
<Scheduleinfo />

