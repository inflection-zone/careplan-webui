<script>
	import Fa from 'svelte-fa';
	import { faMultiply, faPen } from '@fortawesome/free-solid-svg-icons';
	// @ts-ignore
	import Navbar from '../../../../components/navbar/navbar.svelte';
</script>

<Navbar />
<div class=" breadcrumbs text-lg  text-primary ml-14 mt-10">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="">Assets</a></li>
		<li><a href="">Reflection</a></li>
		<li>View</li>
	</ul>
</div>
<form class="w-full max-w-4xl  bg-[#ECE4FC] mt-12  rounded-lg mx-auto shadow-bottom-right">
	<div class="w-full  h-14 rounded-t-lg p-3  bg-primary">
		<div class="ml-3 relative flex flex-row text-white text-xl">
			Reflection - Progress in the last week
			<Fa icon={faMultiply} size="lg" class="absolute right-0 pr-3 pointer-events-none" />
		</div>
	</div>
	<div class="flex items-center mb-4 mt-10 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text">Asset Code</label>
		</div>
		<div class="w-2/3">REFLECTION-CC-2</div>
	</div>
	<div class="flex items-center my-4 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Name</label>
		</div>
		<div class="w-2/3">Progress in the last week</div>
	</div>
	<div class="flex items-center my-4 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Description </label>
		</div>
		<div class="w-2/3">.....</div>
	</div>
	<div class="flex items-center my-4 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Tags </label>
		</div>
		Reflection , Retrospection
	</div>

	<div class="flex items-center my-4 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text"> Version </label>
		</div>
		<div class="w-2/3">1.0</div>
	</div>
	<div class="flex items-center mt-10 mx-16">
		<div class="w-5/6" />
		<div class="w-1/6 ">
			<a href="/assets/reflection/[id]/edit">
				<button class="btn  btn-outline w-full mb-10 mr-4">
					Edit
					<Fa icon={faPen} size="lg" class="ml-5" />
				</button>
			</a>
		</div>
	</div>
</form>
