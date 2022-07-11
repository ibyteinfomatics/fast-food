import React, { useEffect, useState } from "react";
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
import ClipLoader from "react-spinners/ClipLoader";

export default function ForgotPassword() {
  const [email, userEmail] = useState();
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email != null) {
      userEmail(email);
    }
    document.body.classList.add("login__form");
    document.body.classList.remove("steps");
    document.body.classList.remove("home__page");
    document.body.classList.remove("cart__page");
    document.body.classList.remove("rest__pages");
    document.body.classList.remove("cart__page");
    document.body.classList.remove("checkout__page");
  });
  const validationSchema = Yup.object().shape({
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
    setLoading(true)
    data['email'] = email 
    // console.log(data );
    var form_data = new FormData();
    for (var key in data) {
      form_data.append(key, data[key]);
    }
    var config = {
      method: "POST",
      url: `${process.env.baseApiUrl}/api/reset-password`,
      data: form_data,
    };
    axios(config)
      .then(async function (response) {
        if (response.data.success === true) {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          await wait(2000);
          const previousUrl = localStorage.getItem("url")
          router.push(previousUrl);
          setLoading(false)
        } else {
          setLoading(false)
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((error) => {
        setLoading(false)
        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <React.Fragment>
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
              <label className="form--label" htmlFor="email">
                Email
              </label>
              <input
                className="form--control"
                type="email"
                id="email"
                name="email"
                value={email}
                {...register("email")}
                readOnly
              />
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
            {!loading &&
            <div className="form--actions">
              <button className="btn btnBlack" type="submit">
                Submit
              </button>
            </div>
}
            {loading &&
                    <>
                        <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>
                            <ClipLoader color='red' loading={loading} size={40} />
                        </div>
                    </>
                }
          </form>
        </div>
      </>
    </React.Fragment>
  );
}
