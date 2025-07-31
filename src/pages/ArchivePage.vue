<template>
  <q-page class="q-pa-xl bg-gradient text-white">
    <div class="q-mx-auto" style="max-width: 900px">
      <div class="text-center q-mb-xl">
        <h1 class="text-h4 text-bold">Anciennes Représentations</h1>
        <p class="text-subtitle1">Découvrez les concerts passés !</p>
      </div>

      <ArchivedEventCard
        v-for="event in archivedEvents"
        :key="event.id"
        :event="event"
        :event-id="event.id"
        :isAdmin="role === 'admin'"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from 'boot/firebase';
import { useUserRole } from '../composables/useUserRole';
import ArchivedEventCard from 'components/ArchivedEventCard.vue';

interface EventData {
  id: string;
  title: string;
  date: string;
  address: string;
  description: string;
  image?: string;
  songs: { title: string; votes: number }[];
  songsPlayed?: string[];
  photos?: string[];
  archived?: boolean;
}

const events = ref<EventData[]>([]);
const { role } = useUserRole();
const votedEvents = ref<string[]>([]);

const archivedEvents = computed(() => {
  return events.value
    .filter((e) => e.archived)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

onMounted(() => {
  const storedVotes = localStorage.getItem('votedEvents');
  if (storedVotes) votedEvents.value = JSON.parse(storedVotes);

  onSnapshot(collection(db, 'events'), (snapshot) => {
    events.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as EventData[];
  });
});
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(90deg, #6a11cb, #2575fc); /* violet -> bleu */
}
</style>
