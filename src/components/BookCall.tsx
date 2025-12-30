'use client';

import { useState, useEffect } from 'react';
import { PopupModal } from 'react-calendly';

interface BookCallProps {
    children: React.ReactNode;
    className?: string;
    isLink?: boolean;
}

export default function BookCall({ children, className = '', isLink = false }: BookCallProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        // Sets the root element for the modal to avoid hydration issues
        setRootElement(document.getElementById('__next') || document.body);
    }, []);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(true);
    };

    // CHANGE THE URL BELOW TO YOUR CALENDLY URL
    const CALENDLY_URL = "https://calendly.com/brainydel/30min";

    return (
        <>
            {isLink ? (
                <a href="#" onClick={handleClick} className={className}>
                    {children}
                </a>
            ) : (
                <button onClick={handleClick} className={className} type="button">
                    {children}
                </button>
            )}

            {rootElement && (
                <PopupModal
                    url={CALENDLY_URL}
                    onModalClose={() => setIsOpen(false)}
                    open={isOpen}
                    rootElement={rootElement}
                />
            )}
        </>
    );
}
