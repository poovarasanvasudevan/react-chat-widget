import React from "react";

const close = require('../../../../../../../assets/clear-button.svg') as string;

import './style.scss';

type Props = {
    title: string;
    subtitle: string;
    toggleChat: () => void;
    showCloseButton: boolean;
    titleAvatar?: string;

    header?: React.ReactNode;
}

function Header({title, subtitle, toggleChat, showCloseButton, titleAvatar, header}: Props) {
    return (
        <div className="rcw-header">
            {header ? header :
                <>
                    {showCloseButton &&
                        <button className="rcw-close-button" onClick={toggleChat}>
                            <img src={close} className="rcw-close" alt="close"/>
                        </button>
                    }
                    <h4 className="rcw-title">
                        {titleAvatar && <img src={titleAvatar} className="avatar" alt="profile"/>}
                        {title}
                    </h4>
                    <span>{subtitle}</span>
                </>
            }
        </div>
    );
}

export default Header;
