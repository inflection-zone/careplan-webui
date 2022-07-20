<script>
	import { paginate, DarkPaginationNav } from 'svelte-paginate';
	import Fa from 'svelte-fa';
	import {
		faPencil,
		faTrash,
		faSearch,
		faAngleLeft,
		faAngleRight
	} from '@fortawesome/free-solid-svg-icons';

	import Navbar from '../../components/navbar/navbar.svelte';

	let columns = ['Participant Id', 'Care plan', 'Start Date', 'End Date'];
	let items = [
		['PT-000433424', 'MATERNITY', '01-Aug-2019', '01-March-2020'],
		['PT-000232235', 'SPORTS-POST-OP', '05-sep-2019', '01-March-2020'],
		['PT-000123547', 'EYE-POST-OP', '05-sep-2019', '01-March-2020'],
		['PT-000636544', 'MATERNITY', '05-sep-2019', '01-March-2020'],
		['PT-000432323', 'NEONATAL-SPECIAL', '05-sep-2019', '01-March-2020'],
		['PT-000435455', 'MALNUTRITION-CH', '05-sep-2019', '01-March-2020'],
		['PT-000657676', 'MATERNITY', '05-sep-2019', '01-March-2020'],
		['PT-000129292', 'MALNUTRITION-CH', '05-sep-2019', '01-March-2020'],
        ['PT-000435455', 'MALNUTRITION-CH', '05-sep-2019', '01-March-2020'],
		['PT-000657676', 'MATERNITY', '05-sep-2019', '01-March-2020'],
		['PT-000129292', 'MALNUTRITION-CH', '05-sep-2019', '01-March-2020']
	];
	$: paginatedItems = paginate({ items, pageSize, currentPage });
	let currentPage = 1;
	let pageSize = 6;
</script>

<Navbar />

<div class=" breadcrumbs text-lg mt-4 text-[#7165E3] ml-14 mt-10">
	<ul>
		<li><a href="/">Home</a></li>
		<li />
	</ul>
</div>

<div class="flex flex-row mx-14 mt-4 ">
	<div class="basis-1/2 justify-center items-center ">
		<div class="relative flex items-center  ">
			<h3 class="font-semibold text-2xl">Enrollments</h3>
		</div>
	</div>
</div>

<div class="flex flex-row mx-14 mt-4 gap-8">
	<div class="basis-1/2 justify-center items-center ">
		<div class="relative flex items-center">
			<input type="text" placeholder="Search by care plan" class="input input-bordered w-full" />
			<Fa icon={faSearch} size="lg" class="absolute right-0 pr-3 " />
		</div>
	</div>

	<div class="basis-1/2 justify-center items-center">
		<div class="relative flex items-center  ">
			<input
				type="text"
				placeholder="Search by participant id"
				class="input input-bordered w-full"
			/>
			<Fa icon={faSearch} size="lg" class="absolute right-0 pr-3 " />
		</div>
	</div>
</div>

<div class="flex flex-row mx-14 mt-4 gap-8">
	<div class="basis-1/2 justify-center items-center ">
		<div class="relative flex items-center  ">
			<input type="date" class="input input-bordered w-full 2xl" placeholder="Start Date" />
		</div>
	</div>

	<div class="basis-1/2 justify-center items-center">
		<div class="relative flex items-center  ">
			<input type="date" class="input input-bordered w-full" placeholder="End Date" />
		</div>
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
			{#each paginatedItems as row, index}
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

	<!-- <DarkPaginationNav
		totalItems={items.length}
		{currentPage}
		limit={1}
		showStepOptions="{faAngleLeft}{faAngleRight}"
		on:setPage={(e) => (currentPage = e.detail.page)}
	/> -->
</div>
