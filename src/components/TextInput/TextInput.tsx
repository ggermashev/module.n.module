import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import style from './TextInput.module.scss'

interface ITextInput {
    className?: string,
    label: string,
    value: string,
    setValue: (val: string) => void,
    type?: "text" | "mail" | "phone",
    maxLength?: number,
    multiline?: boolean
}

const TextInput: FC<ITextInput> = ({
                                       className = "",
                                       label,
                                       value,
                                       setValue,
                                       type = "text",
                                       maxLength,
                                       multiline = false
                                   }) => {

    const [error, setError] = useState("")

    useEffect(() => {

        const timer = setTimeout(() => {
            switch (type) {
                case "text":
                    if (maxLength) {
                        if (value.length > maxLength) {
                            setError(`Превышено допустимое число символов - ${maxLength}`)
                            return
                        }
                    }
                    setError("")
                    break
                case "mail":

                    if (!/^.+@.+\..+$/.test(value)) {
                        setError("Неверный формат почты")
                        return;
                    }
                    setError("")
                    break
            }
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [value])

    useEffect(() => {
        if (type === "phone") {
            if (value.at(-1) === " " || value.at(-1) === "+") {
                setValue(value.slice(0, value.length - 1))
                setError("")
                return
            }

            if (value.length === 0) {
                setValue("+7")
            }

            if (value.length === 3) {
                setValue(`${value.slice(0, 2)} ${value.at(-1)}`)
            }

            if (value.length === 7) {
                setValue(`${value.slice(0, 2)} ${value.slice(3, 6)} ${value.at(-1)}`)
            }

            if (value.length === 11) {
                setValue(`${value.slice(0, 2)} ${value.slice(3, 6)} ${value.slice(7, 10)} ${value.at(-1)}`)
            }

            if (value.length === 14) {
                setValue(`${value.slice(0, 2)} ${value.slice(3, 6)} ${value.slice(7, 10)} ${value.slice(11, 13)} ${value.at(-1)}`)
            }

            if (value.length === 16) {
                setValue(`${value.slice(0, 2)} ${value.slice(3, 6)} ${value.slice(7, 10)} ${value.slice(11, 13)} ${value.slice(14, 16)}`)
            }

            if (value.length > 16) {
                setValue(value.slice(0,16))
            }

            setError("")
        }
    }, [value])

    return (
        <div className={`${style.textInput} ${className}`}>
            <h3>{label}</h3>
            {!multiline
                ?
                <input type={"text"} value={value} onChange={e => setValue(e.target.value)}/>
                :
                <textarea rows={4} value={value} onChange={e => setValue(e.target.value)}/>
            }

            <p>{error}</p>
        </div>
    );
};

export default TextInput;