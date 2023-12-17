<script>
    import { fade } from "svelte/transition";
    import { Confetti } from "svelte-confetti"
    import f40 from "$lib/f40.jpg"
    
</script>

<div class="flex fixed top-[-50px] left-[0px] w-screen h-screen overflow-hidden justify-center">
    <Confetti x={[-5, 5]} size=15 y={[0, 0.1]} delay={[500, 2000]} infinite duration=5000 amount=200 fallDistance="100vh" colorRange={[75, 150]} />
    <Confetti x={[-5, 5]} size=15 y={[0, 0.1]} delay={[500, 2000]} infinite duration=5000 amount=200 fallDistance="100vh" colorRange={[0, 11]} />
</div>
<div class="flex flex-col min-h-screen items-center justify-center">
    <img alt="an f40" class="w-[300px] object-fit" src={f40} />
</div>

<style lang="postcss">
</style>