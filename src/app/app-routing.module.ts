import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CanActivate, NavigationEnd } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

@NgModule({
  declarations: [ForgetpasswordComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'forget', component:ForgetpasswordComponent},
      { path: '**', redirectTo: 'login' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
