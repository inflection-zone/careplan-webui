<script>
	// @ts-nocheck
	import Fa from 'svelte-fa';
	import { faMultiply } from '@fortawesome/free-solid-svg-icons';
	import Tags from '../../../components/tags.svelte';
	let tags = ['Maternity', 'Neo-natal-care'];
</script>

<div class=" breadcrumbs text-xl text-primary ml-14 mt-5">
	<ul>
		<li><a href="">Home</a></li>
		<li><a href="">Assets</a></li>                           
       
		<li><a href="">Biometrics</a></li>
		<li>Edit</li>
	</ul>
</div>
<div class=" flex justify-center mt-5 flex-col items-center ">
	<form class="w-full max-w-4xl bg-[#ECE4FC] rounded-lg mx-auto">
		<div class="w-full  h-14 rounded-t-lg p-3  bg-primary">
			<div class="ml-3 relative flex flex-row text-white text-xl">
				Edit Biometrics
				<Fa icon={faMultiply} size="lg" class="absolute right-0 pr-3 pointer-events-none" />
			</div>
		</div>
		<div class="flex items-center mb-4 mt-10 mx-16">
			<div class="w-1/3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Asset Code </label>
			</div>
			<div class="w-2/3">BIOMETRICS-HF-12</div>
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
					placeholder="Enter Biometric name here..."
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
					placeholder="Enter biometric description here..."
					value=""
				/>
			</div>
		</div>
        <div class="flex items-center  my-4 mx-16">
            <div class="w-1/3">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="lable-text"> BiometricsType </label>
            </div>
            <div class="w-2/3">
                <input
                    type="text"
                    placeholder="Enter BiometricsType  here..."
                    class="input input-bordered input-info w-full "
                    value="Blood pressure"
                />
            </div>
        </div>
        <div class="flex items-center  my-4 mx-16">
            <div class="w-1/3">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="lable-text"> MeasurementUnit </label>
            </div>
            <div class="w-2/3">
                <input
                    type="text"
                    placeholder="Enter Measurementunit url here..."
                    class="input input-bordered input-info w-full "
                    value="mmHg"
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
				<button class="btn btn-primary lg:w-40 sm:w-32 ml-8 "> Submit </button>
			</div>
		</div>
	</form>
</div>
