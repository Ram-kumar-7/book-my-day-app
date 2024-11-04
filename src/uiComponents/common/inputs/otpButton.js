import { Box, TextField } from '@mui/material'
import React, { useRef } from 'react'

function OtpButton(props) {
    const { boxCount } = props

    const inputRefs = useRef([])

    const handleInputChange = (event, index) => {
        const { value } = event.target
        if (value.length === 1 && index < boxCount - 1) {
            inputRefs.current[index + 1].focus()
        }
    }

    const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace' && index > 0 && !event.target.value) {
            inputRefs.current[index - 1].focus()
        }
    }

    return (
        <Box style={{ width:'100% !impoartant', margin:'20px 0' }}>
            {Array.from({ length: boxCount }).map((_, index) => (
                <TextField
                    inputRef={(event) => (inputRefs.current[index] = event)}
                    key={index}
                    variant="outlined"
                    id={`textField-${index}`}
                    sx={{
                        width: '40px',
                        margin: '0 20px',
                        '& .MuiInputBase-root': {
                            height: '40px',
                            transition: 'all 0.3s ease',
                            '&:focus': {
                                transform: 'scale(1.05)',
                                boxShadow: '0 0 5px rgba(0, 102, 204, 0.5)',
                            },
                        },
                    }}
                    inputProps={{
                        maxLength: 1,
                        min: 0,
                        max: 9,
                    }}
                    onChange={(event) => handleInputChange(event, index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}

                />
            ))}
        </Box>
    )
}
export default OtpButton