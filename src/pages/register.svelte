<script>

</script>

<main>

<div class="row">
    <div class="col-md-5" id="regLeft" >
        <div class="expenseTrackerIcon"></div>
        <div>
            <h1>Expense Tracker</h1>
        </div>
        <div style="width: 100%; background-color: black; height: 2px;"></div>
        <div style="margin-top: 50px;">
            <h5>Track Your All Expences At One Place</h5>
        </div>
        <div style="margin-top: 50px;">
            <ul>
                <li>Add All Your Expenses With Expense Type</li>
                <li>Get All The Data In Form Of Charts</li>
                <li>User Friendly InterFace</li>
                <li>Get Weekly,Monthly,Quarterly,Yearly And Even Daily Calculation Done</li>
                <li>Can Store List Of Data</li>
                <li>Customizable</li>
                <li>And Many More...</li>
            </ul>
        </div>
    </div>
    <div class="col-md-7" id="regRight" >
        <div class="regBody">

        </div>
    </div>
</div>

</main>

<style>

* {
    color: white;
}

.row{
    height: 100vh;
    background-image: url('/public/icons/regbackground.jpg');
    background-position: center center; /* Center the image horizontally and vertically */
    background-repeat: no-repeat; /* Prevent the image from repeating */
    background-size: cover; /* Resize the image to cover the entire element */
    position: relative; /* Set the position to relative to position the child elements */
    z-index: 1; /* Set a higher z-index for the child elements */
    background-color: rgba(35, 34, 35, 0.8);
}

.row::before {
  content: ''; /* Add an empty content to the pseudo-element */
  position: absolute; /* Set the position to absolute to position the pseudo-element */
  top: 0; /* Position the pseudo-element at the top of the element */
  left: 0; /* Position the pseudo-element at the left of the element */
  width: 100%; /* Set the width to 100% to cover the entire element */
  height: 100%; /* Set the height to 100% to cover the entire element */
  background-color: rgba(35, 34, 36, 0.8); /* Set the opacity of the pseudo-element */
  z-index: -1; /* Set a lower z-index for the pseudo-element to position it behind the child elements */
}

#regLeft{
    padding: 20px;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

#regRight{
    padding: 20px;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.expenseTrackerIcon{
    height: 200px;
    width: 200px;
    background-image: url('/public/icons/money-investment.gif');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 100px;
    box-shadow: 0px 0px 10px 1px;
}

.regBody{
    width: 80%;
    height: 80%;
    min-width: 500px;
    min-height: 750px;
    box-shadow: 0px 0px 10px 1px;
    border-radius: 25px;
    background-color: white;
    opacity: 0.8;
}

</style>