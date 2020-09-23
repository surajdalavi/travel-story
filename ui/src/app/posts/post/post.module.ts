import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    RouterModule,
    MaterialModule,
    CommonComponentsModule,
    FlexLayoutModule,
  ],
  exports: [PostComponent],
})
export class PostModule {}
