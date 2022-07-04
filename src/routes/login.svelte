<script>
    
    import REAN from '$lib/REAN.png'
  
    let username ='';
    let password ='';
    let email = '';
    function handleSubmit() {
        alert(` ${username} signup successfully `);
     username ='';
     password ='';
    }
</script>

<div class="">
         
      <img src={REAN} class="w-26 h-14 " alt="img not present" />
          
  <div class=" flex justify-center flex-col  items-center w-screen h-screen mx-auto">
  <form on:submit|preventDefault={handleSubmit}  class="bg-gray-100 rounded-lg p-8  flex  flex-col w-full mt-10   max-w-xs ">
    
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
   
</form>
</div>

</div>