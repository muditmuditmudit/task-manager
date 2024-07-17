import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import Task from '../../types/task';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  formBuilder = inject(FormBuilder);
  userForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    status:[false]
  });

  userService = inject(UserService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  editUserId!: string;
  ngOnInit() {
    this.editUserId = this.route.snapshot.params['id'];
    if (this.editUserId) {
      this.userService.getTaskid(this.editUserId).subscribe((result) => {
        this.userForm.patchValue(result);
        console.log(result)
      });
    }
  }
  addTask() {
    if (this.userForm.invalid) {
      alert('Please provide all field with valid data');
      return;
    }
    const model: Task = this.userForm.value;
    this.userService.addTask(model).subscribe((result) => {
      alert('User added successfully.');
      this.router.navigateByUrl('/');
    });
  }
  updateTask() {
    if (this.userForm.invalid) {
      alert('Please provide all field with valid data');
      return;
    }
    const model: Task = this.userForm.value;
    this.userService.updateTask(this.editUserId, model).subscribe((result) => {
      alert('User update successfully.');
      this.router.navigateByUrl('/');
    });
  }
}
