import { Injectable } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root',
})

export class MapboxServiceService {
  mapbox = mapboxgl as typeof mapboxgl;
  map: mapboxgl.Map | undefined;
  markers: mapboxgl.Marker[] = [];

  style = `mapbox://styles/mapbox/streets-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = 4.765;
  lng = -74.082;
  zoom = 10;

  constructor() {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = 'pk.eyJ1Ijoic2ViYXMxNTg5NyIsImEiOiJjbHJtODBhb2gwd3lrMmlwZ3E0eGRoZTZmIn0.VSTmSMUHqj-bCXGUOBQxjA';
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }


  removeAllMarkers() {
    this.markers.forEach((marker) => {
      if (!marker['isOrderMarker']) {
        marker.remove();
      }
    });
    this.markers = [];
  }

  destroyMap() {
    if (this.map) {
      this.map.remove();
      this.map = undefined;
      this.markers = [];
    }
  }
}
