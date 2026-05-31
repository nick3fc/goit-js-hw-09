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
    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();
    // write values to localStorage
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (form.elements.email.value && form.elements.message.value) {
      console.log(formData);
      localStorage.removeItem('feedback-form-state');
      formData = { email: '', message: '' };
      form.reset();
    } else {
      alert('Fill please all fields');
    }
  });
});
