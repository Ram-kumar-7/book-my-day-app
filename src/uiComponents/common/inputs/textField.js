import { TextField } from '@mui/material'
import React from 'react'

function CustomTextField() {
    return (
        <>
            <TextField
                error={error}
                id={`custom-text-field ${id}`}
                type={type || 'text'}
                size={size || "medium"}
                variant={variant}
                placeholder={placeholder}
                helperText={helperText}
                onChange={handleChange}
                onBlur={handleBlur}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                disabled={disabled}
                value={value}
                style={{...style}}
            />
        </>
    )
}

export default CustomTextField
