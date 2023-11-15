<script>
  import "../app.css";
  import Header from "../lib/components/Header.svelte";
  import Footer from "../lib/components/Footer.svelte";
</script>
<main >
  <Header />
</main>

<slot />

<div class="mt-auto">
  <Footer />
</div>