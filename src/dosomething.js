import styles from './styles.css';

const dosomething = () => {
	document.getElementById('root').innerHTML = "<button>I will fetch a remote thing.</button>";
	var button = document.getElementsByTagName('button')[0];
	button.addEventListener('click', () => {
		require.ensure([], (require) => {
			const {remotething} = require('./remotething.js');
			remotething();
		});
	})
};

export default dosomething;
