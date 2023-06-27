import React, {FC} from 'react';
import style from './ModalPhotos.module.scss'
import ModalWindow from "../ModalWindow/ModalWindow";

interface IModalPhotos {
    onClose: () => void,
    images: string[]
}

const ModalPhotos: FC<IModalPhotos> = ({onClose, images}) => {
    return (
        <ModalWindow onClose={onClose}>
            <div className={style.modalPhotos}>
                {images.map((img,i) => <img key={i} src={img}/>)}
            </div>
        </ModalWindow>
    );
};

export default ModalPhotos;