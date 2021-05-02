console.log('main app aaa');

let js = require('./index')

//import * as angular from 'angularjs';
//import { IScope } from 'angularjs';
import angular, {IScope} from 'angular';
import {fn1} from './mylib';

interface MyIscope extends IScope {
  extraValue : string;
}

class MyClass {
  private vvv : string;
  constructor($scope : MyIscope) {
    console.log('made a myclass');
    this.vvv = 'hello from ts';
    $scope.extraValue = 'extra stuff here'
  }
}

js.doSomething();
fn1();

let app = ()=> {
  return {
    template: require('./app.html').default,
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
}

angular.module('app', [])
  .directive('app', app)
  .controller('AppCtrl', ['$scope', MyClass])
