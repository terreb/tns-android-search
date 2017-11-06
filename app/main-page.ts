import { HelloWorldModel } from './main-view-model'

let vm

export function navigatingTo(args) {
    const page = args.object
    page.bindingContext = vm = new HelloWorldModel()
}

export function search(args) {
    const searchBar =  args.object
    vm.filter(searchBar.text)
    global.removeSearchFocus( searchBar )
}

export function clearSearch( args ) {
    const searchBar =  args.object
    vm.filter()
    global.removeSearchFocus( searchBar )
}