import PictureContainer from 'swipe/containers/PictureContainer';
import PictureTile from 'swipe/components/PictureTile';
import SwipeTile from 'swipe/components/SwipeTile';
import SuperLike from 'swipe/components/SuperLike';

describe('swipe/containers/PictureContainerSpec', () => {
  let wrapper;
  let swipeLeft

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      if(url.endsWith('/api/v1/kyles')){
        return createResponseFromFixture('kyles/kylesIndex');
      } else if (url.endsWith('api/v1/matches')){
        return createResponseFromFixture('kyles/kylesCreate');
      }
    });

    spyOn(PictureContainer.prototype, 'swipeLeft').and.callThrough();

    spyOn(PictureContainer.prototype, 'createMatch').and.callThrough();

    wrapper = mount(
      <PictureContainer />
    );
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

  it('should render a PictureTile with specific props when currentPicture changes', done => {

    setTimeout(() => {
      let image = wrapper.find(PictureTile).find('img').prop('src');
      done();
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

  describe('swipeLeft', () => {

    it('should be invoked when the function assigned to the onClick property of the SwipeTile is invoked', () => {
      let leftTile = wrapper.find(SwipeTile).findWhere(n => n.prop('type') === 'left');
      leftTile.simulate('click');

      expect(PictureContainer.prototype.swipeLeft).toHaveBeenCalled();
    });

    it('should change the PictureContainer state appropriately', done => {
      let leftTile = wrapper.find(SwipeTile).findWhere(n => n.prop('type') === 'left');

      setTimeout(() => {
        leftTile.props().handleSwipe();
        expect(wrapper.state('currentPicture')).toEqual(1);
        done();
      }, 0);
    });
  });

  describe('createMatch', () => {
    it('should be invoked when the right tile is clicked', done => {
      let rightTile = wrapper.find(SwipeTile).findWhere(n => n.prop('type') === 'right');

      setTimeout(() => {
        rightTile.simulate('click');
        expect(PictureContainer.prototype.createMatch).toHaveBeenCalled();
        done();
      }, 0);
    });

    it('should be invoked when the superlike tile is clicked', done => {
      let superLikeTile = wrapper.find(SuperLike);

      setTimeout(() => {
        superLikeTile.simulate('click');
        expect(PictureContainer.prototype.createMatch).toHaveBeenCalled();
        done();
      }, 0);
    });

    it('should change the PictureContainer state appropriately when the right tile is clicked', done => {
      let rightTile = wrapper.find(SwipeTile).findWhere(n => n.prop('type') === 'right');

      setTimeout(() => {
        rightTile.props().handleSwipe();

        setTimeout(() => {
          expect(wrapper.state('currentPicture')).toEqual(1);
          expect(wrapper.state('alert')).toMatch("the Kyle of your dreams");
          done();
        }, 0);
      }, 0);
    });

    it('should change the PictureContainer state appropriately when the superlike tile is clicked', done => {
      let superLikeTile = wrapper.find(SuperLike);

      setTimeout(() => {
        superLikeTile.props().handleSwipe();

        setTimeout(() => {
          expect(wrapper.state('currentPicture')).toEqual(1);
          expect(wrapper.state('alert')).toMatch("have super-liked");
          done();
        }, 0);
      }, 0);
    });
  });
});
