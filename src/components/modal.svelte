<script>

</script>

<div class="custModal d-none">
    <div class="custModalHeader">
        
    </div>
    <div class="custModalBody row">
        <div class="credit col-md-6">
            <img src="/icons/credit.gif" alt="credit">
        </div>
        <div class="debit col-md-6">
            <img src="/icons/debit.gif" alt="credit">
        </div>
    </div>

</div>



<style>

.custModal{

    z-index: 1000;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 400px;
    height: 30%;
    border: 2px solid black;
    box-shadow: 0px 0px 25px 2px;
}

.custModalHeader{
    height: 20px;
    width: 100%;
    background-color: rgba(46, 160, 217, 0.727);
    border-bottom-left-radius: 15%;
    border-bottom-right-radius: 15%;
}

.debit{
    width: 50%;
}

.credit img{
    width: 100%;
    height: auto;
    border: 2px solid black;
    border-radius: 10%;

}

.credit{
    width: 50%;
}

.debit img{
    width: 100%;
    height: auto;
    border: 2px solid black;
    border-radius: 10%;

}


</style>