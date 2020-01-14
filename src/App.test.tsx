import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("App tests", () => {
  it("should render app", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Match Stars Game/i);
    expect(linkElement).toBeInTheDocument();
  })
})
