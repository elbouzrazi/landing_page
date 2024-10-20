import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import {WifiTechnologiesComponent} from "./wifi-technologies/wifi-technologies.component";
import {NetworkSecurityComponent} from "./network-security/network-security.component";
import {NetworkInfrastructureComponent} from "./network-infrastructure/network-infrastructure.component";
import {ManagedServicesComponent} from "./managed-services/managed-services.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'wifi-technologies', component: WifiTechnologiesComponent },
  { path: 'network-security', component: NetworkSecurityComponent },
  { path: 'network-infrastructure', component: NetworkInfrastructureComponent },
  { path: 'managed-services', component: ManagedServicesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { anchorScrolling: 'enabled',
               scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
