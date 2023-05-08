<script>

import Header3 from "../components/header3.svelte";
import SideBar from "../components/sideBar.svelte";
import { isTeamModalopen } from "../store/theamModalStore";

let paymentTypeObj = [{"id" : 1, "title":"add" , "payment_icon" : "/public/icons/add.png"},{"id" : 1, "title":"add" , "payment_icon" : "/public/icons/add.png"},{"id" : 1, "title":"add" , "payment_icon" : "/public/icons/add.png"},{"id" : 1, "title":"add" , "payment_icon" : "/public/icons/add.png"},{"id" : 1, "title":"add" , "payment_icon" : "/public/icons/add.png"},{"id" : 1, "title":"add" , "payment_icon" : "/public/icons/add.png"},{"id" : 1, "title":"add" , "payment_icon" : "/public/icons/add.png"},{"id" : 1, "title":"add" , "payment_icon" : "/public/icons/add.png"},{"id" : 1, "title":"add" , "payment_icon" : "/public/icons/add.png"}]

function handleClick(){
    console.log("CLick")
    isTeamModalopen.set({
        isOpen : true,
        icon:null,
        type:'add'
    })
}

</script>

<SideBar />
<Header3 />

<main>

<div class="paymentTypeDiv">
    <div class="" style="margin-top: 15px;">
        <div class="headLefttDiv" >
            <div class="addicon"></div>
            <h4>Add Payment Type</h4>
        </div>
        <div class="headRightDiv">
            <input type="text" class="form-control" />
            <button class="btn btn-info">Search</button>
        </div>
    </div>
    <div class="paymentTypeBody">
        {#each paymentTypeObj as obj}
            <div class="paymentTypeCicle" title={obj.title} data-id={obj.id}>
                <img src={obj.payment_icon} alt="add">
            </div>
        {/each}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="paymentTypeCicle" title="mainAdd" data-id="0" on:click={handleClick}>
            <img src="/public/icons/add.png" alt="add">
        </div>
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

.paymentTypeDiv{
    padding: 10px;
    min-height: 85vh;
    background-color: white;
    border-radius: 20px;
    min-width: 50vh;
    display: flex;
    flex-direction: column
}

.addicon{
    height: 50px;
    width: 50px;
    border-radius: 100px;
    background-image: url('/public/icons/gif/addanimation.gif');
    background-position: center;
    background-size: cover;
    margin-left: 20px;

}

.headRightDiv{
    width: 40%;
    float: right;
    display: flex;
    gap: 15px;
}

.headLefttDiv{
    text-align: left;
    width: 60%;
    float: left;
    text-align: center;
    display: flex;
    text-align: center;
    gap: 20px;
    align-items: center;
}

.paymentTypeBody{
    margin-top: 20px;
    border: 2px solid black;
    border-radius: 20px;
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 20px;
}

.paymentTypeCicle{
    width: 125px;
    height: 125px;
    box-shadow: 0px 0px 2px 1px;
    border-radius: 100px;
    align-items: center;
    display: grid;
    justify-content: center;
    place-items: center;
}

.paymentTypeCicle:active {
  transform: scale(0.95);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
}

.paymentTypeCicle:focus {
  outline: none;
}

.paymentTypeCicle img{
    height: 90%;
    width: 90%;
}

</style>