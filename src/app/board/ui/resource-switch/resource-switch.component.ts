import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-resource-switch',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './resource-switch.component.html',
  styleUrls: ['./resource-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourceSwitchComponent {
  @Output() resourceSelected = new EventEmitter<'people' | 'starships'>();
  @Input() isLoading = false;
  resourcesConfig = [
    {
      key: 'People',
      value: 'people',
    },
    {
      key: 'Starships',
      value: 'starships',
    },
  ];
  resourcesFormControl = new FormControl<'people' | 'starships' | null>(null, [
    Validators.required,
  ]);
  resourcesFormGroup = new FormGroup({
    resources: this.resourcesFormControl,
  });

  onSubmit(): void {
    if (
      this.resourcesFormControl.valid &&
      this.resourcesFormControl.value !== null
    ) {
      this.resourceSelected.emit(this.resourcesFormControl.value);
    }
  }
}
