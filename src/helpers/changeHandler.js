export function changeHandler(callBack) {
    return (e) => {
        let value;
        switch (e.target.type) {
            case 'checkbox':
                value = e.target.checked;
                break;
            default:
                value = e.target.value;
        }
        callBack(e.target.name, value)
    };
}