import { createRouter, createWebHistory } from 'vue-router'
import ProductListView from '@/views/ProductListView.vue'
import ProductCreateView from '@/views/ProductCreateView.vue'
import ProductEditView from '@/views/ProductEditView.vue'

const routes = [
  { path: '/', redirect: '/products' },
  { path: '/dashboard', redirect: '/products' },
  { path: '/products', name: 'ProductList', component: ProductListView },
  { path: '/products/new', name: 'ProductCreate', component: ProductCreateView },
  { path: '/products/edit/:id', name: 'ProductEdit', component: ProductEditView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})