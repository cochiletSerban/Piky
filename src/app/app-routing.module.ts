import { ImageViewComponent } from './pages/image-view/image-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { TestComponent } from './pages/test/test.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AuthGuard } from './guards/auth.guard';
import { FeedComponent } from './pages/feed/feed.component';


const routes: Routes = [
  {path: 'test', canActivate: [AuthGuard], component: TestComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', component: LandingComponent},
  {path: 'explore/:tag', component: FeedComponent},
  {path: 'image/:imageId', component: ImageViewComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
