
(function () {
  'use strict';

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
      ]
    }
  };

  // Função para atualizar as universidades com base no tipo de bolsa
  function updateUniversities(formPrefix, tipoBolsa) {
    const universitySelect = document.getElementById(`${formPrefix}-universidade`);
    const courseSelect = document.getElementById(`${formPrefix}-curso`);
    const universityContainer = document.getElementById(`${formPrefix}-universidade-container`);
    const courseContainer = document.getElementById(`${formPrefix}-curso-container`);

    // Limpar selects
    universitySelect.innerHTML = '<option value="">Selecione a universidade...</option>';
    courseSelect.innerHTML = '<option value="">Selecione o curso...</option>';

    if (tipoBolsa && universitiesData[tipoBolsa]) {
      // Mostrar containers
      universityContainer.classList.remove('hidden');
      courseContainer.classList.remove('hidden');

      // Preencher universidades
      Object.keys(universitiesData[tipoBolsa]).forEach(university => {
        const option = document.createElement('option');
        option.value = university;
        option.textContent = university;
        universitySelect.appendChild(option);
      });
    } else {
      // Esconder containers se não houver tipo selecionado
      universityContainer.classList.add('hidden');
      courseContainer.classList.add('hidden');
    }
  }

  // Função para atualizar os cursos com base na universidade selecionada
  function updateCourses(formPrefix, tipoBolsa, universidade) {
    const courseSelect = document.getElementById(`${formPrefix}-curso`);
    const courseContainer = document.getElementById(`${formPrefix}-curso-container`);

    // Limpar select de cursos
    courseSelect.innerHTML = '<option value="">Selecione o curso...</option>';

    if (tipoBolsa && universidade && universitiesData[tipoBolsa][universidade]) {
      // Preencher cursos
      universitiesData[tipoBolsa][universidade].forEach(curso => {
        const option = document.createElement('option');
        option.value = curso;
        option.textContent = curso;
        courseSelect.appendChild(option);
      });
      courseContainer.classList.remove('hidden');
    } else {
      courseContainer.classList.add('hidden');
    }
  }

  // Validação de formulário Bootstrap
  function validateForm(form) {
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return false;
    }
    return true;
  }

  // Manipulação do formulário do modal
  const modalForm = document.getElementById('modalForm');
  const modalTipoBolsa = document.getElementById('m-tipo-bolsa');
  const modalUniversidade = document.getElementById('m-universidade');
  const modalCurso = document.getElementById('m-curso');

  // Atualizar universidades quando o tipo de bolsa mudar
  modalTipoBolsa.addEventListener('change', (e) => {
    updateUniversities('m', e.target.value);
  });

  // Atualizar cursos quando a universidade mudar
  modalUniversidade.addEventListener('change', (e) => {
    updateCourses('m', modalTipoBolsa.value, e.target.value);
  });

  // Submissão do formulário do modal
  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm(modalForm)) return;

    // Atualizar modal de pagamento
    const tipoBolsa = modalTipoBolsa.value;
    const universidade = modalUniversidade.value;
    const curso = modalCurso.value;
    const paymentType = document.getElementById('payment-type');
    const paymentUniversity = document.getElementById('payment-university');
    const paymentCourse = document.getElementById('payment-course');
    const paymentAmount = document.getElementById('payment-amount');

    paymentType.textContent = tipoBolsa === 'nacional' ? 'Nacional (7.500 Kz)' : 'Internacional (10.000 Kz)';
    paymentUniversity.textContent = universidade || '-';
    paymentCourse.textContent = curso || '-';
    paymentAmount.textContent = tipoBolsa === 'nacional' ? '7.500 Kz' : '10.000 Kz';

    // Fechar modal de candidatura e abrir modal de pagamento
    const applyModal = bootstrap.Modal.getInstance(document.getElementById('applyModal'));
    applyModal.hide();
    const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
    paymentModal.show();
  });

  // Simulação de confirmação de pagamento
  document.getElementById('confirm-payment').addEventListener('click', () => {
    alert('Pagamento confirmado! Você receberá um e-mail com os próximos passos.');
    const paymentModal = bootstrap.Modal.getInstance(document.getElementById('paymentModal'));
    paymentModal.hide();
  });
})();