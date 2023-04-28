<script>
import { user } from './../store/user-store.js';
import Header3 from "../components/header3.svelte";
import SideBar from "../components/sideBar.svelte";
import { onMount } from 'svelte';
import { isProfilClick } from '../store/profileUpdate.js';

let descAttr = true;

onMount(() =>{
    isProfilClick.update((data) => {
        data.isOpen = false
       return data;
    })
})

function editbtnclk(e){
    console.log('Update Click')
    descAttr = false;
    document.querySelector('#savePersonalinfo').classList.remove('d-none');
    document.querySelector('#editPersonalinfo').classList.add('d-none');
}

function savebtnclk(e){
    console.log('Save Click')
    descAttr = true;
    document.querySelector('#savePersonalinfo').classList.add('d-none');
    document.querySelector('#editPersonalinfo').classList.remove('d-none');
}
$: console.log('profilObj',$user)

</script>

<SideBar />
<Header3 />

<main>
    <div class="updateProfilDiv">
        <div class="coverPhoto">
            <div class="profiepic"></div>
        </div>
        <div class="profilInfo p-3">
            <div class="row">
                <div class="col-md-4">
                    <label for="name"><b>Name :</b></label>
                    <input type="text" id="name" disabled={descAttr} class="form-control" value={$user.firstname + " " + $user.lastname} />
                </div>
                <div class="col-md-4">
                    <label for="phone"><b>Phone Number :</b></label>
                    <input type="text" id="phone" disabled={descAttr} class="form-control" value={$user.phoneNumber}/>
                </div>
                <div class="col-md-4">
                    <label for="email"><b>Email Address :</b></label>
                    <input type="text" id="email" disabled={descAttr} class="form-control" value={$user.email}/>
                </div>
            </div>
            <div class="row" style="margin-top: 10px;">
                <div class="col-md-7">
                    <label for="address"><b>Address :</b></label>
                    <input type="text" id="address" class="form-control" disabled={descAttr} style="height: 80px;" value={$user.address}>
                </div>
                <div class="col-md-2" style="display: flex; justify-content: end; align-items: center; gap: 15px;">
                    <button id="savePersonalinfo" class="btn btn-primary d-none" on:click={savebtnclk}>Save</button>
                    <button id="editPersonalinfo" title="sideBarButton" class="btn btn-info"  on:click={editbtnclk}>Edit</button>
                </div>
                <div class="col-md-1" style="display: flex; justify-content: end; align-items: center; cursor: pointer;">
                    <b style="color: red; border: 1px solid red; border-radius: 5px; padding: 1px;">ADMIN</b>
                </div>
            </div>
            <hr>
            <div class="bioDiv">
                <h4><b>-- Profile Bio --</b><object data="/svg/edit.svg" title="sideBarButton" style="height: 28px; width: 28px;"></object></h4>
                <div style="font-size: 20px;font-family: ui-monospace;">
                    {$user.userBio}
                </div>
            </div>
            <hr>
        </div>
    </div>
</main>


<style>

main{

    min-width: calc(100% - var(--sideBarWidth));
    margin-top: 8vh;
    margin-left: var(--sideBarWidth);
    min-height: 92vh;
    padding: 30px;
    transition: ease-in-out 0.5s;
}

.updateProfilDiv{
    min-height: 85vh;
    background-color: white;
    border-radius: 20px;
    min-width: 50vh;
}

.coverPhoto{
    height: 25vh;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-image: url('/icons/nature.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.profiepic{
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 1px solid black;
    background-image: var(--profilUrl);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.bioDiv{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

</style>