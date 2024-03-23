<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav class="nav">
      <ul class="nav_menu">
        <li>
          <RouterLink class="nav_link" to="/">Home</RouterLink>
        </li>
        <li class="nav_menu_sep"></li>
        <li>
          <RouterLink class="nav_link" to="/issue-list">IssueList</RouterLink>
        </li>
        <li class="nav_menu_sep"></li>
        <li>
          <RouterLink class="nav_link" to="/todos-issues">Todos-Issues</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.nav {
  width: 100%;
  height: 4rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav_menu {
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;
}

.nav_menu_sep {
  width: 1px;
  height: 16px;
  margin: 0 0.25rem;
  background-color: var(--color-text);
}

.nav_link {
  font-size: 17px;
  font-weight: 500;
  color: var(--color-text);
  text-decoration: underline;

  &.router-link-active {
    color: hsla(160, 100%, 37%, 1);
  }
}
</style>
