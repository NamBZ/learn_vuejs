<template>
  <form @submit.prevent="addNew()">
    <div>
      <label>Name</label>
      <input v-model="addNameFriend" type="text" required>
    </div>
    <div>
      <label>Phone</label>
      <input v-model="addPhoneFriend" type="tel" required>
    </div>
    <div>
      <label>Email</label>
      <input v-model="addEmailFriend" type="email" required>
    </div>
    <div>
      <button type="submit">Add</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      addNameFriend: '',
      addPhoneFriend: '',
      addEmailFriend: '',
    };
  },
  methods: {
    addNew() {
      let newContact = {
        id: new Date().toISOString(),
        name: this.addNameFriend,
        phone: this.addPhoneFriend,
        email: this.addEmailFriend,
        isFavorite: false,
      };
      console.log(newContact);

      this.$emit('add-new-friend', newContact);

      this.addNameFriend = this.addPhoneFriend = this.addEmailFriend = '';
    }
  }
}
</script>
