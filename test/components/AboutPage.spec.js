import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Helmet from 'react-helmet'
import AboutPage from '../../src/components/AboutPage'

describe('<AboutPage />', () => {
  function setup () {
    const wrapper = shallow(<AboutPage />)
    return { wrapper }
  }

  it('should render a <Helmet /> component', () => {
    const { wrapper } = setup()
    expect(wrapper.find(Helmet)).toHaveLength(1)
    expect(wrapper.find(Helmet).node.props.title).toBe('About')
  })

  it('should render correctly', () => {
    const { wrapper } = setup()
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
