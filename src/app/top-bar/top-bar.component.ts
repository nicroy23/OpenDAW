import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public design: boolean = true;
  public layout: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Enables the tab-like feel to the main-window container.
   */
  showDesign(): void {
    this.design = true;
    this.layout = false;
  }

  /**
   * Enables the tab-like feel to the main-window container.
   */
  showLayout(): void {
    this.design = false;
    this.layout = true;
  }
}
