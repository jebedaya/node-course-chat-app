var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message')
describe('generateMessage', () => {
    it('should generate correct message object',  () => {
        var from = 'Judas';
        var text = 'Hey.'
        var message = generateMessage(from, text);
        
        // expect(message.from).toEqual(from);
        // expect(message.text).toEqual(text);
        expect(message).toInclude({from, text});
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Yehuda';
        var lat = '32.3573549';
        var long = '34.9023162';
        var locationMessage = generateLocationMessage(from, lat, long);
        var expectedUrl = `https://www.google.com/maps?q=${lat},${long}`
        expect(locationMessage).toInclude({
            from, 
            url: expectedUrl
        });
        expect(locationMessage.createdAt).toBeA('number');
    });
});
