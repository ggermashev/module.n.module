import React, {FC} from 'react';
import style from './SocialLink.module.scss'
import {Link} from "react-router-dom";

interface ISocialLink {
    link: string,
    icon?: string,
    children: React.ReactNode,
    className?: string,
}

const SocialLink: FC<ISocialLink> = ({link, icon="", children, className}) => {
    return (
        <div className={`${style.socialLink} ${className}`}>
            {icon && <img src={icon}/>}
            <Link to={link}>{children}</Link>
        </div>
    );
};

export default SocialLink;