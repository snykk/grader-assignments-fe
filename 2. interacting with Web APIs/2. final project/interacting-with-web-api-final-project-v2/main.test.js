const { readFileSync } = require('fs');
const { JSDOM } = require('jsdom');
const { resolve } = require('path');

const html = readFileSync(resolve(__dirname, 'index.html'), 'utf8');

let windowJSDOM = null;

beforeEach(() => {
  const { window } = new JSDOM(html, {
    runScripts: 'dangerously',
    includeNodeLocations: false,
    pretendToBeVisual: true,
  });

  windowJSDOM = window;
});

describe('click number button', () => {
  describe('display should render correct number when click a number', () => {
    describe('number 1', () => {
      it('should render 1, when button 1 clicked', () => {
        windowJSDOM.document.getElementById('num1').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('1');
      });
      it('should render 11111, when button 1 clicked 5 times', () => {
        windowJSDOM.document.getElementById('num1').click();
        windowJSDOM.document.getElementById('num1').click();
        windowJSDOM.document.getElementById('num1').click();
        windowJSDOM.document.getElementById('num1').click();
        windowJSDOM.document.getElementById('num1').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('11111');
      });
      it('should render 111, when button 1 clicked 3 times', () => {
        windowJSDOM.document.getElementById('num1').click();
        windowJSDOM.document.getElementById('num1').click();
        windowJSDOM.document.getElementById('num1').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('111');
      });
    });

    describe('number 2', () => {
      it('should render 2, when button 2 clicked', () => {
        windowJSDOM.document.getElementById('num2').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('2');
      });
      it('should render 22222, when button 2 clicked 5 times', () => {
        windowJSDOM.document.getElementById('num2').click();
        windowJSDOM.document.getElementById('num2').click();
        windowJSDOM.document.getElementById('num2').click();
        windowJSDOM.document.getElementById('num2').click();
        windowJSDOM.document.getElementById('num2').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('22222');
      });
      it('should render 222, when button 2 clicked 3 times', () => {
        windowJSDOM.document.getElementById('num2').click();
        windowJSDOM.document.getElementById('num2').click();
        windowJSDOM.document.getElementById('num2').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('222');
      });
    });

    describe('number 3', () => {
      it('should render 3, when button 3 clicked', () => {
        windowJSDOM.document.getElementById('num3').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('3');
      });
      it('should render 33333, when button 3 clicked 5 times', () => {
        windowJSDOM.document.getElementById('num3').click();
        windowJSDOM.document.getElementById('num3').click();
        windowJSDOM.document.getElementById('num3').click();
        windowJSDOM.document.getElementById('num3').click();
        windowJSDOM.document.getElementById('num3').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('33333');
      });
      it('should render 333, when button 3 clicked 3 times', () => {
        windowJSDOM.document.getElementById('num3').click();
        windowJSDOM.document.getElementById('num3').click();
        windowJSDOM.document.getElementById('num3').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('333');
      });
    });

    describe('number 4', () => {
      it('should render 4, when button 4 clicked', () => {
        windowJSDOM.document.getElementById('num4').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('4');
      });
      it('should render 44444, when button 4 clicked 5 times', () => {
        windowJSDOM.document.getElementById('num4').click();
        windowJSDOM.document.getElementById('num4').click();
        windowJSDOM.document.getElementById('num4').click();
        windowJSDOM.document.getElementById('num4').click();
        windowJSDOM.document.getElementById('num4').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('44444');
      });
      it('should render 444, when button 4 clicked 3 times', () => {
        windowJSDOM.document.getElementById('num4').click();
        windowJSDOM.document.getElementById('num4').click();
        windowJSDOM.document.getElementById('num4').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('444');
      });
    });

    describe('number 5', () => {
      it('should render 5, when button 5 clicked', () => {
        windowJSDOM.document.getElementById('num5').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('5');
      });
      it('should render 55555, when button 5 clicked 5 times', () => {
        windowJSDOM.document.getElementById('num5').click();
        windowJSDOM.document.getElementById('num5').click();
        windowJSDOM.document.getElementById('num5').click();
        windowJSDOM.document.getElementById('num5').click();
        windowJSDOM.document.getElementById('num5').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('55555');
      });
      it('should render 555, when button 5 clicked 3 times', () => {
        windowJSDOM.document.getElementById('num5').click();
        windowJSDOM.document.getElementById('num5').click();
        windowJSDOM.document.getElementById('num5').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('555');
      });
    });

    describe('number 6', () => {
      it('should render 6, when button 6 clicked', () => {
        windowJSDOM.document.getElementById('num6').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('6');
      });
      it('should render 66666, when button 6 clicked 5 times', () => {
        windowJSDOM.document.getElementById('num6').click();
        windowJSDOM.document.getElementById('num6').click();
        windowJSDOM.document.getElementById('num6').click();
        windowJSDOM.document.getElementById('num6').click();
        windowJSDOM.document.getElementById('num6').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('66666');
      });
      it('should render 666, when button 6 clicked 3 times', () => {
        windowJSDOM.document.getElementById('num6').click();
        windowJSDOM.document.getElementById('num6').click();
        windowJSDOM.document.getElementById('num6').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('666');
      });
    });

    describe('number 7', () => {
      it('should render 7, when button 7 clicked', () => {
        windowJSDOM.document.getElementById('num7').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('7');
      });
      it('should render 77777, when button 7 clicked 5 times', () => {
        windowJSDOM.document.getElementById('num7').click();
        windowJSDOM.document.getElementById('num7').click();
        windowJSDOM.document.getElementById('num7').click();
        windowJSDOM.document.getElementById('num7').click();
        windowJSDOM.document.getElementById('num7').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('77777');
      });
      it('should render 777, when button 7 clicked 3 times', () => {
        windowJSDOM.document.getElementById('num7').click();
        windowJSDOM.document.getElementById('num7').click();
        windowJSDOM.document.getElementById('num7').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('777');
      });
    });

    describe('number 8', () => {
      it('should render 8, when button 8 clicked', () => {
        windowJSDOM.document.getElementById('num8').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('8');
      });
      it('should render 88888, when button 8 clicked 5 times', () => {
        windowJSDOM.document.getElementById('num8').click();
        windowJSDOM.document.getElementById('num8').click();
        windowJSDOM.document.getElementById('num8').click();
        windowJSDOM.document.getElementById('num8').click();
        windowJSDOM.document.getElementById('num8').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('88888');
      });
      it('should render 888, when button 8 clicked 3 times', () => {
        windowJSDOM.document.getElementById('num8').click();
        windowJSDOM.document.getElementById('num8').click();
        windowJSDOM.document.getElementById('num8').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('888');
      });
    });

    describe('number 9', () => {
      it('should render 9, when button 9 clicked', () => {
        windowJSDOM.document.getElementById('num9').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('9');
      });
      it('should render 99999, when button 9 clicked 5 times', () => {
        windowJSDOM.document.getElementById('num9').click();
        windowJSDOM.document.getElementById('num9').click();
        windowJSDOM.document.getElementById('num9').click();
        windowJSDOM.document.getElementById('num9').click();
        windowJSDOM.document.getElementById('num9').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('99999');
      });
      it('should render 999, when button 9 clicked 3 times', () => {
        windowJSDOM.document.getElementById('num9').click();
        windowJSDOM.document.getElementById('num9').click();
        windowJSDOM.document.getElementById('num9').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('999');
      });
    });

    describe('number 0', () => {
      it('should render 0, when button 0 clicked', () => {
        windowJSDOM.document.getElementById('num0').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('0');
      });
      it('should render 00000, when button 0 clicked 5 times', () => {
        windowJSDOM.document.getElementById('num0').click();
        windowJSDOM.document.getElementById('num0').click();
        windowJSDOM.document.getElementById('num0').click();
        windowJSDOM.document.getElementById('num0').click();
        windowJSDOM.document.getElementById('num0').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('00000');
      });
      it('should render 000, when button 0 clicked 3 times', () => {
        windowJSDOM.document.getElementById('num0').click();
        windowJSDOM.document.getElementById('num0').click();
        windowJSDOM.document.getElementById('num0').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('000');
      });
    });

    describe('combination number', () => {
      it('should render 1234567890, when button 1234567890 clicked', () => {
        windowJSDOM.document.getElementById('num1').click();
        windowJSDOM.document.getElementById('num2').click();
        windowJSDOM.document.getElementById('num3').click();
        windowJSDOM.document.getElementById('num4').click();
        windowJSDOM.document.getElementById('num5').click();
        windowJSDOM.document.getElementById('num6').click();
        windowJSDOM.document.getElementById('num7').click();
        windowJSDOM.document.getElementById('num8').click();
        windowJSDOM.document.getElementById('num9').click();
        windowJSDOM.document.getElementById('num0').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('1234567890');
      });
      it('should render 23571, when button 2,3,5,7,1 clicked', () => {
        windowJSDOM.document.getElementById('num2').click();
        windowJSDOM.document.getElementById('num3').click();
        windowJSDOM.document.getElementById('num5').click();
        windowJSDOM.document.getElementById('num7').click();
        windowJSDOM.document.getElementById('num1').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('23571');
      });
      it('should render 954, when button 954 clicked', () => {
        windowJSDOM.document.getElementById('num9').click();
        windowJSDOM.document.getElementById('num5').click();
        windowJSDOM.document.getElementById('num4').click();
        expect(windowJSDOM.document.getElementById('display').value).toBe('954');
      });
    });
  });
});

