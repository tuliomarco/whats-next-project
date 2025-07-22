const buttons = document.querySelectorAll('.view-options button');
console.log(buttons);

const views = document.querySelectorAll('.tasks > div')

function activateView(viewName) {
    views.forEach(view => {
        if(view.classList.contains(viewName)) {
            view.classList.add('active');
        } else {
            view.classList.remove('active');
        }
    });
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const viewName = button.dataset.view;
        activateView(viewName);
    })
});

activateView('card-view');