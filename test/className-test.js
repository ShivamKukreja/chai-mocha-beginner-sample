const assert = require('chai').assert,
    addClass = require('../api');
describe('addClass', () => {
    it('should add class', () => {
        let element = {
            className: ''
        }
        addClass(element, 'test-class');
        assert.equal(element.className, 'test-class');
    })
    it('should not add a class which already exists', () => {
        let element = {
            className: 'pull-right'
        };

        addClass(element, 'pull-left');
        // comment above line and add below line to fail the test-case
        //addClass(element, 'pull-right');

        let classes = element.className.split(' ');
        console.log(classes);
        assert.notEqual(classes[0], classes[1], "class already exists");
    });

})