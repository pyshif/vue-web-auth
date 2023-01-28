import routes from '@/api/routes';
import type { AxiosInstance } from 'axios';
import type { RevocationResponse } from 'google-one-tap';

declare global {
    const google: typeof import('google-one-tap');
}

// response
export type GoogleResponseData = {
    headers: {
        status: string | '403' | '200';
    },
    payload: {
        name: string,
        email: string,
        phone: string,
        birthday: string,
        avatar: string,
    }
};

export const GoogleSignIn = (axios: AxiosInstance) => (googleIDToken: string) => {
    return axios({
        method: 'POST',
        url: routes.auth.google.popup.POST,
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${googleIDToken}`,
        }
    });
}

export const GoogleSignOut = (axios: AxiosInstance) => (hint: string) => {
    // hint is email or payload.sub
    const res = google.accounts.id.disableAutoSelect();
    // console.log('res :>> ', res);
    google.accounts.id.revoke(hint, (done: RevocationResponse) => {
        // console.log('done :>> ', done);
        const { error, successful } = done;
        if (error) return console.log('google revoke error :>>', error);
        // console.log('google revoke success!',)
    })
}