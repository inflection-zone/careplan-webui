<script>
	import Fa from 'svelte-fa';
	import { faMultiply, faPen } from '@fortawesome/free-solid-svg-icons';

	// @ts-ignore
</script>

<div class=" breadcrumbs text-xl  text-[#7165E3] ml-14 mt-10">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="">Assets</a></li>
		<li><a href="">Appointment</a></li>
		<li>View</li>
	</ul>
</div>

<form class="w-full max-w-4xl  bg-[#ECE4FC] mt-12  rounded-lg mx-auto">
	<div class="w-full  h-14 rounded-t-lg p-3  bg-[#7165E3]">
		<div class="ml-3 relative flex flex-row text-white text-xl">
			Appointment - Nutrition
			<Fa icon={faMultiply} size="lg" class="absolute right-0 pr-3 pointer-events-none" />
		</div>
	</div>

	<div class="flex items-center mb-4 mt-10 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text">Asset Code</label>
		</div>
		<div class="w-2/3">
            APPOINTMENT-CC-2
		</div>
	</div>

	<div class="flex items-center my-4 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Name </label>
		</div>
		<div class="w-2/3">
            Nutrition
		</div>
	</div>

    <div class="flex items-center my-4 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Description </label>
		</div>
		<div class="w-2/3">
			Studies confirm that working out with a partner significantly increases time spent exercising. A study by the Society of Behavioral Medicine showed that working with a partner, especially in a team format, improved performance, doubling the workout time of those who exercised alone.
		</div>
	</div>

    <div class="flex items-center my-4 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Appointment Type </label>
		</div>
		<div class="w-2/3">
		Doctor
		</div>
	</div>

	<div class="flex items-center my-4 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Tags </label>
		</div>
		Maternity, Neo-natal-care
	</div>

	<div class="flex items-center my-4 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Version </label>
		</div>
		<div class="w-2/3">
			V1.0
		</div>
	</div>

	<div class="flex items-center mt-10 mx-16">
		<div class="w-5/6" />
		<div class="w-1/6 ">
			<a href="/assets/appointment/[id]/edit">
			<button class="btn  btn-outline w-full mb-10 mr-4"> Edit
                <Fa icon={faPen} size="lg" class= "ml-5" />
             </button>
			</a>
		</div>
	</div>
</form>
