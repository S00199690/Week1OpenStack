import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
    it('it should include USD, GDP and EUR', () => {
        expect(getCurrencies()).toContain('USD');
        expect(getCurrencies()).toContain('GDP');
        expect(getCurrencies()).toContain('EUR');
        expect(getCurrencies()).toContain('PLN');
    });
    
});