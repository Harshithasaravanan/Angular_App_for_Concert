import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  protected housingLocationList: HousingLocation[] = [
    {
      id:0,
      name: 'BTS',
      city: 'NY',
      state:'LA',
      photo:'/assets/bts.jpg',
      price: '$500',
      seats:20,
      time: '3:30pm local time',
    },
    {
      id:1,
      name: 'Rihanna',
      city: 'Chicago',
      state: 'IL',
      photo: 'assets/rihanna.jpeg',
      price: '$600',
      seats:25,
      time: '6:30pm local time',
    },
    {
      id:2,
      name: 'The Weeknd',
      city: 'France',
      state: 'Paris',
      photo: 'assets/weeknd.jpeg',
      price: '$400',
      seats:3,
      time: '2:30pm local time',
    },
    {
      id:3,
      name: 'Drake',
      city: 'NY',
      state: 'LA',
      photo: 'assets/drake.jpeg',
      price: '$600',
      seats:10,
      time: '12:00am local time',
    },
    {
      id:4,
      name: 'Backstreet Boys',
      city: 'San Francisco',
      state: 'CA',
      photo: 'assets/BSB.jpg',
      price: '$800',
      seats:2,
      time: '8:00am local time',
    },
    {
      id:5,
      name: 'BlackPink',
      city: 'Hamburg',
      state: 'Hamburg',
      photo: 'assets/BP.jpeg',
      price: '$800',
      seats: 25,
      time: '5:30pm local time',
    },
    {
      id:6,
      name: 'Rihanna',
      city: 'Berlin',
      state: 'Brandenburg',
      photo: 'assets/rihanna.jpeg',
      price: '$800',
      seats:40,
      time: '10:30pm local time',
    },
    {
      id:7,
      name: 'BTS',
      city: 'Chicago',
      state: 'IL',
      photo: 'assets/bts.jpg',
      price: '$700',
      seats:2,
      time: '7:30pm local time',
    },
    {
      id:8,
      name: 'Ariana Grande',
      city: 'Tenesee',
      state: 'Nashville',
      photo: 'assets/AG.jpg',
      price: '$700',
      seats:52,
      time: '10:30am local time',
    },
  ] 

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
