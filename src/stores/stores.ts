import { writable } from "svelte/store";

export const isOpen = writable(false);

export const showDialogs = writable(true);
export const showButtons = writable(true);

export const activeButton = writable<number | null>(null);

export const cameraIndex = writable(0);

export const cameraPositions = [
  [10, 10, 25, 0, 0, 0], // Posición 0 (humanos)
  [2, 2, 18, 3.5, 0.3, 10.8], // Posición 1 zombies
  [-6, 2, 18, -4.6, 0.5, 10], // Posición 2 vampiros
  [4, 4.5, 8, 3.7, 5, 0], // Posición buho
  [-5, 5, 7, -3, 0.8, -1], // Posición 5 bruja
  [-2, 4.5, 4, -3.2, 4.5, 0.2], // Posición 5 (blancanieves)
  [0, 1.2, 15, 0, 0, 0], // init
];
