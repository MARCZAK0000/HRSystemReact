export function validator(statestring: string): string {
  const state: {
    Email: string;
    Password: string;
    ConfirmPassword: string;
    PhoneNumber: string;
  } = JSON.parse(statestring);

  if (
    state.Email.length === 0 ||
    state.Password.length === 0 ||
    state.ConfirmPassword.length === 0 ||
    state.PhoneNumber.length === 0
  ) {
    return `Invalid Form, properties can not be empty`;
  }
  if (state.Password != state.ConfirmPassword) {
    return `Invalid Form, Password: ${state.Password} and confirm Password: ${state.ConfirmPassword} has to be the same`;
  }

  if (
    state.Email.length > 50 ||
    state.Email.length < 8 ||
    !state.Email.includes("@")
  ) {
    return "Invalid Form, Email must be greater than 8 characters or lesser than 50 and have to contains '@'";
  }

  if (state.Password.length < 6 || state.Password.length > 18) {
    return "Invalid Form, Password must be greater than 6 characters or lesser than 18";
  }

  if (state.PhoneNumber.length === 8) {
    return "Invalid Form, Phone number must have 9 characters";
  }

  let countUpperCase: number = 0;

  let countLowerCase: number = 0;

  let countSpecialDigits: number = 0;

  let countDigits: number = 0;

  let countBannedDigits: number = 0;

  for (let index = 0; index < state.Password.length; index++) {
    const specialCharacters: string[] = ["!", "@", "#", "$", "%"];

    const bannedSpecialCharacters: string[] = [
      "^",
      "&",
      "*",
      "(",
      ")",
      "_",
      "-",
      "+",
      "=",
      "[",
      "{",
      "]",
      "}",
      ":",
      ";",
      "<",
      ">",
    ];

    if (specialCharacters.includes(state.Password[index])) {
      countSpecialDigits++;
    }
    if (bannedSpecialCharacters.includes(state.Password[index])) {
      countBannedDigits++;
    }
    if (!isNaN(+state.Password[index])) {
      countDigits++;
    }
    if (state.Password[index] === state.Password[index].toLowerCase()) {
      countLowerCase++;
    }
    if (state.Password[index] === state.Password[index].toUpperCase()) {
      countUpperCase++;
    }
  }

  if (countLowerCase == 0) {
    // invalid form, 0 lowercase characters
    return "Invalid Form, 0 lower case characters in Password";
  }

  if (countUpperCase == 0) {
    // invalid form, 0 upper case characters
    return "Invalid Form, 0 upper case characters in Password";
  }

  if (countDigits == 0) {
    // invalid form, 0 digit characters
    return "Invalid Form, 0 digit characters in Password";
  }

  if (countSpecialDigits == 0) {
    // invalid form, 0 special characters characters
    return "Invalid Form, 0 special characters in Password";
  }
  if (countBannedDigits >= 1) {
    // invalid form, 0 special characters characters
    return "Invalid Form, 1 wrong characters in Password";
  }

  let checkDigits: number = 0;

  for (let index = 0; index < state.PhoneNumber.length; index++) {
    if (!isNaN(+state.PhoneNumber[index])) {
      console.log(state.PhoneNumber[index]);
      checkDigits++;
    }
  }
  if (checkDigits != 9) {
    return "Invalid Form, Phone number must have all digits characters";
  }

  return "";
}
