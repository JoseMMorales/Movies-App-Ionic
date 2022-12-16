## Ionic Movie App

Android Native App where movies are rendered thanks to consuming [The Movie API](https://www.themoviedb.org/), it has been designed mainly for user play with two different views (Movies and Movies details) where data is handled via async HTTP calls using RxJS Observables as it is a Hibrid App using Ionic, Angular, RxJs and Capacitor.

Note that [Android Studio](https://developer.android.com/) has rendered changes applying livereload external command for see Emulator when any change is applied in our editor (VSCode).

## How to Create Movie App...

### Install Ionic if you haven't before

`npm install -g @ionic/cli`

### Create a blank new Ionic app with Angular support

`ionic start movieApp blank --type=angular`
`cd movieApp`

### Use the CLI to generate some pages and a service

`ionic g page pages/movies`
`ionic g page pages/movieDetails`
`ionic g service services/movie`

### Run app build to get WWW Folder

`npm run build`

### Run android app in Studio

`npx cap run android`

### If not visit page https://capacitorjs.com/docs/basics/workflow

### Open emulator with livereload

`ionic cap run android -l --external`

#### Note!! If any issue pop up when opening the App in Android Studio...

Add in Android.Manifest.xml (application) `android:usesCleartextTraffic="true"`

See image as following...

<div align="center">

<img width="470" alt="Capture" src="https://user-images.githubusercontent.com/43299285/208054101-a882f125-bf61-402d-a92a-b5728bf31c3f.PNG">

</div>

### Ionic components used...

ion-content, ion-toolbar, ion-back-button, ion-buttons, ion-footer, ion-title, ion-card, ion-item, ion-label, ion-icon, ion-list, ion-button, ion-infinite-scroll, LoadingController.

### Images of the App...

<table border="0">
 <tr>
    <td><b style="font-size:30px">Movies</b></td>
    <td><b style="font-size:30px">Movie Detail</b></td>
 </tr>
 <tr>
    <td>
      <img width="250" alt="Movies" src="https://user-images.githubusercontent.com/43299285/208098406-8825f07b-66fa-4611-9ab0-2249306991c7.PNG">
    </td>
    <td>
      <img width="260" alt="Movie-details1" src="https://user-images.githubusercontent.com/43299285/208098307-732c0d3a-1485-4e3d-a580-62803575a17e.PNG">
    </td>
 </tr>
</table>

### Technology used...

<b> @capacitor/cli:</b> "4.6.1"
<br>

<b>@ionic/angular:</b> "^6.1.9"
<br>

<b>@angular/cli:</b> "^15.0.0"

### Author

JOSEMMORALES
