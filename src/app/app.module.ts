import { ElectronicsModule } from './electronics/electronics.module';
import { BookComponent } from './book/book.component';
import { DvdComponent } from './dvd/dvd.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component';
import { DvdFormComponent } from './dvd/dvd-form/dvd-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookAuthorsComponent } from './book/book-authors/book-authors.component';



@NgModule({
  declarations: [
    AppComponent,
    DvdComponent,
    BookComponent,
    PageNotFoundComponent,
    DvdDetailComponent,
    DvdFormComponent,
    BookDetailComponent,
    BookAuthorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    // ElectronicsModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
