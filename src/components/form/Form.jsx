import { validationsForm } from './validationsForm';
import { useForm } from './../../hooks/useForm';
import { Wrapper } from './styles';
import Loader from '../Loader';
import Warning from './../../assets/warning.svg';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

function Form() {
  const {
    form,
    errorForm,
    loading,
    handleBlur,
    handleChange,
    handleSubmit,
    handleFocus,
  } = useForm(initialForm, validationsForm);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div className="input-div ">
          <div>
            <h5>Nombre</h5>
            <input
              type="text"
              name="name"
              value={form.name}
              required
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              autoComplete="off"
            />
            {errorForm.name && (
              <div className="error">
                <span className="error-name">{errorForm.name}</span>
                <img src={Warning} alt="Warning" />
              </div>
            )}
          </div>
        </div>
        <div className="input-div ">
          <div>
            <h5>Email</h5>
            <input
              type="email"
              name="email"
              value={form.email}
              required
              autoComplete="off"
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
            />
            {errorForm.email && (
              <div className="error">
                <span className="error-name">{errorForm.email}</span>
                <img src={Warning} alt="Warning" />
              </div>
            )}
          </div>
        </div>
        <div className="input-div ">
          <div>
            <h5>Asunto</h5>
            <input
              type="text"
              name="message"
              value={form.message}
              required
              autoComplete="off"
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
            />
            {errorForm.message && (
              <div className="error">
                <span className="error-name">{errorForm.message}</span>
                <img src={Warning} alt="Warning" />
              </div>
            )}
          </div>
        </div>
        <button type="submit">{loading ? <Loader /> : 'Enviar'}</button>
      </form>
    </Wrapper>
  );
}

export default Form;
