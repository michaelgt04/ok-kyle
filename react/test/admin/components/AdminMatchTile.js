import AdminMatchTile from 'admin/components/AdminMatchTile'

describe('AdminMatch', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <AdminMatchTile
        userImage='http://iamaperson.com'
        userName='Mike'
        chatId={1}
        superlike={true}
      />
    )
  })

  it('should render an img tag', () => {
    expect(wrapper.find('img')).toBePresent()
  })

  it('should render an h3 tag', () => {
    expect(wrapper.find('h3')).toBePresent()
  })

  it('should render a link', () => {
    expect(wrapper.find('a')).toBePresent()
  })

  it('should have a button', () => {
    expect(wrapper.find('button')).toBePresent()
  })

  it('should have the correct props', () => {
    expect(wrapper.props().userImage).toEqual("http://iamaperson.com");
    expect(wrapper.props().userName).toEqual("Mike");
    expect(wrapper.props().chatId).toEqual(1);
    expect(wrapper.props().superlike).toEqual(true);
  })
})
