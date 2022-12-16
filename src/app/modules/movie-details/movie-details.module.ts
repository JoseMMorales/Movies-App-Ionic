import { NgModule } from '@angular/core';
import { MovieDetailsPageRoutingModule } from './movie-details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MovieDetailsPage } from './pages/movie-details.page';

@NgModule({
  imports: [SharedModule, MovieDetailsPageRoutingModule],
  declarations: [MovieDetailsPage],
})
export class MovieDetailsPageModule {}
