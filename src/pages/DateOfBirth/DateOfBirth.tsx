import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoundedSelect } from '../../components/ui/RoundedSelect';
import { RoundedButton } from '../../components/ui/RoundedButton';
import { useAppDispatch } from '../../app/hooks';
import { setDateOfBirth } from '../../features/userSlice';
import { formatDate } from '../../helpers/formatDate';
import './DateOfBirth.scss';
import { days } from '../../helpers/generateDaysArray';
import { shortMonths } from '../../helpers/generateMonthsArray';
import { years } from '../../helpers/generateYearsArray';

export function DateOfBirth() {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [isEmptyField, setIsEmptyField] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (!selectedYear.length && !selectedDay.length && !selectedMonth.length) {
      setIsEmptyField(true);
    } else {
      const preparedDate = formatDate(
        `${selectedYear}-${selectedMonth}-${selectedDay}`,
      );
      dispatch(setDateOfBirth(preparedDate));
      navigate('/connection');
    }
  };

  useEffect(() => {
    if (selectedYear.length && selectedDay.length && selectedMonth.length) {
      setIsEmptyField(false);
    }
  }, [selectedYear, selectedDay, selectedMonth]);

  const handleSelectYearChange = (value: string | number) => {
    setSelectedYear(value.toString());
  };

  const handleSelectMonthChange = (value: string | number) => {
    setSelectedMonth(value.toString());
  };

  const handleSelectDayChange = (value: string | number) => {
    setSelectedDay(value.toString());
  };

  return (
    <div className="date-of-birth">
      <h1 className="date-of-birth__title">What&lsquo;s your date of birth?</h1>
      <div className="date-of-birth__items-wrapper">
        <RoundedSelect
          onChange={handleSelectMonthChange}
          value={selectedMonth}
          title="Month"
          options={shortMonths}
        />
        <RoundedSelect
          onChange={handleSelectDayChange}
          value={selectedDay}
          title="Day"
          options={days}
        />
        <RoundedSelect
          onChange={handleSelectYearChange}
          value={selectedYear}
          title="Year"
          options={years}
        />
        <div>
          {isEmptyField && (
            <p className="date-of-birth__error-message">Fields are required</p>
          )}
        </div>
      </div>
      <div className="date-of-birth__btn">
        <RoundedButton
          disabled={isEmptyField}
          onClick={handleNavigate}
          size={'medium'}
          withBackground
        >
          Next
        </RoundedButton>
      </div>
    </div>
  );
}
