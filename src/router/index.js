import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/views/ClientesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listado-clientes',
      component: Inicio,
      props: {
        title: 'Listado de clientes'
      }
    },
    {
      path: '/agregar-cliente',
      name: 'agregar-cliente',
      component: () => import('../views/NuevoClienteView.vue'),
      props: {
        title: 'Agregar cliente'
      }
    },
    {
      path: '/editar-cliente/:id',
      name: 'editar-cliente',
      component: () => import('../views/EditarClienteView.vue'),
      props: {
        title: 'Editar cliente'
      }
    },
  ]
})

export default router
