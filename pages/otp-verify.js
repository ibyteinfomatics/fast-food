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
import OtpInput from "react-otp-input";
import ClipLoader from "react-spinners/ClipLoader";

export default function ForgotPassword() {
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
  const [otp, SetOtp] = useState();
  const [isEmailAndOtpTrue, setIsEmailAndOtpTrue] = useState(false);
  const [email, userEmail] = useState();
  const { register, handleSubmit, formState } = useForm();
  const router = useRouter();
  const { errors } = formState;
  const [loading ,setLoading] = useState(false)
  const [verifyLoading, setVerifyLoading] = useState(false)
  const resend = async (data) => {
    // console.log(data)
    setLoading(true)
    var config = {
      method: "POST",
      url: `${process.env.baseApiUrl}/api/forgot-password`,
      data: {email: email},
    };
    axios(config)
      .then(async function (response) {
        
        if (response.data.success === true) {
          // localStorage.setItem("email", response.data.email);
          
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000
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
  const verifyPwdOtp = async (event) => {
    setVerifyLoading(true)
    event.preventDefault();
    await setIsEmailAndOtpTrue(true);
    const data = {
      email: email,
      otp: otp,
    };
    var config = {
      method: "POST",
      url: `${process.env.baseApiUrl}/api/verify-otp`,
      data: data,
    };
    axios(config)
      .then(async function (response) {
        if (response.data.success === true) {
          localStorage.setItem("email", email);
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000
          });
          await wait(2000);
          setVerifyLoading(false)
          router.push("/reset-password");
        } else {
          setVerifyLoading(false)
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((error) => {
        setVerifyLoading(false)
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
          <form onSubmit={(event) => verifyPwdOtp(event)} className="OTP--form">
            <div className="form--item">
              <label className="form--label" htmlFor="otp">
                OTP
              </label>
              
              <div>
                <OtpInput
                  value={otp}
                  onChange={(otp) => SetOtp(otp)}
                  numInputs={4}
                  separator={<span>-</span>}
                />
              </div>
              <input value={email} type="hidden" {...register("email")} />
              {/* <span className="form--icon">
                <Image
                  src="/images/key-icon-red.svg"
                  alt="form icon"
                  layout="fill"
                  quality={100}
                />
              </span> */}
            </div>
            {!loading && 
            <div
              className="form--link--desc"
              style={{ marginBottom: "1.5rem" }}
            >
              <p>
                <Link href="">
                  <a onClick={()=> resend()}>Resend OTP</a>
                </Link>
              </p>
            </div>
            }
            {loading &&
                    <>
                        <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>
                            <ClipLoader color='red' loading={loading} size={30} />
                        </div>
                    </>
                }
            {!verifyLoading && 
            <div className="form--actions">
            
              <button className="btn btnBlack" type="submit">
                Verify OTP
              </button>
            </div>
            }
            {verifyLoading &&
            <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>
                            <ClipLoader color='red' loading={verifyLoading} size={40} />
                        </div>
            }

            
          </form>
        </div>
      </>
    </React.Fragment>
  );
}
