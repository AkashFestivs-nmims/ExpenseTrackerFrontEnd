
import {writable} from 'svelte/store';


export let  isModalOpen = writable({
    isOpen: false,
    header: '',
    body: ''
});