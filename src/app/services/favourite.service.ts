import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoriteDevicesService {
  private favoritesKey = 'favoriteDevices';

  // Lista predefinita di dispositivi
  private devices = [
    {
      nome: 'LED1',
      stato: false,
      tipo: 0,
    },
    {
      nome: 'LED2',
      stato: true,
      tipo: 0,
    },
    {
      nome: 'Tapparella1',
      stato: true,
      tipo: 1,
    },
  ];

  constructor() {}

  // Aggiungi un dispositivo ai preferiti
  addFavorite(deviceId: string): void {
    const favorites = this.getFavorites();
    if (!favorites.includes(deviceId)) {
      favorites.push(deviceId);
      this.saveFavorites(favorites);
    }
  }

  // Rimuovi un dispositivo dai preferiti
  removeFavorite(deviceId: string): void {
    const favorites = this.getFavorites();
    const updatedFavorites = favorites.filter((id) => id !== deviceId);
    this.saveFavorites(updatedFavorites);
  }

  // Ottieni i preferiti salvati
  getFavorites(): string[] {
    const favorites = localStorage.getItem(this.favoritesKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  // Salva i preferiti in localStorage
  private saveFavorites(favorites: string[]): void {
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }

  // Restituisci solo i dispositivi preferiti
  getFavoriteDevices(): any[] {
    const favorites = this.getFavorites();
    return this.devices
      .filter((device) => favorites.includes(device.nome))
      .map((device) => ({
        ...device,
        favourite: true,
      }));
  }

  updateDevicesWithFavorites(devices: any[]): any[] {
    const favorites = this.getFavorites();
    return devices.map((device) => ({
      ...device,
      favourite: favorites.includes(device.nome), 
    }));
  }
}