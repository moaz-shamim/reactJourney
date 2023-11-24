function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.properties.href)
    domElement.setAttribute('target',reactElement.properties.target)
    container.appendChild(domElement)
}







const reactElement = {
    type: 'a',
    properties: {
        href : 'https://google.com',
        target : '_blank' 
    },
    children: 'Click me to visit google'    
}







const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer);