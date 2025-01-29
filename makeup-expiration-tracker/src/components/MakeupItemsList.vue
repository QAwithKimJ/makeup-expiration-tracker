<template>
    <div>
        <h2>My Makeup Items</h2>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.name }} - {{ item.brand }} - {{ item.expirationDate }}
                <button @click="deleteItem(item.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { getMakeupItems, deleteMakeupItem } from '../firestore';
import { getAuth } from 'firebase/auth';

export default {
    data() {
        return {
            items: []
        };
    },
    async created() {
        const user = getAuth().currentUser;
        if (user) {
            this.items = await getMakeupItems(user.uid);
        } else {
            console.error('User not authenticated');
        }
    },
    methods: {
        async deleteItem(id) {
            await deleteMakeupItem(id);
            this.items = this.items.filter(item => item.id !== id);
        }
    }
};
</script>