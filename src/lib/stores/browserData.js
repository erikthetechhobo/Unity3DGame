import { writable } from 'svelte/store';

export const browser = writable(null);
export const os = writable(null);
export const displayInstall = writable(null);
export const isPWArunning = writable(false);