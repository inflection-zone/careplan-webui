<script>
	// @ts-nocheck

	import Fa from 'svelte-fa';
	import { faMultiply } from '@fortawesome/free-solid-svg-icons';
	import Tags from '../../../components/tags.svelte';
</script>

<div class=" breadcrumbs text-xl  text-[#7165E3] ml-14 mt-10">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="">Assets</a></li>
		<li><a href="">Audio</a></li>
		<li>Create New</li>
	</ul>
</div>

<form class="w-full max-w-4xl  bg-[#ECE4FC] mt-24  rounded-lg mx-auto">
	<div class="w-full  h-14 rounded-t-lg p-3  bg-primary">
		<div class="ml-3 relative flex flex-row text-white text-xl">
			Create New Audio
			<Fa icon={faMultiply} size="lg" class="absolute right-0 pr-3 pointer-events-none" />
		</div>
	</div>

	<div class="flex items-center mb-4 mt-10 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Name* </label>
		</div>
		<div class="w-2/3">
			<input
				type="text"
				required
				placeholder="Enter audio name here..."
				class="input input-bordered input-info w-full "
			/>
		</div>
	</div>

	<div class="flex items-center my-4 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Transcript </label>
		</div>
		<div class="w-2/3">
			<textarea class="textarea textarea-info w-full" placeholder="Enter transcript here..." />
		</div>
	</div>

	<div class="flex items-center my-4 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Url </label>
		</div>
		<div class="w-2/3">
			<input
				type="url"
				required
				placeholder="Enter url here..."
				class="input input-bordered input-info w-full "
			/>
		</div>
	</div>

	<div class="flex items-center mb-4 my-4 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Tags </label>
		</div>
		<div class="w-2/3">
			<Tags placeholder={'Enter a tags here...'} />
		</div>
	</div>
	
	<div class="flex items-center my-4 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Version </label>
		</div>
		<div class="w-2/3">
			<input
                type="text"
                value="1.0"
                placeholder="Enter version here..."
                class="input input-bordered input-info w-full "
            />
		</div>
	</div>

	<div class="flex items-center mt-10 mx-16">
		<div class="w-3/4" />
		<div class="w-1/4 ">
			<button class="btn btn-primary w-full mb-10 "> Submit </button>
		</div>
	</div>
</form>
