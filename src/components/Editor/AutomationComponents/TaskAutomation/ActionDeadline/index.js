import { FormattedMessage, injectIntl } from 'react-intl';
import cx from 'classnames';
import styles from '../ActionsWrapper/styles.module.scss';
import ActionTypeDropdown from '../ActionTypeDropdown';
import DeleteIcon from '../DeleteIcon';
import internationalization from '../ActionsWrapper/intl';
import { useEffect } from 'react';
import DropdownNew from '../../../components/DropdownNew';
import RadioButton from '../../RadioButton';
import { DeadlineActionTypeEnum } from '../ActionsWrapper/enum';
import { TimeConstants, TimeIndicators } from '../../../DeadlineDialog/DeadlineEnums';
import colorVariables from '../../../../../styles/colors.scss';
import { useActionDeadlineHooks } from './hooks';
import AddButton from '../AddButton';
import InputCheckbox from '../../../../Input/InputCheckbox';
import colors from '../../../../../styles/colors.scss';

const DeadlineTaskAction = ({
    key,
    action,
    trigger,
    extractFlowObjects,
    DEADLINE_OPTION_AND_LABELS,
    deleteAction,
    onChangeTypeOfAction,
    triggerTasks,
    changeInputType,
    changeInputValue,
    changeValueSource,
    changeDestinationFlowObject,
    deleteInput,
    addInput,
    canHaveMoreInputs,
    intl,
    hideActionTasksType,
    changeTimebase,
}) => {
    const {
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
        getSelectedDayIn,
        getSelectedType,
    } = useActionDeadlineHooks(
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
        addInput);

    const selectedRadioButton = action && action.valueSource ? action.valueSource : getOptionsForRadioButton()[0].id;
    const selectedValuedDayIn = getSelectedDayIn();

    useEffect(() => {
        if (action && action.inputs && action.inputs.length > 1) {
            setAddedTime(true);
        }
    }, [action, setAddedTime]);

    return (<div className={cx('d-flex flex-column', styles.actionElementWrapper)} key={key}>
        <div className={cx('d-flex flex-row justify-content-between',
            styles.actionTopRow)}>
            <ActionTypeDropdown
                currentSelectedType={action.type}
                onChangeType={(actionType) => onChangeTypeOfAction(action.id, actionType)}
                hideActionTasksType={hideActionTasksType}
            />
            <DeleteIcon
                onDelete={() => deleteAction(action.id)}/>
        </div>
        <div className={cx('d-flex flex-column',
            styles.actionDropdownContainerWrapper)}>
            <h6 className={cx(styles.header, 'pt-4')}>
                <FormattedMessage {...internationalization.flowObject}/>
            </h6>
            <DropdownNew
                keyValue={'deadline_destination_object_for_' + key}
                options={extractFlowObjects()}
                selectedValue={getSelectedDestinationObject()}
                placeholder={intl.formatMessage(
                    {...internationalization.dropdownPlaceholder})}
                onChange={(value) => changeDestinationFlowObject(value, action)}
                selectStyles={{
                    menu: {
                        backgroundColor: 'white',
                        color: colorVariables.gray2,
                    },
                    control: {
                        height: 'inherit',
                        minHeight: 'inherit',
                    },
                    option: {
                        color: colorVariables.grey2,
                        backgroundColor: 'white',
                    },
                    dropdownIndicator: {
                        padding: '8px 0',
                    },
                    indicatorsContainer: {
                        height: '100%',
                    },

                }}
                stylesDropdownContainer={cx('')}
            />
        </div>

        <div className={cx('d-flex flex-column', styles.actionMainPart)}>
            <h6 className={cx(styles.header, 'pt-4')}>
                <FormattedMessage {...internationalization.value}/>
            </h6>
            <div className={cx('d-flex flex-row')}>
                <div className={cx('w-50', styles.radioButton)}>
                    <RadioButton
                        options={getOptionsForRadioButton()}
                        selectedId={action && action.valueSource ? action.valueSource : getOptionsForRadioButton()[0].id}
                        groupName={'deadline_options_' + action.id}
                        onChangeSelection={(event) => {
                            changeValueSource(action, event);
                        }}
                        elementInnerStyle={styles.radioButtonElementInnerStyle}
                        radioButtonStyle={styles.radioButtonStyle}
                    />
                </div>
                <div className={cx('d-flex flex-column pt-2 w-50')}>
                    <div className={cx('d-flex flex-row')}>
                        {action && action.valueSource && action.valueSource === DeadlineActionTypeEnum.NEXT_DAY_OF_MONTH && (
                            <DropdownNew
                                keyValue={'deadline_day_of_month_' + key}
                                options={getNumbers1To31()}
                                selectedValue={getSelectedDayOfMonth()}
                                placeholder={intl.formatMessage(
                                    {...internationalization.dropdownPlaceholder})}
                                onChange={(value) => changeInputValue(value.id, TimeConstants.DAYS, action)}
                                selectStyles={{
                                    menu: {
                                        backgroundColor: 'white',
                                        color: colorVariables.gray2,
                                    },
                                    control: {
                                        height: 'inherit',
                                        minHeight: 'inherit',
                                    },
                                    option: {
                                        selectedBackgroundColor: colors.blueberry3,
                                        selectedColor: 'white',
                                    },
                                    dropdownIndicator: {
                                        padding: '8px 0',
                                    },
                                    indicatorsContainer: {
                                        height: '100%',
                                    },

                                }}
                                stylesDropdownContainer={cx('ml-2')}
                                isOptionSelected={(newOption, selectedOptions) => {
                                    return !!selectedOptions.find((iter) => iter.id === newOption.id);
                                }}
                            />
                        )}

                        {action && action.valueSource && action.valueSource === DeadlineActionTypeEnum.NEXT_DAY_OF_WEEK && (
                            <DropdownNew
                                keyValue={'deadline_day_of_week_' + key}
                                options={getDaysOfWeek()}
                                selectedValue={getSelectedDayOfWeek()}
                                placeholder={intl.formatMessage(
                                    {...internationalization.dropdownPlaceholder})}
                                onChange={(value) => changeInputValue(value.id, TimeConstants.DAYS, action)}
                                selectStyles={{
                                    menu: {
                                        backgroundColor: 'white',
                                        color: colorVariables.gray2,
                                    },
                                    control: {
                                        height: 'inherit',
                                        minHeight: 'inherit',
                                    },
                                    option: {
                                        selectedBackgroundColor: colors.blueberry3,
                                        selectedColor: 'white',
                                    },
                                    dropdownIndicator: {
                                        padding: '8px 0',
                                    },
                                    indicatorsContainer: {
                                        height: '100%',
                                    },

                                }}
                                stylesDropdownContainer={cx('ml-2')}
                                isOptionSelected={(newOption, selectedOptions) => {
                                    return !!selectedOptions.find((iter) => iter.id === newOption.id);
                                }}
                            />
                        )}

                        {action && action.valueSource && action.valueSource === DeadlineActionTypeEnum.SET_IN && (
                            <div className={cx('d-flex flex-column')}>

                                <div className={cx(styles.radioButton, 'd-flex flex-row w-100')}>
                                    <RadioButton
                                        key={'radioButton_timeIndicator_'}
                                        options={timeOptions}
                                        selectedId={action.absolute ? TimeIndicators.ABSOLUTE : TimeIndicators.RELATIVE}
                                        groupName={'deadline.timeIndicators'}
                                        onChangeSelection={(value) => {
                                            changeTimebase(action, value === TimeIndicators.ABSOLUTE);
                                        }}
                                        elementInnerStyle={cx(styles.radioButtonElementInnerStyle, 'mx-2')}
                                        radioButtonStyle={styles.radioButtonStyle}
                                        elementWrapperStyle={cx('d-flex')}
                                    />
                                </div>
                                <div className={cx('d-flex flex-row mr-3 mt-1 pl-2')}>
                                    <div className={cx('d-flex', styles.inputNumber)}>
                                        <input type="number"
                                            placeholder="0"
                                            onChange={(e) => changeInputValue(e.target.value, selectedValuedDayIn.type, action)}
                                            value={selectedValuedDayIn.value}
                                            onBlur={(e) => changeInputValue(e.target.value, selectedValuedDayIn.type, action)}
                                        />
                                    </div>
                                    <div className={cx('mx-1')}>
                                        <DropdownNew
                                            placeholder={''}
                                            options={timeInputConstants}
                                            selectedValue={getSelectedType(selectedValuedDayIn.type)}
                                            onChange={(newSelection) => {
                                                changeInputType(newSelection, selectedValuedDayIn.type, action, 0);
                                            }}
                                            withIcon={false}
                                            stylesDropdownContainer={cx(styles.stylesDropdownContainer)}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {selectedRadioButton !== DeadlineActionTypeEnum.SAME_AS_TRIGGER_TASK && (
                        <div className={cx('d-flex flex-column my-2')}>
                            <div className={cx('d-flex flex-row align-items-center pl-2')}>
                                <InputCheckbox
                                    id={'addTime' + action.id}
                                    key={'addTime' + action.id}
                                    labelId={'addTime_label'}
                                    labelName={intl.formatMessage(
                                        {...internationalization.addTime})}
                                    onChange={() => setAddedTime(!addedTime)}
                                    classes={cx('d-flex align-items-center justify-content-start my-0 mr-2 w-100', styles.inputCheckbox)}
                                    value={addedTime}
                                />
                            </div>
                            {addedTime && (
                                <div className={cx('d-flex flex-row flex-wrap align-items-center pl-2')}>
                                    {renderInputs()}
                                </div>
                            )}
                            {addedTime && canHaveMoreInputs && (
                                <div className={cx('d-flex flex-row align-items-center')}>
                                    <AddButton
                                        labelText={intl.formatMessage({...internationalization.addButtonLabel})}
                                        actionToCall={() => addInput(action)}
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>);
};

export default injectIntl(DeadlineTaskAction);
