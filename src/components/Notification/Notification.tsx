import React, {FC} from 'react';
import style from "./Notification.module.scss"

interface INotification {
    children: React.ReactNode
}

const Notification: FC<INotification> = ({children}) => {
    return (
        <div className={style.notification}>
            {children}
        </div>
    );
};

export default Notification;