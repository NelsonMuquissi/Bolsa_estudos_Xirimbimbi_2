    // Dados de universidades e cursos
    const universitiesData = {
      nacional: {
        'Universidade Gregório Semedo': [
          'Direito', 'Economia', 'Engenharia Informática', 'Gestão de Empresas', 'Contabilidade e Auditoria'
        ],
        'Universidade Belas': [
          'Arquitetura', 'Engenharia Civil', 'Ciências da Comunicação', 'Relações Internacionais', 'Psicologia'
        ],
        'Instituto Superior Politécnico Ndunduma': [
          'Engenharia Electrotécnica', 'Engenharia Mecânica', 'Gestão Industrial', 'Informática de Gestão', 'Enfermagem'
        ]
      },
      internacional: {
        'Argentina - UBA': [
          'Advocacia (Presencial ou Virtual)', 'Bacharel em Bioeconomia e Nanoeconomia (Virtual)', 'Professores Universitários (Virtual)',
          'Bacharel em Negócios Digitais (Virtual)', 'Bacharelado em Gestão Educacional (Virtual)', 'Contador Público (Presencial)',
          'Bacharel em Fonoaudiologia (Presencial)', 'Bacharel em Psicologia (Presencial)', 'Bacharel em Psicomotricidade (Presencial)',
          'Corpo Docente do Ensino Superior em Inglês (Presencial)', 'Intérprete de Conferência em Inglês (Presencial)',
          'Tradutor Público em Inglês (Presencial ou Virtual)', 'Licenciatura em Tradução Multimédia em Inglês (Presencial ou Virtual)',
          'Bacharel em Curadoria e História das Artes (Presencial)', 'Bacharelado em Conservação e Restauração de Bens Culturais (Presencial)',
          'Bacharel em Artes Visuais (Presencial)', 'Licenciatura em Curadoria de Artes (Virtual)', 'Bacharel em Recursos Humanos',
          'Publicidade Multimídia', 'Comunicação Social', 'Relações Públicas e Institucionais', 'Jornalismo', 'Design e Comunicação',
          'Psicologia e Ciências Sociais', 'Psicologia à Distância (com horas presenciais)', 'Psicologia', 'Sociologia', 'Filosofia',
          'Educação Infantil', 'Ciências Ambientais', 'Veterinária', 'Agronomia', 'Arquitetura', 'Bioquímica', 'Contador Público',
          'Farmácia', 'Bacharel em Administração', 'Bacharel em Gestão Hoteleira'
        ],
        'Argentina - UCES': [
          'Advocacia (Presencial ou Virtual)', 'Bacharel em Bioeconomia e Nanoeconomia (Virtual)', 'Professores Universitários (Virtual)',
          'Bacharel em Negócios Digitais (Virtual)', 'Bacharelado em Gestão Educacional (Virtual)', 'Contador Público (Presencial)',
          'Bacharel em Fonoaudiologia (Presencial)', 'Bacharel em Psicologia (Presencial)', 'Bacharel em Psicomotricidade (Presencial)',
          'Corpo Docente do Ensino Superior em Inglês (Presencial)', 'Intérprete de Conferência em Inglês (Presencial)',
          'Tradutor Público em Inglês (Presencial ou Virtual)', 'Licenciatura em Tradução Multimédia em Inglês (Presencial ou Virtual)',
          'Bacharel em Curadoria e História das Artes (Presencial)', 'Bacharelado em Conservação e Restauração de Bens Culturais (Presencial)',
          'Bacharel em Artes Visuais (Presencial)', 'Licenciatura em Curadoria de Artes (Virtual)', 'Bacharel em Recursos Humanos',
          'Publicidade Multimídia', 'Comunicação Social', 'Relações Públicas e Institucionais', 'Jornalismo', 'Design e Comunicação',
          'Psicologia e Ciências Sociais', 'Psicologia à Distância (com horas presenciais)', 'Psicologia', 'Sociologia', 'Filosofia',
          'Educação Infantil', 'Ciências Ambientais', 'Veterinária', 'Agronomia', 'Arquitetura', 'Bioquímica', 'Contador Público',
          'Farmácia', 'Bacharel em Administração', 'Bacharel em Gestão Hoteleira'
        ],
        'Argentina - UK': [
          'Advocacia (Presencial ou Virtual)', 'Bacharel em Bioeconomia e Nanoeconomia (Virtual)', 'Professores Universitários (Virtual)',
          'Bacharel em Negócios Digitais (Virtual)', 'Bacharelado em Gestão Educacional (Virtual)', 'Contador Público (Presencial)',
          'Bacharel em Fonoaudiologia (Presencial)', 'Bacharel em Psicologia (Presencial)', 'Bacharel em Psicomotricidade (Presencial)',
          'Corpo Docente do Ensino Superior em Inglês (Presencial)', 'Intérprete de Conferência em Inglês (Presencial)',
          'Tradutor Público em Inglês (Presencial ou Virtual)', 'Licenciatura em Tradução Multimédia em Inglês (Presencial ou Virtual)',
          'Bacharel em Curadoria e História das Artes (Presencial)', 'Bacharelado em Conservação e Restauração de Bens Culturais (Presencial)',
          'Bacharel em Artes Visuais (Presencial)', 'Licenciatura em Curadoria de Artes (Virtual)', 'Bacharel em Recursos Humanos',
          'Publicidade Multimídia', 'Comunicação Social', 'Relações Públicas e Institucionais', 'Jornalismo', 'Design e Comunicação',
          'Psicologia e Ciências Sociais', 'Psicologia à Distância (com horas presenciais)', 'Psicologia', 'Sociologia', 'Filosofia',
          'Educação Infantil', 'Ciências Ambientais', 'Veterinária', 'Agronomia', 'Arquitetura', 'Bioquímica', 'Contador Público',
          'Farmácia', 'Bacharel em Administração', 'Bacharel em Gestão Hoteleira'
        ],
        'Argentina - UMSA': [
          'Advocacia (Presencial ou Virtual)', 'Bacharel em Bioeconomia e Nanoeconomia (Virtual)', 'Professores Universitários (Virtual)',
          'Bacharel em Negócios Digitais (Virtual)', 'Bacharelado em Gestão Educacional (Virtual)', 'Contador Público (Presencial)',
          'Bacharel em Fonoaudiologia (Presencial)', 'Bacharel em Psicologia (Presencial)', 'Bacharel em Psicomotricidade (Presencial)',
          'Corpo Docente do Ensino Superior em Inglês (Presencial)', 'Intérprete de Conferência em Inglês (Presencial)',
          'Tradutor Público em Inglês (Presencial ou Virtual)', 'Licenciatura em Tradução Multimédia em Inglês (Presencial ou Virtual)',
          'Bacharel em Curadoria e História das Artes (Presencial)', 'Bacharelado em Conservação e Restauração de Bens Culturais (Presencial)',
          'Bacharel em Artes Visuais (Presencial)', 'Licenciatura em Curadoria de Artes (Virtual)', 'Bacharel em Recursos Humanos',
          'Publicidade Multimídia', 'Comunicação Social', 'Relações Públicas e Institucionais', 'Jornalismo', 'Design e Comunicação',
          'Psicologia e Ciências Sociais', 'Psicologia à Distância (com horas presenciais)', 'Psicologia', 'Sociologia', 'Filosofia',
          'Educação Infantil', 'Ciências Ambientais', 'Veterinária', 'Agronomia', 'Arquitetura', 'Bioquímica', 'Contador Público',
          'Farmácia', 'Bacharel em Administração', 'Bacharel em Gestão Hoteleira'
        ],
        'Uruguai - UDE': [
          'Advocacia (Presencial ou Virtual)', 'Bacharel em Bioeconomia e Nanoeconomia (Virtual)', 'Professores Universitários (Virtual)',
          'Bacharel em Negócios Digitais (Virtual)', 'Bacharelado em Gestão Educacional (Virtual)', 'Contador Público (Presencial)',
          'Bacharel em Fonoaudiologia (Presencial)', 'Bacharel em Psicologia (Presencial)', 'Bacharel em Psicomotricidade (Presencial)',
          'Corpo Docente do Ensino Superior em Inglês (Presencial)', 'Intérprete de Conferência em Inglês (Presencial)',
          'Tradutor Público em Inglês (Presencial ou Virtual)', 'Licenciatura em Tradução Multimédia em Inglês (Presencial ou Virtual)',
          'Bacharel em Curadoria e História das Artes (Presencial)', 'Bacharelado em Conservação e Restauração de Bens Culturais (Presencial)',
          'Bacharel em Artes Visuais (Presencial)', 'Licenciatura em Curadoria de Artes (Virtual)', 'Bacharel em Recursos Humanos',
          'Publicidade Multimídia', 'Comunicação Social', 'Relações Públicas e Institucionais', 'Jornalismo', 'Design e Comunicação',
          'Psicologia e Ciências Sociais', 'Psicologia à Distância (com horas presenciais)', 'Psicologia', 'Sociologia', 'Filosofia',
          'Educação Infantil', 'Ciências Ambientais', 'Veterinária', 'Agronomia', 'Arquitetura', 'Bioquímica', 'Contador Público',
          'Farmácia', 'Bacharel em Administração', 'Bacharel em Gestão Hoteleira'
        ],
        'Espanha - Universidade de Girona': [
          'Advocacia (Presencial ou Virtual)', 'Bacharel em Bioeconomia e Nanoeconomia (Virtual)', 'Professores Universitários (Virtual)',
          'Bacharel em Negócios Digitais (Virtual)', 'Bacharelado em Gestão Educacional (Virtual)', 'Contador Público (Presencial)',
          'Bacharel em Fonoaudiologia (Presencial)', 'Bacharel em Psicologia (Presencial)', 'Bacharel em Psicomotricidade (Presencial)',
          'Corpo Docente do Ensino Superior em Inglês (Presencial)', 'Intérprete de Conferência em Inglês (Presencial)',
          'Tradutor Público em Inglês (Presencial ou Virtual)', 'Licenciatura em Tradução Multimédia em Inglês (Presencial ou Virtual)',
          'Bacharel em Curadoria e História das Artes (Presencial)', 'Bacharelado em Conservação e Restauração de Bens Culturais (Presencial)',
          'Bacharel em Artes Visuais (Presencial)', 'Licenciatura em Curadoria de Artes (Virtual)', 'Bacharel em Recursos Humanos',
          'Publicidade Multimídia', 'Comunicação Social', 'Relações Públicas e Institucionais', 'Jornalismo', 'Design e Comunicação',
          'Psicologia e Ciências Sociais', 'Psicologia à Distância (com horas presenciais)', 'Psicologia', 'Sociologia', 'Filosofia',
          'Educação Infantil', 'Ciências Ambientais', 'Veterinária', 'Agronomia', 'Arquitetura', 'Bioquímica', 'Contador Público',
          'Farmácia', 'Bacharel em Administração', 'Bacharel em Gestão Hoteleira'
        ],
        'Brasil - Unicid': [
          'Administração', 'Arquitetura e Urbanismo', 'Biomedicina', 'Ciências Contábeis', 'Direito', 'Educação Física',
          'Enfermagem', 'Engenharia Civil', 'Farmácia', 'Fisioterapia', 'Nutrição', 'Psicologia', 'Odontologia'
        ],
        'Brasil - Cruzeiro do Sul': [
          'Administração', 'Análise e Desenvolvimento de Sistemas', 'Biomedicina', 'Ciências Biológicas', 'Enfermagem',
          'Engenharia Civil', 'Farmácia', 'Fisioterapia', 'Nutrição', 'Psicologia', 'Publicidade e Propaganda', 'Radiologia'
        ],
        'Brasil - FMU': [
          'Administração', 'Arquitetura e Urbanismo', 'Ciências Contábeis', 'Direito', 'Educação Física', 'Enfermagem',
          'Engenharia Civil', 'Farmácia', 'Fisioterapia', 'Jornalismo', 'Psicologia', 'Publicidade e Propaganda'
        ],
        'Brasil - São Judas (EAD)': [
          'Administração', 'Análise e Desenvolvimento de Sistemas', 'Ciências Contábeis', 'Educação Física', 'Enfermagem',
          'Engenharia de Produção', 'Gestão de Recursos Humanos', 'Logística', 'Marketing', 'Pedagogia', 'Psicologia',
          'Tecnologia em Gestão Financeira'
        ],
        'Brasil - Anhembi Morumbi': [
          'Administração', 'Arquitetura e Urbanismo', 'Ciências da Computação', 'Design', 'Direito', 'Enfermagem',
          'Engenharia Civil', 'Fisioterapia', 'Gastronomia', 'Jornalismo', 'Medicina', 'Psicologia'
        ],
        'Brasil - Braz Cubas': [
          'Administração', 'Ciências Contábeis', 'Direito', 'Enfermagem', 'Engenharia Civil', 'Fisioterapia',
          'Gestão de Recursos Humanos', 'Logística', 'Marketing', 'Pedagogia', 'Psicologia'
        ],
        'Portugal - Cursos Profissionais': [
          'Auxiliar de ação médica', 'Auxiliar de ação educativa', 'Profissional de turismo', 'Marketing digital', 'Assistente de contabilidade', 'Assistente administrativa'
        ],
        'Brasil Premium - Unicid': [
          'Administração', 'Arquitetura e Urbanismo', 'Biomedicina', 'Ciências Contábeis'
        ],
        'Brasil Premium - Cruzeiro do Sul': [
          'Administração', 'Análise e Desenvolvimento de Sistemas', 'Biomedicina'
        ],
        'Brasil Premium - FMU': [
          'Administração', 'Arquitetura e Urbanismo', 'Ciências Contábeis'
        ]
      }
    };

    // Função para rolar até a seção de inscrição
    function scrollToInscricao() {
      document.getElementById('inscricao').scrollIntoView({ behavior: 'smooth' });
    }

    // Função para mostrar o formulário
    function showForm(type) {
      const formContainer = document.getElementById('application-form');
      const formTitle = document.getElementById('form-title');
      const bolsaType = document.getElementById('bolsa-type');
      const paisContainer = document.getElementById('pais-container');
      const tipoBrasilContainer = document.getElementById('tipo-brasil-container');
      const universidadeContainer = document.getElementById('universidade-container');
      const cursoContainer = document.getElementById('curso-container');
      const customUniContainer = document.getElementById('custom-uni-container');
      const customCursoContainer = document.getElementById('custom-curso-container');
      const internationalNote = document.getElementById('international-note');
      const universidadeSelect = document.getElementById('universidade');
      const cursoSelect = document.getElementById('curso');
      const paisSelect = document.getElementById('pais');
      const tipoBrasilSelect = document.getElementById('tipo-brasil');
      const errorMessage = document.getElementById('form-error') || document.createElement('div');
      errorMessage.id = 'form-error';
      errorMessage.className = 'alert alert-danger hidden';
      errorMessage.role = 'alert';
      formContainer.querySelector('.card').prepend(errorMessage);

      formContainer.classList.remove('hidden');
      document.getElementById('scholarship-options').classList.add('hidden');
      bolsaType.value = type;
      formTitle.textContent = `Candidatura — Bolsa ${type === 'national' ? 'Nacional' : 'Internacional'}`;

      // Resetar formulário
      document.getElementById('applicationForm').reset();
      document.getElementById('applicationForm').classList.remove('was-validated');
      errorMessage.classList.add('hidden');
      paisContainer.classList.add('hidden');
      tipoBrasilContainer.classList.add('hidden');
      universidadeContainer.classList.remove('hidden');
      cursoContainer.classList.remove('hidden');
      customUniContainer.classList.add('hidden');
      customCursoContainer.classList.add('hidden');
      internationalNote.classList.add('hidden');
      universidadeSelect.innerHTML = '<option value="">Selecione a universidade...</option>';
      cursoSelect.innerHTML = '<option value="">Selecione o curso...</option>';

      if (type === 'national') {
        paisSelect.required = false;
        tipoBrasilSelect.required = false;
        universidadeSelect.innerHTML += '<option value="custom">Universidade a sua escolha</option>';
        Object.keys(universitiesData.nacional).forEach(university => {
          const option = document.createElement('option');
          option.value = university;
          option.textContent = university;
          universidadeSelect.appendChild(option);
        });
      } else {
        paisSelect.required = true;
        tipoBrasilSelect.required = false;
        paisContainer.classList.remove('hidden');
        internationalNote.classList.remove('hidden');
      }
    }

    // Função para esconder o formulário e voltar para opções
    function hideForm() {
      const formContainer = document.getElementById('application-form');
      const scholarshipOptions = document.getElementById('scholarship-options');
      const errorMessage = document.getElementById('form-error');
      formContainer.classList.add('hidden');
      scholarshipOptions.classList.remove('hidden');
      document.getElementById('applicationForm').reset();
      document.getElementById('applicationForm').classList.remove('was-validated');
      if (errorMessage) errorMessage.classList.add('hidden');
    }

    // Função para voltar ao formulário da seção de pagamento
    function backToForm() {
      document.getElementById('payment-section').classList.add('hidden');
      document.getElementById('application-form').classList.remove('hidden');
    }

    // Função para atualizar universidades por país
    function updateUniversitiesByCountry(country, tipoBrasil = 'standard') {
      const universidadeSelect = document.getElementById('universidade');
      const cursoSelect = document.getElementById('curso');
      universidadeSelect.innerHTML = '<option value="">Selecione a universidade...</option>';
      cursoSelect.innerHTML = '<option value="">Selecione o curso...</option>';

      const prefix = country === 'Brasil' && tipoBrasil === 'premium' ? country + ' Premium - ' : country + ' - ';
      Object.keys(universitiesData.internacional)
        .filter(key => key.startsWith(prefix) || (country === 'Portugal' && key === 'Portugal - Cursos Profissionais'))
        .forEach(university => {
          const option = document.createElement('option');
          option.value = university;
          option.textContent = university.replace(prefix, '').replace('Portugal - ', '');
          universidadeSelect.appendChild(option);
        });
    }

    // Função para atualizar cursos
    function updateCourses(tipoBolsa, universidade) {
      const cursoSelect = document.getElementById('curso');
      cursoSelect.innerHTML = '<option value="">Selecione o curso...</option>';
      if (universitiesData[tipoBolsa] && universitiesData[tipoBolsa][universidade]) {
        universitiesData[tipoBolsa][universidade].forEach(curso => {
          const option = document.createElement('option');
          option.value = curso;
          option.textContent = curso;
          cursoSelect.appendChild(option);
        });
      }
    }

    // Validação de formulário
    function validateForm(form) {
      let isValid = true;
      form.classList.add('was-validated');

      // Validar cada campo individualmente
      const inputs = form.querySelectorAll('input[required], select[required]');
      inputs.forEach(input => {
        if (!input.checkValidity()) {
          isValid = false;
          input.classList.add('is-invalid');
        } else {
          input.classList.remove('is-invalid');
        }
      });

      // Validar arquivo (apenas PDF)
      const certificado = document.getElementById('certificado');
      if (!certificado.files.length) {
        isValid = false;
        certificado.classList.add('is-invalid');
      } else {
        const file = certificado.files[0];
        if (file.type !== 'application/pdf') {
          isValid = false;
          certificado.classList.add('is-invalid');
        } else {
          certificado.classList.remove('is-invalid');
        }
      }

      // Validar termos
      const termos = document.getElementById('termos');
      if (!termos.checked) {
        isValid = false;
        termos.classList.add('is-invalid');
      } else {
        termos.classList.remove('is-invalid');
      }

      return isValid;
    }

    // Manipulação do formulário
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('applicationForm');
      const bolsaType = document.getElementById('bolsa-type');
      const pais = document.getElementById('pais');
      const tipoBrasil = document.getElementById('tipo-brasil');
      const universidade = document.getElementById('universidade');
      const curso = document.getElementById('curso');
      const customUniContainer = document.getElementById('custom-uni-container');
      const customCursoContainer = document.getElementById('custom-curso-container');
      const customUni = document.getElementById('custom-uni');
      const customCurso = document.getElementById('custom-curso');
      const errorMessage = document.getElementById('form-error') || document.createElement('div');
      errorMessage.id = 'form-error';
      errorMessage.className = 'alert alert-danger hidden';
      errorMessage.role = 'alert';
      form.prepend(errorMessage);

      pais.addEventListener('change', (e) => {
        const tipoBrasilContainer = document.getElementById('tipo-brasil-container');
        tipoBrasilContainer.classList.add('hidden');
        tipoBrasil.value = '';
        tipoBrasil.required = false;
        if (e.target.value === 'Brasil') {
          tipoBrasilContainer.classList.remove('hidden');
          tipoBrasil.required = true;
        } else if (e.target.value) {
          updateUniversitiesByCountry(e.target.value);
        }
      });

      tipoBrasil.addEventListener('change', (e) => {
        if (e.target.value && pais.value === 'Brasil') {
          updateUniversitiesByCountry(pais.value, e.target.value);
        }
      });

      universidade.addEventListener('change', (e) => {
        const tipo = bolsaType.value === 'national' ? 'nacional' : 'internacional';
        if (bolsaType.value === 'national' && e.target.value === 'custom') {
          customUniContainer.classList.remove('hidden');
          customCursoContainer.classList.remove('hidden');
          document.getElementById('curso-container').classList.add('hidden');
          curso.required = false;
          customUni.required = true;
          customCurso.required = true;
        } else {
          customUniContainer.classList.add('hidden');
          customCursoContainer.classList.add('hidden');
          document.getElementById('curso-container').classList.remove('hidden');
          curso.required = true;
          customUni.required = false;
          customCurso.required = false;
          updateCourses(tipo, e.target.value);
        }
      });

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        errorMessage.classList.add('hidden');

        if (!validateForm(form)) {
          errorMessage.textContent = 'Por favor, preencha todos os campos obrigatórios corretamente.';
          errorMessage.classList.remove('hidden');
          return;
        }

        // Coleta de dados do formulário
        const tipoBolsa = bolsaType.value === 'national' ? 'nacional' : 'internacional';
        let selectedUniversity = universidade.value;
        let selectedCurso = curso.value;
        let amount = tipoBolsa === 'nacional' ? 7500 : (selectedUniversity.startsWith('Brasil Premium - ') ? 20000 : 10000);

        if (tipoBolsa === 'nacional' && universidade.value === 'custom') {
          if (!customUni.value.trim() || !customCurso.value.trim()) {
            errorMessage.textContent = 'Por favor, informe o nome da universidade e do curso personalizados.';
            errorMessage.classList.remove('hidden');
            customUni.classList.add('is-invalid');
            customCurso.classList.add('is-invalid');
            return;
          }
          selectedUniversity = customUni.value.trim();
          selectedCurso = customCurso.value.trim();
        }

        if (!selectedUniversity || !selectedCurso) {
          errorMessage.textContent = 'Por favor, selecione uma universidade e um curso válidos.';
          errorMessage.classList.remove('hidden');
          return;
        }

        // Atualizar a seção de pagamento
        document.getElementById('payment-type').textContent = `${tipoBolsa.charAt(0).toUpperCase() + tipoBolsa.slice(1)} (${amount} Kz)`;
        document.getElementById('payment-university').textContent = selectedUniversity;
        document.getElementById('payment-course').textContent = selectedCurso;
        document.getElementById('payment-amount').textContent = `${amount} Kz`;

        // Ocultar o formulário de inscrição e exibir a seção de pagamento
        document.getElementById('application-form').classList.add('hidden');
        document.getElementById('payment-section').classList.remove('hidden');
      });

      // Confirmação de pagamento
      document.getElementById('confirm-payment').addEventListener('click', () => {
        let uuid = 'UUID-DEFAULT-123456789';
        if (window.crypto && window.crypto.randomUUID) {
          uuid = crypto.randomUUID();
        }
        alert(`Pagamento confirmado! Parabéns, você fez o pagamento no fundo de bolsa Emanuel Xirimbimbi e tens o teu código: ${uuid}`);
        // Ocultar a seção de pagamento e voltar para a página inicial (opções de bolsas)
        document.getElementById('payment-section').classList.add('hidden');
        document.getElementById('scholarship-options').classList.remove('hidden');
      });
    });