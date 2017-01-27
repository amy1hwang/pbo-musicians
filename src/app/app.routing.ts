import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileDetailComponent }   from './profile-detail/profile-detail.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ProfileListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'profiles/:id',
    component: ProfileDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
