import React, {ChangeEventHandler, FC} from 'react';
import style from "./RangeInput.module.scss"
import {Slider} from "@mui/material";

interface IRangeInput {
    title: string,
    value: number,
    setValue: (val: number) => void,
    maxValue: number,
    minValue: number,
    step: number
}

const RangeInput: FC<IRangeInput> = ({title, value, setValue, maxValue, minValue, step}) => {
    return (
        <div className={style.rangeInput}>
            <div className={style.header}>
                <p>{title}</p>
                <p>{value}</p>
            </div>
            {/*<Slider  onChange={(event, value) => {setValue(value as number)}} value={value} max={maxValue} min={minValue} step={step}/>*/}
            <input onChange={(e) => {setValue(+e.target.value)}} type={"range"} value={value} max={maxValue} min={minValue} step={step}/>
        </div>
    );
};

export default RangeInput;