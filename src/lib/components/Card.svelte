<script>
  export let cardTitle;
  export let cardDes;
  export let cardImg; 
  export let slug;
  export let altText;
</script>
<figure class="max-w-xs bg-rose-900 hover:bg-rose-950 rounded-3xl p-6">
  <a href="{slug}">
  <img class="rounded-2xl" src="{cardImg}" alt="{altText}">
  
  <h3 class="text-white py-2"><strong>{cardTitle}</strong></h3>
 
  <p class="text-white py-2">
    <em>{cardDes}</em>
  </p>
</a>
</figure>
