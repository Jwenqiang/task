<template>
	<div>
		这是header+{{hData}}
		<p><slot name="i"></slot></p>
	</div>
</template>

<script>
	export default{
		name:'headers',
		props:{
			hData:{
				default:"暂无"
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
