import { Component, OnInit } from '@angular/core';

import { SoundsService } from '../sounds.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private soundsService: SoundsService) { }

  ngOnInit(): void {
  }

  /**
   * Function that enables file upload to browser on button click. It then pushes the newly created audio object to the sounds service, which
   * stores an array of all audio sounds.
   */
  openASound(): void {
    var fileUploader = <HTMLInputElement>document.getElementById("openSound");
    fileUploader.click();

    fileUploader.onchange = (event) => {
      this.soundsService.sounds.push({ id: crypto.getRandomValues(new Uint32Array(1))[0].toString(),  name: fileUploader.files[0].name, path: URL.createObjectURL(fileUploader.files[0]) });
    }
  }

  
}
