import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { JumbotronSectionComponent } from './components/jumbotron-section/jumbotron-section.component';


let components = [ContactFormComponent, JumbotronSectionComponent];

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class SharedModule { }
