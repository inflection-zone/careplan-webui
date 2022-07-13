<script>
    import Fa from 'svelte-fa';
    import { faMultiply, faPen } from '@fortawesome/free-solid-svg-icons';
    // @ts-ignore
    import Navbar from '../../../../components/navbar/navbar.svelte';
</script>

 <Navbar/>
<div class=" breadcrumbs text-lg  text-primary ml-14 mt-10">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="">Assets</a></li>
        <li><a href="">Word Power</a></li>
        <li>View</li>
    </ul>
</div>
<form class="w-full max-w-4xl  bg-[#ECE4FC] mt-12  rounded-lg mx-auto">
    <div class="w-full  h-14 rounded-t-lg p-3  bg-primary">
        <div class="ml-3 relative flex flex-row text-white text-xl">
            Word Power - Nutrition
            <Fa icon={faMultiply} size="lg" class="absolute right-0 pr-3 pointer-events-none" />
        </div>
    </div>
    <div class="flex items-center mb-4 mt-10 mx-16">
        <div class="w-1/3">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="lable-text">Asset Code</label>
        </div>
        <div class="w-2/3">
            WORDPOWER-AB-1
        </div>
    </div>
    <div class="flex items-center my-4 mx-16">
        <div class="w-1/3">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="lable-text"> Word </label>
        </div>
        <div class="w-2/3">
            Nutrition
        </div>
    </div>
    <div class="flex items-center my-4 mx-16">
        <div class="w-1/3">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="lable-text"> Description </label>
        </div>
        <div class="w-2/3">
            Nutrition is the biochemical and physiological process by which an organism uses food to support its life. It includes ingestion, absorption, assimilation, biosynthesis, catabolism and excretion.
        </div>
    </div>
    <div class="flex items-center my-4 mx-16">
        <div class="w-1/3">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="lable-text"> AdditionalResources </label>
        </div>
        <div class="w-2/3">
            https://en.wikipedia.org/wiki/Nutrition , https://en.wikipedia.org/wiki/Micronutrient
        </div>
    </div>
    <div class="flex items-center my-4 mx-16">
        <div class="w-1/3">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="lable-text"> Tags </label>
        </div>
        Maternity , Neo-natal-care
    </div>
    <div class="flex items-center my-4 mx-16">
        <div class="w-1/3">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="lable-text"> Version </label>
        </div>
        <div class="w-2/3">
            V1
        </div>
    </div>
    <div class="flex items-center mt-10 mx-16">
        <div class="w-5/6" />
        <div class="w-1/6 ">
            <a href="/assets/word-power/[id]/edit">
            <button class="btn  btn-outline w-full mb-10 mr-4"> Edit
                <Fa icon={faPen} size="lg" class= "ml-5" />
             </button>
            </a>
        </div>
    </div>
</form>