describe('decimal number', () => {
  describe('display should be render number with decimal', () => {
    it('should render 1.243, when button 1, ., 2,4,3 clicked', () => {
      windowJSDOM.document.getElementById('num1').click();
      windowJSDOM.document.getElementById('dot').click();
      windowJSDOM.document.getElementById('num2').click();
      windowJSDOM.document.getElementById('num4').click();
      windowJSDOM.document.getElementById('num3').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('1.243');
    });

    it('should render 71.994, when button 7, 1, ., 9, 9, 4 clicked', () => {
      windowJSDOM.document.getElementById('num7').click();
      windowJSDOM.document.getElementById('num1').click();
      windowJSDOM.document.getElementById('dot').click();
      windowJSDOM.document.getElementById('num9').click();
      windowJSDOM.document.getElementById('num9').click();
      windowJSDOM.document.getElementById('num4').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('71.994');
    });
  });
});

describe('click operator button', () => {
  describe('display should be render number with operator', () => {
    it('should render +, when button 1, + clicked', () => {
      windowJSDOM.document.getElementById('num1').click();
      windowJSDOM.document.getElementById('plus').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('+');
    });

    it('should render -, when button 1, - clicked', () => {
      windowJSDOM.document.getElementById('num1').click();
      windowJSDOM.document.getElementById('minus').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('-');
    });

    it('should render *, when button 1, * clicked', () => {
      windowJSDOM.document.getElementById('num1').click();
      windowJSDOM.document.getElementById('multiply').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('*');
    });

    it('should render /, when button 1, / clicked', () => {
      windowJSDOM.document.getElementById('num1').click();
      windowJSDOM.document.getElementById('devide').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('/');
    });
  });

  describe('display should be render number with operator and number', () => {
    it('should render 2, when button 1, +, 2 clicked', () => {
      windowJSDOM.document.getElementById('num1').click();
      windowJSDOM.document.getElementById('plus').click();
      windowJSDOM.document.getElementById('num2').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('2');
    });

    it('should render 2, when button 1, -, 2 clicked', () => {
      windowJSDOM.document.getElementById('num1').click();
      windowJSDOM.document.getElementById('minus').click();
      windowJSDOM.document.getElementById('num2').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('2');
    });

    it('should render 2, when button 1, *, 2 clicked', () => {
      windowJSDOM.document.getElementById('num1').click();
      windowJSDOM.document.getElementById('multiply').click();
      windowJSDOM.document.getElementById('num2').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('2');
    });

    it('should render 2, when button 1, /, 2 clicked', () => {
      windowJSDOM.document.getElementById('num1').click();
      windowJSDOM.document.getElementById('devide').click();
      windowJSDOM.document.getElementById('num2').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('2');
    });
  });
});

