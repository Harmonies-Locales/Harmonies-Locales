<template>
  <q-card class="q-pa-md q-mb-xl text-black" flat bordered style="border-radius: 12px">
    <q-card-section>
      <div class="text-h6">Créer une nouvelle représentation</div>
    </q-card-section>

    <q-form @submit.prevent="handleSubmit" class="q-gutter-md q-pa-sm">
      <q-input v-model="title" label="Titre" outlined dense required />
      <q-input v-model="address" label="Adresse" outlined dense required />
      <q-input v-model="description" label="Description" type="textarea" outlined dense required />
      <q-input v-model="date" label="Date" outlined dense type="date" required />

      <div>
        <div class="text-subtitle2 q-mb-xs">Image de l'affiche :</div>
        <input type="file" accept="image/*" @change="handleFileUpload" />
      </div>

      <div>
        <div class="text-subtitle2 q-mb-sm">Chansons proposées :</div>
        <div
          v-for="(song, index) in songs"
          :key="index"
          class="row items-center q-gutter-sm q-mb-sm"
        >
          <q-input v-model="songs[index]" label="Chanson" dense outlined class="col" />
          <q-btn icon="close" flat dense color="negative" @click="removeSong(index)" />
        </div>
        <q-btn flat dense icon="add" label="Ajouter une chanson" @click="addSong" />
      </div>

      <q-btn type="submit" label="Créer" color="primary" class="q-mt-md" />
    </q-form>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { db } from 'boot/firebase';
import { getAuth } from 'firebase/auth';

const title = ref('');
const address = ref('');
const description = ref('');
const date = ref('');
const image = ref<string>('');
const songs = ref<string[]>(['']);

function addSong() {
  songs.value.push('');
}

function removeSong(index: number) {
  songs.value.splice(index, 1);
}

function handleFileUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      image.value = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
}

async function handleSubmit() {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) return;

  await addDoc(collection(db, 'events'), {
    title: title.value,
    address: address.value,
    description: description.value,
    date: date.value,
    image: image.value,
    songs: songs.value.map((s) => ({ title: s, votes: 0 })),
    createdBy: user.uid,
    createdAt: new Date(),
  });

  // reset
  title.value = '';
  address.value = '';
  description.value = '';
  date.value = '';
  image.value = '';
  songs.value = [''];
}
</script>
