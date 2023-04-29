import { writable,readable } from "svelte/store";
import {fetchDynamic} from "../Script/Script";
import { user } from './../store/user-store.js';
import { derived } from 'svelte/store';


let dashboardCompObj;

export const sideBarComp = writable({

    dashboardCompObj : ''

});


const userRole = derived(user, $user => $user.role);

let role = userRole.subscribe(async role =>{
    console.log('Current user role:', role);
    let sendObj = {'role' : role}
    let dashBoardCompObjFromDB =await fetchDynamic('/get-dashboard-comp','POST',sendObj)

    sideBarComp.update((data) => {

        data.dashboardCompObj = dashBoardCompObjFromDB;
        return data;

})

})




