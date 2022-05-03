import createAuth0Client from '@auth0/auth0-spa-js';
import { user, isAuthenticated, popupOpen } from '$lib/stores/auth';
import config from '$lib/config/auth_config';

async function createClient() {
    let auth0Client = await createAuth0Client({
        domain: config.domain,
        client_id: config.clientId
    });

    return auth0Client;
}

async function login(client, options) {
    popupOpen.set(true);
    try {
        await client.loginWithPopup(options);
        await user.set(await client.getUser(), isAuthenticated.set(true));

        //console log the user
        console.log(user.get());
    } catch (e) {
        console.error(e);
    } finally {
        popupOpen.set(false);
    }
}

function logout(client) {
    return client.logout();
}

const auth = {
    createClient,
    login,
    logout
};

export default auth;