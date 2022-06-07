import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ForgotPassword() {
  useEffect(() => {
    document.body.classList.add('login__form');
    document.body.classList.remove('steps');
    document.body.classList.remove('home__page');
    document.body.classList.remove('cart__page');
    document.body.classList.remove('rest__pages');
    document.body.classList.remove('cart__page');
    document.body.classList.remove('checkout__page');
  });
  return (
    <React.Fragment>
      <>
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
          <form>
            <div className="form--item">
              <label className="form--label" htmlFor="otp">
                OTP
              </label>
              <input
                className="form--control"
                type="password"
                id="otp"
              />
              <span className="form--icon">
                <Image
                  src="/images/key-icon-red.svg"
                  alt="form icon"
                  layout="fill"
                  quality={100}
                />
              </span>
            </div>
            <div className="form--link--desc" style={{marginBottom: "1.5rem"}}>
              <p>
                <Link href="javascript:void(0)">
                  <a>Resend OTP</a>
                </Link>
              </p>
            </div>
            <div className="form--actions">
              <button className="btn btnBlack" type="submit">
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </>
    </React.Fragment>
  );
}
