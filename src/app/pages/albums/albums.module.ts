import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlbumsRoutingModule } from "./albums-routing.module";
import { AlbumsComponent } from "./albums.component";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatToolbarModule,
  ],
  exports: [],
})
export class AlbumsModule {}
