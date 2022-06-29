<script>

import Fa from 'svelte-fa'
  import { faCog,faBell,faHome } from '@fortawesome/free-solid-svg-icons'

   
</script>


<div class="navbar bg-[#7165e3] ">
    <div class="flex-1">
     
        <button class="btn btn-square btn-ghost">
          <label for="my-drawer-2" class="btn btn-primary ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
          </button>

    </div>
   
   
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="indicator">
              <Fa icon={faHome} size="lg"/>
          </div>
        </label>
        <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div class="card-body">
            <!-- card content dropdown menu of card -->
          </div>
        </div>
      </div>
      
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="indicator">
             <Fa icon={faBell} size="lg"/>
          </div>
        </label>
       
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="indicator">  
                <Fa icon={faCog} size="lg" />
          </div>
        </label>
      </div>
      
    
     
  
       
     





<!-- 

      <div class="dropdown dropdown-end">
           <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" />
          </div>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div> -->
    </div>

  </div>