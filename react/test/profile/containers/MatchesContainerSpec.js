import MatchesContainer from 'profile/container/MatchesContainer'
import MatchTile from 'profile/components/MatchTile'

describe('profile/container/MatchesContainer', () => {
  let wrapper;

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(url => {
      if(url.endsWith('/api/v1/users')){
        return createResponseFromFixture('users/usersIndex')
      } else if(url.endsWith('/api/v1/matches/10')){
        return createResponseFromFixture('users/usersDelete')
      }
    })

    spyOn(MatchesContainer.prototype, 'unmatchKyle').and.callThrough()

    wrapper = mount(
      <MatchesContainer />
    )
  })

  it('should render a MatchTile', done => {
    setTimeout(() =>{
      expect(wrapper.find(MatchTile)).toBePresent()
      done();
    }, 0)
  })

  describe('unmatchKyle', () => {
    it('should be invoked when you click on the unmatch button', done => {
      setTimeout(() => {
        let buttons = wrapper.find('.unmatch-button')
        let firstUnmatchButton = buttons.first()
        firstUnmatchButton.simulate('click')

        expect(MatchesContainer.prototype.unmatchKyle).toHaveBeenCalled()
        done();
      },0)
    })

    it('should modify the state appropriately', done => {
      setTimeout(() => {
        let buttons = wrapper.find('.unmatch-button')
        let firstUnmatchButton = buttons.first()
        firstUnmatchButton.props().onClick()

        setTimeout(() => {
          expect(wrapper.state().matches.length).toEqual(3)
          done();
        }, 0)
      }, 0)
    })
  })
})
