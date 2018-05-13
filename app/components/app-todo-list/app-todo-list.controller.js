class listCtrl {
    constructor() {
        this.listData = [
            new Item('First Task'),
            new Item('Second Task'),
            new Item('Third Task'),
            new Item('Fourth Task'),
        ];
        this.reverseSort = false;
        this.sortValue = '';
    }

    $onInit() {
        this.updateIds();
    }

    removeItem(item) {
        this.listData.splice(this.listData.indexOf(item), 1);
        this.updateIds();

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
        item.id = this.listData.length + 1;

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

    updateIds() {
        this.listData.forEach((item, index) => {
            item.id = index + 1;
        });
    }

    logData() {
        console.log(this.listData);
    }
}