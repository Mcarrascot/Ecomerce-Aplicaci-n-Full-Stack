import { useState, useEffect, useContext } from 'react'
import UserContext from '../context/User/UserContext'
import FormAction from "./FormAction";
import Input from "./Input";
import { profileFields } from "./constants/formFields";

const fields = profileFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Profile() {
  const ctx = useContext(UserContext);
  const { userSubmitForm } = ctx;

  const {
    firstName,
    lastName,
    email,
  } = ctx.user

  const [userForm, setUserForm] = useState({
    firstName,
    lastName,
    email
  })

  const handleChange = async (event) => {
    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    const updateData = () => {
      return setUserForm({
        ...userForm,
        name: `${firstName} ${lastName}`,
      })
    }
    updateData();
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    userSubmitForm(userForm);
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {
          fields.map(field =>
            <Input
              key={field.id}
              handleChange={handleChange}
              value={userForm[field.id]}
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
      </div>
      <FormAction handleSubmit={handleSubmit} text="Update" />
    </form>
  )
}
