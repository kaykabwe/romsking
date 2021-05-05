import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzAvatarModule,
    NzButtonModule,
    NzCardModule,
    NzCarouselModule,
    NzDividerModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    NzPageHeaderModule,
  ],
  exports: [
    CommonModule,
    NzAvatarModule,
    NzButtonModule,
    NzCardModule,
    NzCarouselModule,
    NzDividerModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    NzPageHeaderModule,
  ]
})
export class SharedModule { }
