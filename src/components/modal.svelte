<script>

import { isModalOpen } from "../store/modal-store";
import { fade } from 'svelte/transition';

 

    function closeModal(e) {
        isModalOpen.set(!isModalOpen)
    }

 

    function mainBodyClick(e) {
        e.stopPropagation();
    }

</script>

{#if $isModalOpen}
    <nav>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="backdrop" transition:fade on:click={closeModal}>

        <div class="custModal" on:click={mainBodyClick}>
            <div class="custModalHeader">
                <b>Select Transaction Type : Credit/Debit</b>
            </div>
            <div class="custModalBody row">
                    <div class="credit col-md-6">
                    <a href="/credit">
                        <img src="/icons/credit.gif" alt="credit">
                    </a>
                    </div>
                <div class="debit col-md-6">
                    <a href="/debit">
                    <img src="/icons/debit.gif" alt="debit">
                </a>
                </div>
            </div>
        </div>

        </div>
    </nav>
{/if}

 
<style>

 
.credit img:hover{
    box-shadow: 6px 6px 16px 1px;
}

 

.debit img:hover{
    box-shadow: 6px 6px 16px 1px;
}

 

.custModal{

    z-index: 99999;
    position: absolute;
    margin: auto;
    width: 400px;
    height: 40%;
    box-shadow: 0px 0px 25px 2px;
    border: 10px;
}

 

.custModalHeader{
    display: grid;
    height: 50px;
    background-color: rgba(46, 160, 217, 0.727);
    border-bottom-left-radius: 15%;
    border-bottom-right-radius: 15%;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
}

 

.custModalBody {
    padding: 10px 20px;
}

 

.credit img{
    width: 100%;
    height: auto;
    outline: 1px solid black;
    border-radius: 10%;
 
}

 

.debit img{
    width: 100%;
    height: auto;
    outline: 1px solid black;
    border-radius: 10%;
}

 

.backdrop {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(255,255,255,0.9);
}

</style>

