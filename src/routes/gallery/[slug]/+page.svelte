<script>
  export let data;
</script>
<main class="m-auto">
  <h1 class=" p-2 text-center text-3xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">{data.card.cardTitle}</h1>
  <img class="h-auto p-2 max-w-full mx-auto" src="{data.card.cardImg}" alt="{data.card.altText}">

</main>
