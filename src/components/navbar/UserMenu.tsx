'use client';

import type { User } from '@sentry/nextjs';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import LocaleSwitcher from '@/components/LocalSwitcher';
import Modal from '@/components/models/Model';
import { Avatar, Menu, MenuItem } from '@/components/ui';

interface UserMenuProps {
  user?: User;
}

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const router = useRouter();
  const t = useTranslations('RootLayout');

  const redirect = (url: string) => {
    router.push(url);
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <Modal>
          <LocaleSwitcher />
          <Menu>
            <Menu.Toggle id="user-menu">
              <button
                type="button"
                aria-label="close"
                className="flex cursor-pointer flex-row items-center gap-3 rounded-full border border-neutral-200 p-4 transition duration-300 hover:shadow-md md:px-2 md:py-1"
              >
                <AiOutlineMenu />
                <div className="hidden md:block">
                  <Avatar src={user?.image} />
                </div>
              </button>
            </Menu.Toggle>
            <Menu.List className="rounded-xl bg-white text-sm shadow-[0_0_36px_4px_rgba(0,0,0,0.075)]">
              <Modal.Trigger name="Login" onClick={() => redirect('/sign-in/')}>
                <MenuItem label={t('sign_in_link')} />
              </Modal.Trigger>

              <Modal.Trigger
                name="Sign up"
                onClick={() => redirect('/sign-up/')}
              >
                <MenuItem label={t('sign_up_link')} />
              </Modal.Trigger>
            </Menu.List>
          </Menu>
        </Modal>
      </div>
    </div>
  );
};

export default UserMenu;
