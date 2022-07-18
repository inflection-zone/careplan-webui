<!-- <script>
	import Fa from 'svelte-fa';
	import { faCirclePlus, faPencil, faTrash, faSearch, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
	import Sidebar from '../../components/sidebar/sidebar.svelte';
	//  import { paginate, LightPaginationNav } from 'svelte-paginate'
	import Navbar from '../../components/navbar/navbar.svelte';
	let columns = ['Care plan', 'Code', 'Category', 'Created Date'];
	let data = [
		['Maternity (Regular)', 'MATERNITY', 'Maternity and Neonatal', '01-March-2020'],
		['Sport Injury (Post-Op)', 'SPORTS-POST-OP', 'Post Surgery Care', '01-March-2020'],
		['Eye care (Post-Op)', 'EYE-POST-OP', 'Post Surgery Care', '01-March-2020'],
		['Spinal Physiotherapy', 'SPINAL-PHYSIO', 'Neuro Care', '01-March-2020'],
		['Neonatal Special Care', 'NEONATAL-SPECIAL', 'Maternity and Neonatal', '01-March-2020'],
		['Malnutrition-Children', 'MALNUTRITION-CH', 'Nutrition', '01-March-2020'],
	];
</script>

<Navbar />
<div class=" breadcrumbs text-lg mt-4 text-[#7165E3] ml-14 mt-10">
	<ul>
		<li><a href="/">Home</a></li>
		<li>My care plans</li>
	</ul>
</div>

<div class="flex flex-row ">
	<div class="mx-14">
    <h3 class="text-2xl mt-4">My care plans</h3>
	</div>
    <div class="relative flex inset-x-3/4 ">
        <a href="" class="">
            <Fa icon={faCirclePlus} size="5x"  />
            <p class="pl-2">Add New</p>
        </a>
    </div>
</div>
    
<div class=" form-control mb-10 mx-96 flex flex-row gap-6">
    <div class=" relative flex items-center">
        <input type="text" placeholder="Search care plans by name" class="input input-bordered w-96" />
        <Fa icon={faSearch} size="lg" class="absolute right-0 pr-3  pointer-events-none" />
    </div>
    <div class="relative flex items-center ">
        <input type="text" placeholder="Category" class="select select-bordered w-96" />
    </div> 
</div>

<div class=" flex justify-center flex-col  items-center mx-14 mt-4 ">
	<table class="table w-full">
		<thead>
			<tr>
				<th />
				{#each columns as columnHeading}
					<th>{columnHeading}</th>
				{/each}
				<th />
				<th />
			</tr><tr />
		</thead>
		<tbody>
			{#each data as row, index}
				<tr>
					<td>{(index = index + 1)}.</td>

					{#each row as cell}
						<td>{cell}</td>
					{/each}
					<td>
						<a href="/api-client/edit"><Fa icon={faPencil} size="lg" /></a>
					</td>
					<td>
						<Fa icon={faTrash} size="lg" />
					</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<div class="btn-group my-6">
        <Fa icon={faAngleLeft} size="lg" class="mt-4" />
		<button class="btn">1</button>
		<button class="btn ">2</button>
		<button class="btn">3</button>
		<button class="btn">4</button>
		<button class="btn">5</button>
        <Fa icon={faAngleRight} size="lg" class="mt-4" />
	</div>
</div>-->




<script>
    import Fa from 'svelte-fa';
    import {
        faCirclePlus,
        faPencil,
        faTrash,
        faSearch,
        faAngleLeft,
        faAngleRight
    } from '@fortawesome/free-solid-svg-icons';
    import Sidebar from '../../components/sidebar/sidebar.svelte';
    //  import { paginate, LightPaginationNav } from 'svelte-paginate'
    import Navbar from '../../components/navbar/navbar.svelte';
    let columns = ['Care plan', 'Code', 'Category', 'Created Date'];
    let data = [
        ['Maternity (Regular)', 'MATERNITY', 'Maternity and Neonatal', '01-March-2020'],
        ['Sport Injury (Post-Op)', 'SPORTS-POST-OP', 'Post Surgery Care', '01-March-2020'],
        ['Eye care (Post-Op)', 'EYE-POST-OP', 'Post Surgery Care', '01-March-2020'],
        ['Spinal Physiotherapy', 'SPINAL-PHYSIO', 'Neuro Care', '01-March-2020'],
        ['Neonatal Special Care', 'NEONATAL-SPECIAL', 'Maternity and Neonatal', '01-March-2020'],
        ['Malnutrition-Children', 'MALNUTRITION-CH', 'Nutrition', '01-March-2020']
    ];
</script>
<Navbar />
<!-- <Sidebar /> -->
<div class=" breadcrumbs text-lg mt-4 text-[#7165E3] ml-14 mt-10">
    <ul>
        <li><a href="/">Home</a></li>
        <li>My care plans</li>
    </ul>
</div>
<div class="flex flex-row mx-14 mt-4 ">
    <div class="basis-1/2 justify-center items-center ">
        <div class="relative flex items-center  text-2xl">
            <h3>My care plans</h3>
        </div>
    </div>
    <div class="basis-1/2 justify-center items-center">
        <div class="relative flex items-center  ">
            <a href="" class="absolute right-0 pr-3">
                <Fa icon={faCirclePlus} size="4x" />
                <p>Add New</p>
            </a>
        </div>
    </div>
</div>
<div class="flex flex-row mx-14 mt-6 gap-8">
    <div class="basis-1/2 justify-center items-center ">
        <div class="relative flex items-center  ">
            <input type="text" placeholder="Search care plans by name" class="input input-bordered w-full" />
            <Fa icon={faSearch} size="lg" class="absolute right-0 pr-3  " />
        </div>
    </div>
    <div class="basis-1/2 justify-center items-center">
        <div class="relative flex items-center  ">
            <input type="text" placeholder="Category" class="select select-bordered w-full" />
        </div>
        <!--  -->
    </div>
</div>
<div class=" flex justify-center flex-col  items-center mx-14 mt-4 ">
    <table class="table w-full">
        <!-- head -->
        <thead>
            <tr>
                <th />
                {#each columns as columnHeading}
                    <th>{columnHeading}</th>
                {/each}
                <th />
                <th />
            </tr><tr />
        </thead>
        <tbody>
            {#each data as row, index}
                <tr>
                    <td>{(index = index + 1)}.</td>
                    {#each row as cell}
                        <td>{cell}</td>
                    {/each}
                    <td>
                        <a href="/api-client/edit"><Fa icon={faPencil} size="lg" /></a>
                    </td>
                    <td>
                        <Fa icon={faTrash} size="lg" />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
    <div class="btn-group my-6">
        <Fa icon={faAngleLeft} size="lg" class="mt-4" />
        <button class="btn">1</button>
        <button class="btn ">2</button>
        <button class="btn">3</button>
        <button class="btn">4</button>
        <button class="btn">5</button>
        <Fa icon={faAngleRight} size="lg" class="mt-4" />
    </div>
</div>



