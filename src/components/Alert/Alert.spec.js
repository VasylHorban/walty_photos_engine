import Alert from './Alert';

describe('Alert component', () => {
  it('should render Alert component with props', () => {
    const component = render(<Alert text = 'test text'/>);
    expect(component).toMatchSnapshot();
  });
});