<template>
  <q-card flat bordered class="q-pa-md q-mb-xl bg-white text-black" style="border-radius: 12px">
    <div class="row items-start no-wrap q-col-gutter-md">
      <div class="col">
        <div>
          <q-badge
            color="deep-purple-5"
            class="text-white text-subtitle2 q-pa-sm q-mb-sm"
            style="border-radius: 12px"
          >
            {{ formatDate(event.date) }}
          </q-badge>

          <q-btn
            v-if="props.isAdmin"
            icon="delete"
            flat
            round
            dense
            color="negative"
            @click="deleteEvent"
            class="q-ml-sm"
          >
            <q-tooltip>Supprimer l'événement</q-tooltip>
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

          <q-btn
            v-if="props.isAdmin && !event.archived"
            icon="archive"
            flat
            round
            dense
            color="primary"
            @click="archiveEvent"
          >
            <q-tooltip>Archiver l'événement</q-tooltip>
          </q-btn>
        </div>

        <div class="text-subtitle1 text-weight-bold q-mb-xs">{{ event.title }}</div>
        <div class="text-body2 text-grey-8 q-mb-sm">
          {{ event.description }}
        </div>

        <div class="text-caption text-grey-7">{{ event.address }}</div>

        <div class="q-mt-md bg-indigo-1 q-pa-md rounded-borders">
          <div class="text-weight-medium text-subtitle2 q-mb-sm">
            📋 Votez pour les chansons du concert :
          </div>
          <div
            v-for="(song, index) in event.songs"
            :key="index"
            class="row items-center q-mb-sm q-pb-sm"
            :class="{ 'q-mb-md': index < event.songs.length - 1 }"
            style="border-bottom: 2px solid #626363"
          >
            <div class="col text-body2">{{ song.title }}</div>
            <div class="col-auto">
              <q-badge color="deep-purple-4" class="q-pa-sm q-mr-sm">
                {{ song.votes }} votes
              </q-badge>
              <q-btn
                class="bg-deep-purple-3 text-white q-pa-sm"
                size="sm"
                rounded
                dense
                flat
                label="Voter"
                :disable="hasAlreadyVoted"
                @click="vote(index)"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="col-auto">
        <div
          class="flex flex-center bg-grey-4"
          style="width: 150px; height: 150px; border-radius: 12px"
        >
          <q-img v-if="event.image" :src="event.image" fit="cover" style="border-radius: 12px" />
          <q-icon v-else name="music_note" size="48px" color="deep-purple-4" />
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
          <div class="text-subtitle2 q-mb-xs">🎵 Chansons jouées</div>
          <q-input
            v-for="(song, index) in editData.songs"
            :key="index"
            v-model="editData.songs[index].title"
            :label="'Chanson ' + (index + 1)"
            filled
            class="q-mb-xs"
          />
          <q-btn
            icon="add"
            flat
            label="Ajouter une chanson"
            color="primary"
            @click="editData.songs.push({ title: '', votes: 0 })"
          />
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
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from 'boot/firebase';
import { computed } from 'vue';
import { getAuth } from 'firebase/auth';
import { ref } from 'vue';
import { reactive } from 'vue';

const props = defineProps<{
  eventId: string;
  event: {
    title: string;
    date: string;
    address: string;
    description: string;
    image?: string;
    photos?: string[];
    songs: { title: string; votes: number }[];
    songsPlayed?: string[];
    votedUserIds?: string[];
    archived?: boolean;
  };
  isAdmin: boolean;
}>();

const emit = defineEmits(['voted', 'deleted', 'archived']);
const auth = getAuth();
const user = auth.currentUser;
const uid = user?.uid || '';
const showEditDialog = ref(false);

const hasAlreadyVoted = computed(() => {
  return props.event.votedUserIds?.includes(uid) ?? false;
});

const editData = reactive({
  title: props.event.title,
  description: props.event.description,
  address: props.event.address,
  songs: JSON.parse(JSON.stringify(props.event.songs)),
});

async function saveChanges() {
  const eventRef = doc(db, 'events', props.eventId);
  await updateDoc(eventRef, {
    title: editData.title,
    description: editData.description,
    address: editData.address,
    songs: editData.songs,
  });

  showEditDialog.value = false;
}

async function deleteEvent() {
  const confirmDelete = confirm('Voulez-vous vraiment supprimer cet événement ?');
  if (!confirmDelete) return;

  const eventRef = doc(db, 'events', props.eventId);
  await deleteDoc(eventRef);
  emit('deleted');
}

async function archiveEvent() {
  const confirmArchive = confirm('Voulez-vous archiver cet événement ?');
  if (!confirmArchive) return;

  const eventRef = doc(db, 'events', props.eventId);
  await updateDoc(eventRef, {
    archived: true,
  });

  emit('archived');
}

function formatDate(d: string): string {
  return new Date(d).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

async function vote(index: number) {
  if (!uid || hasAlreadyVoted.value) return;

  const newSongs = [...props.event.songs];
  if (newSongs[index] && typeof newSongs[index].votes === 'number') {
    newSongs[index].votes += 1;
  }

  const updatedVoters = props.event.votedUserIds ? [...props.event.votedUserIds, uid] : [uid];

  const eventRef = doc(db, 'events', props.eventId);
  await updateDoc(eventRef, {
    songs: newSongs,
    votedUserIds: updatedVoters,
  });

  emit('voted');
}
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(135deg, #6a11cb, #2575fc);
}
</style>
