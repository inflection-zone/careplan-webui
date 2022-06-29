<script>
    


  let username, password, email;
  function handleSubmit() {
      alert(` ${username} signup successfully `);
  }
</script>

<div class=" flex justify-center flex-col  items-center w-screen h-screen mx-auto">
<form on:submit|preventDefault={handleSubmit}  class="bg-gray-100 rounded-lg p-8  flex  flex-col w-full mt-10   max-w-xs ">
  <!-- <div class="flex justify-between">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
  </div>
  
  <Input label= "Username" bind:value={username} type="text" required /> 
  <Input label="Password" bind:value={password} type="password" required />
  <Input label="Email" bind:value={email} type="email" required />
 
  <button class="btn btn-info">SignUp</button> -->
<!-- 
  <div class="flex space-x-2">
      <input type="text" placeholder="Search" class="w-full input input-primary input-bordered"> 
      <button class="btn btn-primary">signup</button>
    </div> -->
  
    <div class="form-control justify-center w-full max-w-xs ">
      <label class="label">
        <span class="label-text">Username / Email</span>
        <!-- <span class="label-text-alt"></span> -->
      </label>
      <input type="text" required bind:value={username} placeholder="Type here" class="input input-bordered input-info w-full max-w-xs mb-3 form-control" />
      <label class="label">
          <span class="label-text">Password / Otp</span>
          <span on:click class="label-text-alt ">Generate Otp</span>
        </label>
        <input type="password" required bind:value={password} placeholder="Type here" class="input input-bordered input-info w-full max-w-xs " />
        <label class="label">
          <span class="label-text-alt">Forgot Password ?</span>
        </label>
        <button class="btn btn-primary max-w-xs ">Login</button>
  <!-- </div> -->
</form>
</div>
