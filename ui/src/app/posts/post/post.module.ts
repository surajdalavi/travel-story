import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    FormsModule,
    PostRoutingModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [PostComponent],
})
export class PostModule {}
