<script>
  
	import BarchartLogo from './barcharts.png';
	import LinechartLogo from './linecharts.png';
	import bigLinechartLogo from './bigLinecharts.png';
</script>


<main>
	<div class="h-screen w-full box-border ">
		<div class="flex flex-row justify-center mt-16 space-x-16">
			<div class="card rounded-md bg-[#ECE4FC] shadow-xl w-64">
				<div class="card-body items-center text-center">
					<h2 class="card-title text-[#5832A1]">Clients</h2>
					<h2 class="card-title text-[#5832A1] text-3xl">5</h2>
					<figure class="px-1 pt-1">
						<img src={BarchartLogo} class="h-14" />
					</figure>
				</div>
			</div>
			<div class="card rounded-md  bg-[#ECE4FC] shadow-xl w-64">
				<div class="card-body items-center text-center">
					<h2 class="card-title text-[#5832A1]">Assets</h2>
					<h2 class="card-title text-[#5832A1] text-3xl">1230</h2>
					<figure class="px-1 pt-1">
						<img src={LinechartLogo} class="h-14" />
					</figure>
				</div>
			</div>
			<div class="card rounded-md  bg-[#ECE4FC] shadow-xl w-64 ">
				<div class="card-body items-center text-center">
					<h2 class="card-title text-[#5832A1]">Careplans</h2>
					<h2 class="card-title text-[#5832A1] text-3xl">30</h2>
					<img src={BarchartLogo} class="h-14" />
					<figure class="px-1 pt-1" />
				</div>
			</div>
		</div>
		<div class="flex flex-row justify-center mt-12 space-x-16  ">
			<div class="card rounded-md bg-[#ECE4FC] shadow-xl w-64">
				<div class="card-body items-center text-center">
					<h2 class="card-title text-[#5832A1]">Participants</h2>
					<h2 class="card-title text-[#5832A1] text-3xl">2322</h2>
					<figure class="px-1 pt-1">
						<img src={LinechartLogo} class="h-14" />
					</figure>
				</div>
			</div>
			<div class="card rounded-md  bg-[#ECE4FC] shadow-xl w-64">
				<div class="card-body items-center text-center">
					<h2 class="card-title text-[#5832A1]">Total Enrollments</h2>
					<h2 class="card-title text-[#5832A1] text-3xl">3435</h2>
					<figure class="px-1 pt-1">
						<img src={LinechartLogo} class="h-14" />
					</figure>
				</div>
			</div>
			<div class="card rounded-md bg-[#ECE4FC] shadow-xl w-64 ">
				<div class="card-body items-center text-center">
					<h2 class="card-title text-[#5832A1]">Active Enrollments</h2>
					<h2 class="card-title text-[#5832A1] text-3xl">1342</h2>
					<figure class="px-1 pt-1">
						<img src={LinechartLogo} class="h-14" />
					</figure>
				</div>
			</div>
		</div>
		<div class="flex flex-row justify-center mt-12 ">
			<div class="card rounded-md justify-center bg-[#ECE4FC] shadow-xl w-8/12">
				<div class="card-body items-center text-center">
					<h2 class="card-title text-[#5832A1]">User Engagement</h2>
					<figure class="max-w-screen-2xl">
						<img src={bigLinechartLogo} class="h-14 " />
					</figure>
					<div class="flex flex-col space-y-2 justify-start ">
						
                        
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
