import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Ember from 'ember';

export default class TodoAppComponent extends Component {
  @tracked text = '';
  @tracked todoList = [{ id: 1, todo: 'Foo' }];

  @action
  onChange(event) {
    this.text = event.target.value;
  }

  @action
  submit(event) {
    event.preventDefault();
    const nextId = findHighestIdInArray(this.todoList);
    const newTodo = {
      id: nextId,
      todo: this.text,
    };
    this.todoList = [...this.todoList, newTodo];
    console.log(this.todoList);
  }

  @action
  delete(item) {
    // Find the index of the item.
    this.todoList = this.todoList.filter(
      (otherItem) => otherItem.id !== item.id
    );
  }
}

function findHighestIdInArray(array) {
  return (array.map(({ id }) => id).sort((a, b) => b - a)[0] ?? 0) + 1;
}
