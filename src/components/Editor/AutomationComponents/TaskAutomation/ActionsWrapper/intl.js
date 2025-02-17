import { defineMessages } from 'react-intl';

const namespace = 'automation.automationDetail.task.automation.actions.';

export default defineMessages({
  addTime: {
    id: `${namespace}deadline.add.time`,
    description: 'Label',
    defaultMessage: 'Add time',
  }, MON: {
    id: 'days.of.week.monday',
    description: 'day of week',
    defaultMessage: 'Monday',
  }, TUE: {
    id: 'days.of.week.tuesday',
    description: 'day of week',
    defaultMessage: 'Tuesday',
  }, WED: {
    id: 'days.of.week.wednesday',
    description: 'day of week',
    defaultMessage: 'Wednesday',
  }, THU: {
    id: 'days.of.week.thursday',
    description: 'day of week',
    defaultMessage: 'Thursday',
  }, FRI: {
    id: 'days.of.week.friday',
    description: 'day of week',
    defaultMessage: 'Friday',
  }, SAT: {
    id: 'days.of.week.saturday',
    description: 'day of week',
    defaultMessage: 'Saturday',
  }, SUN: {
    id: 'days.of.week.sunday',
    description: 'day of week',
    defaultMessage: 'Sunday',
  },
  noTasksError: {
    id: `${namespace}error.no.tasks`,
    description: 'error',
    defaultMessage: 'No tasks',
  }, SAME_AS_TRIGGER_TASK: {
    id: `${namespace}deadline.same.as.trigger.task`,
    description: 'error',
    defaultMessage: 'Same as trigger task',
  }, NEXT_DAY_OF_WEEK: {
    id: `${namespace}deadline.next.day.of.week`,
    description: 'error',
    defaultMessage: 'Set next day of the week',
  }, NEXT_DAY_OF_MONTH: {
    id: `${namespace}deadline.next.day.of.month`,
    description: 'error',
    defaultMessage: 'Set next day of the month',
  }, SET_IN: {
    id: `${namespace}deadline.set.in`,
    description: 'error',
    defaultMessage: 'Set in',
  }, addButtonLabel: {
    id: `${namespace}add.button.label`,
    description: 'Button',
    defaultMessage: 'Add Condition',
  }, targetTask: {
    id: `${namespace}target.task.header`,
    description: 'header',
    defaultMessage: 'Target Task',
  }, value: {
    id: `${namespace}value.input.header`,
    description: 'header',
    defaultMessage: 'Value',
  }, operation: {
    id: `${namespace}operation.input.header`,
    description: 'header',
    defaultMessage: 'Operation',
  }, visibility: {
    id: `${namespace}visibility.input.header`,
    description: 'header',
    defaultMessage: 'Visibility',
  },
  dropdownPlaceholder: {
    id: `${namespace}dropdown.placeholder`,
    description: 'Button',
    defaultMessage: 'select Value',
  },
  flowObject: {
    id: `${namespace}flow.object.header`,
    description: 'header',
    defaultMessage: 'Process step',
  },
  people: {
    id: `${namespace}people.header`,
    description: 'header',
    defaultMessage: 'People',
  },
  responsibilities: {
    id: `${namespace}responsibilities.header`,
    description: 'header',
    defaultMessage: 'Responsibilities',
  },
  addContact: {
    id: `${namespace}contact.add`,
    description: 'header',
    defaultMessage: 'Add to contacts',
  },
  overrideContact: {
    id: `${namespace}contact.override`,
    description: 'header',
    defaultMessage: 'Override existing contacts',
  },
  removeContact: {
    id: `${namespace}contact.remove`,
    description: 'header',
    defaultMessage: 'Remove from contacts',
  },
  add: {
    id: `${namespace}responsibilities.add`,
    description: 'header',
    defaultMessage: 'Add to responsibilities',
  },
  override: {
    id: `${namespace}responsibilities.override`,
    description: 'header',
    defaultMessage: 'Override existing responsibilities',
  },
  remove: {
    id: `${namespace}responsibilities.remove`,
    description: 'header',
    defaultMessage: 'Remove from responsibilities',
  },
  ENABLE: {
    id: `${namespace}task.enable`,
    description: 'header',
    defaultMessage: 'Show',
  },
  DISABLE: {
    id: `${namespace}task.disable`,
    description: 'header',
    defaultMessage: 'Hide',
  },
  SWITCH: {
    id: `${namespace}task.switch`,
    description: 'header',
    defaultMessage: 'Switch',
  }, addValue: {
    id: `${namespace}task.add`,
    description: 'header',
    defaultMessage: 'Add',
  },
  overrideValue: {
    id: `${namespace}task.override`,
    description: 'header',
    defaultMessage: 'Override',
  },
  subtractValue: {
    id: `${namespace}task.subtract`,
    description: 'header',
    defaultMessage: 'Subtract',
  },
  useInputFromTrigger: {
    id: `${namespace}responsibilities.use.input.from.trigger`,
    description: 'Label',
    defaultMessage: 'Use input from triggering Task',
  }, useTeamLeadsOnly: {
    id: `${namespace}responsibilities.use.team.leads.only`,
    description: 'Label',
    defaultMessage: 'Use Team Leads only',
  },
  CustomTrigger: {
    id: `automation.automationDetail.task.automation.trigger.custom.trigger`,
    description: 'Title',
    defaultMessage: 'TRIGGER',
  },

  setValue: {
    id: `automation.automationDetail.task.automation.action.set.value`,
    description: 'Label',
    defaultMessage: 'Set',
  },
  inputGeneralPlaceholder: {
    id: `workflow.tasks.input.placeholder.general`,
    description: 'Label Placeholder',
    defaultMessage: '',
  },
  inputGeneralValidation: {
    id: `flowers.editable.text.general.validation`,
    description: 'Label validation',
    defaultMessage: '',
  },
  oneOptionLabel: {
    id: `workflow.tasks.input.label.one.option`,
    description: 'Input Label',
    defaultMessage: '',
  },
  oneOptionPlaceholder: {
    id: `workflow.tasks.input.placeholder.one.option`,
    description: 'Input Label Placeholder',
    defaultMessage: '',
  },
  inputDatePlaceholder: {
    id: `workflow.tasks.input.placeholder.date`,
    description: 'Input Label Placeholder',
    defaultMessage: '',
  },
  ABSOLUTE: {
    id: 'flow.deadline.time.absolute',
    description: 'A default header',
    defaultMessage: 'Absolute',
  },
  RELATIVE: {
    id: 'flow.deadline.time.relative',
    description: 'A default header',
    defaultMessage: 'Relative',
  },
  inputOrder: {
    id: `${namespace}http.input.order`,
    description: 'Label',
    defaultMessage: '',
  },
  testSaveButton: {
    id: `${namespace}.create`,
    description: 'A text on button',
    defaultMessage: 'Test & Save',
  },
  skipTestSaveButton: {
    id: `${namespace}.create`,
    description: 'A text on button',
    defaultMessage: 'Skip Test & Save',
  },

});
