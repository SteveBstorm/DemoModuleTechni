import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../components/nav/nav.component';
import { SharedRoutingModule } from './shared-routing.module';
import { TestPipe } from './test.pipe';



@NgModule({
  declarations: [
    NavComponent,
    TestPipe
  ],
  exports : [
    NavComponent,
    TestPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
