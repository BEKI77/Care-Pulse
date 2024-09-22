"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { UserFormValidation } from "@/lib/validation"
import {Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButoon from "../ui/SubmitButoon"
import { useState } from "react"



export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "dataPicker",
    SELECT = "select",
    SKELETON = "skeleton", 
}

export const PatientForm = ()=> {
  const [isLoading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

 
  async function onSubmit(values: z.infer<typeof UserFormValidation>) {
    setLoading(true);
    console.log(values)
    try {
      // const response = await fetch("https://api.example.com", {
      //   method: "POST",
      //   body: JSON.stringify(values),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      // if (response.ok) {
      //   // Success
      // } else {
      //   // Error
      // }
    } catch (error) {
      // Error
      console.error(error);
    }
  }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="remove-scrollbar container my-auto">
            <h1 className="header">Hi there 👋 </h1>
            <p className="text-dark-700"> Schedule your first appoinment.</p>
        </section>

        <CustomFormField 
          fieldType = {FormFieldType.INPUT}
          control = {form.control}
          name = "username"
          label = "Username"
          placeholder = "Jhon Doe"
          iconSrc = "/assets/icons/user.svg"
          iconAlt = "user"
        />

        <CustomFormField 
          fieldType = {FormFieldType.INPUT}
          control = {form.control}
          name = "email"
          label = "Email"
          placeholder = "JhonDoe@gmail.com"
          iconSrc = "/assets/icons/email.svg"
          iconAlt = "email"
        />

        <CustomFormField 
          fieldType = {FormFieldType.PHONE_INPUT}
          control = {form.control}
          name = "phone"
          label = "Phone Number"
          placeholder = "12-34-56-78-90"
  
        />

      <SubmitButoon isLoading = {isLoading}> Get Started</SubmitButoon>
    </form>
  </Form>
  )
}


export default PatientForm
