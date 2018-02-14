export function collapseSection(element) {
  const sectionHeight = element.scrollHeight;
  const elementTransition = element.style.transition;
  element.style.transition = '';

  requestAnimationFrame(() => {
    element.style.height = `${sectionHeight}px`;
    element.style.transition = elementTransition;
    requestAnimationFrame(() => {
      element.style.height = `${0}px`;
    });
  });

  element.setAttribute('data-collapsed', 'true');
}

export function expandSection(element) {
  element.style.height = `${element.scrollHeight}px`;
  element.addEventListener('transitionend', function transition() {
    element.removeEventListener('transitionend', transition);
    element.style.height = null;
  });
  element.setAttribute('data-collapsed', 'false');
}
