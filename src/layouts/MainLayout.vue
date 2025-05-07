<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-gradient text-white" height-hint="70">
      <q-toolbar class="q-py-md q-px-xl justify-between">
        <!-- Logo + Titre -->
        <div class="row items-center no-wrap">
          <q-icon name="music_note" class="q-mr-sm" size="28px" />
          <span class="text-h6">Harmonies Locales</span>
        </div>

        <!-- Menu -->
        <div class="row items-center q-gutter-md">
          <q-btn flat dense label="Accueil" icon="home" to="/" v-if="isLoggedIn" />
          <q-btn flat dense label="Calendrier" icon="event" to="/calendrier" v-if="isLoggedIn" />
          <q-btn flat dense label="Archives" icon="archive" to="/archives" v-if="isLoggedIn" />

          <q-btn
            flat
            dense
            color="white"
            icon="login"
            label="Connexion"
            to="/login"
            v-if="!isLoggedIn"
          />

          <q-btn
            flat
            dense
            color="white"
            icon="logout"
            label="Déconnexion"
            @click="logout"
            v-if="isLoggedIn"
          >
            <q-tooltip class="bg-white text-primary" anchor="top middle" self="bottom middle">
              Se déconnecter
            </q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const isLoggedIn = ref(false);
const router = useRouter();
const auth = getAuth();

async function logout() {
  await signOut(auth);
  isLoggedIn.value = false;
  await router.push('/login');
}

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });
});
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(90deg, #6a11cb, #2575fc); /* violet -> bleu */
}
</style>
