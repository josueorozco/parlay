import expect from 'expect';
import { DEFAULT_ACTION } from '../constants';
import { defaultAction } from '../actions';

describe('NavbarContainer actions', () => {
    describe('Default Action', () => {
        it('has a type of DEFAULT_ACTION', () => {
            const expected = {
                type: DEFAULT_ACTION
            };
            expect(defaultAction()).toEqual(expected);
        });
    });
});
