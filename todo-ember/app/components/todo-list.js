import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class TodoListComponent extends Component {
  @service todo;

  @action
  addTodo() {
    this.todo.addTodo();
  }
}
