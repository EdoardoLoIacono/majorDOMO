import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavouriteDevicesService {
  private favoritesKey = 'favoriteDevices';

  private devices = [
    {
      nome: 'Led1',
      stato: false,
      tipo: 0,
    },
    {
      nome: 'Led2',
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

  addFavorite(deviceId: string): void {
    const favorites = this.getFavorites();
    if (!favorites.includes(deviceId)) {
      favorites.push(deviceId);
      this.saveFavorites(favorites);
    }
  }

  removeFavorite(deviceId: string): void {
    const favorites = this.getFavorites();
    const updatedFavorites = favorites.filter((id) => id !== deviceId);
    this.saveFavorites(updatedFavorites);
  }

  getFavorites(): string[] {
    const favorites = localStorage.getItem(this.favoritesKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  private saveFavorites(favorites: string[]): void {
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }

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