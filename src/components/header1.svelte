<script>

</script>

<header>
    <div class="header">
        <div class="row">
                <div class="col-md-4 top">
                    <img src="/icons/money-investment.gif" alt="ICON" class="iconRound"/>
                </div>

                <div class="col-md-4 mid">
                    <input type="text" />
                </div> 

                <div class="col-md-4 bottom">
                    <select class="selectClass">
                        <option value="volvo">&#x2655;</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>&nbsp;&nbsp;
                </div>

        </div>

    </div>
</header>




<style>

.header{
    top: 0;
    background-image: url('/icons/header.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: auto;
    border: 2px solid black;

}

.mid{
    height: auto;
    display: grid;
    justify-content: center;
    align-items: center;
}

.mid input:hover{
    transition: ease-in-out 0.3s;
    width: 300px;
}

.mid input{
    transition: ease-in-out 0.3s;
    width: 250px;
    border-radius: 10px;
}

.bottom{
    height: auto;
    display: flex;
    justify-content: end;
    justify-items: center;
    align-items: center;

}

.bottom select{
    transition: ease-in-out 0.2s;
    width: 35px;
    height: 35px;
    border-radius: 50%;

    
}

.selectClass:hover{
    transition: ease-in-out 0.2s;
    border-radius: 10%;
    width: 100px;
}

.top{
    height: auto;
    display: grid;
    justify-content: start;
    align-items: center !important;

}

.top img{

    margin-left: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

</style>