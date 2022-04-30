import { useFormik } from "formik";
import { FC } from "react";

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
      <label>
        <input
          type="text"
          name="login"
          onChange={formik.handleChange}
          value={formik.values.login}
        />
      </label>
      <label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </label>
    </form>
  );
};
