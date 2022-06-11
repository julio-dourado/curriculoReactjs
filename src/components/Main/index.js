export default function Main() {
  return (
    <>
      <section class='MainContainer' id='about'>
        <section class='SecondContainer'>
          <section class='Perfil'>
            <img src="https://avatars.githubusercontent.com/u/88950795?s=400&u=e69ed787466a9480ae8917cfede5143e2bf74779&v=4"
              alt="julio linedin" class='Img' />
            <section class='Info'>
              <h1 class='Name'>Júlio César Almeida Dourado
              </h1>
              <div class='CursoAge'>Engenharia de Software - FGA/UNB</div>
              <div class='Email'>juliodourado419@gmail.com</div>
              <div class='CursoAge'>19 anos</div>
            </section>
          </section>

          <section class='Content about'>
            <h1 class='Title about'>
              SOBRE MIM
            </h1>
            <div class='AboutText'>
              Ola, sou Júlio César Alemida Dourado, estudo Engenharia de Software na Universidade de Brasília!
              Sou apaixonado por aprender e compartilhar novos conhecimentos!
            </div>
            <div class='AboutText second'>
              Atualmente, faço parte de um preparatório Trainee na Orc’estra
              Gamificação, Empresa Júnior de Engenharia de Software da UnB, e estudo Nodejs pela Rocketseat.
            </div>
          </section>

          <section class='Content socialMedia'>
            <h1 class='Title'>
              Redes Sociais
            </h1>
            <section class='SocialMedia'>
              <a href='https://www.linkedin.com/in/julio-cesar-almeida-dourado/' class='SocialCard'>
                <img src="./assets/linkedinIcon.png" alt="Linkedin" class='Icon' />
                <div class='SocialName'>julio dourado</div>
              </a>

              <a href='https://github.com/typejulio' class='SocialCard'>
                <img src="assets/githubIcon.png" alt="Linkedin" class='Icon' />
                <div class='SocialName'>@Sjuju</div>
              </a>

              <a href='https://www.instagram.com/juliorx_/' class='SocialCard'>
                <img src="assets/instagramIcon.png" alt="Linkedin" class='Icon' />
                <div class='SocialName'>@juliorx_</div>
              </a>
            </section>
          </section>
        </section>
      </section>
    </>
  )
}