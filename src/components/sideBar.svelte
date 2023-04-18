<script>

let obj = [{'logo':'/svg/home.svg','name':'Dashboard'},{'logo':'/svg/chat.svg','name':'Chat'},{'logo':'/svg/bell.svg','name':'Notification'},
            {'logo':'/svg/work.svg','name':'Service'}]

</script>

<div class="sideBar">
    <div class="sideBarLogo">
        <img src="/icons/money-investment.gif" alt="logo" id="loginLogo" class="p-2"/>
        <h4>Expense Tracker</h4>
        -------------------------------------------
    </div>
    <div class="sideBarBody">
        <div class="div">
            <ul>
                {#each obj as obj}
                <li>
                <div class="div">
                    <object data={obj.logo} title="Dashboard" class="w-6 h-6"></object>
                </div>
                <div class="div">{obj.name}</div>
                </li>
                {/each}
            </ul>
        </div>
        <div class="div d-flex justify-content-center align-item-center">
            <div class="text-center">
                    <div class="d-flex justify-content-center" >
                        <div id="userpic"></div>
                    </div>
                <h4 style="margin-top: 10px;">Akshay Kumar</h4>
            </div>
        </div>
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
    transition: ease-in-out 0.5s;
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

.sideBarBody{
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

#userpic{
    width: 75px;
    height: 75px;
    border-radius: 100px;
    box-shadow: 0px 0px 15px 1px;
    overflow: hidden;
    background-image: url('/icons/pyselaya.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

#userpic:hover{
    transform: rotate(360deg);
    transition: ease-in-out 0.5s;
}
</style>