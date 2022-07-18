<script>
	import Fa from 'svelte-fa';
	import { faMultiply, faPen } from '@fortawesome/free-solid-svg-icons';

	// @ts-ignore
</script>

<div class=" breadcrumbs text-lg  text-[#7165E3] ml-14 mt-10">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href=" ">Care plan</a></li>
		<li>View</li>
	</ul>
</div>

<form class="w-full max-w-4xl bg-[#ECE4FC] mt-12 rounded-lg mx-auto">
	<div class="w-full  h-14 rounded-t-lg p-3  bg-[#7165E3]">
		<div class="ml-3 relative flex flex-row text-white text-xl">
			Care plan - Maternity (Regular)
			<Fa icon={faMultiply} size="lg" class="absolute right-0 pr-3 pointer-events-none" />
		</div>
	</div>

	<div class="flex items-center mb-8 mt-10 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text "> Name </label>
		</div>
		<div class="w-2/3 ">Maternity (Regular)</div>
	</div>

	<div class="flex items-center my-8 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text ">Code </label>
		</div>
		<div class="w-2/3 ">
			<p>MATERNITY</p>
		</div>
	</div>

	<div class="flex items-center my-8 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text "> Category </label>
		</div>
		<div class="w-2/3">Maternity and Neonatal</div>
	</div>

	<div class="flex items-center my-8 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text "> Description </label>
		</div>
		<div class="w-2/3 ">
			<p>A generic care plan for maternity management pre and post delivery</p>
		</div>
	</div>

	<div class="flex items-center my-8 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text "> Version </label>
		</div>
		<div class="w-2/6 ">1.0</div>
	</div>

	<div class="flex items-center my-8 mx-16">
		<div class="w-1/3">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="lable-text "> Tags </label>
		</div>
		<div class="w-2/3 ">Maternity, Pregnancy, Neonatal</div>
	</div>

	<div class="flex items-center mt-10 mx-16">
		<div class="w-5/6" />
		<div class="w-1/6 ">
			<a href=" ">
				<button class="btn  btn-outline w-full mb-10 mr-4">
					Edit
                    <Fa icon={faPen} size="lg" class="ml-5" />
				</button>
			</a>
		</div>
	</div>
</form>
