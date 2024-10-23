
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }

    alert('Formulaire soumis avec succès !');
    this.reset();
});
