
const listReducer = (list = [{ "val": "exemple", "txt": "none", "name": "compelete" },
{ "val": "exemple2", "txt": "none", "name": "compelete" }
], action) => {
    switch (action.type) {
        case 'DELETE-LIST':

            let deltetedItem = [...list];
            deltetedItem.splice(action.i, 1);
            return deltetedItem

        case 'COMPLETE-LIST':

            let completedItem = [...list];
            completedItem.map((item, i) => (i === action.i) ? item.name = "undo" : item.name);

            return completedItem

        case 'ADD-LIST':

            let addItem = [...list];
            addItem = addItem.concat([{ "val": action.newText, "txt": "none", "name": "compelete" }])
            return addItem



        default:
            return list
    }
}
export default listReducer;


