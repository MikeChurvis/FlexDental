import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class TodoItem {
  @tracked content = '';
  @tracked completed = false;
}

export default class TodoService extends Service {
  @tracked todoItemList = [];

  addTodo() {
    this.todoItemList = [...this.todoItemList, new TodoItem()];
  }

  markAllCompleted() {
    this.todoItemList.forEach((todo) => {
      todo.completed = true;
    });
  }

  deleteAllCompleted() {
    this.todoItemList = this.todoItemList.filter((todo) => todo.completed);
  }
}
