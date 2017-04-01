import React from 'react';

import { shallow } from 'enzyme';

import ParagraphWidget from '../src/widgets/ParagraphWidget.jsx';

describe('ParagraphWidget Tests', () => {
  test('should render a paragraph with "hello" class', () => {
    // const content = "Testing paragraph widget";
    const wrapper = shallow(
      <ParagraphWidget className="hello"/>
    )

    expect(wrapper.hasClass('hello')).toBe(true);
  });

  test('should render a paragraph with "Testing paragraph widget" content', () => {
    const content = "Testing paragraph widget";
    const wrapper = shallow(
      <ParagraphWidget>
        {content}
      </ParagraphWidget>
    )

    expect(wrapper.text()).toBe(content);
  });

});
