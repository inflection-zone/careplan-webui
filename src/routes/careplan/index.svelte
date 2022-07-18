<script>
	import { paginate, DarkPaginationNav } from 'svelte-paginate';
	import Fa from 'svelte-fa';
	import {
		faCirclePlus,
		faPencil,
		faTrash,
		faSearch,
		faAngleLeft,
		faAngleRight
	} from '@fortawesome/free-solid-svg-icons';

	import Navbar from '../../components/navbar/navbar.svelte';

	let columns = ['Care plan', 'Code', 'Category', 'Created Date'];
	let items = [
		['Maternity (Regular)', 'MATERNITY', 'Maternity and Neonatal', '01-March-2020'],
		['Sport Injury (Post-Op)', 'SPORTS-POST-OP', 'Post Surgery Care', '01-March-2020'],
		['Eye care (Post-Op)', 'EYE-POST-OP', 'Post Surgery Care', '01-March-2020'],
		['Spinal Physiotherapy', 'SPINAL-PHYSIO', 'Neuro Care', '01-March-2020'],
		['Neonatal Special Care', 'NEONATAL-SPECIAL', 'Maternity and Neonatal', '01-March-2020'],
		['Malnutrition-Children', 'MALNUTRITION-CH', 'Nutrition', '01-March-2020'],
		['Malnutriion-Children', 'MALNUTRITION-CH', 'Nutrition', '01-March-2020'],
		['Manutrition-Children', 'MALNUTRITION-CH', 'Nutrition', '01-March-2020']
	];
	$: paginatedItems = paginate({ items, pageSize, currentPage });
	let currentPage = 0;
	let pageSize = 5;
</script>

<Navbar />

<div class=" breadcrumbs text-lg mt-4 text-[#7165E3] ml-14 mt-10">
	<ul>
		<li><a href="/">Home</a></li>
		<li>My care plans</li>
	</ul>
</div>

<div class="flex flex-row mx-14 mt-4 ">
	<div class="basis-1/2 justify-center items-center ">
		<div class="relative flex items-center  ">
			<h3>Care Plans</h3>
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

<div class="flex flex-row mx-14 mt-4 gap-8">
	<div class="basis-1/2 justify-center items-center ">
		<div class="relative flex items-center  ">
			<input type="text" placeholder="Search" class="input input-bordered w-full" />
			<Fa icon={faSearch} size="lg" class="absolute right-0 pr-3  " />
		</div>
	</div>
	<div class="basis-1/2 justify-center items-center">
		<div class="relative flex items-center  ">
			<input type="text" placeholder="Search" class="input input-bordered w-full" />
			<Fa icon={faSearch} size="lg" class="absolute right-0 pr-3 " />
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
			{#each paginatedItems as row, index}
				<tr>
					<td>{pageSize * 0 + index + 1}.</td>

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

	<DarkPaginationNav
		totalItems={items.length}
		{currentPage}
		limit={1}
		showStepOptions="{faAngleLeft}{faAngleRight}"
		on:setPage={(e) => (currentPage = e.detail.page)}
	/>
</div>
