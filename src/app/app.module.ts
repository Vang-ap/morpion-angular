import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GamerComponent } from './components/gamer/gamer.component';
import { GridDirective } from './directives/grid.directive';
import { CaseComponent } from './components/case/case.component';

@NgModule({
  declarations: [
    AppComponent,
    GamerComponent,
    GridDirective,
    CaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
