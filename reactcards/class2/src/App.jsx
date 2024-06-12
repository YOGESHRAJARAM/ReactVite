import { CardContainer } from "./CardContainer"
const userData=[
  {
    status:false,
    profile_img:"2.jpg",
    fullname:"tamil",
    location:"theni",
    roll:"backend developer",
    skills:["free","saying goodmrning","laptopcleaning"]
  },
  {
    status:true,
    profile_img:"3.jpg",
    fullname:"Gowthem",
    location:"theni",
    roll:"singer",
    skills:["free","saying goodmrning","laptopcleaning"]
  },
  {
    status:true,
    profile_img:"3.jpg",
    fullname:"Gowthem",
    location:"theni",
    roll:"singer",
    skills:["free","saying goodmrning","laptopcleaning"]
  }
]

function App() {


  return (
    <>
    {userData.map((user,index)=>(
      <CardContainer key={index} status={user.status} profile_img={user.profile_img} fullname={user.fullname} location={user.location} roll={user.roll} skills={user.skills}/>
    ))}
    {/* <CardContainer status={false} profile_img="1.jpg" fullname="Vignesh" location="Madurai" roll="front-end developer" skills={["ui/ux","front-end","HTML","node","tamil"]} /> */}
    </>
  )
}

export default App
