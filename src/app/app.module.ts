import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StudentManagerComponent } from './student-manager/student-manager.component';

@NgModule({
  declarations: [AppComponent, StudentManagerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
