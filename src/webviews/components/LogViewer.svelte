<script lang="ts">
	import { onMount } from 'svelte';
    import { LogData } from "@core/LogData";

    let logData: LogData | undefined;

    onMount(() => {
        logData = new LogData("MyLogData");
    });
</script>

<body>
    {#if logData}
        <p>{logData.name}</p>
    {/if}
</body>