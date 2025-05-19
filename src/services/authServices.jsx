
const TOKEN_KEY = 'token';
const FAKE_TOKEN = 'faux-token-123456';

export const authService = {
   /*Authentifie un utilisateur en comparant ses identifiants à ceux attendus.
    En cas de succès, stocke un faux token dans le localStorage.*/
  loginUser: async (email, password) => {
    if (email === 'admin@nordsud.com' && password === 'motdepasse123') {
      localStorage.setItem(TOKEN_KEY, FAKE_TOKEN);
      return { success: true };
    } else {
      throw new Error('Identifiants incorrects');
    }
  },

  
  /* Supprime le token de l'utilisateur (déconnexion).*/
  logoutUser: () => {
    localStorage.removeItem(TOKEN_KEY);
  },

   /*Vérifie si l'utilisateur est connecté en contrôlant la présence du token.*/
  isAuthenticated: () => {
    const token = localStorage.getItem(TOKEN_KEY);
    return token === FAKE_TOKEN;
  },

   /*Ici on, récupère le token (utile pour des appels API).*/
  getToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  }
};
