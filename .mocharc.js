//babel 변환 register
const register = require('@babel/register').default;
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
register({ extensions: ['.ts', '.tsx', '.js', '.jsx'] });

module.exports = {
    require : 'ignore-styles', //Webpack CSS imports를 테스트환경에서는 사용할 수 없어서 에러나는 것 해결
    extension: ['ts'],
    spec: ['src/__test__/*.spec.ts', 'src/__test__/*.spec.tsx']
};
