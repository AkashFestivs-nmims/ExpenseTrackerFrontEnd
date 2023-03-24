<script>
import  { isModalOpen } from '../store/modal-store';
export let amount,imgUrl,accountType,type;
function startTransaction(){
  
  if(type == 'account'){
    $isModalOpen.isOpen = true;
    $isModalOpen.header = 'Select Transaction Type : Credit/Debit';
    $isModalOpen.body = ` <div class="credit col-md-6 col-sm-6">
                            <a href="/credit">
                              <img src="/icons/credit.gif" alt="credit">
                            </a>
                              <h5 class="my-1">CREDIT</h5>
                          </div>
                          <div class="debit col-md-6 col-sm-6">
                            <a href="/debit">
                              <img src="/icons/debit.gif" alt="debit">
                            </a>
                              <h5 class="my-1">Debit</h5>
                            </div>`
  }
  if(type == 'usage'){
    $isModalOpen.isOpen = true;
    $isModalOpen.header = 'Start Transaction';
    $isModalOpen.body =   `
    <div class="mt-auto">
      
      <div style="max-height : 70%; min-height : 70%; height:240px">
        <b class="form-control" style="background-color : #89ff89">850 &#x20b9</b> 
        <b class="form-control" style="background-color : #ff8989">450 &#x20b9</b>
        <b class="form-control" style="background-color : #ffff89">250 &#x20b9</b>   
      </div>
        <input type="number" class="form-control mt-auto"/>
    </div>`;
  }
}


</script>


<div class="card " style="width: 12rem;">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img class="card-img-top" height="150" src={imgUrl} alt="Card image cap" />
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title">{accountType}</h5>
      <p class="card-text ">{amount} &#x20b9;</p>
        <button  type="button" class="btn btn-primary" on:click={startTransaction}>Transaction</button>
    </div>
  </div>


<style>

img{
    border-top-right-radius: 20%;
}

.card{
    border-top-right-radius: 20%;
}

.card:hover{
    box-shadow: 6px 6px 16px 1px #3333ff;
}


</style>