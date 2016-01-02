import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

const Anchor = ({ url }) => (
  <a href={url}>I'm an anchor</a>
);

describe('Anchor', () => {

  it('should be an A tag', () => {
      const renderer = TestUtils.createRenderer();
      renderer.render(<Anchor />);
      const actual = renderer.getRenderOutput().type;
      const expected = 'a';
      expect(actual).toEqual(expected);
  });

  it('should link to google.it', () => {
      const renderer = TestUtils.createRenderer();
      renderer.render(<Anchor url="http://www.google.it" />);
      const actual = renderer.getRenderOutput().props.href;
      const expected = 'http://www.google.it';
      expect(actual).toEqual(expected);
  });
});
