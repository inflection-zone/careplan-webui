<script>
	import Fa from 'svelte-fa';
	import {  faPencil, faTrash,} from '@fortawesome/free-solid-svg-icons';
import Index from '../index.svelte';

	let columns = ['Name', 'Code', 'Category', 'Schedule Slot'];
	// let data = [
		// ['Janvikas', 'John Doe', '+91 131234565432', 'john@example.com'],
		// ['Rean', 'John Doe', '+91 131234565432', 'john@example.com'],
		// ['Janvikas', 'John Doe', '+91 131234565432', 'john@example.com'],
		// ['ABCD', 'John Doe', '+91 131234565432', 'john@example.com'],
		// ['Rean', 'John Doe', '+91 131234565432', 'john@example.com'],
		// ['Janvikas', 'John Doe', '+91 131234565432', 'john@example.com'],
		// ['Rean', 'John Doe', '+91 131234565432', 'john@example.com'],
		// ['Rean', 'John Doe', '+91 131234565432', 'john@example.com'],
		// ['Janvikas', 'John Doe', '+91 131234565432', 'john@example.com'],
		// ['Rean', 'John Doe', '+91 131234565432', 'john@example.com',]


		let weeks = [
    {
      weekno: "1",
      days: [
		{
		name:"know your colestrol",
		code:"Vid-01",
		category:"Video",
		slot:"morning",
	  },
	 
      ],
	 
    },
    
  ];
	
</script>

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
			{#each weeks as week,index}
				<tr>
					<td>{index=index+1}</td>

					{#each week.days as detail}
						
						<td>{detail.name}</td>
						<td>{detail.code}</td>
						<td>{detail.category}</td>
						<td>{detail.slot}</td>
						
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

	
</div>
