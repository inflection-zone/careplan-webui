<script>
	import Progress from "./progress.svelte";
</script>

<div class=" breadcrumbs text-lg mt-4 text-[#7165E3] ml-14 mt-10">
	<ul>
		<li><a href="/">Home</a></li>
		<li />
	</ul>
</div>

<div class="flex flex-row mx-14 mt-4 ">
	<div class="basis-1/2 justify-center items-center ">
		<div class="relative flex items-center  ">
			<h3 class="font-semibold text-2xl">Enrollments</h3>
		</div>
	</div>
</div>

<div class=" flex justify-center items-center mx-14 my-12">
	<div class="card w-full h-full  shadow-bottom-right bg-[#ECE4FC] ">
           <div class="flex flex-row justify-between space-x-10">
			<div class="w-1/2  text-[#5832A1] ">
			<div class="flex items-center mb-4 mt-10 mx-16 ">
				<div class="w-1/2">
					<label class="lable-text">Participant Age</label>
				</div>
				<div class="w-1/2">44 years 3 months</div>
			</div>
			<div class="flex items-center mb-4  mx-16">
				<div class="w-1/2">
					<label class="lable-text">Participant Gender</label>
				</div>
				<div class="w-1/2">Female</div>
			</div>
			<div class="flex items-center mb-4  mx-16">
				<div class="w-1/2">
					<label class="lable-text">CarePlan</label>
				</div>
				<div class="w-1/2">Maternity</div>
			</div>
			<div class="flex items-center mb-4  mx-16">
				<div class="w-1/2">
					<label class="lable-text">CarePlan Category</label>
				</div>
				<div class="w-1/2">Maternity and Neo Natal</div>
			</div>
			<div class="flex items-center mb-4  mx-16">
				<div class="w-1/2">
					<label class="lable-text">Date of Enrollment</label>
				</div>
				<div class="w-1/2">July 20,2022</div>
			</div>
			<div class="flex items-center mb-4  mx-16">
				<div class="w-1/2">
					<label class="lable-text">Start Date</label>
				</div>
				<div class="w-1/2">July 20,2022</div>
			</div>
			<div class="flex items-center mb-4 mx-16">
				<div class="w-1/2">
					<label class="lable-text ">End Date</label>
				</div>
				<div class="w-1/2">Oct 30,2022</div>
			</div>
			</div>
			
				
					
					
				
			    <div class="w-1/2 ">
				    <div class="flex flex-row items-center mt-20 ml-32 ">
					<div class="grid grid-cols justify-items-center  mb-40">
						<label class="lable-text  text-xl  text-[#5832A1]">Total Tasks</label>
						<div class="radial-progress text-[#7165E3] " style="--value:100;--size:78px; --thickness:9px">7</div>
					</div>

				     <div class=" w-3/5 ml-16 origin-center rotate-180">
						
						
						
						<Progress />
					
					 </div>
				
				   </div>
			    </div>
		   <div>
			
			
	</div>		
			
	
		   </div>
		   <div class="flex flex-row justify-between my-10 mx-20 text-[#5832A1]">
			<div class="grid grid-cols2 justify-items-center">
				<label class="lable-text  text-xl">Total Tasks</label>
				<div class="radial-progress  text-[#7165E3]" style="--value:100;--size:92px; --thickness:11px">100%</div>
			</div>
			<div class="grid grid-cols2  justify-items-center">
				<label class="lable-text  text-xl">Finished Tasks</label>
				<div class="radial-progress text-[#7165E3]" style="--value:100;--size:92px; --thickness:11px">100%</div>
			</div>
			<div class="grid grid-cols2 justify-items-center">
				<label class="lable-text  text-xl">Delayed Tasks</label>
				<div class="radial-progress text-[#7165E3]" style="--value:100;--size:92px; --thickness:11px">100%</div>
			</div>
			<div class="grid grid-cols2 justify-items-center">
				<label class="lable-text  text-xl ">Unserved Tasks</label>
				<div class="radial-progress text-[#7165E3]" style="--value:100; --size:92px; --thickness:11px">100%</div>
			</div>
		</div>
	</div>

</div>

		