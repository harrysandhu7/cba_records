import { NgModule } from '@angular/core';

import {
  MatTableModule,
  MatTabsModule,
  MatSelectModule,
  MatFormFieldModule, MatInputModule,
  MatCommonModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatTableModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule, MatInputModule,
    MatCommonModule,
  ],
  exports: [
    MatTableModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule, MatInputModule,
    MatCommonModule,
  ],
  declarations: [],
  providers: [],
})
export class MaterialModule {}
