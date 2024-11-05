import React, { useEffect, useState } from "react";
import LoginBackGround from "../Components/LoginBackGround/LoginBackGround";
import LoginForm from "../Components/LoginForm/LoginForm";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function Login() {
  const userData = useSelector((state) => state.GlobalState.data);

  useEffect(() => {
    Swal.fire({
      title: "Attention!",
      html: `
          This website does not support phone (small screen view), please view <strong>only in desktop</strong> (big screens)<br><br>
          If you don't wish to create a new account you may login with existing account<br>
          <strong>Email: a@gmail.com</strong><br>
          <strong>Password: pass</strong><br><br>
          If you are using a small screen laptop, please reduce the size of the <strong>screen to 67%</strong> or below<br><br>
          Since I am using a free service login/Register (any first service) may take <strong>up to 2 mins</strong> to complete<br><br>
          Thank you :)
      `,
      icon: "info",
      confirmButtonText: "Okay",
    });
  }, []);

  return (
    <>
      <LoginBackGround refresh={`hjbd56ve67evfh`} />

      <div
        style={{
          position: "absolute",
          zIndex: 1,
          width: "50%",
          height: "100vh",
          // backgroundColor: "black",
        }}
      >
        <LoginForm />
      </div>
    </>
  );
}
