import { FormattedMessage } from 'react-intl';
import intl from './intl';

export const TimeConstants = {
    MINUTES: 'MINUTES',
    HOURS: 'HOURS',
    DAYS: 'DAYS',
    WEEKS: 'WEEKS',
};

export const TimeConstantsToInternationalizedText = {
    DAYS: <FormattedMessage {...intl.days} />,
    WEEKS: <FormattedMessage {...intl.weeks} />,
    HOURS: <FormattedMessage {...intl.hours} />,
    MINUTES: <FormattedMessage {...intl.minutes} />,
};

export const TimeIndicators = {
    ABSOLUTE: 'ABSOLUTE',
    RELATIVE: 'RELATIVE',
};

export const DaysOfWeek = {
    MON_FRI: 'MON_FRI',
    MON_SAT: 'MON_SAT',
    MON_SUN: 'MON_SUN',
};
