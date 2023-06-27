import React, {FC, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import style from "./Slide.module.scss"
import gsap from "gsap"

interface ISlide {
    id: number,
    children: React.ReactNode,
    color?: string,
}

const Slide: FC<ISlide> = ({id, color, children}) => {

    const onVisible = useMemo( () => {
        return (intersecting: boolean) => {
            const tl = gsap.timeline()
            if (intersecting) {
                tl.to(`#slide-${id}`, {
                    opacity: 1,
                    duration: 1.5
                })
            } else {
                tl.to(`#slide-${id}`, {
                    left: id % 2 === 0 ? '100vw' : '-100vw',
                    opacity: 0,
                    backgroundColor: 'coral',
                    duration: 1.5,
                }).set(`#slide-${id}`, {
                    position: 'relative',
                    left: 0,
                    backgroundColor: 'white',
                })
            }
        }
    }, [])

    useEffect(() => {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        let observer = new IntersectionObserver(entry => {onVisible(entry[0].isIntersecting)}, options);

        observer.observe(document.querySelector(`#slide-${id}`) as Element)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <div id={`slide-${id}`} className={style.slide}>
            {children}
        </div>
    );
};

export default Slide;