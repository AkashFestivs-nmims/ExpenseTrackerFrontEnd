<script>

let obj = [{'logo':'&#9739;','name':'Dashboard'}]

</script>

<div class="sideBar">
    <div class="sideBarLogo">
        <img src="/icons/money-investment.gif" alt="logo" id="loginLogo" class="p-2"/>
        <h4>Expense Tracker</h4>
        -------------------------------------------
    </div>
    <div class="sideBarBody">
        <ul>
            <li>
               <div class="div">
                <object data="/svg/home.svg" title="Dashboard" class="w-6 h-6"></object>
              </div>
               <div class="div">Dashboard</div>
            </li>
        </ul>
    </div>

</div>



<style>

.sideBar{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    border-right: 1px solid rgb(172, 170, 170);
    height: 100vh;
    width: 350px;
    background-color: #F1F3F4;
    margin-left: var(--sideBarInOut);
    transition: ease-in-out 1s;
}

.sideBarLogo{
    display: grid;
    justify-content: center;
    justify-items: center;
}

.sideBarLogo img{
    width: 100px;
    border-radius: 50%;
}


li{
    list-style: none;
    padding: 10px;
    font-size: 18px;
    display: flex;
    gap: 20px;
    font-weight: 700;
    align-items: center;

}

li:hover{
    background-color: #8EB6DC;
    color: white;
    border-radius: 20px;
}



ul{
    padding: 0;
    margin: 0;
}

.w-6{
    width: 32px;
}
.h-6{
    height: 26px;
}
</style>