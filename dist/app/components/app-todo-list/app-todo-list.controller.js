'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var listCtrl = function () {
    function listCtrl() {
        _classCallCheck(this, listCtrl);

        this.listData = [new Item('First Task'), new Item('Second Task'), new Item('Third Task'), new Item('Fourth Task')];
        this.reverseSort = false;
        this.sortValue = '';
    }

    _createClass(listCtrl, [{
        key: '$onInit',
        value: function $onInit() {
            this.updateIds();
        }
    }, {
        key: 'removeItem',
        value: function removeItem(item) {
            this.listData.splice(this.listData.indexOf(item), 1);
            this.updateIds();

            this.logData();
        }
    }, {
        key: 'addItem',
        value: function addItem() {
            if (this.text === '' || this.text === undefined) return;
            this.listData.push(this.createItem());

            this.logData();
        }
    }, {
        key: 'createItem',
        value: function createItem() {
            var item = new Item();
            item.text = this.text;
            item.id = this.listData.length + 1;

            this.resetInput();

            return item;
        }
    }, {
        key: 'resetInput',
        value: function resetInput() {
            this.text = '';
        }
    }, {
        key: 'sortItems',
        value: function sortItems(sortValue) {
            this.sortValue = sortValue;
            this.reverseSort = !this.reverseSort;
        }
    }, {
        key: 'updateIds',
        value: function updateIds() {
            this.listData.forEach(function (item, index) {
                item.id = index + 1;
            });
        }
    }, {
        key: 'logData',
        value: function logData() {
            console.log(this.listData);
        }
    }]);

    return listCtrl;
}();
//# sourceMappingURL=app-todo-list.controller.js.map