import { Component, OnInit } from '@angular/core';

import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-branch-name-generator',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './branch-name-generator.component.html',
  styleUrl: './branch-name-generator.component.scss',
})
export class BranchNameGeneratorComponent implements OnInit {
  public form: FormGroup<{ inputTaskTitle: FormControl<string>; outputTaskTitle: FormControl<string> }>;

  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.buildForm();

    this.subscription.add(
      this.form.get('inputTaskTitle').valueChanges.subscribe(value => {
        this.form.get('outputTaskTitle').setValue(this.getTitle(value));
        this.form.updateValueAndValidity();
      })
    );
  }

  getTitle(input: string): string {
    return input
      .trim()
      .replace(/-/g, ' ')
      .split(/\s+/)
      .map(x => (x.search(/([Pp][Ss][0-9]{2,})|([Ii][0-9]{3,})\w/g) !== -1 ? x.toUpperCase() : x.toLowerCase()))
      .join('-')
      .replace(/[^a-zA-Z0-9-]/g, '');
  }

  async handleClipboard(): Promise<void> {
    navigator.clipboard.writeText(this.form.get('outputTaskTitle').value).then(() => {});
  }

  private buildForm(): void {
    this.form = new FormGroup({
      inputTaskTitle: new FormControl(''),
      outputTaskTitle: new FormControl(''),
    });
  }
}
