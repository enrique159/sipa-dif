<template>
  <v-navigation-drawer 
    v-model="show" 
    :permanent="desktop" 
    :absolute="!desktop"
    :expand-on-hover="desktop"
    mini-variant-width="58" 
    width="240" 
  >
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img :src="require(`@/assets/profile/profile_${getUser.image || 1}.png`)"></v-img>
        </v-list-item-avatar>
        <v-list-item-content class="py-0" style="height: fit-content !important;">
          <v-list-item-title class="ts-normal">{{ getUser.name }} {{ getUser.lastname}}</v-list-item-title>
          <v-list-item-subtitle>{{ getUser.email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item @click="openView('dashboard')">
        <v-list-item-icon>
          <v-icon :class="{ 'icon-active' : getRouteName == 'dashboard'}">mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item>
      <v-list-item @click="openView('affiliates')">
        <v-list-item-icon>
          <v-icon :class="{ 'icon-active' : getRouteName == 'affiliates'}">mdi-clipboard-account</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Afiliados</v-list-item-title>
      </v-list-item>
      <v-list-item @click="openView('members')">
        <v-list-item-icon>
          <v-icon :class="{ 'icon-active' : getRouteName == 'members'}">mdi-account-supervisor-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Miembros</v-list-item-title>
      </v-list-item>
      <v-list-item @click="openView('reports')">
        <v-list-item-icon>
          <v-icon :class="{ 'icon-active' : getRouteName == 'reports'}">mdi-chart-donut-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Reportes</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item @click="openView('users')">
        <v-list-item-icon>
          <v-icon :class="{ 'icon-active' : getRouteName == 'users'}">mdi-account-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Usuarios</v-list-item-title>
      </v-list-item>
      <v-list-item @click="openView('stats')" v-if="getUser.usertype === 'admin'">
        <v-list-item-icon>
          <v-icon :class="{ 'icon-active' : getRouteName == 'stats'}">mdi-google-analytics</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Estadisticas</v-list-item-title>
      </v-list-item>
      <v-list-item @click="openView('settings')">
        <v-list-item-icon>
          <v-icon :class="{ 'icon-active' : getRouteName == 'settings'}">mdi-cog</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Configuración</v-list-item-title>
      </v-list-item>
      <v-list-item @click="openView('support')">
        <v-list-item-icon>
          <v-icon :class="{ 'icon-active' : getRouteName == 'support'}">mdi-lifebuoy</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Soporte</v-list-item-title>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pb-4">
        <v-list nav dense>
          <v-list-item link @click="logoutUser()">
            <v-list-item-icon>
              <v-icon>mdi-location-exit</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import store from '@/store';
import { logoutUser } from '@/auth/index';
export default {
  name: "NavigationDrawerComp",
  data() {
    return {
      desktop: false,
      show: false,
    }
  },
  computed: {
    getUser() {
      return store.getters.getUser ? store.getters.getUser : { name: '', lastname: '', email: '', image: 1 }
    },
    getRouteName() {
      return this.$route.path.split('/')[1]
    }
  },
  created() {
    window.addEventListener('resize', this.updateWindowWidth);
    this.desktop = window.innerWidth > 586;
  },
  methods: {
    openView(route) {
      this.$router.push(`/${route}`);
    },

    logoutUser() {
      logoutUser();
      this.$router.push("/login");
    },

    updateWindowWidth() {
      this.desktop = window.innerWidth > 586;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-navigation-drawer {
  height: calc(var(--vh, 1vh) * 100) !important;
}

.v-navigation-drawer--mini-variant .v-list-item__icon {
    margin-right: 0px;
}

.v-navigation-drawer--mini-variant .v-list-item__avatar {
    margin-right: 0px;
}

.icon-active {
    color: black !important;
}
@media only screen and (max-width: 768px) {
  .v-list-item__title {
    font-size: 16px !important;
  }
}
</style>