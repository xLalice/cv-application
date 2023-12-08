import {React, useState} from "react";

export default function Form(){
    return (
        <>
            <form>
                <h1>Contacts</h1>
                <label>Name: 
                    <input name="name"></input>
                </label>
                <label>Email:
                    <input name="email" type="email"></input>
                </label>
                <label name="number">Cellphone #
                    <input name="number"></input>
                </label>
                <label>City:
                    <input name="city"/>
                </label>
            </form>
        </>
    )
}