describe('click equal button', () => {
  describe('display should be render result of calculation', () => {
    it('should render 3, when button 1, +, 2, = clicked', () => {
      windowJSDOM.document.getElementById('num1').click();
      windowJSDOM.document.getElementById('plus').click();
      windowJSDOM.document.getElementById('num2').click();
      windowJSDOM.document.getElementById('calc').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('3');
    });

    it('should render -1, when button 2, -, 3, = clicked', () => {
      windowJSDOM.document.getElementById('num2').click();
      windowJSDOM.document.getElementById('minus').click();
      windowJSDOM.document.getElementById('num3').click();
      windowJSDOM.document.getElementById('calc').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('-1');
    });

    it('should render 6, when button 2, *, 3, = clicked', () => {
      windowJSDOM.document.getElementById('num2').click();
      windowJSDOM.document.getElementById('multiply').click();
      windowJSDOM.document.getElementById('num3').click();
      windowJSDOM.document.getElementById('calc').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('6');
    });

    it('should render 4, when button 8, /, 2, = clicked', () => {
      windowJSDOM.document.getElementById('num8').click();
      windowJSDOM.document.getElementById('devide').click();
      windowJSDOM.document.getElementById('num2').click();
      windowJSDOM.document.getElementById('calc').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('4');
    });
  });

  describe('display should be render result of calculation with decimal', () => {
    it('should render 3.5, when button 1, +, 2, ., 5, = clicked', () => {
      windowJSDOM.document.getElementById('num1').click();
      windowJSDOM.document.getElementById('plus').click();
      windowJSDOM.document.getElementById('num2').click();
      windowJSDOM.document.getElementById('dot').click();
      windowJSDOM.document.getElementById('num5').click();
      windowJSDOM.document.getElementById('calc').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('3.5');
    });

    it('should render -1.5, when button 2, -, 3, ., 5, = clicked', () => {
      windowJSDOM.document.getElementById('num2').click();
      windowJSDOM.document.getElementById('minus').click();
      windowJSDOM.document.getElementById('num3').click();
      windowJSDOM.document.getElementById('dot').click();
      windowJSDOM.document.getElementById('num5').click();
      windowJSDOM.document.getElementById('calc').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('-1.5');
    });

    it('should render 7, when button 2, *, 3, ., 5, = clicked', () => {
      windowJSDOM.document.getElementById('num2').click();
      windowJSDOM.document.getElementById('multiply').click();
      windowJSDOM.document.getElementById('num3').click();
      windowJSDOM.document.getElementById('dot').click();
      windowJSDOM.document.getElementById('num5').click();
      windowJSDOM.document.getElementById('calc').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('7');
    });

    it('should render 3.6, when button 9, /, 2, ., 5, = clicked', () => {
      windowJSDOM.document.getElementById('num9').click();
      windowJSDOM.document.getElementById('devide').click();
      windowJSDOM.document.getElementById('num2').click();
      windowJSDOM.document.getElementById('dot').click();
      windowJSDOM.document.getElementById('num5').click();
      windowJSDOM.document.getElementById('calc').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('3.6');
    });
  });

  describe('after click equal button, and then click number button, calculator should be start new calculation', () => {
    it('should render 5, when button 1, +, 2, =, 4, +, 1, = clicked', () => {
      windowJSDOM.document.getElementById('num1').click();
      windowJSDOM.document.getElementById('plus').click();
      windowJSDOM.document.getElementById('num2').click();
      windowJSDOM.document.getElementById('calc').click();
      windowJSDOM.document.getElementById('num4').click();
      windowJSDOM.document.getElementById('plus').click();
      windowJSDOM.document.getElementById('num1').click();
      windowJSDOM.document.getElementById('calc').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('5');
    });

    it('should render 21, when button 1, +, 2, =, 4, +, 1, =, 7, *, 3, =, clicked', () => {
      windowJSDOM.document.getElementById('num1').click();
      windowJSDOM.document.getElementById('plus').click();
      windowJSDOM.document.getElementById('num2').click();
      windowJSDOM.document.getElementById('calc').click();
      windowJSDOM.document.getElementById('num4').click();
      windowJSDOM.document.getElementById('plus').click();
      windowJSDOM.document.getElementById('num1').click();
      windowJSDOM.document.getElementById('calc').click();
      windowJSDOM.document.getElementById('num7').click();
      windowJSDOM.document.getElementById('multiply').click();
      windowJSDOM.document.getElementById('num3').click();
      windowJSDOM.document.getElementById('calc').click();
      expect(windowJSDOM.document.getElementById('display').value).toBe('21');
    });
  });
});

