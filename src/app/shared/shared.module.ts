import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './components/header/header.component';
import { LoadingService } from './services/loading/loading.service';
import { MovieService } from './services/movie/movie.service';

const angularModules = [CommonModule, FormsModule, IonicModule];

@NgModule({
  declarations: [HeaderComponent],
  imports: [...angularModules],
  exports: [...angularModules, HeaderComponent],
  providers: [MovieService, LoadingService],
})
export class SharedModule {}
