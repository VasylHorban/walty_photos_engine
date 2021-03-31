import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.describe = describe;
global.toJson = toJson;
global.mount = mount;
global.render = render;
