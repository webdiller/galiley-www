import { v4 as uuidv4 } from "uuid";

/**
 * @param {string} labelName - Заголовок
 */
export default function CheckboxButton({ customClass, name="name", type="checkbox", labelName = "labelName", value = 0 } = {}) {
  const id = uuidv4();
  return (
    <div className={customClass ? `checkbox-button ${customClass}` : "checkbox-button"}>
      <input name={name} value={value} type={type} id={id} />
      <label className="ui-btn ui-btn_small ui-btn_animated" htmlFor={id}>
        {labelName}
      </label>
    </div>
  );
}