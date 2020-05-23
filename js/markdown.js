/**
 * Markdown Editor - Hyperapp.js example
 *
 * hyperapp - https://github.com/hyperapp/hyperapp
 * marked - https://github.com/chjj/marked
 * mousetrap - https://github.com/ccampbell/mousetrap
 *
 * Shortcuts (save and delete from localStorage):
 *   - CMD+S - save
 *   - CMD+Q - delete
 */

const { h, app } = hyperapp;

const state = {
  source: '' };


const actions = {
  update: source => state => ({ source }),

  save: textarea => (state, actions) => {
    paintFlash(textarea, 'springgreen', .25);
    localStorage.setItem('source', state.source);
  },

  delete: textarea => (state, actions) => {
    localStorage.setItem('source', '');
    localStorage.clear();
    actions.setSourceFromStorage();
    textarea.value = '';

    paintFlash(textarea, 'pink', .25);
  },

  setSourceFromStorage: () => {
    if (localStorage.getItem('source')) {
      return state => ({ source: localStorage.getItem('source') });
    } else {
      return state => ({ source: '' });
    }
  },

  shortcuts: textarea => (state, actions) => {
    Mousetrap.bind(['ctrl+s', 'command+s'], e => {
      actions.save(textarea);
      e.preventDefault();
    });

    Mousetrap.bind(['ctrl+q', 'command+q'], e => {
      actions.delete(textarea);
      e.preventDefault();
    });
  } };


const paintFlash = (element, color, seconds) => {
  element.style.transition = `background-color ${seconds / 2}s ease-in-out`;
  element.style.backgroundColor = color;
  setTimeout(() => {element.style.backgroundColor = '';}, seconds * 1000);
};

const dangerouslySetInnerHTML = html => element => {
  element.innerHTML = html;
};

const compile = source => dangerouslySetInnerHTML(marked(source, { sanitize: true }));

const view = (state, actions) =>
h('div', { className: 'main', oncreate: () => actions.setSourceFromStorage() }, [
h('div', { className: 'col editor' }, [
h('textarea', {
  class: 'mousetrap',
  placeholder: 'Write markdown code here!',
  oninput: e => actions.update(e.target.value),
  oncreate: element => {
    actions.shortcuts(element);
    // e.focus(); // remove for codepen
  } },
state.source)]),

h('div', {
  className: 'col preview',
  onupdate: compile(state.source),
  oncreate: compile(state.source) })]);




window.main = app(state, actions, view, document.getElementById('mdapp'));