import { NgModule } from '@angular/core';
import { SortByPipe } from './sort-by.pipe';
import { GroupByPipe } from './group-by.pipe';
import { ToArrayPipe } from './to-array.pipe';

@NgModule({
  declarations: [
    SortByPipe,
    GroupByPipe,
    ToArrayPipe
  ],
  exports: [
    SortByPipe,
    GroupByPipe,
    ToArrayPipe
  ]
})
export class ObjectAndArraysPipesModule { }
