import { router } from "./router";

router.beforeEach((to, from ,next) => {
  next()
})

router.afterEach((to, from ,next) => {})