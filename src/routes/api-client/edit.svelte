<script>
	import Fa from 'svelte-fa';
	import { faCalendar, faMultiply } from '@fortawesome/free-solid-svg-icons';
	import Navbar from '../../components/navbar/navbar.svelte';
</script>

<Navbar />

<div class=" breadcrumbs text-xl text-[#7165E3] ml-14 mt-5">
	<ul>
		<li><a href="/api-client">Home</a></li>
		<li><a href="/api-client/view">Clients</a></li>
		<li>Edit</li>
	</ul>
</div>

<div class=" flex justify-center mt-5 flex-col items-center ">
	<form class="w-full max-w-4xl bg-[#ECE4FC] rounded-lg mx-auto">
		<div class="w-full  h-14 rounded-t-lg p-3  bg-[#7165E3]">
			<div class="ml-3 relative flex flex-row text-white text-xl">
				Edit Client
				<a href="/api-client/view">
					<Fa icon={faMultiply} size="lg" class="absolute right-0 pr-3 " /></a
				>
			</div>
		</div>

		<div class="flex items-center mb-4 mt-10 mx-16">
			<div class="w-1/3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Client Code </label>
			</div>
			<div class="w-2/3">JNVKSORG</div>
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
					placeholder="Enter client name here..."
					value="Jan Vikas"
					class="input input-bordered input-info w-full "
				/>
			</div>
		</div>

		<div class="flex items-center my-4 mx-16">
			<div class="w-1/3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Contact First Name </label>
			</div>
			<div class="w-2/3">
				<input
					type="text"
					placeholder="Enter client first name of the client contact person here..."
					value="John"
					class="input input-bordered input-info w-full "
				/>
			</div>
		</div>

		<div class="flex items-center my-4 mx-16">
			<div class="w-1/3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Contact Last Name </label>
			</div>
			<div class="w-2/3">
				<input
					type="text"
					placeholder="Enter client last name of the client contact person here..."
					value="Doe"
					class="input input-bordered input-info w-full "
				/>
			</div>
		</div>

		<div class="flex items-center my-4 mx-16 ">
			<div class="w-1/4">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Phone* </label>
			</div>
			<div class="w-1/4 ">
				<select class="select select-info lg:w-28 sm:w-24 sm:ml-14  lg:ml-16 ">
					<option>+91</option>
					<option>+94</option>
					<option>+93</option>
				</select>
			</div>
			<div class="w-2/4">
				<input
					type="number"
					placeholder="Enter client phone here..."
					value="7981456221"
					class="input input-bordered input-info w-full max-w-md"
				/>
			</div>
		</div>

		<div class="flex items-center my-4 mx-16">
			<div class="w-1/3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Email* </label>
			</div>
			<div class="w-2/3">
				<input
					type="email"
					required
					placeholder="Enter client email here..."
					value="johndoe@janvikas.org"
					class="input input-bordered input-info w-full "
				/>
			</div>
		</div>

		<div class="flex items-centerm my-4 mx-16">
			<div class="w-1/3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Valid Till </label>
			</div>
			<div class="w-2/3">
				<div class="relative flex items-center ">
					<input
						type="text"
						required
						placeholder=""
						value="04-07-2023"
						class="input input-bordered input-info w-full "
					/>
					<Fa icon={faCalendar} size="lg" class="absolute right-0 pr-3  pointer-events-none" />
				</div>
			</div>
		</div>

		<div class="flex items-center my-10 mx-16">
			<div class="w-1/2" />
			<div class="w-1/4 ">
				<button class="btn  btn-outline lg:w-40 sm:w-32 ml-8 "> Reset </button>
			</div>
			<div class="w-1/4">
				<a href="/api-client/view">
					<button class="btn btn-primary lg:w-40 sm:w-32 ml-8 "> Submit </button>
				</a>
			</div>
		</div>
	</form>
</div>
