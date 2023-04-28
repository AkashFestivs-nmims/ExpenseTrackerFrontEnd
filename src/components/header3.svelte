<script>
    import { isProfilClick } from "../store/profileUpdate";
    import ProfilDropDown from "./profilDropDown.svelte";



    let sideBarOpen = true;
    const sideBarClick = () =>{
        console.log("CLICK");
        sideBarOpen = !sideBarOpen
        if(sideBarOpen){
            document.documentElement.style.setProperty("--sideBarWidth", "0px");
            document.documentElement.style.setProperty("--sideBarInOut", "-350px");
        }else{
            document.documentElement.style.setProperty("--sideBarWidth", "350px");
            document.documentElement.style.setProperty("--sideBarInOut", "0px");
        }
    }

</script>
{#if $isProfilClick.isOpen}
     <ProfilDropDown />
{/if}

<div class="header">

<div class="row">
    <div class="col-md-4 headerRight">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="float-left" on:click={sideBarClick}>
            <object data="/svg/sidebarOpenClose.svg" title="sideBarButton" style="width: 25px; height: 25px;"></object>
        </div>
        <input type="text"  class="form-control"/>
    </div>
    <div class="col-md-8 headerLeft">
        <div class="profilSettings"  on:click={() => $isProfilClick.isOpen = !$isProfilClick.isOpen}></div>
        <div class="profileSettingDropDown"></div>
    </div>
</div>

</div>


<style>

.header{
    height: 8vh;
    width: calc(100% - var(--sideBarWidth));
    background-color: #F1F3F4;
    position: fixed;
    top: 0;
    right: 0;
    transition: ease-in-out 0.5s;
}

.headerRight{
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    /* padding-left: 30px; */
}

.headerRight input{
    border-radius: 20px;
}

.float-left {
    float: left;
    cursor: pointer;
    margin: 20px 10px;
    z-index: 999;
}

.w-6{
    width: 32px;
}
.h-6{
    height: 26px;
}

.headerLeft{
    display: flex;
    justify-content: end;
    align-items: center;
}

.profilSettings{
    width: 73px;
    height: 73px;
    border-radius: 100px;
    overflow: hidden;
    background-image: var(--profilUrl);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-right: 15px;
    border: 1px solid black;
}

.profilSettings:hover{
    width: 75px;
    height: 75px;
    transition: ease-in-out 0.1s;
}

.w-6{
    width: 5px;
}
.h-6{
    height: 5px;
}

</style>