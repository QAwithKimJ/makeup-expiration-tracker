<template>
    <div>
        <h2>Add Makeup Item</h2>
        <form @submit.prevent="addItem">
            <input v-model="name" placeholder="Name" required /><br><br>
            <input v-model="brand" placeholder="Brand" required /><br><br>
            <input v-model="expirationDate" placeholder="Expiration Date" required /><br><br>
            <button type="submit">Add Item</button>
        </form>
    </div>
</template>

<script>
import { addMakeupItem } from '../firestore';
import { getAuth } from 'firebase/auth';

export default {
    data() {
        return {
            name: '',
            brand: '',
            expirationDate: ''
        };
    },
    methods: {
        async addItem() {
            const user = getAuth().currentUser;
            if (user) {
                await addMakeupItem(this.name, this.brand, this.expirationDate, user.uid);
                this.name = '';
                this.brand = '';
                this.expirationDate = '';
            } else {
                console.error('User not authenticated');
            }
        }
    }
};
</script>
