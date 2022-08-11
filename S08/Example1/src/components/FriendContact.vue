<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : ""}}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="deleteFriend">Delete</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
/*  props: [
    'name',
    'phoneNumber',
    'emailAddress',
    'isFavorite'
  ],*/
  props: {
    id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    emailAddress: {
      type: String,
      require: true,
    },
    isFavorite: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id)
    },
    deleteFriend() {
      if (confirm('Do you want to delete this contact?')) {
        this.$emit('delete-friend', this.id);
      }
    }
  }
};
</script>