//babel 변환 register
const register = require('@babel/register').default;
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
register({ extensions: ['.ts', '.tsx', '.js', '.jsx'] });

module.exports = {
    extension: ['ts'],
    spec: ['src/__test__/*.spec.ts', 'src/__test__/*.spec.tsx']
};
