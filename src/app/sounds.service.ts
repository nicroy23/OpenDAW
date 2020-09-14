import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundsService {

  public sounds: {id: string, name: string, path: string}[] = new Array();

  constructor() { }

  /**
   * Function to get all the sounds from the sounds array above
   * 
   * @return the sounds array.
   */
  getAllSounds(): {id: string, name: string, path: string}[] {
    return this.sounds;
  }
}
