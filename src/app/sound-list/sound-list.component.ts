import { Component, OnInit } from '@angular/core';

import { SoundsService } from '../sounds.service';

@Component({
  selector: 'app-sound-list',
  templateUrl: './sound-list.component.html',
  styleUrls: ['./sound-list.component.css']
})
export class SoundListComponent implements OnInit {

  //The array is retrieved from the sounds service
  public sounds: { id: string, name: string, path: string }[];

  constructor(private soundsService: SoundsService) { }

  ngOnInit(): void {
    this.setSounds();
  }

  /**
   * Function that plays a sound on the page bases on the audio component id and the src of that audio component
   * 
   * @param id - The id of the audio tag (the audio source)
   * @param path - The path of the audio source (it basically creates a url with a random id and you can retrieve it with the src 
   * field on audio component)
   */
  playSound(id: string, path: string): void {
    var sound = <HTMLAudioElement>document.getElementById(id);
    sound.src = path;
    sound.play();

    //sound.onended = function (e) {
    //  URL.revokeObjectURL(path);
    //}
  }

  setSounds(): void {
    this.sounds = this.soundsService.getAllSounds();
  }
}
