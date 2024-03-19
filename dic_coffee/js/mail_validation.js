function emailValidation() {
  const form = document.getElementById("form");
  const emailConfirmField = document.getElementById("email_confirm");
  const element = document.createElement("p");
  const message = document.createTextNode("Eメールが一致しません");
  const contentField = document.getElementById("content_field");

  element.appendChild(message);
  element.setAttribute("id", "alert");
  element.classList.add("alert");

  emailConfirmField.addEventListener("input", () => {
    if (form.email.value !== form.email_confirm.value) {
      contentField.parentNode.insertBefore(element, contentField);
      emailConfirmField.classList.add("alert_bg");
    } else {
      // form.submit();
      emailConfirmField.classList.remove("alert_bg");
      element.parentNode.removeChild(element);
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.alert(`Successfully submitted\nMessage: ${form.content.value}`);
    window.location.reload();
  });
}

window.onload = emailValidation;
