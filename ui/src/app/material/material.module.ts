import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
<<<<<<< Updated upstream
=======
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
>>>>>>> Stashed changes

const material = [
  MatGridListModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
<<<<<<< Updated upstream
=======
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatDialogModule
>>>>>>> Stashed changes
];

@NgModule({
  declarations: [],
  imports: [CommonModule, material],
  exports: [material],
})
export class MaterialModule {}
