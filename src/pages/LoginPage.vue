<template>
  <q-page class="flex flex-center bg-gradient text-white">
    <q-card class="q-pa-lg shadow-4 bg-white text-dark" style="width: 400px; border-radius: 16px">
      <div class="text-center q-mb-md">
        <q-icon name="music_note" size="48px" class="text-primary" />
        <h2 class="text-h5 q-mt-sm">
          {{ isSignup ? 'Créer un compte' : 'Connexion' }}
        </h2>
      </div>

      <q-form @submit="isSignup ? handleSignup() : handleLogin()" class="q-gutter-md">
        <q-input v-if="isSignup" v-model="pseudo" label="Pseudo" outlined dense color="primary" />

        <q-input v-model="email" type="email" label="Email" outlined dense color="primary" />

        <q-input
          v-model="password"
          type="password"
          label="Mot de passe"
          outlined
          dense
          color="primary"
        />
        <div>
          <q-btn
            type="submit"
            :label="isSignup ? 'Créer un compte' : 'Se connecter'"
            color="primary"
            class="full-width"
          />
        </div>
      </q-form>

      <div v-if="errorMessage" class="text-negative text-caption q-mt-sm">
        {{ errorMessage }}
      </div>

      <div class="text-center q-mt-md">
        <q-btn flat dense size="sm" @click="isSignup = !isSignup" class="text-primary">
          {{
            isSignup ? '← Déjà inscrit ? Se connecter' : 'Pas encore de compte ? Créer un compte'
          }}
        </q-btn>
      </div>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, query, where, getDocs, collection } from 'firebase/firestore';
import { db } from 'boot/firebase';

const router = useRouter();
const auth = getAuth();

const email = ref('');
const password = ref('');
const pseudo = ref('');
const errorMessage = ref('');
const isSignup = ref(false);

async function handleLogin() {
  errorMessage.value = '';
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    await router.push('/');
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Erreur inconnue';
  }
}

async function handleSignup() {
  errorMessage.value = '';

  try {
    const pseudoQuery = query(collection(db, 'users'), where('pseudo', '==', pseudo.value));
    const result = await getDocs(pseudoQuery);

    if (!pseudo.value) {
      errorMessage.value = 'Le pseudo est requis.';
      return;
    }

    if (!email.value || !password.value) {
      errorMessage.value = 'Email et mot de passe requis.';
      return;
    }

    if (!pseudo.value.match(/^[a-zA-Z0-9-_]{3,20}$/)) {
      errorMessage.value = 'Le pseudo doit contenir 3 à 20 caractères alphanumériques.';
      return;
    }

    if (!email.value.includes('@')) {
      errorMessage.value = "Format d'email invalide.";
      return;
    }

    if (result.size > 0) {
      errorMessage.value = 'Ce pseudo est déjà utilisé.';
      return;
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const uid = userCredential.user.uid;

    await setDoc(doc(db, 'users', uid), {
      email: email.value,
      pseudo: pseudo.value,
      role: 'user',
      createdAt: new Date(),
    });

    await router.push('/');
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('auth/email-already-in-use')) {
        errorMessage.value = 'Cet email est déjà utilisé.';
      } else {
        errorMessage.value = error.message;
      }
    } else {
      errorMessage.value = 'Erreur inconnue';
    }
  }
}
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(90deg, #6a11cb, #2575fc); /* violet -> bleu */
}
</style>
