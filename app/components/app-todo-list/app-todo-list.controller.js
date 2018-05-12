class listCtrl {
    constructor() {
        this.listData = [
            new Item('First Task', 1),
            new Item('Second Task', 2),
            new Item('Third Task', 3),
            new Item('Fourth Task', 4),
        ];
        this.reverseSort = false;
        this.sortValue = '';
        this.currentCount = this.listData.length;
    }

    removeItem(item) {
        this.listData.splice(this.listData.indexOf(item), 1);

        this.logData();
    }

    addItem() {
        if (this.text === '' || this.text === undefined) return;
        this.listData.push(this.createItem());

        this.logData();
    }

    createItem() {
        let item = new Item();
        item.text = this.text;
        item.id = ++this.currentCount;

        this.resetInput();

        return item;
    }

    resetInput() {
        this.text = '';
    }

    sortItems(sortValue) {
        this.sortValue = sortValue;
        this.reverseSort = !this.reverseSort;
    }

    logData() {
        console.log(this.listData);
    }
}