

<script>
    import Carepalnscheduleday from './Carepaln-scheduleday.svelte';
    let weeks = ['week 1', 'week 2', 'week 3', 'week 4', 'week 5', 'week 6', 'week 7'];
</script>



{#each weeks as week}
<div class="flex flex-col items-center  mt-6 justify-center  ">
    <div
        tabindex="0"
        class="w-full max-w-5xl mb-4 shadow-bottom-right  collapse collapse-arrow  rounded-xl"
    >
        <div class="collapse-title text-xl font-medium bg-[#7165E3]">
            {week}
        </div>
        <div class="collapse-content ">
            <Carepalnscheduleday />
        </div>
    </div>
</div>
{/each}