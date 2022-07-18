<script>
	// @ts-nocheck
	import Fa from 'svelte-fa';
	import { faMultiply } from '@fortawesome/free-solid-svg-icons';
	import Tags from '../../../../components/tags.svelte';
	let tags = ['Maternity', 'Neo-natal-care'];
	import Navbar from '../../../../components/navbar/navbar.svelte';
</script>

<Navbar />

<div class=" breadcrumbs text-xl text-primary ml-14 mt-5">
	<ul>
		<li><a href="">Home</a></li>
		<li><a href="">Assets</a></li>
		<li><a href="">Word Power</a></li>
		<li>Edit</li>
	</ul>
</div>
<div class=" flex justify-center mt-5 flex-col items-center shadow-bottom-right">
	<form class="w-full max-w-4xl bg-[#ECE4FC] rounded-lg mx-auto">
		<div class="w-full  h-14 rounded-t-lg p-3  bg-primary">
			<div class="ml-3 relative flex flex-row text-white text-xl">
				Edit Word Power
				<a href="/assets/word-power/[id]/view">
					<Fa icon={faMultiply} size="lg" class="absolute right-0 pr-3 " />
				</a>
			</div>
		</div>
		<div class="flex items-center mb-4 mt-10 mx-16">
			<div class="w-1/3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Asset Code </label>
			</div>
			<div class="w-2/3">WORDPOWER-AB-1</div>
		</div>
		<div class="flex items-center my-4 mx-16">
			<div class="w-1/3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Word* </label>
			</div>
			<div class="w-2/3">
				<input
					type="text"
					required
					placeholder="Enter word power name here..."
					value="Nutrition"
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
					placeholder="Enter word power description here..."
					value=" Nutrition is the biochemical and physiological process by which an organism uses food to support its life. It includes ingestion, absorption, assimilation, biosynthesis, catabolism and excretion."
				/>
			</div>
		</div>
		<div class="flex items-center my-4 mx-16">
			<div class="w-1/3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> AdditionalResources </label>
			</div>
			<div class="w-2/3">
				<input
					type="text"
					placeholder="Enter word power additonalresources here..."
					value="   https://en.wikipedia.org/wiki/Nutrition , https://en.wikipedia.org/wiki/Micronutrient"
					class="input input-bordered input-info w-full "
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
				<input
				type="text"
				value="1.0"
				 placeholder="Enter version here.."
				class="input input-bordered input-info w-full "
			/>
			</div>
		</div>
		<div class="flex items-center my-10 mx-16">
			<div class="w-1/2" />
			<div class="w-1/4 ">
				<button class="btn  btn-outline lg:w-40 sm:w-32 ml-8 "> Reset </button>
			</div>
			<div class="w-1/4">
				<a href="/assets/word-power/[id]/view">
					<button class="btn btn-primary lg:w-40 sm:w-32 ml-8 "> Submit </button>
				</a>
			</div>
		</div>
	</form>
</div>
