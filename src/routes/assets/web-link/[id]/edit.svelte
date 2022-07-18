<script>
	// @ts-nocheck
	import Fa from 'svelte-fa';
	import { faMultiply } from '@fortawesome/free-solid-svg-icons';
	import Tags from '../../../../components/tags.svelte';
	let tags = ['Maternity', 'Neo-natal-care'];
	import Navbar from '../../../../components/navbar/navbar.svelte';
</script>

 <Navbar/>

<div class=" breadcrumbs text-xl text-primary ml-14 mt-5">
	<ul>
		<li><a href="">Home</a></li>
		<li><a href="">Assets</a></li>
		<li><a href="">Web Link</a></li>
		<li>Edit</li>
	</ul>
</div>
<div class=" flex justify-center mt-5 flex-col items-center ">
	<form class="w-full max-w-4xl bg-[#ECE4FC] rounded-lg mx-auto shadow-bottom-right">
		<div class="w-full  h-14 rounded-t-lg p-3  bg-primary">
			<div class="ml-3 relative flex flex-row text-white text-xl">
				Edit Web Link
				<a href="/assets/web-link/[id]/view">
				<Fa icon={faMultiply} size="lg" class="absolute right-0 pr-3 " />
			</a>
			</div>
		</div>
		<div class="flex items-center mb-4 mt-10 mx-16">
			<div class="w-1/3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Asset Code </label>
			</div>
			<div class="w-2/3">WEBLINK-CC-1</div>
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
					placeholder="Enter web link name here..."
					value="Know your condition"
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
					placeholder="Enter web Link description here..."
					value="  Studies confirm that working out with a partner ..."
				/>
			</div>
		</div>
        <div class="flex items-center  my-4 mx-16">
            <div class="w-1/3">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="lable-text"> Url </label>
            </div>
            <div class="w-2/3">
                <input
                    type="url"
                    placeholder="Enter web link url here..."
                    class="input input-bordered input-info w-full "
                    value="http://watchlearnlive.heart.org/CVML_Player.php?moduleSelect=hrtflr"
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
				<a href="/assets/web-link/[id]/view">
				<button class="btn btn-primary lg:w-40 sm:w-32 ml-8 "> Submit </button>
			</a>
			</div>
		</div>
	</form>
</div>
