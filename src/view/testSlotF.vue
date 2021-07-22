<template>
	<div>
		<test-slot>
			<div slot="header">header</div>
			<div>我是没有名称的slot</div>
			<div slot="footer">footer</div>
		</test-slot>
	</div>

</template>

<script>
	import testSlot from "./testSlot"
	export default{
		name:"testSlotF",
		components:{
			testSlot
		},
		
	}
</script>

<style>
</style>
