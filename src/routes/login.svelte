<script>
	let username, password, email;
	function handleSubmit() {
		alert(` ${username} signup successfully `);
	}
  
    let username ='';
    let password ='';
    let email = '';
    function handleSubmit() {
        alert(` ${username} signup successfully `);
     username ='';
     password ='';
    }
</script>

<main class="box-border h-screen">
  <div class="navbar bg-[#7165e3]"></div>
  
		<div class=" flex justify-center flex-col  items-center w-full h-full mx-auto">
			<form
				on:submit|preventDefault={handleSubmit}
				class="bg-gray-100 rounded-lg p-8  flex flex-col w-screen max-w-xs "
			>
				<div class="form-control justify-center w-full max-w-xs ">
					<label class="label">
						<span class="label-text">Username / Email</span>
					
					</label>
					<input
						type="text"
						required
						bind:value={username}
						placeholder="Type here"
						class="input input-bordered input-info w-full max-w-xs mb-3 form-control"
					/>
					<label class="label">
						<span class="label-text">Password / Otp</span>
						<span on:click class="label-text-alt ">Generate Otp</span>
					</label>
					<input
						type="password"
						required
						bind:value={password}
						placeholder="Type here"
						class="input input-bordered input-info w-full max-w-xs "
					/>
					<label class="label">
						<span class="label-text-alt">Forgot Password ?</span>
					</label>
					<button class="btn btn-primary max-w-xs ">Login</button>
				
				</div>
			</form>
        
      <div ></div>
		</div>
	
    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
	
</main>
