import CheckboxButton from "../ui/checkbox/checkboxButton";
/**
 * Простая html форма. 
 * При submit, собираются все дочерние элементы формы, кроме кнопки, забираются из них значения и записываются в массив. 
 * Так же есть кастомный чекбокс в виде кнопки. Форма почти как на сайте: https://sixhands.co/
 */
export default function ContactForm() {
  const onSubmit = e => {
    e.preventDefault();

    let data = [];
    let form = e.target;
    for (let i = 0; i < form.elements.length; i++) {
      let e = form.elements[i];

      if (e.type !== "submit") {
        if (e.name !== "expectedMoney") {
          data.push({
            name: e.name,
            value: e.value
          });
        } else if (e.name === "expectedMoney" && e.checked) {
          data.push({
            name: e.name,
            value: e.value
          });
        }
      }
    }
    console.log(data);
  };
  return (
    <div className="contact-form">
      <div className="container contact-form__container">
        <form onSubmit={e => onSubmit(e)} className="contact-form__form">
          <div className="contact-form__title">О Вас</div>
          <div className="contact-form__fields">
            <input name="name" className="contact-form__input" placeholder="Имя" type="text" />
            <input name="phone" className="contact-form__input" placeholder="Телефон" type="text" />
            <input name="email" className="contact-form__input" placeholder="Email" type="email" />
            <textarea
              name="about"
              className="contact-form__textarea"
              placeholder="Расскажите о вашем проекте"></textarea>
          </div>
          <div className="contact-form__title">Планируемый бюджет</div>
          <div className="contact-form__checkboxes">
            <CheckboxButton
              customClass="contact-form__checkbox"
              type="radio"
              name="expectedMoney"
              value="100 000 — 500 000 ₽"
              labelName="100 000 — 500 000 ₽"
            />
            <CheckboxButton
              customClass="contact-form__checkbox"
              type="radio"
              name="expectedMoney"
              value="100 000 — 500 000 ₽"
              labelName="100 000 — 500 000 ₽"
            />
            <CheckboxButton
              customClass="contact-form__checkbox"
              type="radio"
              name="expectedMoney"
              value="500 000 — 1 000 000 ₽"
              labelName="500 000 — 1 000 000 ₽"
            />
            <CheckboxButton
              customClass="contact-form__checkbox"
              type="radio"
              name="expectedMoney"
              value="1 000 000 — 3 000 000 ₽"
              labelName="1 000 000 — 3 000 000 ₽"
            />
            <CheckboxButton
              customClass="contact-form__checkbox"
              type="radio"
              name="expectedMoney"
              value="3 000 000 — ......  ₽"
              labelName="3 000 000 — ......  ₽"
            />
            <CheckboxButton
              customClass="contact-form__checkbox"
              type="radio"
              name="expectedMoney"
              value="Хочу проконсультироваться"
              labelName="Хочу проконсультироваться"
            />
          </div>
          <button className="ui-btn contact-form__submit-btn" type="submit">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
