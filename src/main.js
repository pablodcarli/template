import App from './App.svelte';
import AlertBootstrap from './AlertBootstrap.svelte';

new AlertBootstrap({target: document.body, props:{
	alertas :[
		{ estilo: 'primary', contenido: 'mensaje ' },
		{ estilo: 'danger', contenido: 'mensaje ' },
		{ estilo: 'danger', contenido: 'mensaje ' },
		{ estilo: 'warning', contenido: 'mensaje ' }
	]
}});



export default app;
export default AlertBootstrap;
