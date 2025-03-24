// 'use client';

import SignUpFeild from "./SignUpFields";

export default function SignUpForm({
  handleSignUp,
}: {
  handleSignUp: (signUpFormData: FormData) => void;
}) {
  // const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const result = Object.fromEntries(formData.entries());
  //   console.log(result);
  //   handleSignUp(formData);
  // };
  return (
    <section>
      <form action={handleSignUp}>
        {/* <form onSubmit={handleOnSubmit}> */}
        <SignUpFeild />
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
}
