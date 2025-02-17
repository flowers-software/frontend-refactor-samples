import {defineMessages} from 'react-intl';

const namespace = 'flow.deadline.';

export default defineMessages({
    deadlineHeader: {
        id: `${namespace}dialog.header`,
        description: 'A default header',
        defaultMessage: 'Deadline',
    },
    ABSOLUTE: {
        id: `${namespace}time.absolute`,
        description: 'A default header',
        defaultMessage: 'Absolute',
    },
    RELATIVE: {
        id: `${namespace}time.relative`,
        description: 'A default header',
        defaultMessage: 'Relative',
    },
    days: {
        id: `${namespace}time.days`,
        description: 'A default header',
        defaultMessage: 'Days',
    },
    hours: {
        id: `${namespace}time.hours`,
        description: 'A default header',
        defaultMessage: 'Hours',
    },
    minutes: {
        id: `${namespace}time.minutes`,
        description: 'A default header',
        defaultMessage: 'Minutes',
    },
    weeks: {
        id: `${namespace}time.weeks`,
        description: 'A default header',
        defaultMessage: 'Weeks',
    },
    addButtonLabel: {
        id: `${namespace}add.deadline`,
        description: 'A default header',
        defaultMessage: 'Add',
    },
    AFTER_PREV_WFO_COMPLETION: {
        id: `${namespace}after.prev.wfo.completed`,
        description: 'A default header',
        defaultMessage: 'After previous process step',
    },
    BEFORE_NEXT_DEADLINE: {
        id: `${namespace}before.next.deadline`,
        description: 'A default header',
        defaultMessage: 'until workflow deadline',
    },
    AFTER_WF_CREATION: {
        id: `${namespace}after.wf.creation`,
        description: 'A default header',
        defaultMessage: 'after creation',
    },
    includeWeekends: {
        id: `${namespace}include.weekends`,
        description: 'A default header',
        defaultMessage: 'Include weekends',
    },
    countingDays: {
        id: `${namespace}counting.days`,
        description: 'A default header',
        defaultMessage: 'Counting Days',
    },
    processTime: {
        id: `${namespace}process.time`,
        description: 'A default header',
        defaultMessage: 'Process Time',
    },
    deadlinePermissions: {
        id: `${namespace}deadline.permission`,
        description: 'A default header',
        defaultMessage: 'Deadline editing permissions',
    },
    deadlinePermissionsDescription: {
        id: `${namespace}deadline.permission.description`,
        description: 'A default header',
        defaultMessage: 'Select which teams can edit the deadline when the process is created as a workflow.',
    },
    ALL: {
        id: `${namespace}editing.permission.all`,
        description: 'A default header',
        defaultMessage: 'All',
    },
    CUSTOM: {
        id: `${namespace}editing.permission.custom`,
        description: 'A default header',
        defaultMessage: 'Custom',
    },
    active: {
        id: `${namespace}active`,
        description: 'A default header',
        defaultMessage: 'Deadline active?',
    },
});
