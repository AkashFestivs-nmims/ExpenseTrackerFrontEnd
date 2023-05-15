<script>
    import { onMount } from "svelte";
    import { Router, Link } from 'svelte-routing';
    import { HtmlTag } from "svelte/internal";


let styleObj = {'COMPLETED' :{'color' : '#00FA9A','icon' : '&#128338;'},'FAILED' :{'color' : '#F08080','icon' : '&#128338;'},
                'PENDING' :{'color' : '#FAFAD2','icon' : '&#128338;'}}

let transactionObj = {
    'transactionList' : [{'accountType' : 'CASH' ,'ammount' : '500' , 'status' : 'COMPLETED' , 'time' : '23 Feb 2023 17:45:31'},
                         {'accountType' : 'SAVING' ,'ammount' : '200' , 'status' : 'FAILED' , 'time' : '24 Feb 2023 17:45:31'},
                         {'accountType' : 'STOCK MARKET' ,'ammount' : '700' , 'status' : 'COMPLETED' , 'time' : '20 Feb 2023 17:45:31'},
                         {'accountType' : 'MUTUAL FUND' ,'ammount' : '5000' , 'status' : 'PENDING' , 'time' : '25 Feb 2023 17:45:31'}],
    'completedCount' : 2,
    'failedCount' : 1,
    'pendingCount' : 1
    }
let totalTransaction = transactionObj.completedCount + transactionObj.failedCount + transactionObj.pendingCount;

</script>

<div class="listTranscationCard">
    <div class="listTransactionHeader row">
        <div class="row" style="font-size: 25px;">
            <div class="col-md-6">
                <b>Transaction List</b>
            </div>
            <div class="col-md-6" style="gap: 50px; display: flex; justify-content: end;">
                <b>{transactionObj.completedCount}</b>
                <b>{transactionObj.failedCount}</b>
                <b>{transactionObj.pendingCount}</b>
            </div>
        </div>
        <div class="row" style="padding: 20px; height: 30px; font-size: 10px; border-radius: 30px;">
            <div class="col-md-6" style="height: 100%; display: flex;justify-content: start; align-items: end;">
                <b>Total Transaction : {totalTransaction}</b>
            </div>
            <div class="col-md-6"  style="height: 100%; display: flex;justify-content: end; align-items: end; gap:27px">
                <b>Colmpeted</b>
                <b>Failed</b>
                <b>Pending</b>
            </div>
        </div>
    </div>
    <div class="transactionBody">
        <table class="table table-responsive"> 
            <thead class="table-light">
                <tr>
                    <td>ACCOUNT</td>
                    <td>Transaction Ammount</td>
                    <td>Status</td>
                    <td>Time</td>
                </tr>
            </thead>
            <tbody>
                {#each transactionObj.transactionList as obj}
                    <tr>
                        <td>{obj.accountType}</td>
                        <td>{obj.ammount} &#x20b9;</td>
                        <td><i style="background-color: {styleObj[obj.status].color};" >{@html styleObj[obj.status].icon}  {obj.status} </i></td>
                        <td>{obj.time}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
        <div class="d-flex justify-content-center">
            <Link to='/fullTransactionList' class="link">
                    <div><object data="/svg/downArrow.svg" title="Transaction List" class="w-6 h-6"></object>Full Transaction List</div>
            </Link>
        </div>
    </div>
</div>


<style>

i{
    border-radius: 8px;
}

.listTranscationCard{
    margin-top: 20px;
    min-width: 680px;
    height: 400px;
    background-color: #FFFFFF;
    border-radius: 20px;

}

.listTransactionHeader{
    padding: 20px;
    font-family: unset;
    display: flex;
    justify-content: center;
}

.transactionBody{
    padding: 20px;
    font-family: unset;
    text-align: center;

}

#viewTransactionList{
    width: 25%;
    border-radius: 20px;
    background-color: white;
}

.w-6{
    width: 32px;
}
.h-6{
    height: 26px;
}

</style>