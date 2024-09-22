import { Account, ID } from "appwrite";
import { client } from "./appwrite";

const account = new Account(client);

export const signup = (email, password) => {
    const responce = account.create('unique()', `${email}`, `${password}`);
    responce.then(function (response) {
        console.log("account is created", response);
    }, function (error) {
        console.log("error occur during creating account", error);
    })
}

export const signin = (email, password, rememberMe) => {
    const responce = account.createEmailPasswordSession(`${email}`, `${password}`);
    responce.then(function (response) {
        console.log("account is logged", response);
        if (!rememberMe) {
            window.onbeforeunload = function () {
                account.deleteSession('current').then(function () {
                    console.log('Session deleted on window close');
                }, function (error) {
                    console.log('Error deleting session:', error);
                });
            };
        } else {
            console.log('Session saved!!');
        }
        const accountDetails = account.get();
        accountDetails.then(function (user) {
            console.log('Authenticated user details:', user);
            return user;
        }, function (error) {
            console.log('Error fetching user details:', error);
        });
    }, function (error) {
        console.log("error occur during login ", error);
    })
}


export const signout = () => {
    const logoutPromise = account.deleteSession('current');
    logoutPromise.then(function (response) {
        console.log('Logout successful:', response);
    }, function (error) {
        console.log('Logout error:', error);
    });
}


export const forgotPassword = (email, redirectUrl) => {
    const responce = account.createRecovery(`${email}`, redirectUrl);
    responce.then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}


export const Newpassword = (newPassword) => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const secret = urlParams.get('secret');
    const promise = account.updateRecovery(
        userId, secret, newPassword, newPassword
    );
    promise.then(function (response) {
        console.log("success update password",response);
    }, function (error) {
        console.log("error on password update",error);
    });
}