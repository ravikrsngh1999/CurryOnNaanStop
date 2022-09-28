import './runnerup.css';
import img from './../../assets/img/index/fifth.png';
function RunnerUp() {
  const loadbbc = () => {
    window.location.href= "https://www.bbc.co.uk/iplayer/episode/m00177hm/britains-top-takeaways-series-1-2-indian"
  }
  return (
    <div className="runnerup_container" onClick={loadbbc}>
      <h3>RUNNER UP</h3>
      <img src={img} alt="" />
      <h3>BRITAIN'S <br/> TOP TAKEAWAYS</h3>
    </div>
  )
}
export default RunnerUp;
