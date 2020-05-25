import { LocalStorageKeys } from "./local-storage/local.storage.keys";

export const persistToken = (token: string) =>
  localStorage.setItem(LocalStorageKeys.Token, token);

export const getToken = () => localStorage.getItem(LocalStorageKeys.Token);

export const clearSession = () => localStorage.clear();
