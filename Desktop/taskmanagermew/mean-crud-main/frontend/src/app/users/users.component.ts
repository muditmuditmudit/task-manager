import { Component, inject } from '@angular/core';
import Task from '../types/task';
import { UserService } from '../services/user.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  tasks: Task[] = [];
  userService = inject(UserService);
  ngOnInit() {
    this.userService.getTasks().subscribe((result) => {
      this.tasks = result;
      console.log(this.tasks);
    });
  }
  delete(id: string) {
    const ok = confirm('Are you sure want to delete user?');
    if (ok) {
      this.userService.deleteTask(id).subscribe((result) => {
        alert('User deleted successfully');
        this.tasks = this.tasks.filter((u) => u._id != id);
      });
    }
  }

  updateComplition(id: string){
    const task = this.tasks.find(task => task._id === id);
    if (task) {
      const updatedTask = { ...task, status: !task.status };
      this.userService.updateTask(id, updatedTask).subscribe(() => {
        task.status = !task.status;
      });
    }
  }
}
