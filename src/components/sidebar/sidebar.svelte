<script>
	import Linechart from '../../../components/linechart/linechart.svelte';
	import Barchart from '../../../components/barchart/barchart.svelte';
</script>

<div class="drawer drawer-side">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

	<div class="drawer-content">
		<div class=" ml-24 my-1 ">
			<div class=" breadcrumbs">
				<ul>
					<li><a>Home</a></li>
					<li><a href="/api-client/view">Clients</a></li>
				</ul>
			</div>
		</div>

		<div class="grid grid-cols-3 gap-y-14 gap-x-0 ml-24">
			<div class="card w-72 bg-base-100 shadow-xl">
				<div class="card-body items-center text-center">
					<h2 class="card-title">Clients</h2>
					<h2 class="card-title">5</h2>
					<figure class="px-1 pt-1">
						<Barchart class="rounded-xl" />
					</figure>
				</div>
			</div>

			<div class="card w-72 bg-base-100 shadow-xl">
				<div class="card-body items-center text-center">
					<h2 class="card-title">Assets</h2>
					<figure class="px-1 pt-1">
						<Linechart class="rounded-xl" />
					</figure>
				</div>
			</div>

			<div class="card w-72 bg-base-100 shadow-xl">
				<div class="card-body items-center text-center">
					<h2 class="card-title">Careplans</h2>
					<h2 class="card-title">22</h2>
					<figure class="px-1 pt-1">
						<Barchart class="rounded-xl" />
					</figure>
				</div>
			</div>
			<div class="card w-72 bg-base-100 shadow-xl">
				<div class="card-body items-center text-center">
					<h2 class="card-title">Participants</h2>
					<figure class="px-1 pt-1">
					
					</figure>
				</div>
			</div>

			<div class="card w-72 bg-base-100 shadow-xl">
				<div class="card-body items-center text-center">
					<h2 class="card-title">Total Enrollment</h2>
					<figure class="px-1 pt-1">
						
					</figure>
				</div>
			</div>

			<div class="card w-72 bg-base-100 shadow-xl">
				<div class="card-body items-center text-center">
					<h2 class="card-title">Active Enrollment</h2>
					<figure class="px-1 pt-1" >

				    </figure>
				</div>
			</div>
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-4 overflow-y-auto w-72 bg-base-100  text-base-content">
			<li><a href = "">Home</a></li>
			<li><a href="/api-client/view">Clients</a></li>
		</ul>
	</div>
</div>

<main />
