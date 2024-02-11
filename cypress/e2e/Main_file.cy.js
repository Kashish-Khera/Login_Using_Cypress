import {Random_user_creds_generator} from "../support/Random_user_creds";


describe('A. Login Test Suite', () => {
    it('1. Login Page', () => {

        // have multiple users creds so added them in the fixture file and then createda seperate function tp pick any random users ctreds
        //  and creadted custom command for login and use these random users creds to login 
        cy.visit("https://www.saucedemo.com" , { timeout: 120000 })
        Random_user_creds_generator().then((user_creds) =>{
            cy.login(user_creds.username , user_creds.password)
        })


    });
})