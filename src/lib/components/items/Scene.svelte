<script lang="ts">
	import { AmbientLight, OrbitControls, PerspectiveCamera } from '@threlte/core';
	import { Environment, GLTF } from '@threlte/extras';
</script>

<Environment path="/hdr/" files="shanghai_riverside_1k.hdr" />

<PerspectiveCamera position={{ x: 5, y: 0, z: 2000 }} fov={50}>
	<OrbitControls autoRotate enableDamping />
</PerspectiveCamera>

<AmbientLight />

<GLTF url="/models/bottle.gltf" />
