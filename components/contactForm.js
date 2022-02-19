import axios from "axios";
import { useRef } from "react";
/**
 * Простая html форма.
 * При submit, собираются все дочерние элементы формы, кроме кнопки, забираются из них значения и записываются в массив.
 * Так же есть кастомный чекбокс в виде кнопки. Форма почти как на сайте: https://sixhands.co/
 */
export default function ContactForm() {
  const btnRef = useRef();
  const onSubmit = async e => {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    let config = {
      method: "post",
      url: `/api/mail`,
      headers: {
        "Content-Type": "application/json"
      },
      data: formData
    };

    btnRef.current.innerHTML = "Отправка...";
    btnRef.current.classList.add("loading");
    try {
      const response = await axios(config);

      if (response.status === 200) {
        btnRef.current.innerHTML = "Успешно отправлено";
        btnRef.current.classList.remove("loading");
        btnRef.current.classList.add("success");

        setTimeout(() => {
          btnRef.current.innerHTML = "Отправить";
          btnRef.current.classList.remove("success");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      btnRef.current.innerHTML = "Ошибка при отправке";
      btnRef.current.classList.remove("loading");
      btnRef.current.classList.add("error");
      setTimeout(() => {
        btnRef.current.innerHTML = "Отправить";
        btnRef.current.classList.remove("error");
      }, 3000);
    }

    e.target.reset();
  };
  return (
    <div className="contact-form">
      <div className="container contact-form__container">
        <form onSubmit={e => onSubmit(e)} className="contact-form__form">
          <div className="contact-form__title">О Вас</div>
          <div className="contact-form__fields">
            <input maxLength={20} name="name" className="contact-form__input" placeholder="Имя" type="text" />
            <input maxLength={20} name="phone" className="contact-form__input" placeholder="Телефон" type="text" />
            <input maxLength={30} name="email" className="contact-form__input" placeholder="Email" type="email" />
            <textarea
              maxLength={600}
              name="description"
              className="contact-form__textarea"
              placeholder="Расскажите о вашем проекте"></textarea>
          </div>
          <div className="contact-form__title">Планируемый бюджет</div>
          <div className="contact-form__fields">
            <input
              maxLength={20}
              name="expectedMoney"
              className="contact-form__input mr-0"
              placeholder="Планируемый бюджет"
              type="text"
            />
          </div>
          <button ref={btnRef} className="ui-btn contact-form__submit-btn" type="submit">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
