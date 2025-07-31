<template>
  <q-card flat bordered class="q-pa-md q-mb-xl bg-grey-1 text-black" style="border-radius: 12px">
    <div class="row items-start q-col-gutter-md">
      <div class="col">
        <q-badge
          color="blue-grey-5"
          class="text-white text-subtitle2 q-pa-sm q-mb-sm"
          style="border-radius: 12px"
        >
          {{ formatDate(event.date) }}
        </q-badge>
        <q-btn
          v-if="isAdmin"
          icon="unarchive"
          flat
          round
          dense
          color="primary"
          class="q-ml-sm"
          @click="unarchiveEvent"
        >
          <q-tooltip>Rendre actif</q-tooltip>
        </q-btn>

        <q-btn
          v-if="isAdmin"
          icon="edit"
          flat
          round
          dense
          color="secondary"
          @click="showEditDialog = true"
        >
          <q-tooltip>Modifier l’événement</q-tooltip>
        </q-btn>

        <div class="text-subtitle1 text-weight-bold q-mb-xs">{{ event.title }}</div>
        <div class="text-body2 text-grey-8 q-mb-sm">{{ event.description }}</div>
        <div class="text-caption text-grey-7">{{ event.address }}</div>

        <div v-if="event.songsPlayed?.length" class="q-mt-md">
          <div class="text-subtitle2 text-weight-medium q-mb-sm">🎵 Chansons jouées :</div>
          <ul class="q-pl-md">
            <li v-for="(song, index) in event.songsPlayed" :key="index" class="text-body2">
              {{ song }}
            </li>
          </ul>
        </div>

        <div v-if="event.photos?.length" class="q-mt-md">
          <div class="text-subtitle2 text-weight-medium q-mb-sm">📸 Photos du concert :</div>
          <q-carousel
            v-model="activeSlide"
            swipeable
            animated
            control-type="flat"
            arrows
            navigation
            height="500px"
            class="rounded-borders"
          >
            <q-carousel-slide
              v-for="(photo, index) in event.photos"
              :key="index"
              :name="index"
              :img-src="photo"
            />
          </q-carousel>
        </div>
      </div>

      <div class="col-auto">
        <div
          class="flex flex-center bg-grey-4"
          style="width: 150px; height: 150px; border-radius: 12px"
        >
          <q-img v-if="event.image" :src="event.image" fit="cover" style="border-radius: 12px" />
          <q-icon v-else name="event" size="48px" color="white" />
        </div>
      </div>
    </div>
  </q-card>

  <q-dialog v-model="showEditDialog" persistent>
    <q-card style="min-width: 400px">
      <q-card-section>
        <div class="text-h6">Modifier l’événement</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="editData.title" label="Titre" filled class="q-mb-sm" />
        <q-input
          v-model="editData.description"
          label="Description"
          type="textarea"
          filled
          class="q-mb-sm"
        />
        <q-input v-model="editData.address" label="Adresse" filled class="q-mb-sm" />
        <div class="q-mb-sm">
          <div class="text-subtitle2 q-mb-xs">🎤 Ajouter les chansons jouées</div>
          <q-input
            v-for="(song, index) in editData.songsPlayed"
            :key="index"
            v-model="editData.songsPlayed[index]"
            :label="'Chanson ' + (index + 1)"
            filled
            class="q-mb-xs"
          />
          <q-btn
            icon="add"
            flat
            label="Ajouter une chanson jouée"
            color="primary"
            @click="editData.songsPlayed.push('')"
          />
        </div>

        <div class="q-mt-md">
          <div class="text-subtitle2 q-mb-xs">📷 Ajouter des photos</div>
          <input type="file" accept="image/*" @change="handleFileUpload" multiple />
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Annuler" color="grey" v-close-popup />
        <q-btn flat label="Enregistrer" color="primary" @click="saveChanges" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { doc, updateDoc } from 'firebase/firestore';
import { db } from 'boot/firebase';
import { ref } from 'vue';
import { reactive } from 'vue';

const showEditDialog = ref(false);
const activeSlide = ref(0);

const props = defineProps<{
  eventId: string;
  event: {
    title: string;
    date: string;
    address: string;
    description: string;
    image?: string;
    songs: { title: string; votes: number }[];
    songsPlayed?: string[];
    photos?: string[];
    archived?: boolean;
  };
  isAdmin: boolean;
}>();

const emit = defineEmits(['unarchived']);

const editData = reactive({
  title: props.event.title,
  description: props.event.description,
  address: props.event.address,
  songsPlayed: [...(props.event.songsPlayed ?? [])],
  photos: [...(props.event.photos ?? [])],
});

async function saveChanges() {
  const eventRef = doc(db, 'events', props.eventId);
  await updateDoc(eventRef, {
    title: editData.title,
    description: editData.description,
    address: editData.address,
    songsPlayed: editData.songsPlayed,
    photos: editData.photos,
  });

  showEditDialog.value = false;
}

function handleFileUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const base64 = e.target?.result as string;
    if (!base64.startsWith('data:image')) {
      alert("Le fichier n'est pas une image valide.");
      return;
    }
    editData.photos.push(base64);
  };
  reader.readAsDataURL(file);
}

function formatDate(d: string): string {
  return new Date(d).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

async function unarchiveEvent() {
  const confirmUnarchive = confirm('Voulez-vous désarchiver cet événement ?');
  if (!confirmUnarchive) return;

  const eventRef = doc(db, 'events', props.eventId);
  await updateDoc(eventRef, {
    archived: false,
  });

  emit('unarchived');
}
</script>
