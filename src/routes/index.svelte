<script>
    import {onMount} from 'svelte';

    import auth from '$lib/services/auth';
    import { isAuthenticated, user } from '$lib/stores/auth';

    let auth0Client;

    function hideStartButton() {
        return new Promise(resolve => {
            var startButton = document.getElementById('StartButton');
            startButton.style.display = 'none';
            resolve(console.log('start button hidden'));
        })
    }

    function loadGame() {
        return new Promise(resolve =>{
            createUnityInstance(document.getElementById("UnityCanvas"), 
                {
                    dataUrl: "/Build/Build.data",
                    frameworkUrl: "/Build/Build.framework.js",
                    codeUrl: "/Build/Build.wasm",
                    streamingAssetsUrl: "StreamingAssets",
                    companyName: "DefaultCompany",
                    productName: "htmlBuildTest",
                    productVersion: "0.1",
                    // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
                    // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
                }
            );
            resolve(console.log('game started'));
        })
    }

    function login() {
        auth.loginWithPopup(auth0Client);
        loadGame();
    }
    function logout() {
        auth.logout(auth0Client);
    }

    onMount(async () => {
        //Auth
        auth0Client = await auth.createClient();
        isAuthenticated.set(await auth0Client.isAuthenticated());
        user.set(await auth0Client.getUser());
    });
</script>

{#if $isAuthenticated}
    <div id="UnityContainer">
        <canvas id="UnityCanvas" />
        <button id="QuitButton" on:click={logout}>Quit Game</button>
        <script on:load={loadGame} src="/Build/Build.loader.js" id="UnityLoaderScript"></script>
    </div>
{:else}
    <button id="StartButton" on:click={login}>Start Unity</button>
{/if}

<style>
    #UnityCanvas {
        display: block;
        height: inherit;
        width: 100%;
        background-color: var(--banner-bg-color);
    }
    #UnityContainer {
        height: inherit;
    }
    #StartButton {
        display: block;
        position: absolute;
        top: calc(50% - 11px);
        left: calc(50% - 37px);
        background-color:black;
    }
    #QuitButton {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        background-color:black;
    }
</style>