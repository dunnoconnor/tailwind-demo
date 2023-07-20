import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

function DateSelect({date, setDate}) {
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    value={date}
                    onChange={newDate => setDate(newDate)}
                    label="nasa date picker"
                />
            </LocalizationProvider>
        </div>
    );
}

export default DateSelect;