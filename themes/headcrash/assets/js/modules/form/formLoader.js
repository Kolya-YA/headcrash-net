export default (submitBtn, action = 'hide') => {
    const label = submitBtn.querySelector('.label');
    const loader = submitBtn.querySelector('.loader');
    
    if (action === 'show') {
        label.hidden = true;
        loader.hidden = false;
    } else {
        loader.hidden = true;
        label.hidden = false;
    }
}