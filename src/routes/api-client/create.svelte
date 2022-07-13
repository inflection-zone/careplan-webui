<script>
	import Fa from 'svelte-fa';
	import { faCalendar, faMultiply } from '@fortawesome/free-solid-svg-icons';
	import Navbar from '../../components/navbar/navbar.svelte';

	let name = '';
	let contactFirstName = '';
	let contactLastName = '';
	let phone = '';
	let email = '';
	let password = '';
	let conformPassword = '';
	let vaildTill = '';
</script>

<Navbar />

<div class=" breadcrumbs text-xl text-[#7165E3] ml-14 mt-10">
	<ul>
		<li><a href="">Home</a></li>
		<li><a href="/api-client">Clients</a></li>
		<li>Create New</li>
	</ul>
</div>

<div class=" flex justify-center mt-5 flex-col items-center ">
	<form class="w-full max-w-4xl bg-[#ECE4FC] rounded-lg mx-auto">
		<div class="w-full  h-14 rounded-t-lg p-3  bg-[#7165E3]">
			<div class="ml-3 relative flex flex-row text-white text-xl">
				Create New Client
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
					placeholder="Enter client name here..."
					class="input input-bordered input-info w-full "
					bind:value={name}
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
					class="input input-bordered input-info w-full "
					bind:value={contactFirstName}
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
					class="input input-bordered input-info w-full "
					bind:value={contactLastName}
				/>
			</div>
		</div>

		<div class="flex items-center my-4 mx-16 ">
			<div class="w-1/4">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Phone* </label>
			</div>
			<div class="w-1/4 ">
				<select class="select select-info lg:w-28 sm:w-24 sm:ml-14  lg:ml-16  ">
					<option>+91</option>
					<option>+94</option>
					<option>+93</option>
				</select>
			</div>
			<div class="w-2/4">
				<input
					type="number"
					placeholder="Enter client phone here..."
					class="input input-bordered input-info w-full max-w-md"
					bind:value={phone}
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
					class="input input-bordered input-info w-full "
					bind:value={email}
				/>
			</div>
		</div>

		<div class="flex items-center my-4 mx-16">
			<div class="w-1/3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Password* </label>
			</div>
			<div class="w-2/3">
				<input
					type="password"
					required
					placeholder="Enter password here..."
					class="input input-bordered input-info w-full "
					bind:value={password}
				/>
			</div>
		</div>

		<div class="flex items-center my-4 mx-16">
			<div class="w-1/3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="lable-text"> Conform Password* </label>
			</div>
			<div class="w-2/3">
				<input
					type="password"
					required
					placeholder="Conform password here..."
					class="input input-bordered input-info w-full "
					bind:value={conformPassword}
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
						placeholder="05-07-2022"
						class="input input-bordered input-info w-full "
						bind:value={vaildTill}
					/>
					<Fa icon={faCalendar} size="lg" class="absolute right-0 pr-3 " />
				</div>
			</div>
		</div>

		<div class="flex items-center my-10 mx-16">
			<div class="w-3/4" />
			<div class="w-1/4 ">
				<button class="btn btn-primary w-full "> Submit </button>
			</div>
		</div>
	</form>
</div>
