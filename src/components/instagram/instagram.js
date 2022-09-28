import './instagram.css';
import post1 from './../../assets/img/index/post1.png';
import post2 from './../../assets/img/index/post2.png';
import post3 from './../../assets/img/index/post3.png';
import left from './../../assets/img/index/left.png';
import right from './../../assets/img/index/right.png';
function Instagram(){
  return (
    <div className="instagram_container">
      <h2>FOLLOW US ON INSTAGRAM <span>@curryonnaanstop</span> </h2>
      <div className="instagram_post_outer_container">
        <div className="instagram_post_inner_container">
          <div className="post">
            <img src={post1} alt="" />
          </div>
          <div className="post">
            <img src={post2} alt="" />
          </div>
          <div className="post">
            <img src={post3} alt="" />
          </div>
        </div>
        <div className="instagram_controls">
          <div className="ins_left_control ins_control">
            <img src={left} alt="" />
          </div>
          <div className="ins_right_control ins_control">
            <img src={right} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instagram;
