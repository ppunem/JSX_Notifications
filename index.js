const Notification = props => {
  const {container,url,text}=props
  return (
  <div className={container}>
    <img src={url} className="image"/>
    <p>{text}</p>
  </div>
  )
}

const element = (
  <h1>Notifications</h1>
  <Notification container="blue-container" url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" text="Information Message"/>
)

ReactDOM.render(element, document.getElementById('root'))
