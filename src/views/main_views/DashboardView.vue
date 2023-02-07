<template>
  <div class="dashboard animation-fade-left">
    <v-container>
      <h2>Bienvenido {{ user.name }}</h2>
    </v-container>
    <v-container>
      <!-- <v-row>
        <v-col cols="6" sm="4" md="3">
          <ActionCardComp color="blue" :info="newAffiliate" :action="newAffiliate.action"/>
        </v-col>
        <v-col cols="6" sm="4" md="3">
          <ActionCardComp color="orange" :info="newMember" :action="newMember.action" />
        </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>

<script>
// import ActionCardComp from '@/components/dashboard_view/ActionCardComp.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'DashboardView',
  // components: { ActionCardComp },
  data() {
    return {
      // newAffiliate: {
      //   icon: 'account-plus',
      //   title: 'Nuevo Afiliado',
      //   subtitle: 'Registra un nuevo afiliado de Morena',
      //   action: () => {
      //     this.$router.push({ name: 'affiliate-new' })
      //   }
      // },
      // newMember: {
      //   icon: 'account-multiple-plus',
      //   title: 'Nuevo Miembro',
      //   subtitle: 'Registra un nuevo miembro de la asociación',
      //   action: () => {
      //     this.$router.push({ name: 'member-new' })
      //   }
      // }
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
}
</script>

<style lang="scss" scoped>
.dashboard{
  height: 100%;
  width: 100%;
}
</style>