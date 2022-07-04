
<script>
//  import { paginate, LightPaginationNav } from 'svelte-paginate'

let columns = ["Client", "Contact Name", "Phone", "Email","Onbording Date"]
      let data = [
    ["Janvikas","John Doe", "+91 131234565432","john@example.com","01-03-2020"],
    ["Rean","John Doe", "+91 131234565432","john@example.com","01-03-2020"],
    ["Janvikas","John Doe", "+91 131234565432","john@example.com","01-03-2020"],
    ["ABCD","John Doe", "+91 131234565432","john@example.com","01-03-2020"],
    ["Rean","John Doe", "+91 131234565432","john@example.com","01-03-2020"],
    ["Janvikas","John Doe", "+91 131234565432","john@example.com","01-03-2020"],
    ["Rean","John Doe", "+91 131234565432","john@example.com","01-03-2020"]
  ]
</script>


<div class=" flex justify-center flex-col  items-center w-screen h-screen mx-auto"> 

    <div class="flex flex-row ">
        <div class=" form-control ">
            <input type="text" placeholder="Search" class="input input-bordered w-96 "/>
        </div>
        <div>
        <svg  class="h-12 w-12 text-white rounded-full bg-purple-500 ml-10 mb-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
        </svg>
    <p class= "ml-10">Add New</p>
    </div>
</div>
    <table class="table w-full mt-5 mb-5 ">
      <!-- head -->
        <thead>
            <tr>
                <th></th>
                {#each columns as columnHeading }
                    <th>{columnHeading}</th>
                {/each}
                <th></th>
                <th></th>
            <tr/>
        </thead>
        <tbody>
            {#each data as row ,index}
                <tr>
                    <td>{index=(index+1)}</td>
                    
                    {#each  row as cell }
                        <td>{cell }</td>
                    
                    {/each}
                    <td> 
                        <svg class="h-6 w-6 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                        </svg>
                    </td>
                    <td>
                        <svg class="h-6 w-6 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="4" width="18" height="4" rx="2" />  <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />  <line x1="10" y1="12" x2="14" y2="12" />
                        </svg>
                    </td>
                </tr>
            {/each}
            <tbody>
    </table>
    <div class="btn-group ">
        <button class="btn">1</button>
        <button class="btn ">2</button>
        <button class="btn">3</button>
        <button class="btn">4</button>
      </div>

</div>