import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: "app-delete",
    templateUrl: "./delete.component.html",
})
export class DeleteComponent {
    constructor(public dialogRef: MatDialogRef<DeleteComponent>) {}
}
