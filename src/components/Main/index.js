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

          <div class='Line' id='experience'></div>

          <section class='Content experience'>
            <h1 class='Title experience'>
              EXPERIÊNCIA
            </h1>

            <section class='ExperienceContent'>
              <section class='ExperienceTitle'>
                <div class='ExperienceJob'>Projeto de APC</div>
                <div class='ExperienceDate'>Julho 2021 - Novembro 2021</div>
              </section>
              <div class='ExperiencePlace'>Projeto de APC</div>
              <div class='ExperienceDescription'>
                Projeto sobre manipulação de dados e geração de gráficos sobre as Olimpíadas
                utilizando Python com Plotly, Dash e Pandas. 
                <a href="https://github.com/orgs/UNB-APC/repositories">https://github.com/orgs/UNB-APC/repositories</a>

              </div>

              <div class='ExperienceJob'>API todo list</div>
              <div class='ExperienceDescription'>
                API criada para cadastrar  diferentes licenças usuários como Premium ou Comum, adicionar 'to do' e marcar 'to do' como feito.
                <a href="https://github.com/typejulio/desafio1-nodejs-todoslist">https://github.com/typejulio/desafio1-nodejs-todoslist</a>

              </div>


              <div class='ExperiencePlace'>Camara dos Deputados</div>
              <div class='ExperienceDate'>Janeiro 2018 - Dezembro 2020</div>
              <div class='ExperienceDescription'>
                Atuei como jovem aprendiz na area administrativa do Pró-saúde, onde atualizava cadastros de planos de saude
                de deputados e seus dependentes
              </div>

              <section class='ExperienceTitle others'>
                <div class='ExperienceJob'>Assessor de Projetos</div>
                <div class='ExperienceDate'>Janeiro 2021 - Atualmente</div>
              </section>
              <div class='ExperiencePlace'>Orc’estra Gamificação</div>
              <div class='ExperienceDescription'>
                Como assesor de projetos, participo diretamente na gerencia dos projetos da Orc'estra,
                na capacitação dos membros em tecnologias e na organização do processo trainee.
              </div>
            </section>

          </section>

          <div class='Line' id='socialMedia'></div>

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

              <a href='https://twitter.com/nai104' class='SocialCard'>
                <img src="assets/twitterIcon.png" alt="Linkedin" class='Icon' />
                <div class='SocialName'>@julio_dourado</div>
              </a>
            </section>
          </section>
        </section>
      </section>
    </>
  )
}