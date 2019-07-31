import React from 'react';
import { shallow } from 'enzyme';
import UnlockedIcon from '../UnlockedIcon';

describe('UnlockedIcon', () => {
  const locked = false;

  it('should render', () => {
    const wrapper = shallow(<UnlockedIcon unlocked={locked} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should have a circle when is locked', () => {
    const wrapper = shallow(<UnlockedIcon unlocked={locked} />);
    const icon = wrapper.find('[data-test="icon"]');
    expect(icon.find('[name="fa-times-circle"]').exists()).toBe(true);
  });

  it('should have a trophey when is unlocked', () => {
    const wrapper = shallow(<UnlockedIcon unlocked={!locked} />);
    const icon = wrapper.find('[data-test="icon"]');
    expect(icon.find('[name="fa-trophy"]').exists()).toBe(true);
  });
});
