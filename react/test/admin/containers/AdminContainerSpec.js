import AdminMatchTile from 'admin/components/AdminMatchTile';
import AdminContainer from 'admin/containers/AdminContainer'

describe('admin/containers/AdminContainerSpec', () => {

  let wrapper;

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      if(url.endsWith('/api/v1/admins')) {
        return createResponseFromFixture('admins/adminsIndex');
      } else if (url.endsWith('/api/v1/matches/1')){
        return createResponseFromFixture('admins/adminsDelete')
      }
    });

    spyOn(AdminContainer.prototype, 'unmatchUser').and.callThrough();

    spyOn(window, 'confirm').and.returnValue(true)

    wrapper = mount(
      <AdminContainer />
    );
  });

  it('should render an AdminMatchTile component', done => {
    setTimeout(() =>{
      expect(wrapper.find(AdminMatchTile)).toBePresent();
      done();
    }, 0);
  });

  describe('unmatchUser', () =>{

    it('should be invoked when an admin clicks on the unmatch button', done => {
      setTimeout(() => {
        let button = wrapper.find('#unmatch')
        button.simulate('click');

        expect(AdminContainer.prototype.unmatchUser).toHaveBeenCalled();
        done();
      }, 0)
    })

    it('should change the state of the admin container appropriately', done => {
      setTimeout(() => {
        let button = wrapper.find('#unmatch')
        button.props().onClick();

        setTimeout(() => {
          expect(wrapper.state()).toEqual({matches: []})
          done();
        }, 0)
      }, 0)
    })
  })

})
