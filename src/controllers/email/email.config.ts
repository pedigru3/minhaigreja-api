export const emailRefugio = (username: string) => `
<html>
<head>
  <title>Bem-Vindo ao Refúgio Universitário</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">

  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <tr>
      <td>
        <h1 style="color: #333; font-size: 24px;">Bem-Vindo ao Refúgio Universitário!</h1>
        <img src="https://www.refugiouniversitario.com.br/_next/image?url=%2Frefugio-universitario.png&w=1200&q=75" alt="Refúgio Universitário" style="display: block; margin: 0 auto 20px; max-width:100%; margin-bottom: 30px;">
        <p style="color: #555; font-size: 18px; line-height: 1.3">${username},</p>
        <p style="color: #555; font-size: 18px; line-height: 1.3;">É com grande alegria que damos as boas-vindas ao <strong> Refúgio Universitário </strong>, um lugar de estudo compartilhado projetado para inspirar e facilitar o seu percurso acadêmico.</p>
        <p style="color: #555; font-size: 18px; line-height: 1.3">Aqui, você terá acesso a um ambiente propício para o <strong> aprendizado, colaboração e crescimento acadêmico </strong>. Estamos comprometidos em fornecer recursos de alta qualidade para apoiar seus estudos.</p>
        <p style="color: #555; font-size: 18px; line-height: 1.3">Pronto para começar sua jornada de aprendizado? Clique no botão abaixo para acessar o Refúgio Universitário agora mesmo!</p>
        <p style="width: 100%; margin: auto;"><a href="[Link de Acesso]" style="display: block; padding: 15px 30px; margin: 20px auto; background-color: #A046F5; color: #fff; text-decoration: none; text-align: center; border-radius: 5px; font-size: 18px;">Acessar o Refúgio Universitário</a></p>
        <p style="color: #555; font-size: 18px; line-height: 1.3">Estamos animados para fazer parte da sua jornada educacional e ansiosos para ver seus sucessos no Refúgio Universitário.</p>
        <p style="color: #555; font-size: 18px; line-height: 1.3">Se precisar de qualquer assistência ou tiver alguma dúvida, não hesite em entrar em contato conosco. Boa sorte em seus estudos!</p>
        <p style="color: #555; font-size: 18px; line-height: 1.3">Atenciosamente,<br>Felipe Ferreira</p>
      </td>
    </tr>
  </table>

</body>
</html>
`;
