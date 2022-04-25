<script context="module">
    export const load = ({error, status}) => {
        return {
            props: {
                error,
                status
            }
        }
    }
</script>

<script>
    export let error
    export let status
</script>

<h1>Something went wrong</h1>
<h2>Error : {JSON.stringify(status)}</h2>
<p>{error.message}</p>