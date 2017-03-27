import MatchTile from 'profile/components/MatchTile'

describe('MatchTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MatchTile />
    )
  })

  it('should have an img tag', () => {
    expect(wrapper.find('img')).toBePresent();
  })

  it('should have an h3 tag', () => {
    expect(wrapper.find('h3')).toBePresent();
  })

  it('should have a button tag', () => {
    expect(wrapper.find('button')).toBePresent();
  })
})
