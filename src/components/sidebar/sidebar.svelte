<script>
	import Card from "../cards/card.svelte";
</script>


<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
	  <!-- Page content here -->
	  <label for="my-drawer" class="btn btn-primary drawer-button">
		<button>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
		  </button>

	  </label>
	  <Card />
	</div> 
	<div class="drawer-side">
	  <label for="my-drawer" class="drawer-overlay"></label>
	  <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
		<!-- Sidebar content here -->
		<li><a>Sidebar Item 1</a></li>
		<li><a>Sidebar Item 2</a></li>
		
	  </ul>
	</div>
  </div>