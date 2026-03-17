import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Prova } from './componenti/prova/prova';
import { ProvaData } from './componenti/prova-data/prova-data';
import { Highlight } from './directives/highlight';
import { ProvaPersonaService } from './componenti/prova-persona-service/prova-persona-service';
import { About } from './componenti/about/about';
import { Contact } from './componenti/contact/contact';
import { Home } from './componenti/home/home';
import { Contatto } from './componenti/contatto/contatto';
import { NotFound } from './componenti/not-found/not-found';

@NgModule({
  declarations: [
    App,
    Prova,
    ProvaData,
    Highlight,
    ProvaPersonaService,
    About,
    Contact,
    Home,
    Contatto,
    NotFound,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideBrowserGlobalErrorListeners(), 
    provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
