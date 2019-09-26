import $ from 'jquery';
import shoppingList from './shopping-list';
import './styles/index.css';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
