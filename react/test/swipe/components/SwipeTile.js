import SwipeTile from 'swipe/components/SwipeTile';

describe('SwipeTile', () => {
  let type,
      handleSwipe,
      wrapper;

  beforeEach(() => {
    handleSwipe = jasmine.createSpy('handleSwipe spy');
    wrapper = mount(
      <SwipeTile
        handleSwipe={handleSwipe}
      />
    );
  });

  it('should render an i tag', () => {
    expect(wrapper.find('i')).toBePresent();
  });

  it('should receive handleSwipe as props', () => {
    expect(wrapper.props().handleSwipe).toEqual(handleSwipe)
  });

  it('should invoke the handleSwipe function from props when clicked', () => {
    wrapper.simulate('click');
    expect(handleSwipe).toHaveBeenCalled();
  })


})
