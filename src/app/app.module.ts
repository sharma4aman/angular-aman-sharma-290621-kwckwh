import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { CandidateService } from './services/candidates.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ListCandidateComponent,
    AddCandidateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
