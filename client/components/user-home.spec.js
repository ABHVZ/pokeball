/* global describe beforeEach it */

import { expect } from 'chai'
import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Menu } from 'semantic-ui-react'
import { UserHome } from './user-home'

const adapter = new Adapter()
enzyme.configure({ adapter })

describe('UserHome', () => {
  let userHome
  let user

  beforeEach(() => {
    user = {
      email: 'cody@email.com',
      shippingAddress: { street1: '123 Fake Street', city: 'New York', state: 'NY' },
      billingAddress: { street1: '123 Fake Street', city: 'New York', state: 'NY' }
    }
    userHome = shallow(<UserHome user={user} />)
  })

  it('renders the email in an h3', () => {
    expect(userHome.find('.sidebar')).to.have.length(1)
  })
})
