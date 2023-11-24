<script>
  export let reviewName;
  export let review;
  export let date;
</script>

<div class= "max-w-xs bg-rose-900 hover:bg-rose-950 rounded-3xl p-6"> 
  <h3 class= "text-white py-2">{reviewName}</h3>  
    <p>
   {review}
  </p>
      <p>{date}</p>
</div>

