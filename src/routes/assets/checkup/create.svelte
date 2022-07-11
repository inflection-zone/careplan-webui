<script>
    import Fa from 'svelte-fa';
    import { faCalendar,faMultiply} from '@fortawesome/free-solid-svg-icons';
</script>

<!-- <div class="h-10 w-screen mb-4 bg-[#7165E3]"></div>
<button for="my-drawer-2" class="position-fixed mr-0 mb-0  text-[#7165E3] h-10">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="inline-block w-12 mb-10 h-5 stroke-current">
        <path stroke-width="3" d="M4 6h30M4 14h30M4 23h30"/>
    </svg>
</button> -->

<div class="inline-block pl-10 text-lg breadcrumbs text-[#5832A1]">
    <ul> 
        <li>
            <a>Assets</a>
        </li>
        <li>
            <a>Checkup</a>
        </li> 
        <li>Create New</li>
    </ul>
</div>
  
<div class=" flex justify-center flex-col items-center ">
        <form class="w-full max-w-4xl bg-[#ECE4FC] mt-20 rounded-lg mx-auto">
            <div class="w-full  h-14 rounded-t-lg p-3  bg-[#7165E3]">
                <div class="ml-3 relative flex flex-row text-white text-xl">
                    Create New Checkup
                    <Fa icon= {faMultiply} size="lg" class="absolute right-0 pr-3 pointer-events-none"/>
                </div>
            </div>

            <div class="flex items-center mb-4 mt-10 mx-16">
                <div class="w-1/3">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="lable-text" >
                        Name *
                    </label>
                </div>

                <div class="w-2/3">
                    <input type="text" required placeholder="" class="input input-bordered input-info w-full "/>
                </div>
            </div>

            <div class="flex items-center my-4 mx-16">
                <div class="w-1/3">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="lable-text">
                        Description
                    </label>
                </div>

                <div class="w-2/3">
                    <textarea class="textarea textarea-info w-full" placeholder="" />
                </div>
            </div>

            <div class="flex items-center my-4 mx-16">
                <div class="w-1/3">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="lable-text" >
                        Tags
                    </label>
                </div>

                <div class="w-2/3">
                    <input type="text" placeholder="" class="input input-bordered input-info w-full "/>
                </div>
            </div>

            <div class="flex items-center my-4 mx-16">
                <div class="w-1/3">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="lable-text" >
                        Version
                    </label>
                </div>

                <div class="w-2/3">
                    <select class="select select-info w-full ">
                        <option >V1.0</option>
                    </select>
                </div>
            </div>

            <div class="flex items-center mt-10 mx-16">
                <div class="w-3/4">
            </div>

            <div class="w-1/4 ">
                <button class="btn btn-primary w-full mb-10 bg-[#5832A1]">Submit</button>
            </div>
        </div>
    </form>
</div>