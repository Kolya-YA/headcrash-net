export default (submitBtn) => {
    const label = submitBtn.querySelector('.label');
    const loader = submitBtn.querySelector('.loader');
    const isLoaderHidden = loader.hasAttribute('hidden');

    if (isLoaderHidden) {
            console.log('loader show');
            label.setAttribute('hidden', 'hidden')
            loader.removeAttribute('hidden')
        } else {
            console.log('loader hide');
            loader.setAttribute('hidden', 'hidden')
            label.removeAttribute('hidden')
        }
}