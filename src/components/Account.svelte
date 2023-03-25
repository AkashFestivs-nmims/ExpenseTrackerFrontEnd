<script>
import  { isModalOpen } from '../store/modal-store';
export let amount,imgUrl,accountType,type;
function startTransaction(){
  
  if(type == 'account'){
    $isModalOpen.isOpen = true;
    $isModalOpen.header = 'Select Transaction Type : Credit/Debit';
    $isModalOpen.body = ` 
                          <div class="credit col-md-6 col-sm-6">
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
                            </div>
                            <style>
                              .credit img{
                                      width: 80%;
                                      height: 80%;
                                      outline: 1px solid black;
                                      border-radius: 10%;
                                  
                              }

                                  

                              .debit img{
                                      width: 80%;
                                      height: 80%;
                                      outline: 1px solid black;
                                      border-radius: 10%;
                              }

                              .credit img:hover{
                                  box-shadow: 6px 6px 16px 1px;
                              }                             

                              .debit img:hover{
                                  box-shadow: 6px 6px 16px 1px;
                              }
                            </style>
                            `
  }
  if(type == 'usage'){
    $isModalOpen.isOpen = true;
    $isModalOpen.header = 'Start Transaction';
    $isModalOpen.body =   `
    <div class="transactionHistory" style="overflow-y: scroll; height:240px">
                        <p class="mt-1 form-control" style="background-color: #3CB371; box-shadow: 0px 5px 10px 1px #40E0D0;"><b>200 &#x20b9; &#8986;  - 12/03/2023 06:45 PM - COMPLETED &#9989;</b></p>
                        <p class="mt-1 form-control" style="background-color: #FF6347; box-shadow: 0px 5px 10px 1px #BA55D3;"><b>110 &#x20b9; &#8986;  - 13/03/2023 07:30 PM - FAILED &#10060;</b></p>
                        <p class="mt-1 form-control" style="background-color: #FFFF00; box-shadow: 0px 5px 10px 1px #F4A460;"><b>10 &#x20b9; &#8986;  - 14/03/2023 - PENDING &#9889;</b></p>
                        <p class="mt-1 form-control" style="background-color: #3CB371; box-shadow: 0px 5px 10px 1px #40E0D0;"><b>480 &#x20b9; &#8986;  - 12/03/2023 - COMPLETED &#9989;</b></p>
                        <p class="mt-1 form-control" style="background-color: #3CB371; box-shadow: 0px 5px 10px 1px #40E0D0;"><b>80 &#x20b9; &#8986;  - 12/03/2023 - COMPLETED &#9989;</b></p>
                        <p class="mt-1 form-control" style="background-color: #FF6347; box-shadow: 0px 5px 10px 1px #BA55D3;"><b>90 &#x20b9; &#8986;  - 13/03/2023 - FAILED &#10060;</b></p>
                        <p class="mt-1 form-control" style="background-color: #3CB371; box-shadow: 0px 5px 10px 1px #40E0D0;"><b>50 &#x20b9; &#8986;  - 12/03/2023 - COMPLETED &#9989;</b></p>
    </div>
    <div class="sendMoney">
        <input type="number" class="form-control" id="sendMoneyInput" placeholder="Enter Amount"/>
        <button type="button" class="form-control btn btn-primary mt-2" id="sendMoneyBtn" >Send Money</button>
    </div>
    `;
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