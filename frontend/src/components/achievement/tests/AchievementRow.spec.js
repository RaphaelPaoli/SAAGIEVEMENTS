import React from 'react';
import { shallow } from 'enzyme';
import AchievementRow from '../AchievementRow';
import AchievementDto from '../../../models/AchievementDTO';

describe('AchievementRow', () => {
  const achievement = new AchievementDto('1', 'test', false);

  it('should render', () => {
    const wrapper = shallow(<AchievementRow achievement={achievement} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should have a proper goal written', () => {
    const wrapper = shallow(<AchievementRow achievement={achievement} />);
    expect(wrapper.find('[data-test="title"]').text()).toBe('test');
  });
});
