import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    email: "",
    name: "",
    surname: "",
    password: "",
    confirmPassword: "",
    emailValid: false,
    passwordValid: false,
    confirmPasswordValid: false,
    emailTouched: false,
    passwordTouched: false,
    confirmPasswordTouched: false,
    isLoading: false,
    isSuccess: false,
    isError: false,
    nameValid: false,
    surnameValid: false,
    nameTouched: false,
    surnameTouched: false,
  }),
  getters: {
    isEmailValid: (state) => {
      const commonEmailDomains = ["gmail.com", "outlook.com", "yahoo.com"];
      const emailDomain = state.email.split("@")[1];
      return commonEmailDomains.includes(emailDomain);
    },
    getIsLoading: (state) => state.isLoading,
  },
  actions: {
    setEmail(email) {
      this.email = email;
      this.emailValid = this.validateEmail(email);
    },
    setName(name) {
      this.name = name;
      this.nameValid = this.validateName(name);
    },
    setSurname(surname) {
      this.surname = surname;
      this.surnameValid = this.validateSurname(surname);
    },
    validateName(name) {
      return name.length > 1;
    },
    validateSurname(surname) {
      return surname.length > 1;
    },
    touchName() {
      this.nameTouched = true;
    },
    touchSurname() {
      this.surnameTouched = true;
    },
    setPassword(password) {
      this.password = password;
      this.passwordValid = this.validatePassword(password);
    },
    setConfirmPassword(confirmPassword) {
      this.confirmPassword = confirmPassword;
      this.confirmPasswordValid = this.password === confirmPassword;
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    validatePassword(password) {
      const criteria = {
        hasUpperCase: /[A-Z]/.test(password),
        hasLowerCase: /[a-z]/.test(password),
        hasNumber: /\d/.test(password),
        hasMinLength: password.length >= 8,
      };
      return Object.values(criteria).every(Boolean);
    },
    getPasswordCriteria(password) {
      return {
        hasUpperCase: /[A-Z]/.test(password),
        hasLowerCase: /[a-z]/.test(password),
        hasNumber: /\d/.test(password),
        hasMinLength: password.length >= 8,
      };
    },
    touchEmail() {
      this.emailTouched = true;
    },
    touchPassword() {
      this.passwordTouched = true;
    },
    touchConfirmPassword() {
      this.confirmPasswordTouched = true;
    },
    setIsLoading(){
        console.log("set is loading called")
    this.isLoading = true

    },
    async submitForm() {
      this.isLoading = true;
      this.isSuccess = false;
      this.isError = false;
      console.log("state of loading", this.isLoading);
      setTimeout(async () => {
        try {
          // Check validation
          if (
            this.emailValid &&
            this.passwordValid &&
            this.confirmPasswordValid
          ) {
            this.isSuccess = true;
            alert("Successfully registered");
          } else {
            throw new Error("Validation failed");
          }
        } catch (error) {
          this.isError = true;
          alert("Error during registration");
        } 
        console.log("state of loading", this.isLoading);
      }, 2000);
      console.log("yeshi")

    },
  },
});
