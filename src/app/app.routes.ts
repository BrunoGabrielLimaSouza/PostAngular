import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from '../app/app.component';
import { PostListComponent } from '../app/post-list/post-list.component';
import { PostDetailComponent } from '../app/post-detail/post-detail.component';


export const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: '**', redirectTo: '' }
];

