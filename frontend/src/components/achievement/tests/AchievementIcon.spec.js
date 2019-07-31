import React from 'react';
import { shallow } from 'enzyme';
import AchievementIcon from '../AchievementIcon';

describe('AchievementIcon', () => {
  const unlocked = false;
  const loading = false;
  const error = false;

  it('should render', () => {
    const wrapper = shallow(<AchievementIcon unlocked={unlocked} loading={loading} error={error} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should display only unlockedIcon', () => {
    const wrapper = shallow(<AchievementIcon unlocked={unlocked} loading={loading} error={error} />);
    expect(wrapper.find('[data-test="unlocked"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="loading"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="error"]').exists()).toBe(false);
  });

  it('should display unlockedIcon and loadingIcon', () => {
    const wrapper = shallow(<AchievementIcon unlocked={unlocked} loading={!loading} error={error} />);
    expect(wrapper.find('[data-test="unlocked"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="loading"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="error"]').exists()).toBe(false);
  });
  
  it('should display unlockedIcon and errorIcon', () => {
    const wrapper = shallow(<AchievementIcon unlocked={unlocked} loading={loading} error={!error} />);
    expect(wrapper.find('[data-test="unlocked"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="loading"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="error"]').exists()).toBe(true);
  });
});
