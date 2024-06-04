import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MockService {
  constructor() {}

  // TODO integrar servicios para teaer la información real

  //estos servicios y esta data es solo para demostración
  getGrapData() {
    return [
      { hour: '03:00 AM', count: Math.floor(Math.random() * 101) },
      { hour: '04:00 AM', count: Math.floor(Math.random() * 101) },
      { hour: '05:00 AM', count: Math.floor(Math.random() * 101) },
      { hour: '06:00 AM', count: Math.floor(Math.random() * 101) },
      { hour: '07:00 AM', count: Math.floor(Math.random() * 101) },
      { hour: '08:00 AM', count: Math.floor(Math.random() * 101) },
      { hour: '09:00 AM', count: Math.floor(Math.random() * 101) },
      { hour: '10:00 AM', count: Math.floor(Math.random() * 101) },
      { hour: '11:00 AM', count: Math.floor(Math.random() * 101) },
      { hour: '12:00 PM', count: Math.floor(Math.random() * 101) },
      { hour: '01:00 PM', count: Math.floor(Math.random() * 101) },
      { hour: '02:00 PM', count: Math.floor(Math.random() * 101) }
    ];
  }

  getGrapDataSeason() {
    return [
      { day: '04/03/2024', count: Math.floor(Math.random() * 101) },
      { day: '03/03/2024', count: Math.floor(Math.random() * 101) },
      { day: '02/03/2024', count: Math.floor(Math.random() * 101) },
      { day: '01/03/2024', count: Math.floor(Math.random() * 101) },
      { day: '29/02/2024', count: Math.floor(Math.random() * 101) },
      { day: '28/02/2024', count: Math.floor(Math.random() * 101) },
      { day: '27/02/2024', count: Math.floor(Math.random() * 101) },
      { day: '26/02/2024', count: Math.floor(Math.random() * 101) },
      { day: '25/02/2024', count: Math.floor(Math.random() * 101) },
      { day: '24/02/2024', count: Math.floor(Math.random() * 101) },
      { day: '23/02/2024', count: Math.floor(Math.random() * 101) },
      { day: '22/02/2024', count: Math.floor(Math.random() * 101) },
      { day: '21/02/2024', count: Math.floor(Math.random() * 101) },
      { day: '20/02/2024', count: Math.floor(Math.random() * 101) },
      { day: '19/02/2024', count: Math.floor(Math.random() * 101) },
      { day: '18/02/2024', count: Math.floor(Math.random() * 101) },
      { day: '17/02/2024', count: Math.floor(Math.random() * 101) },
      { day: '16/02/2024', count: Math.floor(Math.random() * 101) },
      { day: '15/02/2024', count: Math.floor(Math.random() * 101) },
      { day: '14/02/2024', count: Math.floor(Math.random() * 101) },
      { day: '13/02/2024', count: Math.floor(Math.random() * 101) },
      { day: '12/02/2024', count: Math.floor(Math.random() * 101) },
    ];
  }
}
