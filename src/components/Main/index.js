export default function Main() {
  return (
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





        <section class='Content experience'>
          <h1 class='Title experience'>
            EXPERIÊNCIA
          </h1>

          <section class='ExperienceContent'>
            <section class='ExperienceTitle'>
              <div class='ExperienceJob'>Projeto dados das Olimpíadas</div>
              <div class='ExperienceDate'>Julho 2021 - Dezembro 2021</div>
            </section>
            <div class='ExperiencePlace'>Universidade de Brasília</div>
            <div class='ExperienceDescription'>
              Projeto sobre manipulação de dados e geração de gráficos sobre
              as Olimpíadas.<br></br>
              Utilizei Python com Plotly, Dash e Pandas.<br></br>
              <a target="_blank" href="https://github.com/orgs/UNB-APC/repositories">LINK REPOSITORIO</a>
            </div>

            <section class='ExperienceTitle others'>
              <div class='ExperienceJob'>API todo list</div>
              <div class='ExperienceDate'>Novembro 2021</div>
            </section>
            <div class='ExperiencePlace'>Rocketseat</div>
            <div class='ExperienceDescription'>
              API criada para cadastrar diferentes licenças usuários como
              Premium ou Comum, adicionar 'to do' e marcar 'to do' como feito.<br></br>
              Utilizei Javascript com Nodejs.<br></br>
              <a target="_blank" href="https://github.com/typejulio/desafio1-nodejs-todoslist">LINK REPOSITORIO</a><br></br>
            </div>

            <section class='ExperienceTitle others'>
              <div class='ExperienceJob'>Jovem Aprendiz</div>
              <div class='ExperienceDate'>Dezembro 2018 - Novembro 2020 </div>
            </section>
            <div class='ExperiencePlace'>Câmara dos Deputados</div>
            <div class='ExperienceDescription'>
              Trabalhei como Aprendiz na Câmara dos Deputados 
              no setor administrativo do Pró-Saúde.
            </div>

          </section>
        </section>




        <section class='Content socialMedia'>
          <h1 class='Title'>
            Redes Sociais
          </h1>
          <section class='SocialMedia'>
            <a target="_blank" href='https://www.linkedin.com/in/julio-cesar-almeida-dourado/' class='SocialCard'>
              <img src="https://cdn.discordapp.com/attachments/708852749747617872/985268255675543572/linkedinIcon.png" alt="Linkedin" class='Icon' />
              <div class='SocialName'>Júlio C A Dourado</div>
            </a>

            <a target="_blank" href='https://github.com/typejulio' class='SocialCard'>
              <img src="https://cdn.discordapp.com/attachments/708852749747617872/985268255189008444/githubIcon.png" alt="Linkedin" class='Icon' />
              <div class='SocialName'>@typejulio</div>
            </a>

            <a target="_blank" href='https://www.instagram.com/juliorx_/' class='SocialCard'>
              <img src="https://cdn.discordapp.com/attachments/708852749747617872/985268255495159838/instagramIcon.png" alt="Linkedin" class='Icon' />
              <div class='SocialName'>@juliorx_</div>
            </a>
          </section>
        </section>
      </section>
    </section>
  )
}