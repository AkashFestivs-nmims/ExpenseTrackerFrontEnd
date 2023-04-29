import { writable } from "svelte/store";

export let  setAlert = writable({
    isOpen: false,
    alertType : '',
    alertmsg : ''
});