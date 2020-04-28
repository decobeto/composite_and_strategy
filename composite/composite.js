let City = function (title, id, className) {
  this.children = []
  this.element = document.createElement('div')
  let potato = this.element
  console.log(potato)
  let h2 = document.createElement('h2')
  this.element.id = id
  if (className) this.element.className = className
  h2.textContent = title
  this.element.appendChild(h2)
}

City.prototype = {
  add: function (child) {
    this.children.push(child)
    this.element.appendChild(child.getElement())
  },
  remove: function (child) {    
    for (let node, i = 0; node = this.getChild(i); i++) {
      if (node == child) {
        this.children.splice(i, 1)
        this.element.removeChild(child.getElement())
        return true;
      }
    }
    return false
  },
  getChild: function (i) {
      return this.children[i]
  },
  getElement: function () {
      return this.element
  }
}

const cities = new City('Cidades', 'cities')
const joacaba = new City('Joaçaba', 'joacaba')
const luzerna = new City('Luzerna', 'luzerna')
const jardimAlvorada = new City('Jardim Alvorada', 'jardim-alvorada')
const freiBruno = new City('Frei Bruno', 'frei-bruno')
const jardimItalia = new City('Jardim Itália', 'jardim-italia')
const empresarial = new City('Empresarial', 'empresarial')
const casa1 = new City('Casa 1', 'casa-1', 'composite-house')
const casa2 = new City('Casa 2', 'casa-2', 'composite-house')
const casa3 = new City('Casa 3', 'casa-3', 'composite-house')
const casa4 = new City('Casa 4', 'casa-4', 'composite-house')
const casa5 = new City('Casa 5', 'casa-5', 'composite-house')
const casa6 = new City('Casa 6', 'casa-6', 'composite-house')
const casa7 = new City('Casa 7', 'casa-remover-7', 'composite-house')

jardimAlvorada.add(casa1)
freiBruno.add(casa2)

jardimAlvorada.add(casa3)
freiBruno.add(casa7)

freiBruno.remove(casa7)

jardimItalia.add(casa4)
jardimItalia.add(casa5)

empresarial.add(casa6)

joacaba.add(jardimAlvorada)
joacaba.add(freiBruno)

luzerna.add(jardimItalia)
luzerna.add(empresarial)

cities.add(joacaba)
cities.add(luzerna)

document.body.appendChild(cities.getElement())