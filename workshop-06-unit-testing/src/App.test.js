import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new Adapter()});
describe('Test case for testing login', () => {
    let wrapper;
    test('username check', () => {
        wrapper = shallow(<App/>);
        wrapper.find('input[type="text"]').simulate('change', {
            target: {
                name: 'username',
                value: '2020566'
            }
        });
        expect(wrapper.state('username')).toEqual('2020566');
    })
    it('password check', () => {
        wrapper = shallow(<App/>);
        wrapper.find('input[type="password"]').simulate('change', {
            target: {
                name: 'password',
                value: 'testing'
            }
        });
        expect(wrapper.state('password')).toEqual('testing');
    })
    it('login check with right data', () => {
        wrapper = shallow(<App/>);
        wrapper.find('input[type="text"]').simulate('change', {
            target: {
                name: 'username',
                value: '2020566'
            }
        });
        wrapper.find('input[type="password"]').simulate('change', {
            target: {
                name: 'password',
                value: 'testing'
            }
        });
        wrapper.find('button').simulate('click');
        expect(wrapper.state('isLoggedIn')).toBe(true);
    })
    it('login check with wrong data', () => {
        wrapper = shallow(<App/>);
        wrapper.find('input[type="text"]').simulate('change', {
            target: {
                name: 'username',
                value: '2020566'
            }
        });
        wrapper.find('input[type="password"]').simulate('change', {
            target: {
                name: 'password',
                value: 'testing'
            }
        });
        wrapper.find('button').simulate('click');
        expect(wrapper.state('isLoggedIn')).toBe(false);
    })
})
