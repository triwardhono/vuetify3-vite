<template>
    <v-app>
      <v-main>
        <HelloWorld/>
      </v-main>
    </v-app>
</template>
<route>
    {
        meta: {
            layout: 'home'
        }
    }
</route>

<script>
export default {
name: 'App',
data: () => ({
    //
}),
}
</script>
