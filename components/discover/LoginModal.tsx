'use client';

import { useEffect, useState } from 'react';
import { DiscoverIcon } from '@/components/discover/DiscoverIcon';
import type { Messages } from '@/locales/types';

type LoginModalMessages = Messages['common']['loginModal'];
type LoginRole = 'user' | 'business';

type LoginModalProps = {
  isOpen: boolean;
  messages: LoginModalMessages;
  onClose: () => void;
};

export function LoginModal({ isOpen, messages, onClose }: LoginModalProps) {
  const [selectedRole, setSelectedRole] = useState<LoginRole>('user');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setSelectedRole('user');
      setUsername('');
      setPassword('');
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="login-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="login-modal__handle" />

        <div className="login-modal__header">
          <div className="login-modal__header-copy">
            <strong id="login-modal-title">{messages.title}</strong>
            <p>{messages.description}</p>
          </div>
          <button className="login-modal__close" type="button" onClick={onClose} aria-label={messages.close}>
            <DiscoverIcon name="close" />
          </button>
        </div>

        <div className="login-modal__tabs" role="tablist" aria-label={messages.title}>
          <button
            className={`login-modal__tab${selectedRole === 'user' ? ' is-active' : ''}`}
            type="button"
            role="tab"
            aria-selected={selectedRole === 'user'}
            onClick={() => setSelectedRole('user')}
          >
            {messages.tabs.user}
          </button>

          <button
            className={`login-modal__tab${selectedRole === 'business' ? ' is-active' : ''}`}
            type="button"
            role="tab"
            aria-selected={selectedRole === 'business'}
            onClick={() => setSelectedRole('business')}
          >
            {messages.tabs.business}
          </button>
        </div>

        <div className="login-modal__form">
          <label className="login-modal__field">
            <span>{messages.usernameLabel}</span>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder={messages.usernamePlaceholder}
            />
          </label>

          <label className="login-modal__field">
            <span>{messages.passwordLabel}</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder={messages.passwordPlaceholder}
            />
          </label>

          <div className="login-modal__meta">
            <button className="login-modal__text-link" type="button">
              {messages.forgotPassword}
            </button>
          </div>
        </div>

        <button className="login-modal__submit" type="button" onClick={onClose}>
          <span className="login-modal__submit-icon">
            <DiscoverIcon name="login" />
          </span>
          {messages.submit}
        </button>

        <div className="login-modal__divider">
          <span>{messages.divider}</span>
        </div>

        <button className="login-modal__google" type="button" onClick={onClose}>
          <span className="login-modal__google-icon">
            <DiscoverIcon name="google" />
          </span>
          {messages.google}
        </button>

        <div className="login-modal__footer">
          <span>{messages.signupPrompt}</span>
          <button className="login-modal__text-link" type="button">
            {messages.signupAction}
          </button>
        </div>
      </div>
    </div>
  );
}
