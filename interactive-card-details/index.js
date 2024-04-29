(() => {
  // render on load
  render();

  const elements = document.getElementsByTagName("input");
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("keyup", () => {
      render();
    });
  }

  // submission event
  document.getElementById("submit").addEventListener("click", () => {
    render();
    // validate form
    if (formValidate()) {
      document.getElementById("body").style.display = "none";
      document.getElementById("complete").style.display = "block";
    }
  });

  /* Renders the card images */
  function render() {
    /* Render card image from form input */
    document.getElementById("render_name").innerHTML =
      document.getElementById("input_name").value;
    document.getElementById("render_number").innerHTML =
      document.getElementById("input_number").value;
    document.getElementById("render_year").innerHTML =
      document.getElementById("input_year").value;
    document.getElementById("render_month").innerHTML =
      document.getElementById("input_month").value;
    document.getElementById("render_cvc").innerHTML =
      document.getElementById("input_cvc").value;

    /* Display month/year seperator */
    if (
      document.getElementById("input_year").value &&
      document.getElementById("input_month").value
    ) {
      document.getElementById("render_month").innerHTML =
        document.getElementById("render_month").innerHTML + "/";
    }
  }

  function formValidate() {
    let validate = true;

    // Reset prior validation errors
    const errors = document.getElementsByClassName("error");
    for (let i = 0; i < errors.length; i++) {
      errors[i].style.display = "none";
    }
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < errors.length; i++) {
      inputs[i].style.border = "1px solid #c1c1c3";
    }

    // Validate name
    if (
      document.getElementById("input_name").value == "" ||
      document.getElementById("input_name").value.length <= 4
    ) {
      document.getElementById("name_error").style.display = "block";
      document.getElementById("input_name").style.border = "1px solid red";
      validate = false;
    }

    // Validate CC Number
    if (document.getElementById("input_number").value.includes(" ")) {
      // Validate CC Number (with spaces)
      if (document.getElementById("input_number").value.length < 19) {
        document.getElementById("number_error").style.display = "block";
        document.getElementById("input_number").style.border = "1px solid red";
        validate = false;
      }
    } else {
      validate = false;
      document.getElementById("number_error").style.display = "block";
      document.getElementById("input_number").style.border = "1px solid red";
    }

    // Validate month
    if (
      document.getElementById("input_month").value == "" ||
      document.getElementById("input_month").value.length != 2
    ) {
      document.getElementById("exp_month_error").style.display = "block";
      document.getElementById("input_month").style.border = "1px solid red";
      validate = false;
    }
    // Validate year
    if (
      document.getElementById("input_year").value == "" ||
      document.getElementById("input_year").value.length != 2
    ) {
      document.getElementById("exp_year_error").style.display = "block";
      document.getElementById("input_year").style.border = "1px solid red";
      validate = false;
    }

    // Validate cvc
    if (
      document.getElementById("input_cvc").value == "" ||
      document.getElementById("input_cvc").value.length != 3
    ) {
      document.getElementById("cvc_error").style.display = "block";
      document.getElementById("input_cvc").style.border = "1px solid red";
      validate = false;
    }

    if (validate == true) {
      return true;
    } else {
      return false;
    }
  }
})();
