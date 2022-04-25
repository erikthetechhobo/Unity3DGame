<script>
    import {onMount} from 'svelte';

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
            resolve(hideStartButton(), console.log('game started'));
        })
    }
    onMount(async () => {
        await loadGame();
    });
</script>

<div id="UnityContainer">
    <canvas id="UnityCanvas" />
    <button id="StartButton" on:click={loadGame}>Start Unity</button>
    <script src="/Build/Build.loader.js" id="UnityLoaderScript"></script>
</div>

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
</style>