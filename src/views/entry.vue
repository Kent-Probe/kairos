<script lang="ts" setup>
import { BButton, BDatepicker, BField, BInput } from "buefy";
import { ref } from "vue";

const name = ref("");
const locale = ref(undefined);
const showWeekNumber = ref(false);
const selected = ref<Date | null>(null);

const clearDate = () => {};
</script>

<template>
  <main>
    s
    <div class="icon-kents">
      <img src="../assets/logo_kents.svg" alt="Icon Kents" />
    </div>
    <section class="presentation">
      <img src="../assets/logo_app.svg" alt="Logo" />
    </section>
    <section class="entry actived-register">
      <div class="login">
        <div class="header">
          <h1>Bienvenido a kairos <span>DENT</span></h1>
          <p>
            Kairos. Aplicación de gestión para odontologías. si te gusta el proyecto, puedes darle una estrellita al
            GitHub.
          </p>
        </div>

        <div class="content-form">
          <form class="form">
            <div>
              <b-field>
                <template #label>
                  <span class="label">Nombre de usuario configurado para iniciar sesión</span>
                </template>
                <b-input placeholder="Nombre de usuario" v-model="name"></b-input>
              </b-field>

              <b-field>
                <template #label>
                  <span class="label">Contraseña configurada para iniciar sesión</span>
                </template>
                <b-input placeholder="Constraseña de usuario" v-model="name"></b-input>
              </b-field>
            </div>

            <div class="buttons">
              <b-button type="is-primary" expanded>Ingresar</b-button>
            </div>
          </form>

          <div class="divider">
            <span>O</span>
            <div class="divider-line"></div>
          </div>

          <b-button type="is-text" expanded>Registrarse</b-button>
        </div>
      </div>
      <div class="register">
        <div class="header">
          <h1>Bienvenido a kairos <span>DENT</span></h1>
          <p>
            Si es tu primera vez, al registrarte se generará una nueva base de datos. Si ya existe una base de datos
            creada, se va a crear una nueva sin afectar la anterior. ¡Ten cuidado con lo que haces!
          </p>
        </div>
        <div class="content-form">
          <form class="form">
            <div class="fixed-grid">
              <div class="grid is-gap-3">
                <div class="cell">
                  <b-field>
                    <template #label>
                      <span class="label-up">Tipo de documento</span>
                      <span class="label">Tipo de documento del usuario</span>
                    </template>
                    <b-select placeholder="Seleccione" expanded>
                      <option value="C.C">CC</option>
                    </b-select>
                  </b-field>
                </div>

                <div class="cell">
                  <b-field>
                    <template #label>
                      <span class="label-up">Número de documento</span>
                      <span class="label">Número de documento del usuario</span>
                    </template>
                    <b-input placeholder="Documento del usuario" v-model="name"></b-input>
                  </b-field>
                </div>

                <div class="cell">
                  <b-field>
                    <template #label>
                      <span class="label-up">Nombres</span>
                      <span class="label">Nombres del usuario</span>
                    </template>
                    <b-input placeholder="Nombres" v-model="name"></b-input>
                  </b-field>
                </div>

                <div class="cell">
                  <b-field>
                    <template #label>
                      <span class="label-up">Apellidos</span>
                      <span class="label">Apellidos de la usuario</span>
                    </template>
                    <b-input placeholder="Apellidos" v-model="name"></b-input>
                  </b-field>
                </div>

                <div class="cell">
                  <b-field>
                    <template #label>
                      <span class="label-up">Usuario</span>
                      <span class="label">Nombre del usuario de inicio de sesión</span>
                    </template>
                    <b-input placeholder="Nombre del usuario para iniciar sesión" v-model="name"></b-input>
                  </b-field>
                </div>

                <div class="cell">
                  <b-field>
                    <template #label>
                      <span class="label-up">Contraseña</span>
                      <span class="label">Contraseña del usuario</span>
                    </template>
                    <b-input placeholder="Contraseña para iniciar sesión" v-model="name"></b-input>
                  </b-field>
                </div>

                <div class="cell">
                  <b-field>
                    <template #label>
                      <span class="label-up">Fecha de nacimiento</span>
                      <span class="label">Fecha de nacimiento</span>
                    </template>
                    <b-datepicker
                      v-model="selected"
                      :show-week-number="showWeekNumber"
                      placeholder="Click to select..."
                      icon-right="calendar-today"
                      trap-focus
                    >
                    </b-datepicker>
                  </b-field>
                </div>
              </div>
            </div>
            <div>
              <b-button type="is-primary" expanded>Generar base de datos y registrar usuario principal</b-button>
            </div>
          </form>

          <div class="divider">
            <span>O</span>
            <div class="divider-line"></div>
          </div>

          <b-button type="is-text" expanded>Iniciar sesión</b-button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: self-end;
  height: 100vh;

  & > .icon-kents {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 60px;
    z-index: 10;

    & > img {
      width: 100%;
      height: 100%;
    }
  }
}

.presentation {
  flex: 1;
}

.entry {
  flex: 1;

  margin: 5rem;
  margin-bottom: 0;
  background-color: #ffffff;
  max-width: 750px;
  max-height: 700px;
  height: 100%;
  padding: 3.125rem 4.625rem;
  border-radius: 8px 8px 0px 0px;
  box-shadow: 0 0px 50px 20px #8d86ce;

  scrollbar-gutter: stable;

  overflow-y: auto;
}

.login {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.header {
  display: flex;
  flex-direction: column;

  & > h1 {
    color: #564c87;
    font-size: 32px;
    text-align: center;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 0.5rem;

    & > span {
      color: #8d86ce;
      font-size: xx-small;
    }
  }

  & > p {
    color: #8d86ce;
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    line-height: 140%;
  }
}

.content-form {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.label {
  color: #757575 !important;
  font-size: 16px;
  font-weight: 600;
}

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #564c87;

  & > span {
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    background-color: white;
    width: 50px;
    text-align: center;
    z-index: 9;
  }

  & > .divider-line {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #8d86ce;
    top: calc(50% - 3px);
    left: 0;
  }
}

.actived-register {
  max-width: 100%;
  max-height: 100%;
  border-radius: 0px;
  margin: 0;
  .login {
    display: none;
  }
}

.register {
  display: flex;
  flex-direction: column;
  gap: 70px;
}
</style>
