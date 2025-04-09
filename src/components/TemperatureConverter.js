import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useRef } from 'react';


function TemperatureConverter() {
    const celsiusRef = useRef(null);
    const fahrenheitRef = useRef(null);

    const resetOtherField = (e) => {
        const currentTargetId = e.target.id;

        if (currentTargetId === "celsius") {
            fahrenheitRef.current.value = "";
        } else if (currentTargetId === "fahrenheit") {
            celsiusRef.current.value = "";
        }
    }

    const convertation = (e) => {
        const currentTargetId = e.target.id;
        const currentTargetValue = e.target.value;

        if (currentTargetId === "celsius") {
            fahrenheitRef.current.value = 9 / 5 * currentTargetValue + 32;
        } else if (currentTargetId === "fahrenheit") {
            celsiusRef.current.value = 5 / 9 * (currentTargetValue - 32)
        }
    }

    return (
        <>
            <TextField className='degrees__field' onInput={convertation} onClick={resetOtherField}
                label="Celsius"
                id="celsius"
                inputRef={celsiusRef}
                type='number'
                sx={{ m: 1, width: '25ch' }}
                slotProps={{
                    input: {
                        startAdornment: <InputAdornment position="start">°C</InputAdornment>,
                    },
                }}
            />
            <TextField className='degrees__field' onInput={convertation} onClick={resetOtherField}
                label="Fahrenheit"
                id="fahrenheit"
                inputRef={fahrenheitRef}
                type='number'
                sx={{ m: 1, width: '25ch' }}
                slotProps={{
                    input: {
                        startAdornment: <InputAdornment position="start">°F</InputAdornment>,
                    },
                }}
            />
        </>
    );
}

export default TemperatureConverter;