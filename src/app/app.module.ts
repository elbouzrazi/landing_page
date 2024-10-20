import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { CompetenciesComponent } from './competencies/competencies.component';
import { ContactComponent } from './contact/contact.component';
import { WifiTechnologiesComponent } from './wifi-technologies/wifi-technologies.component';
import { FooterComponent } from './footer/footer.component';
import { NetworkInfrastructureComponent } from './network-infrastructure/network-infrastructure.component';
import { ManagedServicesComponent } from './managed-services/managed-services.component';
import { NetworkSecurityComponent } from './network-security/network-security.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    ServicesComponent,
    CompetenciesComponent,
    ContactComponent,
    WifiTechnologiesComponent,
    FooterComponent,
    NetworkInfrastructureComponent,
    ManagedServicesComponent,
    NetworkSecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
