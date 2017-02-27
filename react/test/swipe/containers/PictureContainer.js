import PictureContainer from 'swipe/containers/PictureContainer';
import PictureTile from 'swipe/components/PictureTile';
import SwipeTile from 'swipe/components/SwipeTile';
import SuperLike from 'swipe/components/SuperLike';

describe('PictureContainer', () => {
  let wrapper;

  beforeEach(() => {
    window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    spyOn(PictureContainer.prototype,'swipeLeft').and.callThrough();
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

  xit('should render a PictureTile with specific props when currentPicture changes', done => {

    setTimeout(() => {
      let image = wrapper.find(PictureTile).find('img').prop('src');
      console.log(image)
    }, 0);

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

  xdescribe('swipeLeft', () => {

    it('should be invoked when the function assigned to the onClick property of the SwipeTile is invoked', () => {
      wrapper.find(SwipeTile).findWhere(n => n.prop('type') === 'left').simulate('click');

      expect(PictureContainer.prototype.swipeLeft).toHaveBeenCalled();
    });

    it('should change the PictureContainer state appropriately', done => {

      let currentPicture = wrapper.state( 'currentPicture');

      console.log("current picture is number " + currentPicture);

      wrapper.find(SwipeTile).findWhere(n => n.prop('type') === 'left').simulate('click');


      setTimeout(() => {
        expect(wrapper.state('currentPicture')).toEqual(currentPicture + 1)

        console.log(wrapper.state('currentPicture'));
        expect(wrapper.state('alert')).toEqual('')
        done();
      }, 500);
    });
  });

  xdescribe('swipeRight', () => {
    it('should be invoked when the function assigned to the onClick property of the SwipeTile is invoked', done => {
      wrapper.debug()

      wrapper.find(SwipeTile).findWhere(n => n.prop('type') === 'right').simulate('click');

      setTimeout(() => {
        let currentPicture = wrapper.state({ currentPicture });
        expect(wrapper.state({ currentPicture })).toEqual(currentPicture + 1)
        expect(wrapper.state({alert })).toEqual("You have been matched with")
        done();
      }, 500);

      // expect(wrapper.state({ currentPicture })).toEqual(currentPicture + 1)

    });
  });
});
