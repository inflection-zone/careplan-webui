<script>
    import Fa from 'svelte-fa';
    import { faMultiply} from '@fortawesome/free-solid-svg-icons';
    import Tags from '../../../components/tags.svelte';
    </script>

<div class=" breadcrumbs text-lg  text-[#7165E3] ml-14 mt-10">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="">Assets</a></li>
        <li><a href="">Exercise</a></li>
        <li>Create New</li>
    </ul>
</div>
    
<div class=" flex justify-center flex-col items-center">
    <form class="w-full max-w-4xl bg-[#ECE4FC] mt-10 rounded-lg mx-auto">
        <div class="w-full  h-14 rounded-t-lg p-3  bg-[#7165E3]">
            <div class="ml-3 relative flex flex-row text-white text-xl">
                Create New Exercise
                <Fa icon= {faMultiply} size="lg" class="absolute right-0 pr-3 pointer-events-none"/>
            </div>
        </div>

        <div class="flex items-center mb-4 mt-10 mx-16">
            <div class="w-1/3">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="lable-text" >
                    Name*
                </label>
            </div>

            <div class="w-2/3">
                <input type="text" required placeholder="Enter exercise name here..." class="input input-bordered input-info w-full "/>
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
                <textarea class="textarea textarea-info w-full" placeholder="Enter exercise description here..." />
            </div>
        </div>
        
        <div class="flex items-center my-4 mx-16">
            <div class="w-1/3">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="lable-text" >
                    ExerciseType 
                </label>
            </div>

            <div class="w-2/3">
                <select class="select select-info w-full ">
                    <option disabled selected>Select exercise type</option>
                    <option >Strength</option> 
                    <option >Aerobic</option>
                    <option >Balance</option>
                    <option >Reflexes</option>
                    <option >Flexibility</option>
                </select>
            </div>
        </div>
            
        <div class="flex items-center my-4 mx-16">
            <div class="w-1/3">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="lable-text" >
                    IntensityLevel 
                </label>
            </div>

            <div class="w-2/3">
                <select class="select select-info w-full ">
                    <option disabled selected>Select intensity level</option>
                    <option >None</option> 
                    <option >Minimal</option>
                    <option >Moderate</option>
                    <option >Somewhat hard</option>
                    <option >Hard</option>
                    <option >Harder</option>
                    <option >Very hard</option>
                    <option >Extremely hard</option>
                    <option >Maximum effort</option>
                </select>
            </div>
        </div>
        
        <div class="flex items-center my-4 mx-16">
            <div class="w-1/3">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="lable-text" >
                    RecommendedDurationMin
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
                    Tags
                </label>
            </div>
                
            <div class="w-2/3">
                <Tags placeholder={'Enter a tags here...'} />
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