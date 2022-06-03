import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import wait from "wait";

export default function SignUp() {
  useEffect(() => {
    document.body.classList.add("login__form");
    document.body.classList.remove("steps");
    document.body.classList.remove("home__page");
    document.body.classList.remove("rest__pages");
    document.body.classList.remove("cart__page");
    document.body.classList.remove("checkout__page");
    document.body.classList.remove("progress__page");
    document.body.classList.remove("profile__pages");
  });
  const validationSchema = Yup.object().shape({
    user_name: Yup.string().max(15).required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email Id is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirm_password: Yup.string()
      .required("Confirm password is required")
      .min(6, "Confirm password must be at least 6 characters")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const router = useRouter();
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    var form_data = new FormData();
    for (var key in data) {
      form_data.append(key, data[key]);
    }
    var config = {
      method: "POST",
      url: `${process.env.baseApiUrl}/api/sign-up`,
      data: form_data,
    };
    axios(config)
      .then(async function (response) {
        if (response.data.success === true) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userName", response.data.data.name);
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          await wait(1000);
          router.push("/");
        } else {
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((error) => {
        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <React.Fragment>
        <div className="user__form">
          <div className="form__title">
            <Link href="/">
              <a>
                <div className="site__logo">
                  <Image
                    src="/images/logo.svg"
                    alt="logo"
                    layout="fill"
                    quality={100}
                  />
                </div>
              </a>
            </Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form--item">
              <label className="form--label" htmlFor="username">
                Username
              </label>
              <input
                className={`form--control ${
                  errors.user_name ? "is-invalid" : ""
                }`}
                type="text"
                id="username"
                {...register("user_name")}
              />
              <div className="invalid-feedback danger">
                {errors.user_name?.message}
              </div>
              <span className="form--icon">
                <Image
                  src="/images/user-icon-red.svg"
                  alt="form icon"
                  layout="fill"
                  quality={100}
                />
              </span>
            </div>
            <div className="form--item">
              <label className="form--label" htmlFor="email">
                Email
              </label>
              <input
                className={`form--control ${errors.email ? "is-invalid" : ""}`}
                type="email"
                id="email"
                {...register("email")}
              />
              <div className="invalid-feedback danger">
                {errors.email?.message}
              </div>
              <span className="form--icon">
                <Image
                  src="/images/envelope-icon-red.svg"
                  alt="form icon"
                  layout="fill"
                  quality={100}
                />
              </span>
            </div>
            <div className="form--item">
              <label className="form--label" htmlFor="pwd">
                Password
              </label>
              <input
                className={`form--control ${
                  errors.password ? "is-invalid" : ""
                }`}
                type="password"
                id="pwd"
                {...register("password")}
              />
              <div className="invalid-feedback danger">
                {errors.password?.message}
              </div>
              <span className="form--icon">
                <Image
                  src="/images/key-icon-red.svg"
                  alt="form icon"
                  layout="fill"
                  quality={100}
                />
              </span>
            </div>
            <div className="form--item">
              <label className="form--label" htmlFor="cnfpwd">
                Confirm Password
              </label>
              <input
                className={`form--control ${
                  errors.confirm_password ? "is-invalid" : ""
                }`}
                type="password"
                id="cnfpwd"
                {...register("confirm_password")}
              />
              <div className="invalid-feedback danger">
                {errors.confirm_password?.message}
              </div>
              <span className="form--icon">
                <Image
                  src="/images/key-icon-red.svg"
                  alt="form icon"
                  layout="fill"
                  quality={100}
                />
              </span>
            </div>
            <div className="form--actions">
              <button className="btn btnBlack" type="submit">
                Signup
              </button>
            </div>
            <div className="form--link--desc">
              <p>
                Already have an account?{" "}
                <Link href="/login">
                  <a>Sign in</a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </React.Fragment>
    </>
  );
}
