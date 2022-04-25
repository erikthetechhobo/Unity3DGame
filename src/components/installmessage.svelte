<script>
    import {browser, os, displayInstall} from '$lib/stores/browserData'; 
    function closeInstallPrompt() {
        displayInstall.set(false);
    }
    function refreshPage(){
        window.location.reload();
    } 
</script>

<div id="InstallMessage">
    {#if $browser == "Safari" && $os == "iOS"}
        <p>To install Web App, tap the <img src="/icons/shareButton.png" alt="apple share button" height="15px" width="12px"> and "Add to Homescreen"</p>
        <button on:click={closeInstallPrompt}>Close</button>
    {/if}
    {#if $browser == "Chrome" && $os == "Android"}
        <p>To install Web App, tap the <span>&#8942;</span> in the top right of your browser and click install</p>
        <button on:click={closeInstallPrompt}>Close</button>
    {/if}
    {#if $browser == "Chrome" && ($os == "Mac" || $os == "Windows")}
        <p>To install Web App, click the install button located in the address bar or from &#8942; in the top right of your browser</p>
        <p>(If you installed and see this message, <span id="RefreshLink" on:click={refreshPage}>Click Here</span>)</p>
        <button on:click={closeInstallPrompt}>Close</button>
    {/if}
</div>

<style>
    #InstallMessage {
        position: fixed;
        bottom: 10px;
        right: 25%;
        left: 25%;
        font-size: 1rem;
        border-radius: 16px;
        text-align: center;
    }
    #RefreshLink {
        cursor: pointer;
        text-decoration: underline;
        color: White;
    }
</style>