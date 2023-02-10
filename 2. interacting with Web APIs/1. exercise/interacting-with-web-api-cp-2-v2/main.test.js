const { readFileSync } = require('fs');
const { JSDOM } = require('jsdom');
const { resolve } = require('path');

const html = readFileSync(resolve(__dirname, 'index.html'), 'utf8');

let document = null;

beforeEach(() => {
  const { window } = new JSDOM(html, {
    runScripts: 'dangerously',
    includeNodeLocations: false,
    pretendToBeVisual: true,
  });

  document = window.document;
});

describe('index.html', () => {
  describe('render correct HTML Headings', () => {
    it('should render the correct heading', () => {
      expect(document.querySelector('h1').textContent).toBe('Counter App');
    });

    it('should render the correct sub-heading', () => {
      expect(document.querySelector('h2#counter').textContent).toBe('0');
    });
  });

  describe('render correct HTML Buttons', () => {
    it('should render the correct Up button', () => {
      expect(document.getElementById('btn-add').textContent).toBe('Up');
    });

    it('should render the correct Down button', () => {
      expect(document.getElementById('btn-subtract').textContent).toBe('Down');
    });
  });

  describe('when Up button is clicked', () => {
    it('should increment the counter', () => {
      document.getElementById('btn-add').click();
      expect(document.querySelector('h2#counter').textContent).toBe('1');
    });

    it('should increment the counter', () => {
      document.getElementById('btn-add').click();
      document.getElementById('btn-add').click();
      document.getElementById('btn-add').click();
      document.getElementById('btn-add').click();
      expect(document.querySelector('h2#counter').textContent).toBe('4');
    });
  });

  describe('when Down button is clicked', () => {
    it('should decrement the counter', () => {
      document.getElementById('btn-add').click();
      document.getElementById('btn-add').click();
      document.getElementById('btn-add').click();
      document.getElementById('btn-add').click();
      document.getElementById('btn-add').click();
      document.getElementById('btn-subtract').click();
      document.getElementById('btn-subtract').click();
      expect(document.querySelector('h2#counter').textContent).toBe('3');
    });

    it('should decrement the counter', () => {
      document.getElementById('btn-add').click();
      document.getElementById('btn-add').click();
      document.getElementById('btn-subtract').click();
      document.getElementById('btn-add').click();
      document.getElementById('btn-subtract').click();
      document.getElementById('btn-subtract').click();
      expect(document.querySelector('h2#counter').textContent).toBe('0');
    });

    it('should show warning message when counter is less than 0', () => {
      document.getElementById('btn-subtract').click();
      document.getElementById('btn-subtract').click();
      document.getElementById('btn-subtract').click();
      document.getElementById('btn-subtract').click();
      document.getElementById('btn-subtract').click();
      document.getElementById('btn-subtract').click();
      expect(document.querySelector('h2#counter').textContent).toBe('0');
      expect(document.querySelector('p.warning-message').textContent).toBe('Oops! you reach the min value!');
    });
  });

  describe('error message', () => {
    it('should not show error message when counter is greater than 0 and less than 10', () => {
      document.getElementById('btn-add').click();
      document.getElementById('btn-add').click();
      expect(document.querySelector('p.warning-message').textContent).toBe('');
    });
    describe('minimum value', () => {
      it('should show error message when counter 0 and click down button', () => {
        document.getElementById('btn-subtract').click();
        expect(document.querySelector('p.warning-message').textContent).toBe('Oops! you reach the min value!');
      });

      it('should show error message when counter 0 and click down button, and error message disappear when up button clicked', () => {
        document.getElementById('btn-subtract').click();
        expect(document.querySelector('p.warning-message').textContent).toBe('Oops! you reach the min value!');
        document.getElementById('btn-add').click();
        expect(document.querySelector('p.warning-message').textContent).toBe('');
      });
    });

    describe('maximum value', () => {
      it('should show warning message when counter is greater than 10', () => {
        for (let i = 0; i < 11; i++) {
          document.getElementById('btn-add').click();
        }
        expect(document.querySelector('h2#counter').textContent).toBe('10');
        expect(document.querySelector('p.warning-message').textContent).toBe('Oops! you reach the max value!');
      });

      it('should show warning message when counter is greater than 10, and error message disappear when down button clicked', () => {
        for (let i = 0; i < 11; i++) {
          document.getElementById('btn-add').click();
        }
        expect(document.querySelector('h2#counter').textContent).toBe('10');
        expect(document.querySelector('p.warning-message').textContent).toBe('Oops! you reach the max value!');
        document.getElementById('btn-subtract').click();
        expect(document.querySelector('p.warning-message').textContent).toBe('');
      });
    });
  });
});
