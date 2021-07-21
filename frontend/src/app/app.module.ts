import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { OrariComponent } from './admin-components/orari/orari.component';
import { PreferenzeComponent } from './admin-components/preferenze/preferenze.component';
import { SostituzioniComponent } from './admin-components/sostituzioni/sostituzioni.component';
import { SpaziComponent } from './admin-components/spazi/spazi.component';
import { StatisticheComponent } from './admin-components/statistiche/statistiche.component';
import { TorneiComponent } from './admin-components/tornei/tornei.component';
import { AccessiComponent } from './admin-components/accessi/accessi.component';
import { TournamentDialogComponent } from './admin-components/tournament-dialog/tournament-dialog.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IndexPageComponent,
    LoginPageComponent,
    AdminPageComponent,
    OrariComponent,
    PreferenzeComponent,
    SostituzioniComponent,
    SpaziComponent,
    StatisticheComponent,
    TorneiComponent,
    AccessiComponent,
    TournamentDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: IndexPageComponent},
      {path: 'index', component: IndexPageComponent},
      {path: 'login', component: LoginPageComponent},
      {path: 'admin', component: AdminPageComponent}
    ]),
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    ChartsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
