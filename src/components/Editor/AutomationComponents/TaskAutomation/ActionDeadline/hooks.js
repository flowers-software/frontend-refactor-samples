import cx from 'classnames';
import _ from 'lodash';
import { useCallback, useState } from 'react';
import { weekDayPeriodsKeys } from '../../../../HeaderMenu/Left/Automation/SelectDayContainer/constants';
import { InputType } from '../../../BranchDialog/ConditionField/enums';
import {
  DaysOfWeek,
  TimeConstants,
  TimeConstantsToInternationalizedText,
  TimeIndicators,
} from '../../../DeadlineDialog/DeadlineEnums';
import { DeadlineActionTypeEnum } from '../ActionsWrapper/enum';
import internationalization from '../ActionsWrapper/intl';
import styles from '../ActionsWrapper/styles.module.scss';
import DeleteIcon from '../DeleteIcon';

export const useActionDeadlineHooks = (
    action,
    changeInputType,
    changeInputValue,
    changeValueSource,
    changeDestinationFlowObject,
    triggerTasks,
    DEADLINE_OPTION_AND_LABELS,
    deleteInput,
    intl,
    extractFlowObjects,
    addInput,
) => {
    const [addedTime, setAddedTime] = useState(false);

    const timeOptions = [
        {
            id: TimeIndicators.ABSOLUTE,
            name: intl.formatMessage(
                {...internationalization.ABSOLUTE}),
        },
        {
            id: TimeIndicators.RELATIVE,
            name: intl.formatMessage(
                {...internationalization.RELATIVE}),
        },
    ];

    const timeInputConstants = [
        {
            value: TimeConstants.DAYS,
            label: TimeConstantsToInternationalizedText[TimeConstants.DAYS],
        },
        {
            value: TimeConstants.WEEKS,
            label: TimeConstantsToInternationalizedText[TimeConstants.WEEKS],
        },
    ];

    const getDaysOfWeek = useCallback(() => {
        const fullDaysOfWeek = [
            {
                id: 0,
                key: weekDayPeriodsKeys.SUN,
                label: intl.formatMessage(
                    {...internationalization.SUN}),
            }, {
                id: 1,
                key: weekDayPeriodsKeys.MON,
                label: intl.formatMessage(
                    {...internationalization.MON}),
            }, {
                id: 2,
                key: weekDayPeriodsKeys.TUE,
                label: intl.formatMessage(
                    {...internationalization.TUE}),
            }, {
                id: 3,
                key: weekDayPeriodsKeys.WED,
                label: intl.formatMessage(
                    {...internationalization.WED}),
            }, {
                id: 4,
                key: weekDayPeriodsKeys.THU,
                label: intl.formatMessage(
                    {...internationalization.THU}),
            }, {
                id: 5,
                key: weekDayPeriodsKeys.FRI,
                label: intl.formatMessage(
                    {...internationalization.FRI}),
            }, {
                id: 6,
                key: weekDayPeriodsKeys.SAT,
                label: intl.formatMessage(
                    {...internationalization.SAT}),
            },
        ];

        if (!_.isEmpty(action.daysOfWeek) && action.daysOfWeek === DaysOfWeek.MON_FRI) {
            return fullDaysOfWeek.filter((iter) => (iter !== weekDayPeriodsKeys.SUN && iter !== weekDayPeriodsKeys.SAT));
        }
        if (!_.isEmpty(action.daysOfWeek) && action.daysOfWeek === DaysOfWeek.MON_SAT) {
            return fullDaysOfWeek.filter((iter) => (iter !== weekDayPeriodsKeys.SUN));
        }
        return fullDaysOfWeek;
    }, [action, intl]);

    const getSelectedDayOfWeek = useCallback(() => {
        const daysOfWeek = getDaysOfWeek();

        if (_.isEmpty(action.inputs)) {
            return daysOfWeek[0];
        }

        const filteredInputs = action.inputs.filter((iter) => iter.type === TimeConstants.DAYS);

        if (_.isEmpty(filteredInputs)) {
            return daysOfWeek[0];
        }

        if (filteredInputs[0].value > 6) {
            return daysOfWeek[0];
        }

        const selectedDayOfWeek = daysOfWeek.find((iter) => iter.id === filteredInputs[0].value);

        return _.isEmpty(selectedDayOfWeek) ? daysOfWeek[0] : selectedDayOfWeek;
    }, [action, getDaysOfWeek]);

    const getNumbers1To31 = useCallback(() => {
        const array = [];
        for (let i = 1; i <= 31; i++) {
            array.push({
                id: i,
                label: i,
            });
        }
        return array;
    }, []);

    const getSelectedDayOfMonth = useCallback(() => {
        const daysOfMonth = getNumbers1To31();

        if (_.isEmpty(action.inputs)) {
            return daysOfMonth[0];
        }

        const filteredInputs = action.inputs.filter((iter) => iter.type === TimeConstants.DAYS);

        if (_.isEmpty(filteredInputs)) {
            return daysOfMonth[0];
        }

        return daysOfMonth[filteredInputs[0].value - 1];
    }, [action, getNumbers1To31]);

    const getSelectedDayIn = useCallback(() => {
        const defaultValue = {
            value: 0,
            type: TimeConstants.DAYS,
        };
        if (_.isEmpty(action.inputs)) {
            return defaultValue;
        }

        const filteredInputs = action.inputs.filter((iter) => iter.type === TimeConstants.DAYS || iter.type === TimeConstants.WEEKS);

        if (_.isEmpty(filteredInputs)) {
            return defaultValue;
        }

        return filteredInputs[0];
    }, [action]);

    const getOptionsForRadioButton = useCallback(() => {
        if (!_.isEmpty(triggerTasks) && triggerTasks?.some((task) => task.inputType === InputType.DATE)) {
            return DEADLINE_OPTION_AND_LABELS;
        }
        return DEADLINE_OPTION_AND_LABELS.filter((iter) => iter.id !== DeadlineActionTypeEnum.SAME_AS_TRIGGER_TASK);
    }, [triggerTasks, DEADLINE_OPTION_AND_LABELS]);

    const getSelectedDestinationObject = () => {
        if (!extractFlowObjects()) {
            return undefined;
        }
        const objects = extractFlowObjects().filter((iter) => iter.key === action.destinationObjectId);

        return objects.length > 0 ? objects[0] : undefined;
    };

    const transformInputTimes = useCallback((inputTimes) => {
        return Object.values(inputTimes).map((type) => {
            if (type) {
                return {
                    value: type,
                    label: TimeConstantsToInternationalizedText[type],
                };
            }

            return {
                value: TimeConstants[0],
                label: TimeConstantsToInternationalizedText[TimeConstants[0]],
            };
        });
    }, []);

    const getFilteredInputOnlyTime = useCallback((inputTimes) => {
        return transformInputTimes(Object.values(inputTimes).filter((iter) => iter === TimeConstants.HOURS || iter === TimeConstants.MINUTES));
    }, [transformInputTimes]);

    const getSelectedType = useCallback((type) => {
        return {
            value: type,
            label: TimeConstantsToInternationalizedText[type],
        };
    }, []);

    const renderInputs = useCallback(() => {
        if (_.isEmpty(action.inputs)) {
            return <></>;
        }

        const inputs = action.inputs.filter((iter) => iter.type === TimeConstants.HOURS || iter.type === TimeConstants.MINUTES);

        if (_.isEmpty(inputs)) {
            addInput(action);
        }

        return inputs.map((iter, index) => {
            return <div className={cx('d-flex flex-row mr-3 py-1 ')} key={'inputs_wrapper_' + index}>
                <div className={cx('d-flex', styles.inputNumber, addedTime ? '' : styles.inactiveInput)}>
                    <input type={'number'}
                        key={'inputNumber_' + index}
                        placeholder={0}
                        onChange={(e) => changeInputValue(e.target.value, iter.type, action)}
                        value={iter.value}
                        onBlur={(e) => changeInputValue(e.target.value, iter.type, action)}
                    />
                </div>
                <div className={cx('mx-1', styles.dropdownWrapperOverrideStyles)}>
                    <select
                        key={`dropdown_time_${index}`}
                        value={getSelectedType(iter.type)}
                        onChange={(e) => changeInputType(e.target.value, iter.type, action, index + 1)}
                        className={cx(styles.stylesDropdown, styles.stylesDropdownContainer)}
                      >
                          {getFilteredInputOnlyTime(TimeConstants).map((option) => (
                              <option key={option.value} value={option.value}>
                                  {option.label}
                              </option>
                          ))}
                    </select>
                </div>
                {index > 0 && (
                    <DeleteIcon
                        onDelete={() => deleteInput(action, index)}
                        key={'delete_icon_' + index}/>
                )}
            </div>;
        });
    }, [addInput, action, deleteInput, addedTime, changeInputType, changeInputValue, getSelectedType, getFilteredInputOnlyTime]);


    return {
        getSelectedDayOfWeek,
        getSelectedDayOfMonth,
        getOptionsForRadioButton,
        getSelectedDestinationObject,
        renderInputs,
        getNumbers1To31,
        getDaysOfWeek,
        addedTime,
        setAddedTime,
        timeOptions,
        timeInputConstants,
        getSelectedType,
        getSelectedDayIn,
    };
};
