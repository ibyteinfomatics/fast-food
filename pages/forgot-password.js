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
  useEffect(() => {
    document.body.classList.add("login__form");
    document.body.classList.remove("steps");
    document.body.classList.remove("home__page");
    document.body.classList.remove("cart__page");
    document.body.classList.remove("rest__pages");
    document.body.classList.remove("cart__page");
    document.body.classList.remove("checkout__page");
  });
  const [loading, setLoading] = useState(false)
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email Id is invalid"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const router = useRouter();
  const { errors } = formState;
  const onSubmit = async (data) => {
    console.log(data)
    setLoading(true)
    var form_data = new FormData();
    for (var key in data) {
      form_data.append(key, data[key]);
    }
    var config = {
      method: "POST",
      url: `${process.env.baseApiUrl}/api/forgot-password`,
      data: form_data,
    };
    axios(config)
      .then(async function (response) {
        
        if (response.data.success === true) {
          localStorage.setItem("email", response.data.email);
          
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          await wait(2000);
          setLoading(false)
          router.push("/otp-verify");
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
                            <ClipLoader color='red' loading={loading} size={60} />
                        </div>
                    </>
                }
          </form>
        </div>
      </>
    </React.Fragment>
  );
}
