import axios from "axios";
/**
 * Простая html форма.
 * При submit, собираются все дочерние элементы формы, кроме кнопки, забираются из них значения и записываются в массив.
 * Так же есть кастомный чекбокс в виде кнопки. Форма почти как на сайте: https://sixhands.co/
 */
export default function ContactForm() {
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

    try {
      const response = await axios(config);
      if (response.status === 200) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
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
              name="description"
              className="contact-form__textarea"
              placeholder="Расскажите о вашем проекте"></textarea>
          </div>
          <div className="contact-form__title">Планируемый бюджет</div>
          <div className="contact-form__fields">
            <input
              name="expectedMoney"
              className="contact-form__input"
              placeholder="Планируемый бюджет"
              type="text"
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
