import { NgModule } from '@angular/core';
import { MoviesPageRoutingModule } from './movies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MoviesPage } from './pages/movies.page';

@NgModule({
  imports: [SharedModule, MoviesPageRoutingModule],
  declarations: [MoviesPage],
})
export class MoviesPageModule {}
