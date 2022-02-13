import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import { Container } from "./styles";

export const Footer = () => {
  const socialItems = [
    {
      icon: <FaLinkedinIn size={20} />,
      href: "https://linkedin.com/in/hbalardin",
    },
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/hbalardin",
    },
    {
      icon: <FaInstagram size={20} />,
      href: "https://instagram.com/_balardin",
    },
    {
      icon: <FaTwitter size={20} />,
      href: "https://twitter.com/hbalardin",
    },
  ];

  return (
    <Container>
      <section>
        <p>
          Desenvolvido por{" "}
          <a href={socialItems[0].href} target="_blank" rel="noreferrer">
            <strong>Henrique Balardin</strong>
          </a>
        </p>
        <p>
          O projeto visa facilitar a aplicação dos conceitos aprendidos na{" "}
          <a
            href="https://sp.oprimorico.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            Mentoria do Mil ao Milhão
          </a>{" "}
          e não tem qualquer fim comercial. Sinta-se livre para{" "}
          <a
            href="https://github.com/hbalardin/wealth-app"
            target="_blank"
            rel="noreferrer"
          >
            contribuir!
          </a>
        </p>
      </section>
      <section>
        <h1>Minhas redes</h1>
        <ul>
          {socialItems.map(({ href, icon }) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noreferrer">
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
};
