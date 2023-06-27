import React, {FC, useMemo} from 'react';
import style from "./Select.module.scss"
import gsap from "gsap"

interface ISelect {
    title: string,
    defaultOption: string,
    options: string[],
    value: string,
    setValue: (val: string) => void,
}

interface IOption {
    option: string
}

const Select: FC<ISelect> = ({title, options, value, setValue, defaultOption}) => {

    const onSelect = useMemo(() => {
        let closed = true
        const tlOptions = gsap.timeline()
        const tlArrow = gsap.timeline()
        return function () {
            console.log("click")
            if (closed) {
                tlArrow.to('#arrow', {
                    duration: 0.2,
                    rotate: 180
                })
                tlOptions.set(`#options`, {
                    display: 'block',
                })
                tlOptions.to(`#options`, {
                    duration: 0.2,
                    height: 'auto',
                    opacity: 1,
                })
            } else {
                tlOptions.to(`#options`, {
                    duration: 0.2,
                    height: 0,
                    opacity: 0,
                })
                tlOptions.set(`#options`, {
                    display: 'none',
                })
                tlArrow.to('#arrow', {
                    duration: 0.2,
                    rotate: 0
                })
            }
            closed = !closed
        }
    }, [])

    const Option: FC<IOption> = ({option}) => {

        return (
            <div onClick={() => {
                setValue(option)
                onSelect()
            }} className={style.option}><p>{option}</p></div>
        )
    }

    return (
        <div className={style.select}>
            <div className={style.field} onClick={onSelect}>
                <p>{title}: {value}</p>
                <img id={"arrow"} src={require('../../images/arrow-down.png')}/>
            </div>
            <div id={"options"} className={style.options}>
                <Option option={defaultOption}/>
                {options.map( opt => <Option key={opt} option={opt}/>)}
            </div>
        </div>
    );
};

export default Select;