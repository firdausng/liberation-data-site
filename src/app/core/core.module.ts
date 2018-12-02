import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const components = [FooterComponent, HeaderComponent];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
