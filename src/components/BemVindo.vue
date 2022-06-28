<template>
  <div>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </head>
    <form>
      <div class="count">
        <ul class="progressbar">
          <li class="active">Passo 1</li>
          <li>Passo 2</li>
          <li>Passo 3</li>
        </ul>
      </div>

      <h1>Seja Bem Vindo</h1>
      <p><strong>Dados de Contato</strong></p>
      <p>Abra sua conta em 2 minutos. É grátis!</p>

      <fieldset class="name">
        <legend>Nome Completo</legend>
        <input type="text" id="name" name="name" placeholder="Digite" />
      </fieldset>
      <br />

      <fieldset class="email">
        <legend>E-mail</legend>
        <i class="material-icons">&#xe0be;</i>
        <input type="email" id="email" name="email" placeholder="Digite" v-model="email" />
      </fieldset>

      <fieldset class="email">
        <legend>Confirme e-mail</legend>
        <i class="material-icons">&#xe0be;</i>
        <input type="email" id="email" name="email" placeholder="Digite" v-model="email2" />
      </fieldset>
      <br />
      <br />

      <fieldset class="cpf">
        <legend>Cpf</legend>
        <input type="text" id="cpf" name="cpf" placeholder="somente números" v-maska="'###.###.###-##'" v-model="cpf" />
      </fieldset>

      <fieldset class="celular">
        <legend>Celular</legend>
        <input type="tel" id="tel" name="celular" placeholder="somente números" v-maska="'(##)####-####'" v-model="cel" />
      </fieldset>
      <br />
      <br />

      <fieldset class="data">
        <legend>Data de nascimento</legend>
        <input type="date" id="birthday" name="birthday" />
      </fieldset>
      <br />

      <p><strong>Gostaria de saber mais sobre o mercado financeiro?</strong></p>
      <p><strong>Receba um resumo diário na palma de sua mão ou na tela do seu computador.</strong></p>
      <br />

      <input type="checkbox" id="email" />
      <label for="email">E-mail e SMS</label>
      <br />
      <br />
      <input type="checkbox" id="whatsapp" />
      <label for="whatsapp">Whatsapp</label><br />
      <br />

      <p>
        Unimos tecnologia e atendimento humano em uma plataforma de
        investimentos que é completa para você e sua empresa.
      </p>

      <router-link to="DadosPessoais"><button>Continuar</button></router-link>
    </form>
  </div>
</template>

<script>

export default {
  name: "BemVindo",
  methods: {
    validateEmail() {
      if (this.email == this.email2) {
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      email: "",
      email2: "",
      cpf: "",
      cel: "",
    };
  },
// const: validateCpf = () => {
//   let firstDigitAfterDash = 0
//   let arrayCpf = Array.from(this.cpf.replaceAll('.', '').replace('-', ''))

//   for (let i = 0; i < arrayCpf.length - 2; i++) {
//     firstDigitAfterDash += Number.parseInt(arrayCpf[i]) * (10 - i)
//   }
//   firstDigitAfterDash = 11 - (firstDigitAfterDash % 11)
//   firstDigitAfterDash = firstDigitAfterDash === 10 ? 0 : firstDigitAfterDash

//   if (Number.parseInt(arrayCpf[arrayCpf.length - 2]) !== firstDigitAfterDash) {
//     return false
//   }

//   let secondDigitAfterDash = 0
//   for (let i = 0; i < arrayCpf.length - 1; i++)
//   {
//     secondDigitAfterDash += Number.parseInt(arrayCpf[i]) * (11 - i)
//   }
//   secondDigitAfterDash = 11 - (secondDigitAfterDash % 11)
//   secondDigitAfterDash = secondDigitAfterDash === 10 ? 0 : secondDigitAfterDash

//   return secondDigitAfterDash === Number.parseInt(arrayCpf[arrayCpf.length - 1])
// }
};
</script>

<style scoped>
form {
  text-align: left;
  padding-right: 300px;
}

h1 {
  padding-top: 100px;
}

legend {
  font-size: 14px;
}

fieldset.name {
  width: 650px;
}
.name input {
  border: white;
  width: 500px;
  padding: 5px 10px 10px 50px;
}

fieldset.email,
.cpf,
.celular,
.data {
  width: 250px;
}

input {
  outline: none;
}

.email input,
.cpf input,
.celular input,
.data input {
  border: white;
  width: 250px;
  padding: 5px 10px 10px 50px;
}

.email,
.cpf,
.celular {
  display: inline-block;
}

.material-icons {
  position: absolute;
  display: flex;
  font-size: 20px;
  align-items: center;
  margin-left: 5px;
  margin-top: 5px;
}

button {
  background-color: #e02b57;
  border: none;
  border-radius: 50px;
  color: white;
  padding: 10px;
  font-weight: bold;
}

.count {
  width: 100%;
}

.progressbar {
  counter-reset: step;
}

.progressbar li {
  list-style: none;
  float: left;
  width: 33.33%;
  position: relative;
  text-align: center;
}

.progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ddd;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  background-color: white;
}

.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-index: -1;
}

.progressbar li:first-child:after {
  content: none;
}

.progressbar li.active {
  color: #e02b57;
}

.progressbar li.active:before {
  border-color: #e02b57;
}

.progressbar li.active + li:after {
  background-color: #e02b57;
}
</style>
