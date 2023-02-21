interface user {
  admin: string;
  helper: string;
  moder: string;
}

const appUser: user = {
  admin: "Você é um administrador",
  helper: "Você é um helper",
  moder: "Você é um moderador",
};

const validateUser = (user: string) => {
  console.log(appUser[user as keyof typeof appUser]);
};

const usuario = "admin";

validateUser(usuario);
