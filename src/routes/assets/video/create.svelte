<script>
	import Fa from 'svelte-fa';
	import { faMultiply } from '@fortawesome/free-solid-svg-icons';
	import Tags from '../../../components/tags.svelte';
	import Navbar from '../../../components/navbar/navbar.svelte';
</script>

 <Navbar/>

<div class=" breadcrumbs text-lg  text-primary ml-14 mt-10">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="">Assets</a></li>
		<li><a href="">Video</a></li>
		<li>Create New</li>
	</ul>
</div>
<form class="w-full max-w-4xl  bg-[#ECE4FC] mt-24  rounded-lg mx-auto shadow-bottom-right">
	<div class="w-full  h-14 rounded-t-lg p-3  bg-primary">
		<div class="ml-3 relative flex flex-row text-white text-xl">
			Create New Video
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
				placeholder="Enter video name here..."
				class="input input-bordered input-info w-full "
			/>
		</div>
	</div>
	<div class="flex items-center mb-4 my-4 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Transcript </label>
		</div>
		<div class="w-2/3">
			<input
				type="text"
				placeholder="Enter video transcript here..."
				class="input input-bordered input-info w-full "
			/>
		</div>
	</div>
	<div class="flex items-center mb-4 my-4 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Url </label>
		</div>
		<div class="w-2/3">
			<input
				type="text"
				placeholder="Enter video link url here..."
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
				 placeholder="Enter version here.."
				
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
