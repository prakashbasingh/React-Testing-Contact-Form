import React from "react";
import { render, fireEvent } from "@testing-library/react";

import ContactForm from "./ContactForm"

test('renders without errors', () => {
    render (<ContactForm/>)
})

test('renders the input without errors, can type in and submit the form', () => {
    const{getByLabelText, getByDisplayValue} = render(<ContactForm/>)
    
    //checking input fields using labels 
    const firstNameInput = getByLabelText(/first name*/i)
    const lastNameInput = getByLabelText(/last name*/i)
    const emailInput = getByLabelText(/email*/i)
    const messageInput = getByLabelText(/message/i)
    //checking input exist
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    // checking text input using change event
    fireEvent.change(firstNameInput, {target: {value: 'pra'}})
    fireEvent.change(lastNameInput, {target: {value: 'singh'}})
    fireEvent.change(emailInput, {target: {value: 'pra@pra.com '}})
    fireEvent.change(messageInput, {target: {value: 'Howdy!!!'}})
       // console.log(firstNameInput.value)

})


