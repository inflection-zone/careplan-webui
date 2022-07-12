<<<<<<< HEAD
<script>
	import Fa from 'svelte-fa';
	import { faMultiply, faPen, faCopy, faEye } from '@fortawesome/free-solid-svg-icons';

	// @ts-ignore
</script>

<div class=" breadcrumbs text-lg  text-[#7165E3] ml-14 mt-10">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="">Clients</a></li>
		<li>View</li>
	</ul>
</div>

<form class="w-full max-w-4xl bg-[#ECE4FC] mt-12 rounded-lg mx-auto">
	<div class="w-full  h-14 rounded-t-lg p-3  bg-[#7165E3]">
		<div class="ml-3 relative flex flex-row text-white text-xl">
			Client - Jan Vikas
			<Fa icon={faMultiply} size="lg" class="absolute right-0 pr-3 pointer-events-none" />
		</div>
	</div>

	<div class="flex items-center mb-8 mt-10 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text "> Name </label>
		</div>
		<div class="w-2/3 ">Jan Vikas</div>
	</div>

	<div class="flex items-center my-8 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text ">Contact Name </label>
		</div>
		<div class="w-2/3 ">
			<p>John Doe</p>
		</div>
	</div>

	<div class="flex items-center my-8 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text "> Phone </label>
		</div>
		<div class="w-2/3">+91-10912345334</div>
	</div>

	<div class="flex items-center my-8 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text "> Email </label>
		</div>
		<div class="w-2/3 ">
			<p>john.Doe@Janvikas.com</p>
		</div>
	</div>

	<div class="flex items-center my-8 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text "> API Key </label>
		</div>
		<div class="w-2/6 ">xxxxxx-xxxxxx-xxxxxx-xxxxxx</div>
		<div class="flex flex-row space-x-4 ml-4 mt-2">
			<Fa icon={faCopy} size="sm" />
			<Fa icon={faEye} size="sm" class="ml-8" />
		</div>
		<div class="flex flex-row space-x-4 ml-8 mt-2 italic hover:underline">
			<a href="">Generate New</a>
		</div>
	</div>

	<div class="flex items-center my-8 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text "> Valid Till </label>
		</div>
		<div class="w-2/3 ">September 4, 2023</div>
	</div>

	<div class="flex items-center mt-10 mx-16">
		<div class="w-5/6" />
		<div class="w-1/6 ">
			<a href="/api-client/edit">
				<button class="btn  btn-outline w-full mb-10 mr-4">
					Edit

					<Fa icon={faPen} size="lg" class="ml-5" />
				</button>
			</a>
		</div>
	</div>
</form>
=======
>>>>>>> origin/Stabilization
