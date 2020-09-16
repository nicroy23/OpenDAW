import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SoundListComponent } from './sound-list/sound-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { DesignStructureComponent } from './design-structure/design-structure.component';
import { LayoutStructureComponent } from './layout-structure/layout-structure.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SoundListComponent,
    TopBarComponent,
    MainWindowComponent,
    DesignStructureComponent,
    LayoutStructureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
