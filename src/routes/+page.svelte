<script>  
import Card from "../lib/components/Card.svelte"
import { galleryInformation } from "../lib/data"
</script>
{#each galleryInformation as info}
<Card {...info}/>
{/each}

