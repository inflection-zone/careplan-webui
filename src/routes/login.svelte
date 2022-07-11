<script>
	// @ts-ignore

	let username = '';
	let password = '';
	let email = '';
	function handleSubmit() {
		alert(` ${username} signup successfully `);
		username = '';
		password = '';
	}
</script>

<main class="w-screen overflow-x-auto self-center">
	<div class="bg-back-ground w-screen">
		<div class="h-10 w-screen shadow-xl mb-4 bg-[#7165E3]" />
		<center>
			<div class=" flex justify-center flex-col items-center m-14">
				<img
					class="ct-image w-36 mb-5"
					alt="logo"
					src="https://www.reanfoundation.org/wp-content/uploads/2021/10/REAN-Foundation-brand-Logo.png"
				/>
				<form
					on:submit|preventDefault={handleSubmit}
					class="bg-[#ECE4FC] shadow-bottom-right p-8 pb-1 pt-5 w-70 rounded-lg mt-5"
				>
					<div class="form-control justify-center w-full mt-5 h-50">
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span class="label-text text-[#5832A1]">Username / Email</span>
							<span class="label-text-alt" />
						</label>
						<input
							type="text"
							required
							bind:value={username}
							class="input input-bordered rounded-lg w-82 mb-3 h-10"
						/>
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span class="label-text text-[#5832A1]">Password / OTP</span>
							<span on:click class="label-text text-[#5832A1]"><b>Generate OTP</b></span>
						</label>
						<input
							type="password"
							required
							bind:value={password}
							class="input input-bordered rounded-lg w-82 h-10"
						/>
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span class="label-text text-[#5832A1]"><b>Forgot Password?</b></span>
						</label><br />
						<label>
							<button class=" w-40 ml-52 h-10 mb-8  font-semibold tracking-wide rounded-lg text-[#ffffff] bg-[#5832A1]"
								>Login</button
							>
						</label>
					</div>
				</form>
				<div class="h-20 mb-4 w-screen" />
			</div>
		</center>
		<footer class="footer footer-center h-11 text-[#ffffff] bg-[#5832A1]">
			<p>© 2022 REAN Foundation</p>
		</footer>
	</div>
</main>
