<script>
	let username = '';
	let password = '';
	let email = '';

	function handleSubmit() {
		alert(` ${username} signup successfully `);
		username = '';
		password = '';
	}
</script>

<div class="bg-back-ground w-screen">
	<main class=" w-screen items-center">
		<div class="w-screen h-10 p-5 m-0 bg-[#6a1eb1]" />
		<center>
			<div class=" flex justify-center flex-col items-center m-14">
				<img
					class="ct-image w-40 mb-5"
					alt="logo"
					src="https://www.reanfoundation.org/wp-content/uploads/2021/10/REAN-Foundation-brand-Logo.png"
				/>
				<form
					on:submit|preventDefault={handleSubmit}
					class="bg-[#d9d9d9] p-4 w-70 rounded-lg mt-10"
				>
					<div class="form-control justify-center w-full mt-5 h-50">
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span class="label-text">Username / Email</span>
							<span class="label-text-alt" />
						</label>
						<input
							type="text"
							required
							bind:value={username}
							class="input input-bordered rounded-lg w-96 mb-3 h-12"
						/>
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span class="label-text">Password / OTP</span>
							<span on:click class="label-text text-[#6a1eb1]">Generate OTP</span>
						</label>
						<input
							type="password"
							required
							bind:value={password}
							class="input input-bordered rounded-lg w-96 h-12"
						/>
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span class="label-text text-[#6a1eb1]">Forgot Password?</span>
						</label>

						<label>
							<button class="btn btn-sm w-52 ml-40 h-12 mb-8 rounded-lg bg-[#6a1eb1]">Login</button>
						</label>
					</div>
				</form>
				<div class="h-48 max-h-full mb-6 w-screen bg-[#6a1eb1]" />
			</div>
		</center>
	</main>
</div>
