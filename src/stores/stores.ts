import { writable } from "svelte/store";

export const isOpen = writable(false);

export const showDialogs = writable(true);
export const showButtons = writable(true);
