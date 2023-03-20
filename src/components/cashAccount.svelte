<script>

export let amount,imgUrl;

</script>


<div class="card" style="width: 13rem;">
    <img class="card-img-top" src={imgUrl} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">CASH</h5>
      <p class="card-text">{amount} &#x20b9;</p>
        <button type="button" class="btn btn-primary">Transaction</button>
    </div>
  </div>


<style>

img{
    border-top-right-radius: 20%;
}

.card{
    border-top-right-radius: 20%;
}


</style>