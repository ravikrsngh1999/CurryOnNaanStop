import './newsletter.css';

function Newsletter() {
  return (
    <div className="newsletter_section">
      <h3>Receive Our Newsletter</h3>
      <form action="index.html" method="post">
        <input type="email" name="" value="" placeholder="Enter your email"/>
        <button type="submit" name="button">JOIN NOW</button>
      </form>
    </div>
  )
}

export default Newsletter;
