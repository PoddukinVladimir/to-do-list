class listCtrl {
    constructor() {
        this.listData = [];
        this.reverseSort = false;
        this.sortValue = '';
        this.currentCount = 0;
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