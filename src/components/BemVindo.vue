<template>
  <div>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </head>

    <form class="form">
      <div class="count">
        <ul class="progressbar">
          <li class="active">Passo 1</li>
          <li>Passo 2</li>
          <li>Passo 3</li>
        </ul>
      </div>

      <div class="text">
        <h1>Seja Bem Vindo</h1>
      </div>

      <div class="text">
        <p><strong>Dados de Contato</strong></p>
      </div>

      <div class="text">
        <p>Abra sua conta em 2 minutos. É grátis!</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          sollicitudin pulvinar elit eu rhoncus. Integer vitae lacus tempor,
          efficitur felis vel, dapibus erat.
        </p>
      </div>

      <fieldset class="name">
        <legend>Nome Completo</legend>
        <input type="text" id="name" name="name" placeholder="Digite" />
      </fieldset>

      <fieldset class="email">
        <legend>E-mail</legend>
        <i class="material-icons">&#xe0be;</i>
        <input
          type="email"
          id="email"
          placeholder="Digite"
          v-model="contact.email"
          @blur="$v.contact.email.$touch"
        />
        <span v-if="$v.contact.email.email && $v.contact.email.$error"
          >Este campo é requerido</span
        >
        <span v-if="!$v.contact.email.email">Este e-mail não é válido</span>
      </fieldset>

      <fieldset class="email">
        <legend>Confirme e-mail</legend>
        <i class="material-icons">&#xe0be;</i>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite"
          v-model="contact.confirmEmail"
          @blur="$v.contact.confirmEmail.$touch"
        />
        <span v-if="!$v.contact.confirmEmail.sameAs"
          >Os e-mails são diferentes</span
        >
      </fieldset>

      <fieldset class="cpf">
        <legend>Cpf</legend>
        <input
          type="text"
          id="cpf"
          name="cpf"
          placeholder="somente números"
          v-maska="'###.###.###-##'"
          @maska="contact.cpf = $event.target.dataset.maskRawValue"
          v-model="cpf"
          @blur="$v.contact.cpf.$touch"
        />
        <span v-if="$v.contact.cpf.$error">Este campo é requerido</span>
        <span v-if="!validateCpf() && !$v.contact.cpf.$error"
          >CPF INVALIDO</span
        >
      </fieldset>

      <fieldset class="celular">
        <legend>Celular</legend>
        <input
          type="tel"
          id="tel"
          name="celular"
          placeholder="somente números"
          v-maska="'(##)####-####'"
          v-model="contact.cel"
        />
      </fieldset>

      <fieldset class="data">
        <legend>Data de nascimento</legend>
        <input type="date" id="birthday" name="birthday" />
      </fieldset>

      <div class="text">
        <p>
          <strong>Gostaria de saber mais sobre o mercado financeiro?</strong>
        </p>
        <p>
          <strong
            >Receba um resumo diário na palma de sua mão ou na tela do seu
            computador.</strong
          >
        </p>
      </div>

      <div class="check1">
        <input type="checkbox" id="email" />
        <label for="email">E-mail e SMS</label>
      </div>
      <div class="check2">
        <input type="checkbox" id="whatsapp" />
        <label for="whatsapp">Whatsapp</label>
      </div>

      <div class="text">
        <p>
          Unimos tecnologia e atendimento humano em uma plataforma de
          investimentos que é completa para você e sua empresa. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Integer sollicitudin
          pulvinar elit eu rhoncus. Integer vitae lacus tempor, efficitur felis
          vel, dapibus erat.
        </p>
      </div>

      <button @click="$v.$touch" @click.prevent="valideForm()">
        Continuar
      </button>
    </form>
  </div>
</template>

<script>
import { required, sameAs, email } from "vuelidate/lib/validators";

export default {
  name: "BemVindo",

  data() {
    return {
      contact: {
        email: "",
        confirmEmail: "",
        cpf: "",
        cel: "",
      },
    };
  },

  validations: {
    contact: {
      email: { email, required },
      confirmEmail: { required, sameAs: sameAs("email") },
      cpf: { required },
    },
  },

  methods: {
    validateCpf() {
      var cpf;
      cpf = this.contact.cpf;
      var Soma;
      var Resto;
      var i;
      i = 0;
      Soma = 0;
      Resto = 0;
      if (cpf == "") return true;
      for (i = 1; i <= 9; i++)
        Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
      if (Resto == 10 || Resto == 11) return false;
      if (Resto != parseInt(cpf.substring(9, 10))) return false;
      Soma = 0;
      for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;
      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(cpf.substring(10, 11))) return false;
      return true;
    },

    valideForm() {
      if (this.validateCpf() && !this.$v.$error) {
        console.log("pronto para ir a proxima step");
        this.$emit("nextStep");
      }
    },
  },
};
</script>

<style scoped>
.form {
  width: 50%;
  padding-left: 400px;
}

legend {
  font-size: 14px;
}

fieldset.name {
  width: 650px;
  border-radius: 10px;
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
  border-radius: 10px;
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
  margin-block: 10px;
}

.check1,
.check2 {
  margin-block: 50px;
}

.text {
  margin-block: 50px;
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
  margin-block: 50px;
  padding-block: 50px;
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
