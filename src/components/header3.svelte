<script>


    const sideBarClick = () =>{
        console.log("CLICK");

        let sideBarStyle = document.querySelector(':root');
        let sideBarwidth =  getComputedStyle(sideBarStyle).getPropertyValue('--sideBarWidth');
        log({sideBarwidth})
    }

</script>


<div class="header">

<div class="row">
    <div class="col-md-4 headerRight">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <b on:click={sideBarClick} style="font-size: 30px;">&#8788;</b>
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
    transition: ease-in-out 1s;
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


</style>