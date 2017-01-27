import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { AdminComponent } from './admin/admin.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AboutComponent } from './about/about.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent,
    AdminComponent,
    EditProfileComponent,
    AboutComponent,
    AddProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
