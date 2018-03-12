import { Route } from '@angular/router';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'weather'},
  { loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule', path: 'dashboard' },
  { loadChildren: 'src/app/profile/profile.module#ProfileModule', path: 'profile' },
  { loadChildren: 'src/app/weather/weather.module#WeatherModule', path: 'weather' }
];
