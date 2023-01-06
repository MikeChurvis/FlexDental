import Route from '@ember/routing/route';
import Ember from 'ember';
import { tracked } from '@glimmer/tracking';

export default class TodoRoute extends Route {
  // todoList = [
  //   {
  //     id: 1,
  //     todo: 'todo 1',
  //   },
  //   {
  //     id: 2,
  //     todo: 'todo 2',
  //   },
  //   {
  //     id: 3,
  //     todo: 'todo 3',
  //   },
  // ];

  model() {
    // let todoList = Ember.A([]);
    // let todoList = tracked([]);
    // console.log(this.todoList);
    // todoList = [
    //   {
    //     id: 1,
    //     todo: 'todo 1',
    //   },
    //   {
    //     id: 2,
    //     todo: 'todo 2',
    //   },
    //   {
    //     id: 3,
    //     todo: 'todo 3',
    //   },
    // ];
    // this.todoList = [{ id: 10, todo: 'New Todo' }];
    // console.log(this.todoList);
    // return this.todoList;
  }
}
