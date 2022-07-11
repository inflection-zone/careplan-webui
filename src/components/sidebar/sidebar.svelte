<script>
	import Card from '../../components/cards/card.svelte';
</script>

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Page content here -->

		   <!-- <Card /> -->

		<label for="my-drawer" class="btn btn-primary drawer-button">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path   stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
		</label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer" class="drawer-overlay" />
		<ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
			<!-- Sidebar content here -->
			<li><a>Home</a></li>
			<li><a>Clients</a></li>
			<li><a>Assets</a></li>
			<li><a>Careplans</a></li>
			<li><a>Participants</a></li>
			<li><a>Trends</a></li>
		</ul>
	</div>
</div>
