import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import avaIMG from '../../assests/images/ava.jpg';
import styles from './styles.module.css';
import { Segmented } from 'antd';
import SelectorComponent from '../../components/selectorComponent/SelectorComponent';

const MainPage = () => {
	const appContext = useContext(AppContext);
	const [avaVisible, setAvaVisible] = useState(true);
	const [selectorSettings, setSelectorSettings] = useState({});
	const containerToTitileRef = useRef();

	useEffect(() => {
		setTimeout(() => animateContainerToTitle(), 10000);
	}, []);

	const animateContainerToTitle = () => {
		containerToTitileRef.current.animate(
			[
				{
					transform: 'translateY(0)',
				},
				{
					transform: 'translateY(-200%)',
					opacity: '0',
					display: 'none',
				},
			],
			{
				duration: 750,
				fill: 'forwards',
			}
		);
		setTimeout(() => setAvaVisible(false), 760);
	};

	return (
		<div className={styles.container}>
			{avaVisible && (
				<div ref={containerToTitileRef} className={styles.containerToTitile}>
					<div className={styles.titleText}>
						DZ-helper - это приложение, которое я разработал специально для вас с Юлей для того,
						чтобы вы смогли смотреть ДЗ без моей моего постоянного участия. В конце концов, я
						программист или кто?
					</div>
					<div className={styles.containerToAva}>
						<img className={styles.avaIMG} src={avaIMG} alt='404'></img>
						<span className={styles.avaText}>
							Vitaly Tochenyy <br /> junior software developer
						</span>
					</div>
				</div>
			)}

			{!avaVisible && (
				<div className={styles.segmentedContainer}>
					<Segmented
						className={styles.segmented}
						size='medium'
						options={['Математика', 'Русский язык', 'Белорусский язык', 'Английский язык']}
						value={appContext.subject}
						onChange={appContext.setSubject}
					/>
					<SelectorComponent setSelectorSettings={setSelectorSettings} />
				</div>
			)}

			{appContext.subject && !avaVisible && Object.keys(selectorSettings).length > 0 && (
				<>
					<iframe
						title='dsdsds'
						src={
							appContext.subject === 'Английский язык'
								? `https://megaresheba.ru/index/b01/0-509/chi-${selectorSettings.part}-${selectorSettings.page}`
								: appContext.subject === 'Математика'
								? `https://megaresheba.ru/gdz/matematika/4-klass/muravyova/${selectorSettings.part}-${selectorSettings.page}`
								: appContext.subject === 'Русский язык'
								? `https://megaresheba.ru/gdz/russkij-yazyk/4-klass/antipova/${selectorSettings.part}-chast-1-${selectorSettings.exercise}`
								: appContext.subject === 'Белорусский язык'
								? `https://megaresheba.ru/publ/gdz/belorusskij_jazyk/4_klass/sviridenko/${selectorSettings.part}-chast-${selectorSettings.exercise}`
								: null
						}
					></iframe>
				</>
			)}
		</div>
	);
};

export default MainPage;
