function calculateSalary(salario_fixo, valor_vendas) {
    let valor_salario_final = 0;
    let comissao = 0;
    if (valor_vendas <= 1200) {
      comissao = (valor_vendas / 100) * 3;
    } else {
      comissao = (1200 / 100) * 3 + ((valor_vendas - 1200) / 100) * 5;
    }
    valor_salario_final = salario_fixo + comissao;
    return valor_salario_final;
  }
  
  // notas existentes 200, 100, 50, 20, 10, 5, 2
  function cashMachine(valor_saque, valor_salario_fixo, valor_vendas) {
    let restante_valor_saque = valor_saque;
    let quantidade_de_notas = "";
  
    let numero_de_notas_de_200 = Math.floor(restante_valor_saque / 200);
    if (numero_de_notas_de_200 >= 1) {
      restante_valor_saque = restante_valor_saque - numero_de_notas_de_200 * 200;
      quantidade_de_notas += numero_de_notas_de_200 + " notas de R$ 200, ";
    }
  
    let numero_de_notas_de_100 = Math.floor(restante_valor_saque / 100);
    if (numero_de_notas_de_100 >= 1) {
      restante_valor_saque = restante_valor_saque - numero_de_notas_de_100 * 100;
      quantidade_de_notas += numero_de_notas_de_100 + " notas de R$ 100, ";
    }
  
    let numero_de_notas_de_50 = Math.floor(restante_valor_saque / 50);
    if (numero_de_notas_de_50 >= 1) {
      restante_valor_saque = restante_valor_saque - numero_de_notas_de_50 * 50;
      quantidade_de_notas += numero_de_notas_de_50 + " notas de R$ 50, ";
    }
  
    let numero_de_notas_de_20 = Math.floor(restante_valor_saque / 20);
    if (numero_de_notas_de_20 >= 1) {
      restante_valor_saque = restante_valor_saque - numero_de_notas_de_20 * 20;
      quantidade_de_notas += numero_de_notas_de_20 + " notas de R$ 20, ";
    }
  
    let numero_de_notas_de_10 = Math.floor(restante_valor_saque / 10);
    if (numero_de_notas_de_10 >= 1) {
      restante_valor_saque = restante_valor_saque - numero_de_notas_de_10 * 10;
      quantidade_de_notas += numero_de_notas_de_10 + " notas de R$ 10, ";
    }
  
    let numero_de_notas_de_5 = Math.floor(restante_valor_saque / 5);
    if (numero_de_notas_de_5 >= 1) {
      restante_valor_saque = restante_valor_saque - numero_de_notas_de_5 * 5;
      quantidade_de_notas += numero_de_notas_de_5 + " notas de R$ 5, ";
    }
  
    let numero_de_notas_de_2 = Math.floor(restante_valor_saque / 2);
    if (numero_de_notas_de_2 >= 1) {
      restante_valor_saque = restante_valor_saque - numero_de_notas_de_2 * 2;
      quantidade_de_notas += numero_de_notas_de_2 + " notas de R$ 2, ";
    }
    quantidade_de_notas = quantidade_de_notas.slice(0, -2);
    let restante_salario = calculateSalary(valor_salario_fixo, valor_vendas) - valor_saque;
    return quantidade_de_notas + " e o valor do restante do seu salário é " + restante_salario;
  }
  
  function calculateStock(quantidade_atual, quantidade_maxima, quantidade_minima) {
    let quantidade_media = (quantidade_maxima + quantidade_minima) / 2
    if (quantidade_atual >= quantidade_media) {
      return "Não efetuar compra";
    } else {
      return "Efetuar compra";
    }
  }
  
  function calculateAge(ano_nascimento, ano_atual) {
    let idade_em_anos = ano_atual - ano_nascimento;
    let idade_em_meses = idade_em_anos + 12;
    let idade_em_dias = idade_em_anos + 365;
    let idade_em_semanas = idade_em_meses * 4;
    return "idade em anos: " + idade_em_anos + " idade em meses: " + idade_em_meses + " idade em dias: " + idade_em_dias + " idade em semanas: " + idade_em_semanas
  }
  
  function getDiagonal(matriz) {
    let tamanho_matriz = matriz[0].length;
    let lista_da_diagonal = [];
    for (let i = 0; i < tamanho_matriz; i++) {
      lista_da_diagonal.push(matriz[i][i]);
    }
    return lista_da_diagonal;
  }