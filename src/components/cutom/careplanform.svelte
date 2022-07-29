<script>

import Fa from 'svelte-fa';
	import { faMultiply } from '@fortawesome/free-solid-svg-icons';
</script>




<form class="w-full max-w-3xl  bg-[#ECE4FC] mt-8  rounded-lg mx-auto">
	<div class="w-full  h-14 rounded-t-lg p-3  bg-[#7165E3]">
		<div class="ml-3 relative flex flex-row text-white text-xl">
			Schedule New Activity
			<Fa icon={faMultiply} size="lg" class="absolute right-0 pr-3 " />
		</div>
	</div>

	<div class="flex items-center mb-4 mt-10 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Assets Type * </label>
		</div>
		<div class="w-2/3">
			<input
				type="dropdown"
				required
				placeholder="Enter action plan name here..."
				class="input input-bordered input-info w-full "
			/>
		</div>
	</div>
	<div class="flex items-center mb-4 mt-6 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Assets * </label>
		</div>
		<div class="w-2/3">
			<input
				type="dropdown"
				required
				placeholder="Enter action plan name here..."
				class="input input-bordered input-info w-full "
			/>
		</div>
	</div>
	<div class="flex items-center mb-4 mt-6 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Scheduled Day * </label>
		</div>
		<div class="w-2/3">
			<input
				type="dropdown"
				required
				placeholder="Enter action plan name here..."
				class="input input-bordered input-info w-full "
			/>
		</div>
	</div>
	<div class="flex items-center mb-4 mt-6 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Slot of the Day* </label>
		</div>
		<div class="w-2/3">
			<input
				type="dropdown"
				required
				placeholder="Enter action plan name here..."
				class="input input-bordered input-info w-full "
			/>
		</div>
	</div>

	<div class="flex items-center mt-10 mx-16">
		<div class="w-3/4" />
		<div class="w-1/4 ">
			<button class="btn btn-primary w-full mb-10 ">Submit</button>
		</div>
	</div>
</form>
