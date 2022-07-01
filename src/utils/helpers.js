export const validateInput = Obj => {
  if (Obj.name?.length > 5) {
    Obj.isNameValid = true;
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Obj.email)) {
    Obj.isEmailValid = true;
  }
  if (Obj.password !== '' && Obj.password.length > 8) {
    Obj.isPasswordValid = true;
  }
  return Obj;
};
