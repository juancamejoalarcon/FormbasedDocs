const {
    assert,
    expect,
    should
} = require('chai');
const Utils = require('../../classes/Utils');
describe('Utils', function () {
    describe('Testing funct', function () {
        it('should return -1 when the value is not present', function () {
            expect(utils.testingFunct()).to.equal(1);
        });
    });
});

const utils = new Utils();
utils.testingFunct();