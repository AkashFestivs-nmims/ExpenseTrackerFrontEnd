<script>

</script>

<header>
    <div class="header">
        <div class="row">
            <div class="col-md-4 col-sm-12 header-start p-2">
                <img src="/icons/logo.png" alt="ICON" class="Iconlogo"/>
                <img src="/icons/money-investment.gif" alt="ICON" class="iconRound"/>
            </div>

            <div class="col-md-4 col-sm-12 header-middle p-1 sizeUpClass">

                <input type="text" class=""/>

            </div>

            <div class="col-md-4 col-sm-12 header-end p-1">
                
                <select class="selectClass">
                    <option value="volvo"></option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>&nbsp;&nbsp;

                <select class="selectClass">
                    <option value="volvo"></option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>&nbsp;&nbsp;

                <select class="selectClass">
                    <option value="volvo"></option>
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
        height: 100px;
        background-image: url('/icons/header.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #6CA0DC;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
        box-shadow: 0px 5px 15px 25px #639ad9;
        top: 0;
    }

    .header-middle{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header-middle input{
        transition: ease-in-out 0.3s;
        height: 30px;
        width: 350px;
        border-radius: 10px;
        border: 1px #01418b;
        box-shadow: 0px 0px 20px 1px;
    }

    .header-end{
        display: flex;
        align-items: center;
        justify-content: end;
        margin-left: -15px;
    }

    .header-end select{
        padding: 2px;
        transition: ease-in-out 0.1s;
        height: 40px;
        width: 40px;
        border-radius: 100%;
        border: 1px #01418b;
        box-shadow: 0px 0px 20px 1px;
    }

    .sizeUpClass:hover input{
        border-radius: 5px;
        transition: ease-in-out 0.3s;
        height: 30px;
        width: 400px;
    }

    .selectClass:hover{
        transition: ease-in-out 0.2s;
        border-radius: 5px;
        width: 100px;
    }

    .header-start{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .iconRound{
        width: 70px;
        border-radius: 100%;
        box-shadow: 0px 0px 20px 1px;
    }

    .Iconlogo{
        width: 150px;
        height: 35px;
        border-radius: 10%;
        box-shadow: 0px 0px 20px 1px ;
    }

</style>