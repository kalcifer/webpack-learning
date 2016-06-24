module.exports = function dosomething() {
	document.getElementById('root').innerHTML = "<button>I will fetch a remote thing.</button>";
	var button = document.getElementsByTagName('button')[0];
	button.addEventListener('click', function(){
		require.ensure('./remotething.js', function(){
			var remotething = require('./remotething.js');
			remotething();
		});
	})
};
