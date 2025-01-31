import { db } from './firebase'; // Import the db object from your firebase.js file
import { collection, addDoc, query, where, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

// Function to add a makeup item
async function addMakeupItem(name, brand, expirationDate, userId) {
  try {
    const docRef = await addDoc(collection(db, 'makeupItems'), {
      name,
      brand,
      expirationDate,
      userId
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// Function to get makeup items for a specific user
async function getMakeupItems(userId) {
  const q = query(collection(db, 'makeupItems'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  const items = [];
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
}

// Function to update a makeup item
async function updateMakeupItem(id, updatedData) {
  const itemRef = doc(db, 'makeupItems', id);
  await updateDoc(itemRef, updatedData);
}

// Function to delete a makeup item
async function deleteMakeupItem(id) {
  await deleteDoc(doc(db, 'makeupItems', id));
}

export { addMakeupItem, getMakeupItems, updateMakeupItem, deleteMakeupItem };