import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import AppLayout from '../../src/components/AppLayout'

describe('<AboutPage />', () => {
  function setup () {
    const wrapper = shallow(<AppLayout />)
    return { wrapper }
  }

  it('should render a <Helmet /> component', () => {
    const { wrapper } = setup()
    expect(wrapper.find(Helmet)).toHaveLength(1)
  })

  it('should render two <Link /> components', () => {
    const { wrapper } = setup()
    expect(wrapper.find(Link)).toHaveLength(2)
  })

  it('should render correctly', () => {
    const { wrapper } = setup()
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
