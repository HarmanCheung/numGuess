/**
 * Created by zhm on 17-7-18.
 */
describe('workshop', () => {
    it('user give 4 number,make a Array property to workshop', () => {
        
        var number = [3,5,7,9];
        workshop1 = new workshop(3,5,7,9);
        expect(workshop1.number).toEqual(number);
    });
    it('user give 4 number,system make 4 random number to compare and return result', () => {
        
        workshop2 = new workshop(3,5,7,8);
        var result =  ['0A0B','0A1B','0A2B','0A3B','0A4B','1A0B','1A1B','1A3B','2A0B','2A1B','2A2B','3A0B'];
        
        expect(result).toContain(workshop2.getResult());
    });
});
