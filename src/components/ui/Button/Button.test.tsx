import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import type { ButtonProps } from './index';
import Button from './index';

describe('Button component', () => {
  it('renders button text content', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  it('renders with primary variant by default', () => {
    render(<Button>Click Me</Button>);
    const container = screen.getByText('Click Me');
    expect(container).toHaveClass('bg-blue-600 text-white'); // Primary variant classes
  });

  it('renders with different variants', () => {
    const renderButton = (variant: ButtonProps['variant']) =>
      render(<Button variant={variant}>Click Me</Button>);

    expect(renderButton('primary').container).toHaveClass(
      'bg-blue-600 text-white',
    );
    expect(renderButton('secondary').container).toHaveClass(
      'bg-gray-200 text-gray-700',
    );
    expect(renderButton('outline').container).toHaveClass(
      'border border-blue-600 text-blue-600',
    );
  });

  it('renders with different sizes', () => {
    const renderButton = (size: ButtonProps['size']) =>
      render(<Button size={size}>Click Me</Button>);

    expect(renderButton('sm').container).toHaveClass('text-xs');
    expect(renderButton('md').container).toHaveClass('text-base');
    expect(renderButton('lg').container).toHaveClass('text-lg');
  });

  it('renders disabled button with opacity and cursor styles', () => {
    const { container } = render(<Button disabled>Click Me</Button>);
    expect(container).toHaveStyle('opacity: 0.5');
    expect(container).toHaveStyle('cursor: not-allowed');
  });

  it('calls onClick handler when button is clicked', () => {
    const handleClick = vitest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Consider adding tests for custom classes:
  it('renders with custom class name', () => {
    const { container } = render(
      <Button className="my-custom-class">Click Me</Button>,
    );
    expect(container).toHaveClass('my-custom-class');
  });
});
