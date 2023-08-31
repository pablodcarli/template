<script>
	
	export let alertas = [];
	
</script>


		
<ul>
	{#each alertas as { contenido, estilo }, i}
		<div class="alert alert-primary" role="alert">
			A simple primary alert—check it out!
		</div>
	{/each} 
</ul>
		
		
