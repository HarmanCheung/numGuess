/**
 * Created by zhm on 17-7-18.
 */
const main = require('../main/main');
const sinon = require('sinon');
wor = new main.workshop();

function test() {
    let a = sinon.stub(wor, 'getUserNumber').callsFake(function () {
        return [1, 2, 3, 4];
    });
    let b = sinon.stub(wor, 'makeFourRandomNumber').callsFake(function () {
        return [1, 2, 3, 4];
    });
    wor.getResult();
    a.restore();
    b.restore();
}
test();