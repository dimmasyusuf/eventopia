import { Text } from '@chakra-ui/react';
import { format, isToday, isTomorrow, isYesterday } from 'date-fns';

function DateTimeComponent({ date, time }) {
  const dateTime = new Date(`${date}T${time}`);

  const dateFormat = (date) => {
    if (isToday(date)) {
      return `Today at ${format(date, 'h:mm a')}`;
    } else if (isTomorrow(date)) {
      return `Tomorrow at ${format(date, 'h:mm a')}`;
    } else if (isYesterday(date)) {
      return `Yesterday at ${format(date, 'h:mm a')}`;
    } else {
      return format(date, 'EEE, MMM d, h:mm a');
    }
  };

  return (
    <Text fontWeight='semibold' color='orange.400'>
      {dateFormat(dateTime)}
    </Text>
  );
}

export default DateTimeComponent;
