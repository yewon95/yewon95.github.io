const tools = document.querySelector('.publication-tools');
const papers = [...document.querySelectorAll('.paper')];
const buttons = [...document.querySelectorAll('[data-filter]')];
if (tools) tools.hidden = false;
buttons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  buttons.forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  let count = 0;
  papers.forEach(paper => {
    const topic = paper.dataset.topic;
    const show = filter === 'all' || topic === filter || (filter === 'other' && !['Computer vision', 'Multimodal learning'].includes(topic));
    paper.hidden = !show;
    if (show) count++;
  });
  document.querySelector('#paper-count').textContent = `${count} publication${count === 1 ? '' : 's'}`;
}));
