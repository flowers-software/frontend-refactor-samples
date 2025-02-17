import React from 'react';
import styles from './styles.module.scss';
import MaterialIcon from 'material-icons-react';
import cx from 'classnames';
import commonStyles from '../../../../../styles/common/styles.module.scss';

const DeleteIcon = ({onDelete, label}) => {
  return <div className={cx('d-flex flex-row align-items-center', styles.lineHeight, commonStyles.cursorPointer)} onClick={onDelete}>
    <div className={cx('d-flex justify-content-center align-items-center', styles.deleteWrapper)}>
      <MaterialIcon icon="clear" size={10} color="white"/>
    </div>
    {label && (
        <span className={cx(styles.label, 'ml-1')}>{label}</span>
    )}
  </div>;
};

DeleteIcon.defaultProps = {
  label: undefined,
};

export default DeleteIcon;

