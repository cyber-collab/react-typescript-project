import React from 'react';

type FooterProps = {
    copyright: string;
}

export const Footer = (props: FooterProps) => {
    return (
        <footer>
            Footer - {props.copyright}
        </footer>
    );
};

