import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'boot/firebase';

const role = ref<'admin' | 'user' | null>(null);

export function useUserRole() {
  onMounted(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        void fetchUserRole(user.uid);
      } else {
        role.value = null;
      }
    });

    async function fetchUserRole(uid: string) {
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        role.value = userDoc.data().role;
      } else {
        role.value = 'user';
      }
    }
  });

  return { role };
}
