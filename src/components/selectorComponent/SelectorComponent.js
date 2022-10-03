import { Button, Form, InputNumber } from 'antd';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import styles from './styles.module.css';

const SelectorComponent = ({ setSelectorSettings }) => {
	const appContext = useContext(AppContext);
	const onFinish = (values) => {
		setSelectorSettings(values);
	};
	return (
		<Form className={styles.container} onFinish={onFinish}>
			{appContext.subject !== 'Русский язык' && (
				<Form.Item name='part' className={styles.input}>
					<InputNumber size='medium' min={1} className={styles.input} placeholder='Часть' />
				</Form.Item>
			)}
			{appContext.subject !== 'Русский язык' && (
				<Form.Item name='page' className={styles.input}>
					<InputNumber size='medium' min={1} className={styles.input} placeholder='Страница' />
				</Form.Item>
			)}
			{appContext.subject !== 'Русский язык' && (
				<Form.Item name='exercise' className={styles.input}>
					<InputNumber
						size='medium'
						min={1}
						className={styles.input}
						placeholder='Упражнение'
					/>
				</Form.Item>
			)}
			<Form.Item>
				<Button htmlType='submit' type='primary' size='medium'>
					Поиск
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SelectorComponent;
