import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/AuthInterceptor';
import { SafeImagePipe } from './pipes/safe-image.pipe';
import {  FileUploadModule } from 'ng2-file-upload/';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TestComponent } from './pages/test/test.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ImageCardComponent } from './pages/feed/image-card/image-card.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { ImageViewComponent } from './pages/image-view/image-view.component';
import { ImagePanelComponent } from './pages/image-view/image-panel/image-panel.component';
import { CommentComponent } from './pages/image-view/comment/comment.component';
import { ExploreTagsComponent } from './pages/feed/explore-tags/explore-tags.component';
import { FilterPicturesComponent } from './pages/feed/filter-pictures/filter-pictures.component';
import { NavBarComponent } from './pages/shared/nav-bar/nav-bar.component';
import { TagCardComponent } from './pages/feed/explore-tags/tag-card/tag-card.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { LocationFeedComponent } from './pages/location-feed/location-feed.component';
import { TimeAgoPipe } from '../../node_modules/time-ago-pipe';
import { DragScrollModule } from 'ngx-drag-scroll';
import { CommentCardComponent } from './pages/location-feed/comment-card/comment-card.component';
import { MapComponent } from './pages/image-view/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { DeviceDetectorModule } from 'ngx-device-detector';


@NgModule({
  declarations: [
    AppComponent,
    SafeImagePipe,
    SignupComponent,
    TestComponent,
    LandingComponent,
    FeedComponent,
    ImageCardComponent,
    ImageViewComponent,
    ImagePanelComponent,
    TimeAgoPipe,
    CommentComponent,
    ExploreTagsComponent,
    FilterPicturesComponent,
    NavBarComponent,
    TagCardComponent,
    LocationFeedComponent,
    CommentCardComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    NgxMasonryModule,
    NgSelectModule,
    DragScrollModule,
    FileUploadModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUlyq5mD4M532jSKMqykG3UwXnzA8FMKk'
    }),
    DeviceDetectorModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
