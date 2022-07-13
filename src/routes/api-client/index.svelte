<script>
	import Fa from 'svelte-fa';
	import { faCirclePlus, faPencil, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
	import Sidebar from '../../components/sidebar/sidebar.svelte';
	//  import { paginate, LightPaginationNav } from 'svelte-paginate'
	import Navbar from '../../components/navbar/navbar.svelte';
	let columns = ['Client', 'Contact Name', 'Phone', 'Email', 'Onbording Date'];
	let data = [
		['Janvikas', 'John Doe', '+91 131234565432', 'john@example.com', '01-03-2020'],
		['Rean', 'John Doe', '+91 131234565432', 'john@example.com', '01-03-2020'],
		['Janvikas', 'John Doe', '+91 131234565432', 'john@example.com', '01-03-2020'],
		['ABCD', 'John Doe', '+91 131234565432', 'john@example.com', '01-03-2020'],
		['Rean', 'John Doe', '+91 131234565432', 'john@example.com', '01-03-2020'],
		['Janvikas', 'John Doe', '+91 131234565432', 'john@example.com', '01-03-2020'],
		['Rean', 'John Doe', '+91 131234565432', 'john@example.com', '01-03-2020'],
		['Rean', 'John Doe', '+91 131234565432', 'john@example.com', '01-03-2020'],
		['Janvikas', 'John Doe', '+91 131234565432', 'john@example.com', '01-03-2020'],
		['Rean', 'John Doe', '+91 131234565432', 'john@example.com', '01-03-2020']
	];
</script>

<Navbar />
<!-- <Sidebar /> -->
<div class=" flex justify-center flex-col  items-center mx-14 mt-4 ">
	<div class="flex flex-row ">
		<div class=" form-control ">
			<h1 class="mb-3 " />
			<div class="relative flex items-center ">
				<input type="text" placeholder="Search" class="input input-bordered w-96" />
				<Fa icon={faSearch} size="lg" class="absolute right-0 pr-3  pointer-events-none" />
			</div>
		</div>
		<div>
			<a href="/api-client/create">
			<Fa icon={faCirclePlus} size="4x" class="ml-10" />
		</a>
			<p class="ml-10 mt-2">Add New</p>
		</div>
	</div>

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
		<button class="btn">1</button>
		<button class="btn ">2</button>
		<button class="btn">3</button>
		<button class="btn">4</button>
		<button class="btn">5</button>
		<button class="btn">6</button>
		<button class="btn">7</button>
	</div>
</div>
