<script>

let completed = '#00FA9A';
let failed = '#F08080';
let pending = '#FAFAD2';

</script>

<div class="listTranscationCard">
    <div class="listTransactionHeader row">
        <div class="row" style="font-size: 25px;">
            <div class="col-md-6">
                <b>Transaction List</b>
            </div>
            <div class="col-md-6" style="gap: 50px; display: flex; justify-content: end;">
                <b>75</b>
                <b>15</b>
                <b>7</b>
            </div>
        </div>
        <div class="row" style="padding: 20px; height: 30px; font-size: 10px; border-radius: 30px;">
            <div class="col-md-6" style="height: 100%; display: flex;justify-content: start; align-items: end;">
                <b>Total Transaction : 225</b>
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
                <tr>
                    <td>CASH</td>
                    <td>400 &#x20b9;</td>
                    <td><i style="background-color: {completed};" > &#128338;  COMPLETED </i></td>
                    <td>23 Feb 2023 17:45:31</td>
                </tr>
                <tr>
                    <td>CASH</td>
                    <td>400 &#x20b9;</td>
                    <td><i style="background-color: {failed};" > &#128338;  FAILED</i></td>
                    <td>23 Feb 2023 17:45:31</td>
                </tr>
                <tr>
                    <td>CASH</td>
                    <td>400 &#x20b9;</td>
                    <td><i style="background-color: {pending};" > &#128338;  PENDING </i></td>
                    <td>23 Feb 2023 17:45:31</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>


<style>

i{
    border-radius: 8px;
}

.listTranscationCard{
    margin-top: 20px;
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

</style>