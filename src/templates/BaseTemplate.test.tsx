import { render, screen, within } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '@/locales/en.json';

import { BaseTemplate } from './BaseTemplate';

describe('Base template', () => {
  describe('Render method', () => {
    it('should have 3 menu items', () => {
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <BaseTemplate
            leftNav={
              <>
                <li>link 1</li>
                <li>link 2</li>
                <li>link 3</li>
              </>
            }
          >
            {null}
          </BaseTemplate>
        </NextIntlClientProvider>,
      );

      const menuItemList = screen.getAllByRole('listitem');

      expect(menuItemList).toHaveLength(3);
    });

    it('should have a link', () => {
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <BaseTemplate leftNav={<li>1</li>}>{null}</BaseTemplate>
        </NextIntlClientProvider>,
      );

      const copyrightSection = screen.getByText(/© Copyright/);
      const copyrightLink = within(copyrightSection).getByRole('link');

      expect(copyrightLink).toHaveAttribute(
        'href',
        'https://www.htmniseko.com',
      );
    });
  });
});
