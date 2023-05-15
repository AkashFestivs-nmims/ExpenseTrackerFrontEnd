import { writable } from "svelte/store";

export const isTeamModalopen = writable({
    isOpen: false,
    icon : null,
    type: null,
    receiverLid:null
})