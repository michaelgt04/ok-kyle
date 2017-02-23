import PictureContainer from 'swipe/containers/PictureContainer';
import PictureTile from 'swipe/components/PictureTile';
import SwipeTile from 'swipe/components/SwipeTile';
import SuperLike from 'swipe/components/SuperLike';

describe('PictureContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<PictureContainer />);
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      currentPicture: 0,
      pictures: [],
      alert: ""
    });
  });

  it('should render a PictureTile component', () => {
    expect(wrapper.find(PictureTile)).toBePresent();
  });

  it('should render a PictureTile with specific props when currentPicture changes', () => {
  });

  it('should render the tree of the PictureTile component', () => {
    expect(wrapper.find(PictureTile).find('img')).toBePresent();
  })

  it('should render a SuperLike component', () => {
    expect(wrapper.find(SuperLike)).toBePresent();
  });

  it('should render the tree of the SuperLike component', () => {
    expect(wrapper.find(SuperLike).find('button')).toBePresent();
  })

  it('should render two SwipeTile components', () => {
    expect(wrapper.find(SwipeTile).length).toEqual(2);
  });

  it('should render the tree of each SwipeTile component', () => {
    expect(wrapper.find(SwipeTile).find('i').length).toEqual(2)
  })

  describe('swipeLeft', () => {

    it('should be invoked when the function assigned to the onClick property of the SwipeTile is invoked')

    // expect(wrapper.find(SwipeTile).length).toEqual(2);

    // .findWhere(type => 'left').onClick();

  });
});
