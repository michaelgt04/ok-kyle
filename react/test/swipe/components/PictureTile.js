import PictureTile from 'swipe/components/PictureTile';

describe('PictureTile', () => {
  let url,
      wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PictureTile
        className="swipe-picture"
        url="http://fakeurl.com/kyle"
      />
    );
  });

  it('should render an img tag', () => {
    expect(wrapper.find('img')).toBePresent();
  });

  it('should render an img tag with the specific props', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: "http://fakeurl.com/kyle",
      className: 'swipe-picture'
    });
  });
});
