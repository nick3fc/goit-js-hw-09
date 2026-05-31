let formData = { email: '', message: '' };

document.addEventListener('DOMContentLoaded', () => {
  const CheckLocalStorage = localStorage.getItem('feedback-form-state');

  if (CheckLocalStorage === null) {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  } else {
    formData = JSON.parse(CheckLocalStorage);
  }

  const form = document.querySelector('.feedback-form');
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;

  form.addEventListener('input', () => {
    //   write values to formData
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;
    // write values to localStorage
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  form.addEventListener('submit', event => {
    if (form.elements.email.value && form.elements.message.value) {
      event.preventDefault();
      console.log(formData);
      localStorage.removeItem('feedback-form-state');
      formData = { email: '', message: '' };
      form.reset();
    } else {
      event.preventDefault();
      alert('Fill please all fields');
    }
  });
});
