'use client';

import { useEffect, useState } from 'react';
import { DiscoverIcon } from '@/components/discover/DiscoverIcon';
import type { Messages } from '@/locales/types';

type LocationModalMessages = Messages['discover']['locationModal'];

type LocationModalProps = {
  isOpen: boolean;
  messages: LocationModalMessages;
  currentLocationLabel: string;
  onClose: () => void;
  onUseCurrentLocation: () => void;
  onUseAddress: (address: string) => void;
};

export function LocationModal({
  isOpen,
  messages,
  currentLocationLabel,
  onClose,
  onUseCurrentLocation,
  onUseAddress,
}: LocationModalProps) {
  const [addressValue, setAddressValue] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setAddressValue('');
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

  const canSubmitAddress = addressValue.trim().length > 0;

  const handleUseCurrentLocation = () => {
    onUseCurrentLocation();
    setAddressValue('');
  };

  const handleUseAddress = () => {
    const trimmedAddress = addressValue.trim();
    if (!trimmedAddress) {
      return;
    }

    onUseAddress(trimmedAddress);
    setAddressValue('');
  };

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="location-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="location-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="location-modal__handle" />

        <div className="location-modal__header">
          <div className="location-modal__header-copy">
            <strong id="location-modal-title">{messages.title}</strong>
            {messages.description ? <p>{messages.description}</p> : null}
          </div>
          <button className="location-modal__close" type="button" onClick={onClose} aria-label={messages.close}>
            <DiscoverIcon name="close" />
          </button>
        </div>

        <div className="location-modal__actions">
          <button className="location-modal__action" type="button" onClick={handleUseCurrentLocation}>
            <span className="location-modal__action-icon">
              <DiscoverIcon name="target" />
            </span>
            <span className="location-modal__action-copy">
              <strong>{messages.useCurrentLocation}</strong>
              {messages.useCurrentLocationHint ? <span>{messages.useCurrentLocationHint}</span> : null}
            </span>
            <span className="location-modal__action-chevron">
              <DiscoverIcon name="chevron" />
            </span>
          </button>
        </div>

        <div className="location-modal__form is-active">
          <div className="location-modal__input-wrap">
            <span className="location-modal__input-icon">
              <DiscoverIcon name="search" />
            </span>
            <input
              type="text"
              value={addressValue}
              onChange={(event) => setAddressValue(event.target.value)}
              placeholder={messages.addressPlaceholder}
            />
            <span className="location-modal__input-trailing" title={currentLocationLabel}>
              <DiscoverIcon name="target" />
            </span>
          </div>
          <button className="location-modal__submit" type="button" onClick={handleUseAddress} disabled={!canSubmitAddress}>
            <span className="location-modal__submit-icon">
              <DiscoverIcon name="pin" />
            </span>
            {messages.saveAddress}
          </button>
        </div>

        <div className="location-modal__footer">
          <div className="location-modal__privacy">
            <span className="location-modal__privacy-icon">
              <DiscoverIcon name="shield" />
            </span>
            {messages.privacyNote}
          </div>
          <button className="location-modal__learn-more" type="button">
            {messages.learnMore}
            <DiscoverIcon name="chevron" />
          </button>
        </div>
      </div>
    </div>
  );
}
