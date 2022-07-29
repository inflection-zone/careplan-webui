<script>

  import Dayinfo from "./day1info.svelte"


   let days=["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"];
</script>


{#each days as day}
  

<div class="flex flex-col items-center  mt-6 justify-center  ">
    <div tabindex="0" class="w-full max-w-5xl mb-4  opacity-70 collapse collapse-arrow  rounded-xl">
        <div class="collapse-title text-xl font-medium bg-[#7165E3]">
      {day}
    </div>
    <div class="collapse-content"> 
          <Dayinfo  />
    </div>
  </div> 
  </div>
  {/each}
  <!-- <div tabindex="0" class="w-full max-w-5xl mb-4 opacity-70  collapse collapse-arrow  rounded-xl">
    <div class="collapse-title text-xl font-medium bg-[#7165E3]">
  Day 2
</div>
<div class="collapse-content"> 
 
</div>
</div> 

<div tabindex="0" class="w-full max-w-5xl mb-4 opacity-70  collapse collapse-arrow  rounded-xl">
<div class="collapse-title text-xl font-medium bg-[#7165E3]">
Day 3
</div>
<div class="collapse-content"> 
<p>tabindex="0" attribute is necessary to make the div focusable</p>
</div>
</div> 
<div tabindex="0" class="w-full max-w-5xl mb-4 opacity-70  collapse collapse-arrow  rounded-xl">
<div class="collapse-title text-xl font-medium bg-[#7165E3]">
Day 4
</div>
<div class="collapse-content"> 
<p>tabindex="0" attribute is necessary to make the div focusable</p>
</div>
</div> 
<div tabindex="0" class="w-full max-w-5xl mb-4 opacity-70  collapse collapse-arrow  rounded-xl">
<div class="collapse-title text-xl font-medium bg-[#7165E3]">
Day 5
</div>
<div class="collapse-content"> 
<p>tabindex="0" attribute is necessary to make the div focusable</p>
</div>
</div> 
<div tabindex="0" class="w-full max-w-5xl mb-4 opacity-70  collapse collapse-arrow  rounded-xl">
<div class="collapse-title text-xl font-medium bg-[#7165E3]">
Day 6
</div>
<div class="collapse-content"> 
<p>tabindex="0" attribute is necessary to make the div focusable</p>
</div>
</div> 
<div tabindex="0" class="w-full max-w-5xl mb-4 opacity-70  collapse collapse-arrow  rounded-xl">
    <div class="collapse-title text-xl font-medium bg-[#7165E3]">
    Day 7
    </div>
    <div class="collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
    </div>
    </div>




</div>
 -->

