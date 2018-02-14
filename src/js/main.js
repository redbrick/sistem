import { isUndefined } from 'lodash';
import '../css/main.scss';
import { collapseSection, expandSection } from './collapse';
import countdown from './countdown';

if (document.readyState === 'complete' || document.readyState !== 'loading') {
  load();
} else {
  document.addEventListener('DOMContentLoaded', load);
}

function load() {
  const getName = el => [...document.getElementsByName(el)];

  getName('card.title').forEach(title => {
    // Define an array of colours, based on Material Design Color recommendations
    // Colours are from TechWeek. TODO Choose new ones to fit system theme
    const colors = ['#f44336', '#009688', '#4caf50', '#ffc107', '#e91e63'];
    title.style.color = colors[Math.floor(Math.random() * colors.length)];
  });

  getName('slot').forEach(el => {
    el.addEventListener('click', () => {
      const section = el.querySelector('.body.collapsible');
      const isCollapsed = section.getAttribute('data-collapsed') === 'true';
      if (isCollapsed) {
        expandSection(section);
        section.setAttribute('data-collapsed', 'false');
      } else {
        collapseSection(section);
      }
    });
  });
  if (!isUndefined(start)) countdown('counter', start);
}
