import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TodoListItemComponent extends Component {
  @service todo;
  @tracked checked = this.args.todo.checked;
  @tracked content = this.args.todo.content;
}
