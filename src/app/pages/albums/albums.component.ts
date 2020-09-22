import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DeleteComponent } from "src/app/delete/delete.component";
import { FormComponent } from "src/app/form/form.component";
import { AlbumsService } from "../../services/albums.service";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.scss"],
})
export class AlbumsComponent implements OnInit {
  albums = [];

  displayedColumns: string[] = [
    "name",
    "band",
    "genre",
    "label",
    "producer",
    "control",
  ];

  constructor(private albumsService: AlbumsService, public dialog: MatDialog) {}

  // Init getAlbum from album.service.ts
  ngOnInit() {
    this.getAlbums();
  }

  // Get albums from databese and show in the table
  getAlbums() {
    this.albumsService.getAlbums().subscribe((res) => {
      this.albums = res;
    });
  }

  addItem(): void {
    const dialogConfig = new MatDialogConfig();

    const dialogRef = this.dialog.open(FormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.albumsService.createAlbum(res);
      }
    });
  }

  editItem(data): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data.payload.doc.data();

    const dialogRef = this.dialog.open(FormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.albumsService.editAlbum(data, value);
      }
    });
  }

  deleteItem(data) {
    const dialogConfig = new MatDialogConfig();

    const dialogRef = this.dialog.open(DeleteComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.albumsService.deleteAlbum(data);
      }
    });
  }
}
