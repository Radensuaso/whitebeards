import { NgModule } from "@angular/core";

import { CatalogComponent } from "./catalog.component";
import { CatalogRepositoryService } from "./catalog-repository.service";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { FilterClassesService } from "./filter-classes.service";
import { OrderByPipe } from "./order-by.pipe";

@NgModule({
  imports: [RouterModule, SharedModule],
  declarations: [CatalogComponent, OrderByPipe],
  exports: [],
  providers: [CatalogRepositoryService, FilterClassesService],
})
export class CatalogModule {}
