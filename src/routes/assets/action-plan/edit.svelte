<script>
	// @ts-nocheck
	import Fa from 'svelte-fa';
	import { faMultiply } from '@fortawesome/free-solid-svg-icons';
	import Tags from '../../../components/tags.svelte';
	let tags = ['Maternity', 'Neo-natal-care'];
</script>

<div class=" breadcrumbs text-xl text-[#7165E3] ml-14 mt-5">
	<ul>
		<li><a href="">Home</a></li>
		<li><a href="">Assets</a></li>
		<li><a href="">Action Plan</a></li>
		<li>Edit</li>
	</ul>
</div>

<div class=" flex justify-center mt-5 flex-col items-center ">
	<form class="w-full max-w-4xl bg-[#ECE4FC] rounded-lg mx-auto">
		<div class="w-full  h-14 rounded-t-lg p-3  bg-[#7165E3]">
			<div class="ml-3 relative flex flex-row text-white text-xl">
				Edit Action Plan
				<a href="/assets/action-plan/view">
					<Fa icon={faMultiply} size="lg" class="absolute right-0 pr-3 mb-16 " /></a
				>
			</div>
		</div>

		<div class="flex items-center mb-4 mt-10 mx-16">
			<div class="w-1/3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Asset Code </label>
			</div>
			<div class="w-2/3">ACTIONPLAN-HF-1</div>
		</div>

		<div class="flex items-center my-4 mx-16">
			<div class="w-1/3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Name* </label>
			</div>
			<div class="w-2/3">
				<input
					type="text"
					required
					placeholder="Enter action plan name here..."
					value="Join the gym"
					class="input input-bordered input-info w-full "
				/>
			</div>
		</div>
		<div class="flex items-center my-4 mx-16">
			<div class="w-1/3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Description </label>
			</div>
			<div class="w-2/3">
				<textarea
					class="textarea textarea-info w-full"
					placeholder="Enter action plan description here..."
					value="Studies confirm that working out with a partner significantly increases time spent exercising."
				/>
			</div>
		</div>

		<div class="flex items-center my-4 mx-16">
			<div class="w-1/3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Tags </label>
			</div>
			<div class="w-2/3">
				<Tags {tags} placeholder={'Enter a tags here...'} />
			</div>
		</div>

		<div class="flex items-center my-4 mx-16">
			<div class="w-1/3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Version </label>
			</div>
			<div class="w-2/3">
				<select class="select select-info w-full ">
					<option>V1.0</option>
				</select>
			</div>
		</div>

		<div class="flex items-center my-10 mx-16">
			<div class="w-1/2" />
			<div class="w-1/4 ">
				<button class="btn  btn-outline lg:w-40 sm:w-32 ml-8 "> Reset </button>
			</div>
			<div class="w-1/4">
				<a href="/assets/action-plan/view">
					<button class="btn btn-primary lg:w-40 sm:w-32 ml-8 ">Submit </button>
				</a>
			</div>
		</div>
	</form>
</div>
