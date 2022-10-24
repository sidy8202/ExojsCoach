function onVerifie(cestqui) {
    if (!cestqui) {
      return null;
    }
    return { message: `Salut, ${cestqui}!` };
  }
  console.log(onVerifie()); // Retourne la valeur null
  console.log(onVerifie('Moussa'));  // => { message: 'Salut, Moussa!' }

  