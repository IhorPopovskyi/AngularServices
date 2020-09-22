import { Component, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatChipInputEvent } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent {
  form: FormGroup;

  name: string;
  band: string;
  genre: string[];
  label: string[];
  producer: string[];

  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // display data in the form when editing info
    this.name = data ? data.name : "";
    this.band = data ? data.band : "";
    this.genre = data ? data.genre : [];
    this.label = data ? data.label : [];
    this.producer = data ? data.producer : [];

    // initialize form
    this.form = new FormGroup({
      name: new FormControl(this.name, Validators.required),
      band: new FormControl(this.band, Validators.required),
      genre: new FormControl(this.genre),
      label: new FormControl(this.label),
      producer: new FormControl(this.producer),
    });
  }

  // Adding data to the field by pressing enter and comma
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  visible = true;
  removable = true;

  // Add some data-chip in input array
  addChip(event: MatChipInputEvent, arr: string[]): void {
    const input = event.input;
    const value = event.value;

    // Add our data
    if ((value || "").trim()) {
      arr.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  // Add some data-chip in input array
  removeChip(data: string, arr: string[]): void {
    const index = arr.indexOf(data);
    if (index >= 0) {
      arr.splice(index, 1);
    }
  }
}
