<script>
	import Fa from 'svelte-fa';
	import { faBell, faHome } from '@fortawesome/free-solid-svg-icons';

	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
	});
</script>

<div class="navbar bg-primary">
	<div class="flex-1">
		<!-- <button class="btn btn-square btn-ghost">
			<label for="my-drawer-2" class="btn btn-primary ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-5 h-5 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/></svg
				>
			</label>
		</button> -->
	</div>

	<div class="flex-none">
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<div class="indicator">
					<Fa icon={faHome} size="lg" />
				</div>
			</label>
		</div>

		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<div class="indicator">
					<Fa icon={faBell} size="lg" />
				</div>
			</label>
		</div>
		<div class="dropdown dropdown-end">
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img src="https://api.lorem.space/image/face?hash=33791" />
				</div>
			</label>
			<ul
				tabindex="0"
				class="menu menu-vertical dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64 h-screen"
			>
				<li>
					<div class="flex flex-col">
						<h2 class=" font-semibold text-2xl">Profile</h2>
						<a>
							<div class="avatar online">
								<div class="w-24 rounded-full">
									<img src="https://api.lorem.space/image/face?hash=28212" />
									<div />
								</div>
							</div>
						</a>
						<h2 class="font-medium text-lg font-serif">Matthew Roberts</h2>
						<h4>San Francisco,CA</h4>
					</div>
				</li>
				<div class="flex justify-center">
					<select data-choose-theme class="select select-bordered ">
						<option value="light">Light</option>
						<option value="corporate">Corporate</option>
						<option value="dark">Dark</option>
						<option value="bumblebee">Bumblebee</option>
						<option value="emerald">emerald</option>
						<option value="synthwave">synthwave</option>
						<option value="retro">Retro</option>
						<option value="cyberpunk">cyberpunk</option>
						<option value="valentine">valentine</option>
						<option value="halloween">halloween</option>
						<option value="luxury">Luxury</option>
						<option value="garden">garden</option>
						<option value="forest">forest</option>
						<option value="aqua">aqua</option>
					</select>
				</div>

				<li><a>Logout</a></li>
			</ul>
		</div>
	</div>
</div>
