<script>


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


<div class="header">

<div class="row">
    <div class="col-md-4 headerRight">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="float-left" on:click={sideBarClick}>
            <object data="/svg/sidebarOpenClose.svg" title="sideBarButton" class="w-6 h-6"></object>
        </div>
        <input type="text"  class="form-control"/>
    </div>
    <div class="col-md-8">
        
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


</style>