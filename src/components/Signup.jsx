import { useState } from 'react';
import { signupFields } from "./constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import axios from 'axios';

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
    const [signupState, setSignupState] = useState(fieldsState);

    const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signupState)
        createAccount(signupState)
    }

    //handle Signup API Integration here
    const createAccount = async (data) => {
        try {
            // await axios.post("https://mct-ecommerce.netlify.app/users", {
            await axios.post("http://localhost:3000/users", {

                data,
            });
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />

                    )
                }
                <FormAction handleSubmit={handleSubmit} text="Signup" />
            </div>



        </form>
    )
}