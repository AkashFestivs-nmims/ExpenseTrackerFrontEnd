<script>
import { onMount } from "svelte";
import Header3 from "../components/header3.svelte";
import SideBar from "../components/sideBar.svelte";

let styleObj = {'COMPLETED' :{'color' : '#00FA9A','icon' : '&#128338;'},'FAILED' :{'color' : '#F08080','icon' : '&#128338;'},
                'PENDING' :{'color' : '#FAFAD2','icon' : '&#128338;'} ,'TOTAL' :{'color' : '#00FFEF' , 'icon' : '#00FA9A'}}

let transactionObj = {
    'transactionList' : [{'accountType' : 'CASH' ,'ammount' : '500' , 'status' : 'COMPLETED' , 'time' : '23 Feb 2023 17:45:31'},
                         {'accountType' : 'SAVING' ,'ammount' : '200' , 'status' : 'FAILED' , 'time' : '24 Feb 2023 17:45:31'},
                         {'accountType' : 'STOCK MARKET' ,'ammount' : '700' , 'status' : 'COMPLETED' , 'time' : '20 Feb 2023 17:45:31'},
                         {'accountType' : 'MUTUAL FUND' ,'ammount' : '5000' , 'status' : 'PENDING' , 'time' : '25 Feb 2023 17:45:31'}],
    'completedCount' : 2,
    'failedCount' : 1,
    'pendingCount' : 1
    }

function counter(selector, duration) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        let start = 0;
        const end = parseInt(element.textContent);
        const step = Math.ceil((end - start) / (duration / 10));
        const interval = setInterval(function () {
            start += step;
            if (start >= end) {
                clearInterval(interval);
                start = end;
            }
            element.textContent = start;
        }, 10);
    });
}

onMount(()=> {
    counter('#count-chart',50000)

})

</script>

<SideBar />
<Header3 />

<main>
    <div class="transactionListBody p-5">
        <div class="row">
            <div class="col-md-3">
                <div class="counter">
                    <h1 id="count-chart">4</h1> 
                    <h4 style="background-color: {styleObj.TOTAL.color};">TOTAL</h4>
                </div>
            </div>
            <div class="col-md-3">
                <div class="counter">
                    <h1 id="count-chart">2</h1> 
                    <h4 style="background-color: {styleObj.COMPLETED.color};">COMPLETED</h4>
                </div>
            </div>
            <div class="col-md-3">
                <div class="counter">
                    <h1 id="count-chart">1</h1> 
                    <h4 style="background-color: {styleObj.FAILED.color};">FAILED</h4>
                </div>
            </div>
            <div class="col-md-3">
                <div class="counter">
                    <h1 id="count-chart">1</h1> 
                    <h4 style="background-color: {styleObj.PENDING.color};">PENDING</h4>
                </div>
            </div>
        </div>
        <div style="margin-top: 20px;">
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
        </div>

    </div>
</main>

<style>

main{

    min-width: calc(100% - var(--sideBarWidth));
    margin-top: 8vh;
    margin-left: var(--sideBarWidth);
    min-height: 92vh;
    padding: 30px;
    transition: ease-in-out 0.5s;
}

i{
    border-radius: 8px;
}

.transactionListBody{
    min-height: 85vh;
    background-color: white;
    border-radius: 20px;
}

.counter{
    border: 1px solid black;
    width: 40%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    border-radius: 20px;
    overflow: hidden;
}

.col-md-3{
    display: flex;
    justify-content: center;
}

h4{
    border-radius: 15px;
}
</style>