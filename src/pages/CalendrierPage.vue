<template>
  <q-page class="q-pa-xl bg-gradient text-white">
    <div class="q-mx-auto" style="max-width: 900px">
      <div class="text-center q-mb-xl">
        <h1 class="text-h4 text-bold">Prochaines Représentations</h1>
        <p class="text-subtitle1">Votez pour les chansons et explorez les concerts à venir !</p>
      </div>

      <div class="q-mb-md text-right">
        <q-toggle v-model="showPast" label="Afficher les anciens événements" color="primary" />
      </div>

      <CreateEventForm v-if="role === 'admin'" class="q-mb-xl" />

      <EventCard
        v-for="event in filteredEvents"
        :key="event.id"
        :event-id="event.id"
        :event="event"
        :is-admin="role === 'admin'"
        :has-voted="hasVoted(event.id)"
        @voted="markVoted(event.id)"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from 'boot/firebase';
import { useUserRole } from '../composables/useUserRole';
import CreateEventForm from 'components/CreateEventForm.vue';
import EventCard from 'components/EventCard.vue';

interface EventData {
  id: string;
  title: string;
  date: string;
  address: string;
  description: string;
  image?: string;
  songs: { title: string; votes: number }[];
}

const events = ref<EventData[]>([]);
const { role } = useUserRole();
const showPast = ref(false);
const votedEvents = ref<string[]>([]);

const filteredEvents = computed(() => {
  const now = new Date().toISOString();
  return events.value
    .filter((e) => showPast.value || e.date >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
});

function hasVoted(eventId: string) {
  return votedEvents.value.includes(eventId);
}

function markVoted(eventId: string) {
  votedEvents.value.push(eventId);
  localStorage.setItem('votedEvents', JSON.stringify(votedEvents.value));
}

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
