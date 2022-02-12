const checkboxHandler = (value, state, setState) => {
    const currentChecked = value;
    const allChecked = [...state];
    const foundItem = allChecked.indexOf(currentChecked);
    let newChecked;
    if (foundItem === -1) {
        // Add item
        newChecked = [...state, currentChecked];
        setState(newChecked);
    } else {
        // Remove item
        newChecked = [...state];
        newChecked.splice(foundItem, 1);
        setState(newChecked);
    }
};

export default checkboxHandler;