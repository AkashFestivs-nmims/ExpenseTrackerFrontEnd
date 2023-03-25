<script>

import { isModalOpen } from "../store/modal-store";
import { fade } from 'svelte/transition';

 

    function closeModal(e) {
        isModalOpen.update((data) => {
           data.isOpen = !$isModalOpen.isOpen
           return data;
        })
    }

 

    function mainBodyClick(e) {
        e.stopPropagation();
    }

</script>

{#if $isModalOpen.isOpen}
    <nav>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="backdrop" transition:fade on:click={closeModal}>

        <div class="custModal" on:click={mainBodyClick}>
            <div class="custModalHeader">
                <b>{$isModalOpen.header}</b>
            </div>
            <div class="custModalBody row">
                   {@html $isModalOpen.body}
            </div>
        </div>

        </div>
    </nav>
{/if}

 
<style>

.custModal{

    z-index: 99999;
    position: absolute;
    margin: auto;
    width: 35%;
    min-height: 40%;
    box-shadow: 0px 0px 25px 2px;
    border: 10px;
    text-align: center;
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

