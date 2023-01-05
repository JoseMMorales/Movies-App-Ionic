import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { environment } from 'src/environments/environment';

import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { MovieService } from 'src/app/shared/services/movie/movie.service';
import { BehaviorSubject } from 'rxjs';

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
  backToTop$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  @ViewChild(IonContent) content!: IonContent;

  constructor(
    private movieService: MovieService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMore(event: Event): void {
    this.currentPage++;
    this.loadMovies(event);
  }

  getScrollPos(pos: any): void {
    this.showScrollButton(pos)
      ? this.backToTop$.next(true)
      : this.backToTop$.next(false);
  }

  gotToTop(): void {
    this.content.scrollToTop(1000);
  }

  private showScrollButton(pos: any): boolean {
    return pos.detail.scrollTop >= 150;
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