describe('can do multiple calculation', () => {
  it('should render 5, when button 1, +, 1, +, 1, +, 1, +, 1, =, clicked', () => {
    windowJSDOM.document.getElementById('num1').click();
    windowJSDOM.document.getElementById('plus').click();
    windowJSDOM.document.getElementById('num1').click();
    windowJSDOM.document.getElementById('plus').click();
    windowJSDOM.document.getElementById('num1').click();
    windowJSDOM.document.getElementById('plus').click();
    windowJSDOM.document.getElementById('num1').click();
    windowJSDOM.document.getElementById('plus').click();
    windowJSDOM.document.getElementById('num1').click();
    windowJSDOM.document.getElementById('calc').click();
    expect(windowJSDOM.document.getElementById('display').value).toBe('5');
  });

  it('should render 15, when button 1, +, 2, +, 3, +, 4, +, 5, =, clicked', () => {
    windowJSDOM.document.getElementById('num1').click();
    windowJSDOM.document.getElementById('plus').click();
    windowJSDOM.document.getElementById('num2').click();
    windowJSDOM.document.getElementById('plus').click();
    windowJSDOM.document.getElementById('num3').click();
    windowJSDOM.document.getElementById('plus').click();
    windowJSDOM.document.getElementById('num4').click();
    windowJSDOM.document.getElementById('plus').click();
    windowJSDOM.document.getElementById('num5').click();
    windowJSDOM.document.getElementById('calc').click();
    expect(windowJSDOM.document.getElementById('display').value).toBe('15');
  });

  it('should render 15.1, when button 1, ., 1, +, 2, +, 3, +, 4, +, 5, =, clicked', () => {
    windowJSDOM.document.getElementById('num1').click();
    windowJSDOM.document.getElementById('dot').click();
    windowJSDOM.document.getElementById('num1').click();
    windowJSDOM.document.getElementById('plus').click();
    windowJSDOM.document.getElementById('num2').click();
    windowJSDOM.document.getElementById('plus').click();
    windowJSDOM.document.getElementById('num3').click();
    windowJSDOM.document.getElementById('plus').click();
    windowJSDOM.document.getElementById('num4').click();
    windowJSDOM.document.getElementById('plus').click();
    windowJSDOM.document.getElementById('num5').click();
    windowJSDOM.document.getElementById('calc').click();
    expect(windowJSDOM.document.getElementById('display').value).toBe('15.1');
  });
});
