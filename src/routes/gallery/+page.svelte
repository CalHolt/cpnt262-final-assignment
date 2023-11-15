<script>
import Card from "../../lib/components/Card.svelte";
import { galleryInformation } from "../../lib/data";
</script>
<main class = "p-6 grid grid-cols-1 gap-4 justify-items-center align-items-center md:grid-cols-2 lg:grid-cols-4">
  {#each galleryInformation as info}
  <Card {...info}/>
  {/each}
</main>