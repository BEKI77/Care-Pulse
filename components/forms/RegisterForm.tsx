"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { custom, z } from "zod"
import { PatientFormValidation } from "@/lib/validation"
import {Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButoon from "../ui/SubmitButoon"
import { useState } from "react"
import { useRouter } from "next/navigation"



interface RegisterionPropsType{
  userID: string,
}

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "dataPicker",
  SELECT = "select",
  SKELETON = "skeleton", 
}

export const RegisterForm = ({user}:any)=> {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter()
  console.log(user);
  
  const form = useForm<z.infer<typeof PatientFormValidation>>({
    resolver: zodResolver(PatientFormValidation),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      birthDate: undefined,
      gender: undefined,
      address:"",
      occupation:"",
      emergencyContactName:"",
      emergencyContactNumber:"",
      primaryPhysician:"",
      insuranceProvider:"",
      insurancePolicyNumber:"",
      allergies:"",
      currentMedication:"",
      familyMedicalHistory:"",
      pastMedicalHistory:"",
      identificationType:"",
      identificationNumber:"",
      identificationDocument:undefined,
      treatmentConsent:undefined,
      disclosureConsent:undefined,
      privacyConsent:undefined,

    },
  })
 
  async function onSubmit(values: z.infer<typeof PatientFormValidation>) {
    setLoading(true);
   
    try {
     
    } catch (error) {
      if(error){
        // console.error(error);
      }
    }
  }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="space-y-4">
            <h1 className="header">Welcome 👋 </h1>
            <p className="text-dark-700"> Let us know more about yourself</p>
        </section>

        <section className="space-y-4">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal information</h2>
          </div>
        </section>

        <CustomFormField 
          fieldType = {FormFieldType.INPUT}
          control = {form.control}
          name = "name"
          label = "Full name"
          placeholder = "Jhon Doe"
          iconSrc = "/assets/icons/user.svg"
          iconAlt = "user"
        />

        <div className="flex flex-col gap-6 xl:flex-row">
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
        </div>
        <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField 
              fieldType = {FormFieldType.DATE_PICKER}
              control = {form.control}
              name = "birthDate"
              label = "Date of Birth"
              placeholder = ""
            />
            <CustomFormField 
              fieldType = {FormFieldType.SKELETON}
              control = {form.control}
              name = "gender"
              label = "Gender"
            />
        </div>
      <SubmitButoon isLoading = {isLoading}> Submit and continue</SubmitButoon>
    </form>
  </Form>
  )
}


export default RegisterForm
