export default (submitBtn) => {
    const label = submitBtn.querySelector('.label');
    const loader = submitBtn.querySelector('.loader');
    const isLoaderHidden = loader.hasAttribute('hidden');

    console.log("loader hidden", isLoaderHidden);

    if (isLoaderHidden) {
            console.log('show');
            label.setAttribute('hidden', 'hidden')
            loader.removeAttribute('hidden')
        } else {
            console.log('hide');
            loader.setAttribute('hidden', 'hidden')
            label.removeAttribute('hidden')
        }
}