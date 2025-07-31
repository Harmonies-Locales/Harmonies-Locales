<template>
  <q-page class="q-pa-xl bg-gradient text-white">
    <div class="q-mx-auto" style="max-width: 900px">
      <div class="text-center q-mb-xl">
        <h1 class="text-h3 text-bold">
          Bienvenue chez <span class="text-purple-3">Harmonies Locales</span>
        </h1>
        <p class="text-subtitle1 q-mt-sm">
          Une association de passionnés de musique, rassemblés autour d’un même rythme.
        </p>
      </div>

      <div class="row q-col-gutter-xl justify-center">
        <transition-group name="fade" tag="div" class="row q-col-gutter-lg justify-center">
          <div v-for="membre in membres" :key="membre.initials" class="col-12 col-sm-6 q-pa-sm">
            <q-card
              flat
              bordered
              class="bg-white text-dark q-pa-md shadow-2 rounded-borders"
              style="min-height: 280px"
            >
              <q-card-section class="text-center">
                <q-avatar size="60px" class="q-mb-sm">
                  <template v-if="membre.photo">
                    <img :src="membre.photo" alt="Photo de {{ membre.name }}" />
                  </template>
                  <template v-else>
                    <div class="bg-gradient text-white full-height full-width flex flex-center">
                      {{ membre.initials }}
                    </div>
                  </template>
                </q-avatar>
                <div class="text-subtitle1 text-bold">{{ membre.name }}</div>
                <div class="text-subtitle2 text-primary">{{ membre.role }}</div>
                <div class="text-body2 text-center">{{ membre.description }}</div>
              </q-card-section>
            </q-card>
          </div>
        </transition-group>
      </div>

      <div v-if="loading" class="text-center q-mt-lg">
        <q-spinner color="white" size="40px" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from 'boot/firebase';

interface Membre {
  initials: string;
  name: string;
  role: string;
  description: string;
  photo?: string;
}

const membres = ref<Membre[]>([]);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  try {
    const snapshot = await getDocs(collection(db, 'membres'));
    membres.value = snapshot.docs.map((doc) => doc.data() as Membre);
  } catch (err) {
    console.error('Erreur Firestore :', err);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.bg-gradient {
  background: linear-gradient(90deg, #6a11cb, #2575fc); /* violet -> bleu */
}
</style>
