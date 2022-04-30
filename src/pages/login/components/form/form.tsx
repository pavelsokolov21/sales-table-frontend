import { useFormik } from "formik";
import { FC } from "react";
import { Buttons } from "../../../../components/buttons";
import { Inputs } from "../../../../components/inputs";
import { withLabel } from "../../../../hocs/withLabel";

const Login = withLabel(Inputs.Input, { label: "Login" });
const Password = withLabel(Inputs.Input, { label: "Password" });

export const Form: FC = () => {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Login
        placeholder="Login"
        name="login"
        onChange={formik.handleChange}
        value={formik.values.login}
      />
      <Password
        placeholder="Password"
        type="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Buttons.Primary type="submit">Login</Buttons.Primary>
    </form>
  );
};
