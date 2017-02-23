import SuperLike from 'swipe/components/SuperLike';

describe('SuperLike', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SuperLike/>
    );
  });

  it('should render a button tag', () => {
    expect(wrapper.find('button')).toBePresent();
  });
});
