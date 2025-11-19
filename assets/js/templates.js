// templates.js

const Templates = {

    home: `
        <section id="about">
            <h1>ONG Patinhas Unidas</h1>
            <p>A ONG <strong>Patinhas Unidas</strong> ajuda animais em situação de abandono...</p>
            <img src="assets/images/resgate-ong.avif" class="img_central">
        </section>

        <section id="ong_values">
            <article><h2>Missão</h2><p>Promover o bem-estar animal.</p></article>
            <article><h2>Visão</h2><p>Ser referência em proteção animal.</p></article>
            <article>
                <h2>Valores</h2>
                <ul>
                    <li>Amor</li><li>Transparência</li><li>Responsabilidade</li>
                </ul>
            </article>
        </section>
    `,

    projetos: `
        <section id="projects">
            <h1>Nossos Projetos</h1>

            <article>
                <img src="assets/images/adocao.avif">
                <h2>Feiras de Adoção</h2>
                <p>Adoção responsável para cães e gatos.</p>
            </article>

            <article>
                <img src="assets/images/voluntarios.jpg">
                <h2>Programa de Voluntariado</h2>
                <p>Ajude com resgates, cuidados e eventos.</p>
                <a href="#cadastro" class="button">SEJA VOLUNTÁRIO</a>
            </article>

            <article>
                <img src="assets/images/campanhadoacao.jpeg">
                <h2>Campanhas de Doação</h2>
                <p>Arrecadação de ração e medicamentos.</p>
            </article>
        </section>
    `,

    cadastro: `
        <section id="register">
          <h1>Cadastro</h1>

          <div id="msg-sucesso" class="msg-sucesso" style="display:none;"></div>

          <form id="form-cadastro">
            
            <fieldset>
              <legend>Informações Pessoais</legend>
              <label>Nome:</label>
              <input id="nome" required>
              
              <label>Email:</label>
              <input id="email" type="email" required>

              <label>CPF:</label>
              <input id="cpf" placeholder="000.000.000-00" required>

              <label>Telefone:</label>
              <input id="telefone" placeholder="(11) 90000-0000" required>

              <label>Data de Nascimento:</label>
              <input id="data" type="date" required>
            </fieldset>

            <fieldset>
              <legend>Endereço</legend>
              <label>CEP:</label>
              <input id="cep" placeholder="00000-000" required>

              <label>Cidade:</label>
              <input id="cidade" required>

              <label>Estado:</label>
              <select id="estado" required>
                <option value="">Selecione</option>
                <option>SP</option><option>RJ</option><option>MG</option>
                <option>DF</option><option>RS</option>
              </select>
            </fieldset>

            <fieldset>
              <legend>Tipo</legend>
              <label><input type="radio" name="tipo" value="voluntario" required> Voluntário</label>
              <label><input type="radio" name="tipo" value="doador"> Doador</label>
            </fieldset>

            <button class="button-enviar">Enviar Cadastro</button>
          </form>
        </section>
    `
};
