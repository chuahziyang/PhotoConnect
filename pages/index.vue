<script setup>
// const { data } = useFetch("/api/test");
const { data: user } = useFetch("/api/auth/login", {
  params: {
    email: "gg@gmail.com",
    password: "testpass",
  },
});

const { data: user2 } = useFetch("/api/auth/login", {
  params: {
    email: "gg@gmail.com",
    password: "wrongpass",
  },
});
</script>

<template>
  {{ user }}
  ----------
  {{ user2 }}
  <!-- <SignIn></SignIn> -->
</template>
