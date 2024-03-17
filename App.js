const header = React.createElement("div",{id:"headingk"},
[React.createElement("h1",{id:"heading"},"Hello world form React")
,React.createElement("h2",{id:"heading"},"Hello world form React")])

console.log(header)// FINALLY   it is object  create element api take three arguments.  if we have a multiple list we have as a list.
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(header)