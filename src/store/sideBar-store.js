import { writable,readable } from "svelte/store";
import {fetchDynamic, getCookie} from "../Script/Script";
import { user } from './../store/user-store.js';
import { derived } from 'svelte/store';


let dashboardCompObj;

export const sideBarComp = writable({

    dashboardCompObj : ''

});

const myCookie = getCookie('myCookie');
let cookie = JSON.parse(myCookie);



    let dashBoardCompObjFromDB =await fetchDynamic('/get-dashboard-comp','POST',cookie)

    sideBarComp.update((data) => {

        data.dashboardCompObj = dashBoardCompObjFromDB;
        return data;
    });






