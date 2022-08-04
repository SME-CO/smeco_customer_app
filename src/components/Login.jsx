import React from 'react'

const login = () => {
  return (
    <div>login</div>
  )
}

export default login


// import { useRouter } from "next/router";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// import UserService from "../services/UserService";

// function Login() {
//    const router = useRouter();

//    const [user, setUser] = useState({
//       id: "",
//       username: "",
//       email: "",
//       password: "",
//    });

//    const handleChange = (e) => {
//       const value = e.target.value;
//       setUser({ ...user, [e.target.name]: value });
//    };

//    const validationSchema = yup.object().shape({
//       username: yup.string().required("Username is required"),
//       email: yup
//          .string()
//          .required("Email is required")
//          .email("Email is invalid"),
//       password: yup
//          .string()
//          .required("Password is required")
//          .matches(
//             /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
//             "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
//          ),
//       confirmPassword: yup
//          .string()
//          .oneOf([yup.ref("password"), null], "Passwords must match")
//          .required("Confirm password is required"),
//    });

//    const formOptions = { resolver: yupResolver(validationSchema) };

//    const { register, handleSubmit, reset, formState } = useForm(formOptions);
//    const { errors } = formState;

//    const onSubmit = (e) => {
//       const userData = { ...user, role: "nomad" };
//       console.log(userData);
//       // UserService.addUser(userData).then((res) => {
//       //   console.log(res);
//       //   router.push("/login");
//       // })
//       // .catch((err) => {
//       //   console.log(err);
//       // });
//    };

//    return (
//       <div>
//          <form
//             className="w-5/6 sm:w-2/3 mx-auto text-center"
//             onSubmit={handleSubmit(onSubmit)}
//          >
//             <div className="">
//                <h2 className="text-3xl font-bold text-[#055E70] lg:text-left text-center">
//                   Sign up
//                </h2>
//                <p className="sm:hidden place-content-center mt-10 font-normal text-sm">
//                   if you already have an account
//                </p>
//                <p className="sm:hidden font-normal text-sm">
//                   you can{" "}
//                   <a
//                      onClick={() => router.push("/signin")}
//                      className="text-[#4D47C3] link font-semibold"
//                   >
//                      Sign in here!
//                   </a>
//                </p>
//             </div>
//             <div className="mt-8">
//                <div className="my-6">
//                   <div className="">
//                      <div className="">
//                         <input
//                            type="text"
//                            name="email"
//                            {...register("email")}
//                            value={user.email}
//                            onChange={(e) => handleChange(e)}
//                            className="w-full bg-[#059AB7] bg-opacity-10 px-4 py-3 outline-none transition-colors duration-150 ease-in-out rounded-lg border-none"
//                            placeholder="Enter your email"
//                         />
//                         {/* invalid message */}
//                         <div>
//                            <p className="text-red-500 text-xs italic text-left">
//                               {errors.email?.message}
//                            </p>
//                         </div>
//                      </div>
//                   </div>
//                </div>

//                <div className="my-6">
//                   <div className="">
//                      <div className="">
//                         <input
//                            type="text"
//                            name="username"
//                            {...register("username")}
//                            value={user.username}
//                            onChange={(e) => handleChange(e)}
//                            className="w-full bg-[#059AB7] bg-opacity-10 px-4 py-3 outline-none transition-colors duration-150 ease-in-out rounded-lg border-none"
//                            placeholder="Create a username"
//                         />

//                         {/* invalid message */}
//                         <div>
//                            <p className="text-red-500 text-xs italic text-left">
//                               {errors.username?.message}
//                            </p>
//                         </div>
//                      </div>
//                   </div>
//                </div>

//                <div className="my-6">
//                   <div className="">
//                      <div className="">
//                         <input
//                            type="password"
//                            name="password"
//                            {...register("password")}
//                            onChange={(e) => handleChange(e)}
//                            value={user.password}
//                            className="w-full bg-[#059AB7] bg-opacity-10 px-4 py-3 outline-none transition-colors duration-150 ease-in-out rounded-lg border-none"
//                            placeholder="Enter password"
//                         />
//                         {/* invalid message */}
//                         <div>
//                            <p className="text-red-500 text-xs italic text-left">
//                               {errors.password?.message}
//                            </p>
//                         </div>
//                      </div>
//                   </div>
//                </div>

//                <div className="my-6">
//                   <div className="">
//                      <div className="">
//                         <input
//                            type="password"
//                            name="confirmPassword"
//                            {...register("confirmPassword")}
//                            className="w-full bg-[#059AB7] bg-opacity-10 px-4 py-3 outline-none transition-colors duration-150 ease-in-out rounded-lg border-none"
//                            placeholder="Confirm password"
//                         />
//                         {/* invalid message */}
//                         <div>
//                            <p className="text-red-500 text-xs italic text-left">
//                               {errors.confirmPassword?.message}
//                            </p>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//                <div className="my-2">
//                   <p className="text-left">
//                      <button
//                         type="button"
//                         onClick={() => reset()}
//                         className="text-[#059AB7] text-sm italic link px-1"
//                      >
//                         Reset
//                      </button>
//                   </p>
//                </div>

//                <div className="my-6">
//                   <button className="inline-block button w-full" type="submit">
//                      Sign up
//                   </button>
//                </div>
//                <div className="mt-4">
//                   <p className="text-gray-800 text-center">Or continue with</p>
//                   <div className="mt-2 flex text-2xl justify-center gap-2">
//                      <a onClick={() => router.push("/")}>
//                         <img
//                            src="icons8-facebook-50.png"
//                            alt="facebook"
//                            className="w-8 h-8 cursor-pointer"
//                         />
//                      </a>
//                      <a onClick={() => router.push("/")}>
//                         <img
//                            src="icons8-google-50.png"
//                            alt="google"
//                            className="w-8 h-8 cursor-pointer"
//                         />
//                      </a>
//                   </div>
//                </div>
//             </div>
//          </form>
//       </div>
//    );
// }

// export default Login;
