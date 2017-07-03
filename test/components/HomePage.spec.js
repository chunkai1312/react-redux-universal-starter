import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Helmet from 'react-helmet'
import HomePage from '../../src/components/HomePage'

function setup () {
  const wrapper = shallow(<HomePage />)
  return { wrapper }
}

describe('<HomePage />', () => {
  it('should render a <Helmet /> component', () => {
    const { wrapper } = setup()
    expect(wrapper.find(Helmet)).toHaveLength(1)
    expect(wrapper.find(Helmet).node.props.title).toBe('Home')
  })

  it('should render correctly', () => {
    const { wrapper } = setup()
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
