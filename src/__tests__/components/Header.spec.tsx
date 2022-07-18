import { render, screen, fireEvent } from '@testing-library/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';

import Header from '../../components/Header';

const mockedPush = jest.fn();
let RouterWrapper;

describe('Header', () => {
  beforeAll(() => {
    console.log('test');
  });

  it('should be able to render logo', () => {
    console.log('test');
  });

  it('should be able to navigate to home page after a click', () => {
    console.log('test');
  });
});
