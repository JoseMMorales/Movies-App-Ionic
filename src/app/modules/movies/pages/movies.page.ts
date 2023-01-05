import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { MovieService } from 'src/app/shared/services/movie/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  title: string = 'Trending Movies';
  color: string = 'primary';
  movies: any[] = [];
  currentPage: number = 1;
  imageBaseUrl = environment.images;

  constructor(
    private movieService: MovieService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMore(event: any): void {
    this.currentPage++;
    this.loadMovies(event);
  }

  private loadMovies(event?: any): void {
    this.loadingService.loadingIonic('present');
    this.movieService.getTopRatedMovies(this.currentPage).subscribe((res) => {
      this.movies.push(...res.results);
      event?.target.complete();

      if (event) {
        event.target.disabled = res.total_pages === this.currentPage;
      }
    });
    this.loadingService.loadingIonic('dismiss');
  }
}
