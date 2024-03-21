import { useForm } from "react-cool-form";

import "./styles.css";

const Field = ({ label, id, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
  </div>
);

const Select = ({ label, id, children, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <select id={id} {...rest}>
      {children}
    </select>
  </div>
);

const Textarea = ({ label, id, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <textarea id={id} {...rest} />
  </div>
);

function Formm() {
  const { form } = useForm({
    defaultValues: { firstName: "", lastName: "", framework: "", message: "" },
    onSubmit: (values) => alert(JSON.stringify(values, undefined, 2)),
  });

  return (
    <form ref={form}>
      <Select label="Transaction-type" id="framework" name="framework">
        <option value=""> Credit</option>
        <option value="react">Debit</option>
      </Select>
      <Field
        type="number"
        label="Amount to transfer"
        id="first-name"
        name="firstName"
      />
      <Field type="number" label="Old-Balance" id="" name="lastName" />
      <Field type="number" label="New-Balance" id="" name="lastName" />
      <Field type="number" label="Old Destination" id="" name="lastName" />
      <Field
        type="number"
        label="New balance destination"
        id=""
        name="lastName"
      />
      <input type="submit" />
    </form>
  );
}
export default Formm;
