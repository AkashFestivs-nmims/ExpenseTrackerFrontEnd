<script>

</script>

<main>
<div class="loginForm">

    <div class="formTab">
        <div class="div" id="formTabHeader">
            <img src="/icons/money-investment.gif" alt="logo" id="loginLogo" class="p-2"/>
            <h6><b>Expense Tracker</b></h6>
            <small style="margin-top: -1%; margin-left: 50%;"><u>One Place For All Expense Tracking</u>...</small>
            <hr>
        </div>
        <div class="formTableBody">
            <div class="formTableBodyInput container">
                <label for="username">Username : </label>
                <input type="text" placeholder="Username" id="username" class="form-control"/>
                <label for="password">Password :</label>
                <input type="text" placeholder="Password" id="password" class="form-control"/>
                <br>
                <a href="/dashboard"> <button class="form-control btn btn-info">Login</button></a>
            </div>
        </div>
        <div class="formTableFooter container" >
            <p><b>&#9993; Email : </b>expenseTracker@gmail.com</p>
            <p><b>&#9742; Phone : </b>9876543210</p>
        </div>

    </div>


</div>

</main>


<style>

main{
    height: 100vh;
    background-image: url('/icons/loginbg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.loginForm{
    
    display: grid;
    justify-items: center;
    width: 40%;
    height: 100%;
}

.formTab{

    margin-top: 15%;
    width: 70%;
    height: 80%;
    border: 1px solid black;
    border-radius: 10%;

}

#formTabHeader{
    display: grid;
    justify-items: center;
    height: 10%;
}

#loginLogo{
    width: 90px;
    border-radius: 100%;
}

.formTableBody{
    height: 50%;
    margin-top: 30%;
}

.formTableFooter{
    height: 10%;
}




</style>