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
          class="flex flex-center bg-gradient"
          style="
            width: 150px;
            height: 150px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          "
        >
          <q-img v-if="event.image" :src="event.image" fit="cover" style="border-radius: 12px" />
          <q-icon v-else name="music_note" size="48px" color="white" />
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from 'boot/firebase';
import { computed } from 'vue';
import { getAuth } from 'firebase/auth';

const props = defineProps<{
  eventId: string;
  event: {
    title: string;
    date: string;
    address: string;
    description: string;
    image?: string;
    songs: { title: string; votes: number }[];
    votedUserIds?: string[];
  };
  isAdmin: boolean;
}>();

const emit = defineEmits(['voted', 'deleted']);
const auth = getAuth();
const user = auth.currentUser;
const uid = user?.uid || '';

const hasAlreadyVoted = computed(() => {
  return props.event.votedUserIds?.includes(uid) ?? false;
});

async function deleteEvent() {
  const confirmDelete = confirm('Voulez-vous vraiment supprimer cet événement ?');
  if (!confirmDelete) return;

  const eventRef = doc(db, 'events', props.eventId);
  await deleteDoc(eventRef);
  emit('deleted');
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
