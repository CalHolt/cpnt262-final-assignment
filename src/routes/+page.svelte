<script>
  import ReviewCard from "../lib/components/ReviewCard.svelte";
  import { reviewInfo } from "../lib/data";
</script>
<div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
  <div class="flex">
    <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p class="font-bold">Welcome to Cal and Kev's website</p>
      <p class="text-sm">Make sure you know how these changes affect you.</p>
    </div>
  </div>
</div>
<body>
<header class="bg-cover bg-center ..." style="background-image: url(https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
  <h1 class="text-5xl text-white">Design a deck today</h1>
  <button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button><button onclick="document.getElementById('demo').innerHTML=Date()">Create your Board</button>
  <p class="text-lg text-white">We now offer the option to create a custom board online! Try making your own today ...</p>
  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Customize Now
    </span>
    </button>
</header>
<h2 class="text-3xl text-center py-2 ">- Our Review's -</h2>
<div class="flex justify-center">
  <section class = "p-6 grid grid-cols-1 gap-4 justify-items-center align-items-center md:grid-cols-2 lg:grid-cols-3">
    {#each reviewInfo as review}
<ReviewCard {...review}/>
{/each}
  </section>
</div>
</body>
<style>
  body {
  line-height: 1.5;
  }

  header {
    height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;

    text-align: center;
  }
</style>