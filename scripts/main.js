const buttons = document.querySelectorAll('.view-options button');
const views = document.querySelectorAll('.tasks > div');

function activateView(viewName, button) {
  views.forEach(view => {
    if (view.classList.contains(viewName)) {
      view.classList.add('active');
    } else {
      view.classList.remove('active');
    }
  });

  buttons.forEach(btn => btn.classList.remove('active'));
  if (button) button.classList.add('active');
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const viewName = button.dataset.view;
    activateView(viewName, button);
  });
});

const initialButton = document.querySelector('[data-view="card-view"]');
activateView('card-view', initialButton);
