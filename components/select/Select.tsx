import styles from './select.module.scss';

const Select: React.FC = () => {
    return (
        <div className={styles['select-container']}>
          <select 
            className={styles['select']}
          name="select">
                <option value="Partners">Partners</option>
          </select>
        </div>
    )
}

export default Select