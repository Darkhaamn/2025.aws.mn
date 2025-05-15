import React, { useState } from 'react';
import { Control, Field, Label, Message, Root, Submit } from "@radix-ui/react-form";

const ApplyForm = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [sent, setSent] = useState<boolean>(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault()

    fetch("https://script.google.com/macros/s/AKfycbxn0tyT76vz54XAvMf6dvc8LpNVOO7rwfyfmo3cHZk3-uvQCbd_kxvF4MLpL4mtZg0m/exec", {
      method: 'POST',
      body: new FormData(e.currentTarget),
    }).then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
      .then(data => {
        console.log(data);
        setSent(true)
      })
      .catch(() => {
      }).finally(() => {
        setLoading(false)
      })
  }
  return (<section className="block">
    <Root className="max-w-xl mx-auto p-10" onSubmit={onSubmit}>
      <h2 className="block antialiased tracking-normal font-sans text-2xl md:text-3xl lg:text-4xl leading-10 mt-6 mb-6 font-extrabold">
        Request to Speak
      </h2>
      <Field className="mb-2.5 grid" name="name">
        <div className="flex items-baseline justify-between">
          <Label className="text-[15px] font-medium leading-[35px] text-white">
            Full name
          </Label>
          <Message
            className="text-[13px] text-white opacity-80"
            match="valueMissing"
          >
            Please enter name
          </Message>
        </div>
        <Control asChild>
          <input
            className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-accent px-2.5 text-[15px] leading-none text-white hover:shadow-[0_0_0_1px_white] shadow-black outline-none selection:text-white shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            type="fullname"
            required
          />
        </Control>
      </Field>
      <Field className="mb-2.5 grid" name="email">
        <div className="flex items-baseline justify-between">
          <Label className="text-[15px] font-medium leading-[35px] text-white">
            Email
          </Label>
          <Message
            className="text-[13px] text-white opacity-80"
            match="valueMissing"
          >
            Please enter email
          </Message>
        </div>
        <Control asChild>
          <input
            className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-accent px-2.5 text-[15px] leading-none text-white hover:shadow-[0_0_0_1px_white] shadow-black outline-none selection:text-white shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            type="email"
            required
          />
        </Control>
      </Field>
      <Field className="mb-2.5 grid" name="phone">
        <div className="flex items-baseline justify-between">
          <Label className="text-[15px] font-medium leading-[35px] text-white">
            Phone
          </Label>
          <Message
            className="text-[13px] text-white opacity-80"
            match="valueMissing"
          >
            Please enter phone
          </Message>
        </div>
        <Control asChild>
          <input
            className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-accent px-2.5 text-[15px] leading-none text-white hover:shadow-[0_0_0_1px_white] shadow-black outline-none selection:text-white shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            type="phone"
            required
          />
        </Control>
      </Field>
      <Field className="mb-2.5 grid" name="company">
        <div className="flex items-baseline justify-between">
          <Label className="text-[15px] font-medium leading-[35px] text-white">
            Company
          </Label>
          <Message
            className="text-[13px] text-white opacity-80"
            match="valueMissing"
          >
            Please enter company name
          </Message>
        </div>
        <Control asChild>
          <input
            className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-accent px-2.5 text-[15px] leading-none text-white hover:shadow-[0_0_0_1px_white] shadow-black outline-none selection:text-white shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            type="company"
            required
          />
        </Control>
      </Field>
      <Field className="mb-2.5 grid" name="position">
        <div className="flex items-baseline justify-between">
          <Label className="text-[15px] font-medium leading-[35px] text-white">
            Position
          </Label>
          <Message
            className="text-[13px] text-white opacity-80"
            match="valueMissing"
          >
            Please enter position
          </Message>
        </div>
        <Control asChild>
          <input
            className="box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded bg-accent px-2.5 text-[15px] leading-none text-white hover:shadow-[0_0_0_1px_white] shadow-black outline-none selection:text-white shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            type="position"
            required
          />
        </Control>
      </Field>
      <Field className="mb-2.5 grid" name="toplic">
        <div className="flex items-baseline justify-between">
          <Label className="text-[15px] font-medium leading-[35px] text-white">
            Topic
          </Label>
          <Message
            className="text-[13px] text-white opacity-80"
            match="valueMissing"
          >
            Please enter a topic
          </Message>
        </div>
        <Control asChild>
          <textarea
            className="box-border inline-flex w-full resize-none appearance-none items-center justify-center rounded bg-accent p-2.5 text-[15px] leading-none text-white hover:shadow-[0_0_0_1px_white] shadow-black outline-none selection:text-white shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            name="topic"
            required
          />
        </Control>
      </Field>

      {sent && (
        <div className="my-4 p-3 rounded-md bg-yellow-50 border border-primary">
          <p className="text-sm font-medium text-primary">
            Your request has been sent successfully!
          </p>
        </div>
      )}

      <Submit asChild hidden={sent}>
        <button
          className="mt-2.5 box-border inline-flex h-[40px] cursor-pointer w-full items-center justify-center rounded bg-primary px-[15px] font-bold leading-none shadow-[0_2px_10px] shadow-black focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none text-white disabled:opacity-75 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </Submit>
    </Root>
  </section>)
}



export default ApplyForm;
