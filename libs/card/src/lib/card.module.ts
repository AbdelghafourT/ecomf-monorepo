import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [CommonModule],
  exports:[CardComponent],      // Module exports
  declarations: [
    CardComponent
  ],
})
export class CardModule {}
