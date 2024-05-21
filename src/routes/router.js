export class Router {
  routers = {}
  add(routerName, page) {
    this.routers[routerName] = page
  }
  route(event) {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, '', event.target.href)
    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routers[pathname] || this.routers[404]
    fetch(route).then(data => data.text()).then(html => {
      document.getElementById('app').innerHTML = html
      console.log(html)
    })
  }
}