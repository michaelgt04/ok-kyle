import SwipeTile from 'swipe/components/SwipeTile';

describe('SwipeTile', () => {
  let type,
      handleSwipe,
      wrapper;

  beforeEach(() => {
    handleSwipe = () => {};
    wrapper = shallow(
      <SwipeTile/>
    );
  });

  it('should render an i tag', () => {
    expect(wrapper.find('i')).toBePresent();
  });


})
