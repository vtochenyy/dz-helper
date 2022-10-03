import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

const Page404 = () => {
	return (
		<Result
			status='404'
			title='404'
			subTitle='Вы что-то лишнее ввели.'
			extra={
				<Link to='/dz-helper'>
					<Button style={{ borderRadius: '20px' }} type='primary'>
						Вернуться на главную страницу помощника
					</Button>
				</Link>
			}
		/>
	);
};

export default Page404;
